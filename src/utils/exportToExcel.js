import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
import ToastMessage from '../components/ToastMessage'

export const exportFile = (
    data,
    fileName = 'exported-data',
    fileType = 'xlsx'
) => {

    // Random Number
    const randomNumber = Math.floor(
        1000 + Math.random() * 9000
    )

    // Final File Name
    const finalFileName = `${fileName}-${randomNumber}`

    // Convert Header To Title Case
    const titleCase = (text) => {

        return text
            .replace(/_/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase())

    }

    // Transform Keys
    const formattedData = data.map(item => {

        const newItem = {}

        Object.keys(item).forEach(key => {

            newItem[titleCase(key)] = item[key]

        })

        return newItem

    })

    // Convert JSON to Worksheet
    const worksheet = XLSX.utils.json_to_sheet(
        formattedData
    )

    // Create Workbook
    const workbook = XLSX.utils.book_new()

    // Append Worksheet
    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        'Sheet1'
    )

    // CSV Export
    if (fileType === 'csv') {

        const csvOutput =
            XLSX.utils.sheet_to_csv(worksheet)

        const blob = new Blob(
            [csvOutput],
            {
                type: 'text/csv;charset=utf-8;'
            }
        )

        saveAs(
            blob,
            `${finalFileName}.csv`
        )

        return
    }

    // XLSX Export
    const excelBuffer = XLSX.write(
        workbook,
        {
            bookType: 'xlsx',
            type: 'array'
        }
    )

    const blob = new Blob(
        [excelBuffer],
        {
            type:
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        }
    )

    saveAs(
        blob,
        `${finalFileName}.xlsx`
    )

    // Success Toast
    ToastMessage.success(
        'Excel file exported successfully! 📗'
    )
}