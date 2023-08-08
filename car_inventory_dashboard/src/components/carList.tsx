import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Car {
    make: string;
    model: string;
    color: string;
    year: number;
}

interface CarListProps {
    cars: Car[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
    return(
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Color</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car, index) => (
                    <tr key={index}>
                        <td>
                            <Link to={`/car/${index + 1}`}>{car.make}</Link>
                        </td>
                        <td>{car.model}</td>
                        <td>{car.color}</td>
                        <td>{car.year}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default CarList;
