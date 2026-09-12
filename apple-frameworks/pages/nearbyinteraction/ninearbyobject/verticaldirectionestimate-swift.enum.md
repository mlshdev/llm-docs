> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobject/verticaldirectionestimate-swift.enum](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobject/verticaldirectionestimate-swift.enum)

# NINearbyObject.VerticalDirectionEstimate (Swift)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

Estimations of a nearby object’s vertical position in relation to the user’s device.

## Declaration

```swift
enum VerticalDirectionEstimate
```

<a id="overview"></a>

## Overview

The framework sets a nearby object’s [verticalDirectionEstimate](verticaldirectionestimate-swift.property.md) to an option of this enumeration when [isCameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md) is `true`.

## Topics

### Relative vertical location

- [NINearbyObject.VerticalDirectionEstimate.unknown](verticaldirectionestimate-swift.enum/unknown.md): An indication that the nearby object resides at an unknown vertical location.
- [NINearbyObject.VerticalDirectionEstimate.same](verticaldirectionestimate-swift.enum/same.md): An indication that the nearby object resides at an equivalent vertical location as the user’s device.
- [NINearbyObject.VerticalDirectionEstimate.above](verticaldirectionestimate-swift.enum/above.md): An indication that the nearby object resides at a higher vertical location than the user’s device.
- [NINearbyObject.VerticalDirectionEstimate.below](verticaldirectionestimate-swift.enum/below.md): An indication that the nearby object resides at a lower vertical location than the user’s device.
- [NINearbyObject.VerticalDirectionEstimate.aboveOrBelow](verticaldirectionestimate-swift.enum/aboveorbelow.md): An indication that the nearby object doesn’t reside at the same vertical location as the user’s device.

### Initializers

- [init(rawValue:)](verticaldirectionestimate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Acquiring relative direction

- [direction](direction-4qh5w.md): A vector that points from the user’s device in the direction of the peer device.
- [horizontalAngle](horizontalangle-hsg.md): An angle in radians that indicates the azimuthal direction to the nearby object.
- [verticalDirectionEstimate](verticaldirectionestimate-swift.property.md): The estimation of a nearby object’s vertical position as it relates to the user’s device.

# NINearbyObjectVerticalDirectionEstimate (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

Estimations of a nearby object’s vertical position in relation to the user’s device.

## Declaration

```objectivec
enum NINearbyObjectVerticalDirectionEstimate : NSInteger;
```

<a id="overview"></a>

## Overview

The framework sets a nearby object’s [verticalDirectionEstimate](verticaldirectionestimate-swift.property.md) to an option of this enumeration when [cameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md) is `true`.

## Topics

### Relative vertical location

- [NINearbyObjectVerticalDirectionEstimateUnknown](verticaldirectionestimate-swift.enum/unknown.md): An indication that the nearby object resides at an unknown vertical location.
- [NINearbyObjectVerticalDirectionEstimateSame](verticaldirectionestimate-swift.enum/same.md): An indication that the nearby object resides at an equivalent vertical location as the user’s device.
- [NINearbyObjectVerticalDirectionEstimateAbove](verticaldirectionestimate-swift.enum/above.md): An indication that the nearby object resides at a higher vertical location than the user’s device.
- [NINearbyObjectVerticalDirectionEstimateBelow](verticaldirectionestimate-swift.enum/below.md): An indication that the nearby object resides at a lower vertical location than the user’s device.
- [NINearbyObjectVerticalDirectionEstimateAboveOrBelow](verticaldirectionestimate-swift.enum/aboveorbelow.md): An indication that the nearby object doesn’t reside at the same vertical location as the user’s device.

## See Also

### Acquiring relative direction

- [direction](direction-5xcld.md): A vector that points from the user’s device in the direction of the peer device.
- [NINearbyObjectDirectionNotAvailable](../ninearbyobjectdirectionnotavailable.md): A value that indicates that a nearby object’s direction is unavailable.
- [horizontalAngle](horizontalangle-9ibky.md): An angle in radians that indicates the azimuthal direction to the nearby object.
- [NINearbyObjectAngleNotAvailable](../ninearbyobjectanglenotavailable.md): A value that indicates that a nearby object’s horizontal angle is unavailable.
- [verticalDirectionEstimate](verticaldirectionestimate-swift.property.md): The estimation of a nearby object’s vertical position as it relates to the user’s device.
