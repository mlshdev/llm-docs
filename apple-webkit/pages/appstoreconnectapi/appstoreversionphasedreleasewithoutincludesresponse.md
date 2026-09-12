> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionphasedreleasewithoutincludesresponse](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionphasedreleasewithoutincludesresponse)

# AppStoreVersionPhasedReleaseWithoutIncludesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a single phased release configuration, without related resources.

## Declaration

```
object AppStoreVersionPhasedReleaseWithoutIncludesResponse
```

## Properties

- `data` — `AppStoreVersionPhasedRelease` (required):
- `links` — `DocumentLinks` (required):

## See Also

### Objects and Data Types

- [AppStoreVersionPhasedRelease](appstoreversionphasedrelease.md): The data structure that represent an App Store Version Phased Releases resource.
- [AppStoreVersionPhasedReleaseCreateRequest](appstoreversionphasedreleasecreaterequest.md): The request body you use to create an App Store Version Phased Release.
- [AppStoreVersionPhasedReleaseResponse](appstoreversionphasedreleaseresponse.md): The response body for endpoints that create, read, or modify the phased release schedule for an App Store version.
- [AppStoreVersionPhasedReleaseUpdateRequest](appstoreversionphasedreleaseupdaterequest.md): The request body you use to update an App Store Version Phased Release.
- [PhasedReleaseState](phasedreleasestate.md): String that represents the progress of a phased release for an app version.
