> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betagroup](https://developer.apple.com/documentation/appstoreconnectapi/betagroup)

# BetaGroup

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A group of beta testers and builds that you use to manage TestFlight distribution for an app.

## Declaration

```
object BetaGroup
```

## Properties

- `attributes` — `BetaGroup.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `BetaGroup.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaGroups`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [BetaGroup.Attributes](betagroup/attributes-data.dictionary.md): Attributes with values that describe a beta group update request.
- [BetaGroup.Relationships](betagroup/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [BetaGroupResponse](betagroupresponse.md): The response body for endpoints that create, read, or modify a TestFlight beta group.
- [BetaGroupsWithoutIncludesResponse](betagroupswithoutincludesresponse.md): A response body that contains a list of beta groups without any includes.
- [BetaGroupCreateRequest](betagroupcreaterequest.md): The request body you use to create a Beta Group.
- [BetaGroupUpdateRequest](betagroupupdaterequest.md): The request body you use to update a Beta Group.
- [BetaGroupBuildsLinkagesRequest](betagroupbuildslinkagesrequest.md): A request body you use to add or remove builds from a beta group.
- [BetaGroupBetaTestersLinkagesRequest](betagroupbetatesterslinkagesrequest.md): A request body you use to add or remove beta testers from a beta group.
- [BetaGroupBetaTestersLinkagesResponse](betagroupbetatesterslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [BetaGroupBuildsLinkagesResponse](betagroupbuildslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [BetaPublicLinkUsagesV1MetricResponse](betapubliclinkusagesv1metricresponse.md): A metrics response containing usage data for a TestFlight public invite link, showing tester enrollment trends.
- [BetaGroupsResponse](betagroupsresponse.md): The response body for endpoints that list TestFlight beta groups.
- [BetaGroupAppLinkageResponse](betagroupapplinkageresponse.md)
- [BetaGroupBetaRecruitmentCriteriaLinkageResponse](betagroupbetarecruitmentcriterialinkageresponse.md)
- [BetaGroupBetaRecruitmentCriterionCompatibleBuildCheckLinkageResponse](betagroupbetarecruitmentcriterioncompatiblebuildchecklinkageresponse.md)
