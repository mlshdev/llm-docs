> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrunbuildslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrunbuildslinkagesresponse)

# CiBuildRunBuildsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object CiBuildRunBuildsLinkagesResponse
```

## Properties

- `data` — `[CiBuildRunBuildsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [CiBuildRunBuildsLinkagesResponse.Data](cibuildrunbuildslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects

- [CiBuildRun](cibuildrun.md): A single execution of an Xcode Cloud workflow, capturing the trigger, commit, status, and artifacts produced.
- [CiBuildRunCreateRequest](cibuildruncreaterequest.md): The request body you use to start a new Xcode Cloud build.
- [CiBuildRunResponse](cibuildrunresponse.md): The response body for endpoints that start or read a single Xcode Cloud build run.
- [CiBuildActionsResponse](cibuildactionsresponse.md): The response body for endpoints that list actions for an Xcode Cloud build run.
- [CiBuildRunActionsLinkagesResponse](cibuildrunactionslinkagesresponse.md)
