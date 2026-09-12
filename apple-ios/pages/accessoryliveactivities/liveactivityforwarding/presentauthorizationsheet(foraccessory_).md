> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/liveactivityforwarding/presentauthorizationsheet(foraccessory:)](https://developer.apple.com/documentation/accessoryliveactivities/liveactivityforwarding/presentauthorizationsheet(foraccessory:))

# presentAuthorizationSheet(forAccessory:)

**Framework:** Accessory Live Activities  
**Kind:** Type Method  
**Availability:** iOS 26.5+ · iPadOS 26.5+

Presents the system UI that allows people to manage their permission to forward Live Activities to an accessory.

## Declaration

```swift
static func presentAuthorizationSheet(forAccessory accessory: ASAccessory) async throws -> AccessoryAuthorizationResult
```

## Parameters

- `accessory`: The accessory that has the authorization settings you want to update.

<a id="return-value"></a>

## Return Value

The updated authorization decision.

## Mentioned In

- [Receiving Live Activity updates and alerts on an accessory](../receiving-live-activities-on-an-accessory.md)

<a id="Overview"></a>

## Overview

Call `presentAuthorizationSheet(forAccessory:)` to update which apps forward Live Activities to the accessory after a person has initially responded to the system UI that allows them to authorize forwarded iOS system notifications and Live Activities. The system ignores your call of `presentAuthorizationSheet(forAccessory:)` if you haven’t previously asked someone if they want to receive iOS system notifications and Live Activities on the accessory. For more information about asking for a person’s initial permission, see [Receiving Live Activity updates and alerts on an accessory](../receiving-live-activities-on-an-accessory.md).

## See Also

### Requesting Live Activity forwarding

- [init(\_:)](init%28__%29.md): Creates an object you use to manage Live Activity forwarding for your accessory.
- [authorization(forAccessory:)](authorization%28foraccessory_%29.md): Checks whether someone permits the system to forward Live Activities to the given accessory.
- [featureID](featureid.md): A constant you use to configure your data provider extension’s capability to forward Live Activities to your accessory.
