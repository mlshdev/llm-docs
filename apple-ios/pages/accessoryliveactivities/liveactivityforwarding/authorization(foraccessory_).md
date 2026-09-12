> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/liveactivityforwarding/authorization(foraccessory:)](https://developer.apple.com/documentation/accessoryliveactivities/liveactivityforwarding/authorization(foraccessory:))

# authorization(forAccessory:)

**Framework:** Accessory Live Activities  
**Kind:** Type Method  
**Availability:** iOS 26.5+ · iPadOS 26.5+

Checks whether someone permits the system to forward Live Activities to the given accessory.

## Declaration

```swift
static func authorization(forAccessory accessory: ASAccessory) async throws -> AccessoryAuthorizationResult
```

## Parameters

- `accessory`: The accessory for which to check authorization to forward Live Activities.

<a id="return-value"></a>

## Return Value

The person’s authorization decision for the accessory.

## Mentioned In

- [Receiving Live Activity updates and alerts on an accessory](../receiving-live-activities-on-an-accessory.md)

<a id="Overview"></a>

## Overview

To determine whether someone permits forwarding Live Activities, call `authorization(forAccessory:)` before configuring your accessory or presenting an interface that relates to Live Activity forwarding.

If you want to ask someone to update their authorization – if they denied or limited Live Activity forwarding – present the system UI that allows people to manage their permission to forward Live Activities by calling [presentAuthorizationSheet(forAccessory:)](presentauthorizationsheet%28foraccessory_%29.md).

If the result of the query is [AccessoryAuthorizationResult.undetermined](../accessoryauthorizationresult/undetermined.md), the system hasn’t presented the authorization UI to the person. For more information about asking for permission for the first time, see [Receiving Live Activity updates and alerts on an accessory](../receiving-live-activities-on-an-accessory.md).

## See Also

### Requesting Live Activity forwarding

- [init(\_:)](init%28__%29.md): Creates an object you use to manage Live Activity forwarding for your accessory.
- [presentAuthorizationSheet(forAccessory:)](presentauthorizationsheet%28foraccessory_%29.md): Presents the system UI that allows people to manage their permission to forward Live Activities to an accessory.
- [featureID](featureid.md): A constant you use to configure your data provider extension’s capability to forward Live Activities to your accessory.
