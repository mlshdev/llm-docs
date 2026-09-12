> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betatesterswithoutincludesresponse](https://developer.apple.com/documentation/appstoreconnectapi/betatesterswithoutincludesresponse)

# BetaTestersWithoutIncludesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a list of TestFlight beta testers, without related resources.

## Declaration

```
object BetaTestersWithoutIncludesResponse
```

## Properties

- `data` — `[BetaTester]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [BetaTester](betatester.md): An individual enrolled as a beta tester in TestFlight, identified by their email address and associated with one or more apps or groups.
- [BetaTesterAppsLinkagesRequest](betatesterappslinkagesrequest.md): A request body you use to remove an app from a beta tester.
- [BetaTesterAppsLinkagesResponse](betatesterappslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [BetaTesterBetaGroupsLinkagesRequest](betatesterbetagroupslinkagesrequest.md): A request body you use to add or remove beta groups from a beta tester.
- [BetaTesterBetaGroupsLinkagesResponse](betatesterbetagroupslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [BetaTesterBuildsLinkagesRequest](betatesterbuildslinkagesrequest.md): A request body you use to add or remove builds from a beta tester.
- [BetaTesterBuildsLinkagesResponse](betatesterbuildslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [BetaTesterCreateRequest](betatestercreaterequest.md): The request body you use to create a BetaTester.
- [BetaTesterResponse](betatesterresponse.md): The response body for endpoints that create, read, or modify a TestFlight beta tester.
- [BetaTestersResponse](betatestersresponse.md): The response body for endpoints that list TestFlight beta testers.
- [AppsBetaTesterUsagesV1MetricResponse](appsbetatesterusagesv1metricresponse.md): A response that contains one or more beta app tester metric resources.
- [BetaTesterUsagesV1MetricResponse](betatesterusagesv1metricresponse.md): A response that contains one or more beta tester usage metric resources.
