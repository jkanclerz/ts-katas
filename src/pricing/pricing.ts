enum Tax {
    VAT23 = 0.23,
}

export interface CalcRequest {
    netto?: number;
    gross?: number;
    tax: Tax;
}

export interface ItemPrice {
    netto: number,
    gross: number,
    taxValue: number,
    tax: Tax
}

