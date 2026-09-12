> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clproximity](https://developer.apple.com/documentation/corelocation/clproximity)

# CLProximity (Swift)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Constants that reflect the relative distance to a beacon.

## Declaration

```swift
enum CLProximity
```

## Topics

### Proximity Values

- [CLProximity.unknown](clproximity/unknown.md): The proximity of the beacon could not be determined.
- [CLProximity.immediate](clproximity/immediate.md): The beacon is in the user’s immediate vicinity.
- [CLProximity.near](clproximity/near.md): The beacon is relatively close to the user.
- [CLProximity.far](clproximity/far.md): The beacon is far away.

### Initializers

- [init(rawValue:)](clproximity/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining the distance to the beacon

- [proximity](clbeacon/proximity.md): The relative distance to the beacon.
- [accuracy](clbeacon/accuracy.md): The accuracy of the proximity value, measured in meters from the beacon.
- [rssi](clbeacon/rssi.md): The received signal strength of the beacon, measured in decibels.

# CLProximity (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Constants that reflect the relative distance to a beacon.

## Declaration

```objectivec
enum CLProximity : NSInteger;
```

## Topics

### Proximity Values

- [CLProximityUnknown](clproximity/unknown.md): The proximity of the beacon could not be determined.
- [CLProximityImmediate](clproximity/immediate.md): The beacon is in the user’s immediate vicinity.
- [CLProximityNear](clproximity/near.md): The beacon is relatively close to the user.
- [CLProximityFar](clproximity/far.md): The beacon is far away.

## See Also

### Determining the distance to the beacon

- [proximity](clbeacon/proximity.md): The relative distance to the beacon.
- [accuracy](clbeacon/accuracy.md): The accuracy of the proximity value, measured in meters from the beacon.
- [rssi](clbeacon/rssi.md): The received signal strength of the beacon, measured in decibels.
