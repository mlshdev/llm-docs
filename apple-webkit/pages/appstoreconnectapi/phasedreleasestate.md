> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/phasedreleasestate](https://developer.apple.com/documentation/appstoreconnectapi/phasedreleasestate)

# PhasedReleaseState

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.2+

String that represents the progress of a phased release for an app version.

## Declaration

```
string PhasedReleaseState
```

## Possible Values

- `INACTIVE`: The phased release hasn’t started.
- `ACTIVE`: The app version is released. During a phased release, the App Store releases the update over a 7-day period to a percentage of your users, randomly selected. The phased release applies to macOS and iOS devices with automatic updates enabled. Users can also manually download the app version.
- `PAUSED`: The App Store paused the phased release, at your request.
- `COMPLETE`: The process released the update to all devices that have automatic updates enabled. The phased-release process is complete.

<a id="Discussion"></a>

## Discussion

For more information about phased releases including pausing an update, see [Release a version update in phases](https://developer.apple.com/help/app-store-connect/update-your-app/release-a-version-update-in-phases/).

## See Also

### Objects and Data Types

- [AppStoreVersionPhasedRelease](appstoreversionphasedrelease.md): The data structure that represent an App Store Version Phased Releases resource.
- [AppStoreVersionPhasedReleaseCreateRequest](appstoreversionphasedreleasecreaterequest.md): The request body you use to create an App Store Version Phased Release.
- [AppStoreVersionPhasedReleaseResponse](appstoreversionphasedreleaseresponse.md): The response body for endpoints that create, read, or modify the phased release schedule for an App Store version.
- [AppStoreVersionPhasedReleaseWithoutIncludesResponse](appstoreversionphasedreleasewithoutincludesresponse.md): A response containing a single phased release configuration, without related resources.
- [AppStoreVersionPhasedReleaseUpdateRequest](appstoreversionphasedreleaseupdaterequest.md): The request body you use to update an App Store Version Phased Release.
