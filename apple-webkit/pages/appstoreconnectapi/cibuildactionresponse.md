> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildactionresponse](https://developer.apple.com/documentation/appstoreconnectapi/cibuildactionresponse)

# CiBuildActionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that read a single Xcode Cloud build action.

## Declaration

```
object CiBuildActionResponse
```

## Properties

- `data` — `CiBuildAction` (required): The resource data.
- `included` — `[CiBuildRun]`: The requested relationship data.
- `links` — `DocumentLinks` (required): The navigational links that include the self-link.

## See Also

### Objects

- [CiBuildAction](cibuildaction.md): The execution result of a specific action step within an Xcode Cloud build run, including its status and issues.
- [CiArtifactsResponse](ciartifactsresponse.md): The response body for endpoints that list artifacts produced by an Xcode Cloud build action.
- [CiIssuesResponse](ciissuesresponse.md): The response body for endpoints that list issues from an Xcode Cloud build action.
- [CiTestResultsResponse](citestresultsresponse.md): The response body for endpoints that list test results from an Xcode Cloud build action.
- [CiBuildActionArtifactsLinkagesResponse](cibuildactionartifactslinkagesresponse.md)
- [CiBuildActionBuildRunLinkageResponse](cibuildactionbuildrunlinkageresponse.md)
- [CiBuildActionIssuesLinkagesResponse](cibuildactionissueslinkagesresponse.md)
- [CiBuildActionTestResultsLinkagesResponse](cibuildactiontestresultslinkagesresponse.md)
