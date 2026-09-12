> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/sales-and-finance](https://developer.apple.com/documentation/appstoreconnectapi/sales-and-finance)

# Sales and Finance

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Download your sales and financial reports.

<a id="overview"></a>

## Overview

App Store Connect provides data that allows you to measure the performance of your app and view payments from Apple. Use the App Store Connect API to apply filters to select and configure the data, and automate the download of sales and financial reports. For detailed information on reports, see [Overview of reporting tools](https://developer.apple.com/help/app-store-connect/measure-app-performance/overview-of-reporting-tools).

These endpoints require a Team key and aren’t usable with an Individual key. To learn more about keys and roles, see [Creating API Keys for App Store Connect API](creating-api-keys-for-app-store-connect-api.md).

## Topics

### Downloading Reports

- [Download finance reports](get-v1-financereports.md): Download finance reports filtered by your specified criteria.
- [Download sales and trends reports](get-v1-salesreports.md): Download sales and trends reports filtered by your specified criteria.

### Objects

- [gzip](gzip.md): A binary value that represents a gzip-compressed file.

## See Also

### Reporting

- [Power and Performance Metrics and Logs](power-and-performance-metrics-and-logs.md): Get power and performance metrics, logs, and signatures.
- [Analytics](analytics.md): Get data about your apps and usage.
