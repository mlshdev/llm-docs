> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildactionissueslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/cibuildactionissueslinkagesresponse)

# CiBuildActionIssuesLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object CiBuildActionIssuesLinkagesResponse
```

## Properties

- `data` — `[CiBuildActionIssuesLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [CiBuildActionIssuesLinkagesResponse.Data](cibuildactionissueslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects

- [CiBuildAction](cibuildaction.md): The execution result of a specific action step within an Xcode Cloud build run, including its status and issues.
- [CiArtifactsResponse](ciartifactsresponse.md): The response body for endpoints that list artifacts produced by an Xcode Cloud build action.
- [CiBuildActionResponse](cibuildactionresponse.md): The response body for endpoints that read a single Xcode Cloud build action.
- [CiIssuesResponse](ciissuesresponse.md): The response body for endpoints that list issues from an Xcode Cloud build action.
- [CiTestResultsResponse](citestresultsresponse.md): The response body for endpoints that list test results from an Xcode Cloud build action.
- [CiBuildActionArtifactsLinkagesResponse](cibuildactionartifactslinkagesresponse.md)
- [CiBuildActionBuildRunLinkageResponse](cibuildactionbuildrunlinkageresponse.md)
- [CiBuildActionTestResultsLinkagesResponse](cibuildactiontestresultslinkagesresponse.md)
