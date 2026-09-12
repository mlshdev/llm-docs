> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrun](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrun)

# CiBuildRun

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A single execution of an Xcode Cloud workflow, capturing the trigger, commit, status, and artifacts produced.

## Declaration

```
object CiBuildRun
```

## Properties

- `attributes` — `CiBuildRun.Attributes`: The attributes that describe the Build Runs resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Build Runs resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `relationships` — `CiBuildRun.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciBuildRuns`

## Topics

### Objects

- [CiBuildRun.Attributes](cibuildrun/attributes-data.dictionary.md): The attributes that describe a Build Runs resource.
- [CiBuildRun.Relationships](cibuildrun/relationships-data.dictionary.md): The relationships of the Build Runs resource you included in the request and those on which you can operate.

## See Also

### Objects

- [CiBuildRunCreateRequest](cibuildruncreaterequest.md): The request body you use to start a new Xcode Cloud build.
- [CiBuildRunResponse](cibuildrunresponse.md): The response body for endpoints that start or read a single Xcode Cloud build run.
- [CiBuildActionsResponse](cibuildactionsresponse.md): The response body for endpoints that list actions for an Xcode Cloud build run.
- [CiBuildRunActionsLinkagesResponse](cibuildrunactionslinkagesresponse.md)
- [CiBuildRunBuildsLinkagesResponse](cibuildrunbuildslinkagesresponse.md)
