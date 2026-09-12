> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/analyticsreportrequestcreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/analyticsreportrequestcreaterequest)

# AnalyticsReportRequestCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.4+

The request body you use to create an analytics report request.

## Declaration

```
object AnalyticsReportRequestCreateRequest
```

## Properties

- `data` — `AnalyticsReportRequestCreateRequest.Data` (required):

<a id="Discussion"></a>

## Discussion

Use this object with [Request Reports](post-v1-analyticsreportrequests.md).

## Topics

### Objects

- [AnalyticsReportRequestCreateRequest.Data](analyticsreportrequestcreaterequest/data-data.dictionary.md): The data object within an analytics report request create request containing the resource type, attributes, and relationships for the create operation.

## See Also

### Objects

- [AnalyticsReportRequest](analyticsreportrequest.md): A request to generate ongoing analytics reports for an app, specifying the report type and access frequency.
- [AnalyticsReportRequestResponse](analyticsreportrequestresponse.md): The response body for endpoints that create or read an analytics report request.
- [AnalyticsReportRequestsResponse](analyticsreportrequestsresponse.md): The response body for endpoints that list analytics report requests for an app.
- [AnalyticsReport](analyticsreport.md): A generated analytics report containing App Store performance data produced from a report request.
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
