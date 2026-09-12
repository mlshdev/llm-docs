> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/nominationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/nominationsresponse)

# NominationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

A response containing a list of app nominations submitted for App Store editorial featuring consideration.

## Declaration

```
object NominationsResponse
```

## Properties

- `data` — `[Nomination]` (required):
- `included` — `[*]`: **Allowed types:** `Actor`, `AppEvent`, `App`, `Territory`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [Nomination](nomination.md): A developer recommendation submitted to Apple proposing an app or in-app event for App Store editorial featuring.
- [NominationUpdateRequest](nominationupdaterequest.md): The request body you use to update a featuring nomination.
- [NominationCreateRequest](nominationcreaterequest.md): The request body you use to create a featuring nomination.
- [NominationResponse](nominationresponse.md): A response containing a single App Store nomination submission.
