> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildaction](https://developer.apple.com/documentation/appstoreconnectapi/cibuildaction)

# CiBuildAction

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The execution result of a specific action step within an Xcode Cloud build run, including its status and issues.

## Declaration

```
object CiBuildAction
```

## Properties

- `attributes` — `CiBuildAction.Attributes`: The attributes that describe the Build Actions resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Build Actions resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `relationships` — `CiBuildAction.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciBuildActions`

## Topics

### Objects

- [CiBuildAction.Attributes](cibuildaction/attributes-data.dictionary.md): The attributes that describe a Build Actions resource.
- [CiBuildAction.Relationships](cibuildaction/relationships-data.dictionary.md): The relationships of the Build Actions resource you included in the request and those on which you can operate.

## See Also

### Objects

- [CiArtifactsResponse](ciartifactsresponse.md): The response body for endpoints that list artifacts produced by an Xcode Cloud build action.
- [CiBuildActionResponse](cibuildactionresponse.md): The response body for endpoints that read a single Xcode Cloud build action.
- [CiIssuesResponse](ciissuesresponse.md): The response body for endpoints that list issues from an Xcode Cloud build action.
- [CiTestResultsResponse](citestresultsresponse.md): The response body for endpoints that list test results from an Xcode Cloud build action.
- [CiBuildActionArtifactsLinkagesResponse](cibuildactionartifactslinkagesresponse.md)
- [CiBuildActionBuildRunLinkageResponse](cibuildactionbuildrunlinkageresponse.md)
- [CiBuildActionIssuesLinkagesResponse](cibuildactionissueslinkagesresponse.md)
- [CiBuildActionTestResultsLinkagesResponse](cibuildactiontestresultslinkagesresponse.md)
