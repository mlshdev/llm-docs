> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionphasedrelease](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionphasedrelease)

# AppStoreVersionPhasedRelease

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data structure that represent an App Store Version Phased Releases resource.

## Declaration

```
object AppStoreVersionPhasedRelease
```

## Properties

- `attributes` — `AppStoreVersionPhasedRelease.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `appStoreVersionPhasedReleases`

## Topics

### Objects

- [AppStoreVersionPhasedRelease.Attributes](appstoreversionphasedrelease/attributes-data.dictionary.md): Attributes that describe an App Store Version Phased Releases resource.

## See Also

### Objects and Data Types

- [AppStoreVersionPhasedReleaseCreateRequest](appstoreversionphasedreleasecreaterequest.md): The request body you use to create an App Store Version Phased Release.
- [AppStoreVersionPhasedReleaseResponse](appstoreversionphasedreleaseresponse.md): The response body for endpoints that create, read, or modify the phased release schedule for an App Store version.
- [AppStoreVersionPhasedReleaseWithoutIncludesResponse](appstoreversionphasedreleasewithoutincludesresponse.md): A response containing a single phased release configuration, without related resources.
- [AppStoreVersionPhasedReleaseUpdateRequest](appstoreversionphasedreleaseupdaterequest.md): The request body you use to update an App Store Version Phased Release.
- [PhasedReleaseState](phasedreleasestate.md): String that represents the progress of a phased release for an app version.
