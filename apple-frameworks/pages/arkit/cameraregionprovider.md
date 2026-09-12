> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraregionprovider](https://developer.apple.com/documentation/arkit/cameraregionprovider)

# CameraRegionProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 26.0+

A camera region provider.

## Declaration

```swift
final class CameraRegionProvider
```

<a id="overview"></a>

## Overview

An enterprise license is required to use the CameraRegionProvider. The provider will not deliver any data without it. The app must include the [Camera Region access](../bundleresources/entitlements/com.apple.developer.arkit.camera-region.allow.md) entitlement.

## Topics

### Structures

- [CameraRegionProvider.Error](cameraregionprovider/error.md): A camera region error.

### Initializers

- [init()](cameraregionprovider/init%28%29.md): Create a camera region provider.

### Instance Properties

- [description](cameraregionprovider/description.md): A textual representation of this camera region provider.
- [state](cameraregionprovider/state.md): The state of this camera region provider.

### Instance Methods

- [addAnchor(\_:)](cameraregionprovider/addanchor%28__%29.md): Add a camera region anchor.
- [anchorUpdates(forID:)](cameraregionprovider/anchorupdates%28forid_%29.md): An async sequence of anchor updates for a specific anchor.
- [removeAnchor(\_:)](cameraregionprovider/removeanchor%28__%29.md): Remove a camera region anchor.
- [removeAnchor(forID:)](cameraregionprovider/removeanchor%28forid_%29.md): Remove an anchor with a given ID from camera region.

### Type Properties

- [isSupported](cameraregionprovider/issupported.md): Determines whether this device supports the camera region provider.
- [requiredAuthorizations](cameraregionprovider/requiredauthorizations.md): The authorization type(s) required by the camera region provider.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Camera region

- [CameraRegionAnchor](cameraregionanchor.md): Represents a region in space for capturing a camera stream.
