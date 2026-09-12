> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/comparing-app-versions](https://developer.apple.com/documentation/appstoreconnectapi/comparing-app-versions)

# Comparing app versions

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

Return a Boolean value that indicates whether two match requests are from compatible app versions.

<a id="overview"></a>

## Overview

Use the `areCompatibleAppVersions()` function in the expression of a matchmaking rule to determine if the version of the games that request matches are compatible. This function uses information you enter in App Store Connect — such as the bundle ID, platform, and version properties to determine compatibility. For more information, see [Add multiplayer compatibility](https://developer.apple.com/help/app-store-connect/configure-game-center/add-multiplayer-compatibility).

<a id="Declaration"></a>

### Declaration

```other
boolean areCompatibleAppVersions(object $request1, object $request2)
```

<a id="Parameters"></a>

### Parameters

-`request1`: A match request to compare with `request2`. -`request2`: A match request to compare with `request1`.

<a id="Return-value"></a>

### Return value

`true`, if the game instances that request a match are compatible; otherwise, `false`.
