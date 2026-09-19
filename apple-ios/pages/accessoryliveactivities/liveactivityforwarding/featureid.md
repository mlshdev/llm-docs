> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryliveactivities/liveactivityforwarding/featureid

# featureID

**Framework:** Accessory Live Activities  
**Kind:** Type Property  
**Availability:** iOS 26.5+ · iPadOS 26.5+

A constant you use to configure your data provider extension’s capability to forward Live Activities to your accessory.

## Declaration

```swift
static let featureID: String
```

<a id="Overview"></a>

## Overview

This constant’s value is `AccessoryLiveActivities.LiveActivityForwarding`, the string you add to your data provider extension to configure the capability to receive forwarded Live Activities.

## See Also

### Requesting Live Activity forwarding

- [init(\_:)](init%28__%29.md): Creates an object you use to manage Live Activity forwarding for your accessory.
- [authorization(forAccessory:)](authorization%28foraccessory_%29.md): Checks whether someone permits the system to forward Live Activities to the given accessory.
- [presentAuthorizationSheet(forAccessory:)](presentauthorizationsheet%28foraccessory_%29.md): Presents the system UI that allows people to manage their permission to forward Live Activities to an accessory.
