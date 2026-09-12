> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/analyticsreportrequest](https://developer.apple.com/documentation/appstoreconnectapi/analyticsreportrequest)

# AnalyticsReportRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.4+

A request to generate ongoing analytics reports for an app, specifying the report type and access frequency.

## Declaration

```
object AnalyticsReportRequest
```

## Properties

- `attributes` — `AnalyticsReportRequest.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AnalyticsReportRequest.Relationships`:
- `type` — `string` (required): **Allowed values:** `analyticsReportRequests`

<a id="Discussion"></a>

## Discussion

To learn more about the response that includes this analytics report request object, see [AnalyticsReportRequestCreateRequest](analyticsreportrequestcreaterequest.md).

## Topics

### Objects

- [AnalyticsReportRequest.Attributes](analyticsreportrequest/attributes-data.dictionary.md): Attributes that describe an analytics report request resource.
- [AnalyticsReportRequest.Relationships](analyticsreportrequest/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AnalyticsReportRequestCreateRequest](analyticsreportrequestcreaterequest.md): The request body you use to create an analytics report request.
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
