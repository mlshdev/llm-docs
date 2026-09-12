> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betatesterresponse](https://developer.apple.com/documentation/appstoreconnectapi/betatesterresponse)

# BetaTesterResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that create, read, or modify a TestFlight beta tester.

## Declaration

```
object BetaTesterResponse
```

## Properties

- `data` — `BetaTester` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[*]`: **Allowed types:** `App`, `BetaGroup`, `Build`

## See Also

### Related Documentation

- [Create a beta tester](post-v1-betatesters.md): Create a beta tester assigned to a group, a build, or an app.

### Objects

- [BetaTester](betatester.md): An individual enrolled as a beta tester in TestFlight, identified by their email address and associated with one or more apps or groups.
- [BetaTestersWithoutIncludesResponse](betatesterswithoutincludesresponse.md): A response containing a list of TestFlight beta testers, without related resources.
- [BetaTesterAppsLinkagesRequest](betatesterappslinkagesrequest.md): A request body you use to remove an app from a beta tester.
- [BetaTesterAppsLinkagesResponse](betatesterappslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [BetaTesterBetaGroupsLinkagesRequest](betatesterbetagroupslinkagesrequest.md): A request body you use to add or remove beta groups from a beta tester.
- [BetaTesterBetaGroupsLinkagesResponse](betatesterbetagroupslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [BetaTesterBuildsLinkagesRequest](betatesterbuildslinkagesrequest.md): A request body you use to add or remove builds from a beta tester.
- [BetaTesterBuildsLinkagesResponse](betatesterbuildslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [BetaTesterCreateRequest](betatestercreaterequest.md): The request body you use to create a BetaTester.
- [BetaTestersResponse](betatestersresponse.md): The response body for endpoints that list TestFlight beta testers.
- [AppsBetaTesterUsagesV1MetricResponse](appsbetatesterusagesv1metricresponse.md): A response that contains one or more beta app tester metric resources.
- [BetaTesterUsagesV1MetricResponse](betatesterusagesv1metricresponse.md): A response that contains one or more beta tester usage metric resources.
