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

        </div>
    );
};
export default CsvReader;
