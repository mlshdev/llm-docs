> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionreleaserequestresponse](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionreleaserequestresponse)

# AppStoreVersionReleaseRequestResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A response containing a single manual release request for an App Store version.

## Declaration

```
object AppStoreVersionReleaseRequestResponse
```

## Properties

- `data` — `AppStoreVersionReleaseRequest` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [AppStoreVersionReleaseRequestCreateRequest](appstoreversionreleaserequestcreaterequest.md): The request body you use to manually release an App Store approved version of your app.
- [AppStoreVersionReleaseRequest](appstoreversionreleaserequest.md): A request to manually release an App Store version that was set to manual release after review approval.
