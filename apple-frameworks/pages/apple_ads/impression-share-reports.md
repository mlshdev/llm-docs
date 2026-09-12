> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/impression-share-reports](https://developer.apple.com/documentation/apple_ads/impression-share-reports)

# Impression Share Reports

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** API Collection

Obtain metrics with impression share insights.

<a id="overview"></a>

## Overview

Impression share reports provide insights into opportunities to scale keywords and optimize maximum CPT bids and budgets for your search results campaigns. The reports also show you how your app ranks in terms of impression share compared to other apps in the same countries and regions.

Use the [Impression Share Report](impression-share-report.md) endpoint to obtain a report `ID` to use with [Get a Single Impression Share Report](get-a-single-impression-share-report.md), or use [Get All Impression Share Reports](get-all-impression-share-reports.md) without a report `ID`.

Use [CustomReportRequest](customreportrequest.md) for formatting guidance on selector structure. For metrics descriptions, see [CustomReportResponse](customreportresponse.md).

## Topics

### Impression Share Report Endpoints

- [Impression Share Report](impression-share-report.md): Obtain a report ID.
- [Get a Single Impression Share Report](get-a-single-impression-share-report.md): Fetches a single Impression Share report containing metrics and metadata.
- [Get All Impression Share Reports](get-all-impression-share-reports.md): Fetches all Impression Share reports containing metrics and metadata.

### Impression Share Report Request and Response Objects

- [CustomReportRequest](customreportrequest.md): The Impression Share report request body.
- [CustomReportResponse](customreportresponse.md): A container for Impression Share report metrics.
- [CustomReportResponseBody](customreportresponsebody.md): A container for the Impression Share report response body.
- [SovCondition](sovcondition.md): The list of condition objects that allow users to filter a list of records.

## See Also

### Reports

- [Reports](reports.md): Generate performance metrics for your campaigns.
