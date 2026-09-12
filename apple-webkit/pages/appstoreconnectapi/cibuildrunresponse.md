> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrunresponse](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrunresponse)

# CiBuildRunResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that start or read a single Xcode Cloud build run.

## Declaration

```
object CiBuildRunResponse
```

## Properties

- `data` — `CiBuildRun` (required): The resource data.
- `included` — `[*]`: The requested relationship data.
  **Allowed types:** `Build`, `CiProduct`, `CiWorkflow`, `ScmGitReference`, `ScmPullRequest`
- `links` — `DocumentLinks` (required): The navigational links that include the self-link.

## See Also

### Objects

- [CiBuildRun](cibuildrun.md): A single execution of an Xcode Cloud workflow, capturing the trigger, commit, status, and artifacts produced.
- [CiBuildRunCreateRequest](cibuildruncreaterequest.md): The request body you use to start a new Xcode Cloud build.
- [CiBuildActionsResponse](cibuildactionsresponse.md): The response body for endpoints that list actions for an Xcode Cloud build run.
- [CiBuildRunActionsLinkagesResponse](cibuildrunactionslinkagesresponse.md)
- [CiBuildRunBuildsLinkagesResponse](cibuildrunbuildslinkagesresponse.md)
