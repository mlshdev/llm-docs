> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-financereports](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-financereports)

# Download finance reports

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Download finance reports filtered by your specified criteria.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/financeReports
```

## Query Parameters

- `filter[regionCode]` — `[string]` (required): You can download consolidated or separate financial reports per territory. For a complete list of possible values, see [Financial report regions and currencies](https://developer.apple.com/help/app-store-connect/reference/financial-report-regions-and-currencies).
- `filter[reportDate]` — `[string]` (required): The fiscal month of the report you wish to download based on the [Apple Fiscal Calendar](https://appstoreconnect.apple.com/WebObjects/iTunesConnect.woa/wa/jumpTo?page=fiscalcalendar). The fiscal month is specified in the `YYYY-MM` format.
- `filter[reportType]` — `[string]` (required): This value is always `FINANCIAL`.
  **Allowed values:** `FINANCIAL`, `FINANCE_DETAIL`
- `filter[vendorNumber]` — `[string]` (required): You can find your vendor number in [View payments and proceeds](https://developer.apple.com/help/app-store-connect/getting-paid/view-payments-and-proceeds).

## Response Codes

- `200` OK — `gzip`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## Mentioned In

- [Downloading Analytics Reports](downloading-analytics-reports.md)

<a id="Discussion"></a>

## Discussion

For more information see [Download financial reports](https://developer.apple.com/help/app-store-connect/getting-paid/download-financial-reports).

## See Also

### Downloading Reports

- [Download sales and trends reports](get-v1-salesreports.md): Download sales and trends reports filtered by your specified criteria.
