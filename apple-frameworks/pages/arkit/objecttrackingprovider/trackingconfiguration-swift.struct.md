> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/objecttrackingprovider/trackingconfiguration-swift.struct](https://developer.apple.com/documentation/arkit/objecttrackingprovider/trackingconfiguration-swift.struct)

# ObjectTrackingProvider.TrackingConfiguration

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

Parameters for changing object-tracking behavior.

## Declaration

```swift
struct TrackingConfiguration
```

<a id="overview"></a>

## Overview

Your app needs to include the [Object-tracking parameter adjustment](../../bundleresources/entitlements/com.apple.developer.arkit.object-tracking-parameter-adjustment.allow.md) entitlement to modify the tracking configuration; otherwise, it has no effect.

## Topics

### Creating a tracking configuration

- [init()](trackingconfiguration-swift.struct/init%28%29.md): Creates a tracking configuration.

### Inspecting a tracking configuration

- [detectionRate](trackingconfiguration-swift.struct/detectionrate.md): The frequency at which object detection runs, in Hz.
- [maximumInstancesPerReferenceObject](trackingconfiguration-swift.struct/maximuminstancesperreferenceobject.md): The maximum number of instances of each reference object type to allow tracking at once.
- [maximumTrackableInstances](trackingconfiguration-swift.struct/maximumtrackableinstances.md): The total number of object instances that you can track at the same time.
- [movingObjectTrackingRate](trackingconfiguration-swift.struct/movingobjecttrackingrate.md): Deprecated. The frequency at which object tracking runs for moving objects, in Hz.
- [stationaryObjectTrackingRate](trackingconfiguration-swift.struct/stationaryobjecttrackingrate.md): Deprecated. The frequency at which object tracking runs for stationary objects, in Hz.

### Instance Properties

- [description](trackingconfiguration-swift.struct/description.md): A textual representation of this tracking configuration.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)

## See Also

### Configuring object-tracking

- [trackingConfiguration](trackingconfiguration-swift.property.md): Returns the current parameters that are being used to configure object tracking.
