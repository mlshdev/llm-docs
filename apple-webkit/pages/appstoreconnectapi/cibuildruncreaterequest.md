> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildruncreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/cibuildruncreaterequest)

# CiBuildRunCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The request body you use to start a new Xcode Cloud build.

## Declaration

```
object CiBuildRunCreateRequest
```

## Properties

- `data` — `CiBuildRunCreateRequest.Data` (required): The resource data.

## Topics

### Objects

- [CiBuildRunCreateRequest.Data](cibuildruncreaterequest/data-data.dictionary.md): The data element of the request you use to start a new Xcode Cloud build.

## See Also

### Objects

- [CiBuildRun](cibuildrun.md): A single execution of an Xcode Cloud workflow, capturing the trigger, commit, status, and artifacts produced.
- [CiBuildRunResponse](cibuildrunresponse.md): The response body for endpoints that start or read a single Xcode Cloud build run.
- [CiBuildActionsResponse](cibuildactionsresponse.md): The response body for endpoints that list actions for an Xcode Cloud build run.
- [CiBuildRunActionsLinkagesResponse](cibuildrunactionslinkagesresponse.md)
- [CiBuildRunBuildsLinkagesResponse](cibuildrunbuildslinkagesresponse.md)
