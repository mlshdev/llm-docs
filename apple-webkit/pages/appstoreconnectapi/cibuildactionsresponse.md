> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildactionsresponse](https://developer.apple.com/documentation/appstoreconnectapi/cibuildactionsresponse)

# CiBuildActionsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that list actions for an Xcode Cloud build run.

## Declaration

```
object CiBuildActionsResponse
```

## Properties

- `data` — `[CiBuildAction]` (required): The resource data.
- `included` — `[CiBuildRun]`: The requested relationship data.
- `links` — `PagedDocumentLinks` (required): The navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## See Also

### Objects

- [CiBuildRun](cibuildrun.md): A single execution of an Xcode Cloud workflow, capturing the trigger, commit, status, and artifacts produced.
- [CiBuildRunCreateRequest](cibuildruncreaterequest.md): The request body you use to start a new Xcode Cloud build.
- [CiBuildRunResponse](cibuildrunresponse.md): The response body for endpoints that start or read a single Xcode Cloud build run.
- [CiBuildRunActionsLinkagesResponse](cibuildrunactionslinkagesresponse.md)
- [CiBuildRunBuildsLinkagesResponse](cibuildrunbuildslinkagesresponse.md)
