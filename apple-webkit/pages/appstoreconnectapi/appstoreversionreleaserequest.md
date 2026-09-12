> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionreleaserequest](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionreleaserequest)

# AppStoreVersionReleaseRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A request to manually release an App Store version that was set to manual release after review approval.

## Declaration

```
object AppStoreVersionReleaseRequest
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appStoreVersionReleaseRequests`

## See Also

### Objects

- [AppStoreVersionReleaseRequestCreateRequest](appstoreversionreleaserequestcreaterequest.md): The request body you use to manually release an App Store approved version of your app.
- [AppStoreVersionReleaseRequestResponse](appstoreversionreleaserequestresponse.md): A response containing a single manual release request for an App Store version.
