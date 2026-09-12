> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildactionartifactslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/cibuildactionartifactslinkagesresponse)

# CiBuildActionArtifactsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object CiBuildActionArtifactsLinkagesResponse
```

## Properties

- `data` — `[CiBuildActionArtifactsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [CiBuildActionArtifactsLinkagesResponse.Data](cibuildactionartifactslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects

- [CiBuildAction](cibuildaction.md): The execution result of a specific action step within an Xcode Cloud build run, including its status and issues.
- [CiArtifactsResponse](ciartifactsresponse.md): The response body for endpoints that list artifacts produced by an Xcode Cloud build action.
- [CiBuildActionResponse](cibuildactionresponse.md): The response body for endpoints that read a single Xcode Cloud build action.
- [CiIssuesResponse](ciissuesresponse.md): The response body for endpoints that list issues from an Xcode Cloud build action.
- [CiTestResultsResponse](citestresultsresponse.md): The response body for endpoints that list test results from an Xcode Cloud build action.
- [CiBuildActionBuildRunLinkageResponse](cibuildactionbuildrunlinkageresponse.md)
- [CiBuildActionIssuesLinkagesResponse](cibuildactionissueslinkagesresponse.md)
- [CiBuildActionTestResultsLinkagesResponse](cibuildactiontestresultslinkagesresponse.md)
