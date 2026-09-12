> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/dataprovider](https://developer.apple.com/documentation/arkit/dataprovider)

# DataProvider

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** macOS 26.0+ · visionOS 1.0+

A source of live data from ARKit.

## Declaration

```swift
protocol DataProvider : AnyObject, CustomStringConvertible, Sendable
```

<a id="overview"></a>

## Overview

Most providers supply an asynchronous sequence of updated anchors for the provider’s data type. For example, a [HandTrackingProvider](handtrackingprovider.md) instance’s [anchorUpdates](handtrackingprovider/anchorupdates.md) property gives updates over time for hand anchors.

## Topics

### Inspecting a data provider

- [state](dataprovider/state.md): The current status of data coming from this provider.

### Inspecting a data provider type

- [requiredAuthorizations](dataprovider/requiredauthorizations.md): The kinds of authorization you need to use a particular data provider type.
- [isSupported](dataprovider/issupported.md): A Boolean value that indicates whether the current runtime environment supports a particular provider type.

## Relationships

### Inherits From

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AccessoryTrackingProvider](accessorytrackingprovider.md)
- [BarcodeDetectionProvider](barcodedetectionprovider.md)
- [CameraFrameProvider](cameraframeprovider.md)
- [CameraRegionProvider](cameraregionprovider.md)
- [EnvironmentLightEstimationProvider](environmentlightestimationprovider.md)
- [HandTrackingProvider](handtrackingprovider.md)
- [ImageTrackingProvider](imagetrackingprovider.md)
- [ObjectTrackingProvider](objecttrackingprovider.md)
- [PlaneDetectionProvider](planedetectionprovider.md)
- [RoomTrackingProvider](roomtrackingprovider.md)
- [SceneReconstructionProvider](scenereconstructionprovider.md)
- [SharedCoordinateSpaceProvider](sharedcoordinatespaceprovider.md)
- [StereoPropertiesProvider](stereopropertiesprovider.md)
- [VisualFidelityProvider](visualfidelityprovider.md)
- [WorldTrackingProvider](worldtrackingprovider.md)

## See Also

### visionOS

- [Setting up access to ARKit data](../visionos/setting-up-access-to-arkit-data.md): Check whether your app can use ARKit and respect people’s privacy.
- [ARKitSession](arkitsession.md): The main entry point for receiving data from ARKit.
- [Anchor](anchor.md): The identity, location, and orientation of an object in world space.
- [ARKit in visionOS](arkit-in-visionos.md): Create immersive augmented reality experiences.
