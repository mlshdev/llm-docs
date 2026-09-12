> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/floorelevation-swift.class](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/floorelevation-swift.class)

# NIDLTDOAMeasurement.FloorElevation (Swift)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An object that describes how high off the ground DL-TDOA anchors reside in the environment.

## Declaration

```swift
class FloorElevation
```

<a id="overview"></a>

## Overview

Floor elevation specifies the vertical position of DL-TDOA anchors. In multi-story deployments, [floorNumber](floorelevation-swift.class/floornumber.md) specifies the floor that the anchor resides on. The  [height](floorelevation-swift.class/height.md) property describes the anchor’s elevation off of the floor, in meters.

Negative [floorNumber](floorelevation-swift.class/floornumber.md) values indicate areas below ground level, for example, a basement or parking level.

## Topics

### Accessing floor elevation components

- [floorNumber](floorelevation-swift.class/floornumber.md): The floor number on which the anchor resides.
- [height](floorelevation-swift.class/height.md): The height above the floor in meters.

### Creating a floor elevation

- [init(coder:)](init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Locating the anchor

- [coordinates](coordinates.md): A triplet that represents the location in 3D space of the anchor that provides the measurement.
- [coordinatesType](coordinatestype.md): The type of coordinate system that the measurement conforms to.
- [signalStrength](signalstrength.md): A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.
- [floorElevation](floorelevation-swift.property.md): The floor elevation information for the anchor, if available.

# NIDLTDOAMeasurementFloorElevation (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An object that describes how high off the ground DL-TDOA anchors reside in the environment.

## Declaration

```objectivec
@interface NIDLTDOAMeasurementFloorElevation : NSObject
```

<a id="overview"></a>

## Overview

Floor elevation specifies the vertical position of DL-TDOA anchors. In multi-story deployments, [floorNumber](floorelevation-swift.class/floornumber.md) specifies the floor that the anchor resides on. The  [height](floorelevation-swift.class/height.md) property describes the anchor’s elevation off of the floor, in meters.

Negative [floorNumber](floorelevation-swift.class/floornumber.md) values indicate areas below ground level, for example, a basement or parking level.

## Topics

### Accessing floor elevation components

- [floorNumber](floorelevation-swift.class/floornumber.md): The floor number on which the anchor resides.
- [height](floorelevation-swift.class/height.md): The height above the floor in meters.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Locating the anchor

- [coordinates](coordinates.md): A triplet that represents the location in 3D space of the anchor that provides the measurement.
- [coordinatesType](coordinatestype.md): The type of coordinate system that the measurement conforms to.
- [signalStrength](signalstrength.md): A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.
- [floorElevation](floorelevation-swift.property.md): The floor elevation information for the anchor, if available.
