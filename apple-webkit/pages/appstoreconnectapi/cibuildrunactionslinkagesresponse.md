> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrunactionslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrunactionslinkagesresponse)

# CiBuildRunActionsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object CiBuildRunActionsLinkagesResponse
```

## Properties

- `data` — `[CiBuildRunActionsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [CiBuildRunActionsLinkagesResponse.Data](cibuildrunactionslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects

- [CiBuildRun](cibuildrun.md): A single execution of an Xcode Cloud workflow, capturing the trigger, commit, status, and artifacts produced.
- [CiBuildRunCreateRequest](cibuildruncreaterequest.md): The request body you use to start a new Xcode Cloud build.
- [CiBuildRunResponse](cibuildrunresponse.md): The response body for endpoints that start or read a single Xcode Cloud build run.
- [CiBuildActionsResponse](cibuildactionsresponse.md): The response body for endpoints that list actions for an Xcode Cloud build run.
- [CiBuildRunBuildsLinkagesResponse](cibuildrunbuildslinkagesresponse.md)
