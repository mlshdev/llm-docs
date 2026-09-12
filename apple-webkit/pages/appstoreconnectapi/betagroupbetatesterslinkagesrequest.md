> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betagroupbetatesterslinkagesrequest](https://developer.apple.com/documentation/appstoreconnectapi/betagroupbetatesterslinkagesrequest)

# BetaGroupBetaTestersLinkagesRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A request body you use to add or remove beta testers from a beta group.

## Declaration

```
object BetaGroupBetaTestersLinkagesRequest
```

## Properties

- `data` — `[BetaGroupBetaTestersLinkagesRequest.Data]` (required): The types and IDs of related resources.

## Topics

### Objects

- [BetaGroupBetaTestersLinkagesRequest.Data](betagroupbetatesterslinkagesrequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [BetaGroup](betagroup.md): A group of beta testers and builds that you use to manage TestFlight distribution for an app.
- [BetaGroupResponse](betagroupresponse.md): The response body for endpoints that create, read, or modify a TestFlight beta group.
- [BetaGroupsWithoutIncludesResponse](betagroupswithoutincludesresponse.md): A response body that contains a list of beta groups without any includes.
- [BetaGroupCreateRequest](betagroupcreaterequest.md): The request body you use to create a Beta Group.
- [BetaGroupUpdateRequest](betagroupupdaterequest.md): The request body you use to update a Beta Group.
- [BetaGroupBuildsLinkagesRequest](betagroupbuildslinkagesrequest.md): A request body you use to add or remove builds from a beta group.
- [BetaGroupBetaTestersLinkagesResponse](betagroupbetatesterslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [BetaGroupBuildsLinkagesResponse](betagroupbuildslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [BetaPublicLinkUsagesV1MetricResponse](betapubliclinkusagesv1metricresponse.md): A metrics response containing usage data for a TestFlight public invite link, showing tester enrollment trends.
- [BetaGroupsResponse](betagroupsresponse.md): The response body for endpoints that list TestFlight beta groups.
- [BetaGroupAppLinkageResponse](betagroupapplinkageresponse.md)
- [BetaGroupBetaRecruitmentCriteriaLinkageResponse](betagroupbetarecruitmentcriterialinkageresponse.md)
- [BetaGroupBetaRecruitmentCriterionCompatibleBuildCheckLinkageResponse](betagroupbetarecruitmentcriterioncompatiblebuildchecklinkageresponse.md)
