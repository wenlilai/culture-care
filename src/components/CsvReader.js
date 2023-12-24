import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const CsvReader = () => {
    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        const csvFile = 'appointment-request.csv';

        Papa.parse(csvFile, {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                setCsvData(results.data)
            }
        })
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Column1</th>
                        <th>Column2</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {csvData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.Column1}</td>
                            <td>{row.Column2}</td>
                            {/* Render other columns as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default CsvReader;
