> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/analyticsreport](https://developer.apple.com/documentation/appstoreconnectapi/analyticsreport)

# AnalyticsReport

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.4+

A generated analytics report containing App Store performance data produced from a report request.

## Declaration

```
object AnalyticsReport
```

## Properties

- `attributes` — `AnalyticsReport.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AnalyticsReport.Relationships`:
- `type` — `string` (required): **Allowed values:** `analyticsReports`

<a id="Discussion"></a>

## Discussion

To learn more about the response that includes this analytics report request object, see [AnalyticsReportResponse](analyticsreportresponse.md).

## Topics

### Objects

- [AnalyticsReport.Attributes](analyticsreport/attributes-data.dictionary.md): Attributes that describe an analytics report resource.

### Dictionaries

- [AnalyticsReport.Relationships](analyticsreport/relationships-data.dictionary.md)

## See Also

### Objects

- [AnalyticsReportRequest](analyticsreportrequest.md): A request to generate ongoing analytics reports for an app, specifying the report type and access frequency.
- [AnalyticsReportRequestCreateRequest](analyticsreportrequestcreaterequest.md): The request body you use to create an analytics report request.
- [AnalyticsReportRequestResponse](analyticsreportrequestresponse.md): The response body for endpoints that create or read an analytics report request.
- [AnalyticsReportRequestsResponse](analyticsreportrequestsresponse.md): The response body for endpoints that list analytics report requests for an app.
- [AnalyticsReportResponse](analyticsreportresponse.md): The response body for endpoints that read a single analytics report.
- [AnalyticsReportsResponse](analyticsreportsresponse.md): The response body for endpoints that list analytics reports for a report request.
- [AnalyticsReportInstance](analyticsreportinstance.md): A time-bounded instance of an analytics report, representing data for a specific reporting period.
- [AnalyticsReportInstanceResponse](analyticsreportinstanceresponse.md): The response body for endpoints that read a single analytics report instance.
- [AnalyticsReportInstancesResponse](analyticsreportinstancesresponse.md): The response body for endpoints that list instances of an analytics report.
- [AnalyticsReportSegment](analyticsreportsegment.md): A downloadable segment within an analytics report instance, containing a portion of the report’s CSV data.
- [AnalyticsReportSegmentResponse](analyticsreportsegmentresponse.md): The response body for endpoints that read a single downloadable segment of an analytics report.
- [AnalyticsReportSegmentsResponse](analyticsreportsegmentsresponse.md): The response body for endpoints that list the downloadable segments of an analytics report instance.
- [AnalyticsReportInstanceSegmentsLinkagesResponse](analyticsreportinstancesegmentslinkagesresponse.md)
- [AnalyticsReportInstancesLinkagesResponse](analyticsreportinstanceslinkagesresponse.md)
- [AnalyticsReportRequestReportsLinkagesResponse](analyticsreportrequestreportslinkagesresponse.md)
