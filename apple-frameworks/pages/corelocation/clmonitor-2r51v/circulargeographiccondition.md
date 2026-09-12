> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v/circulargeographiccondition](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/circulargeographiccondition)

# CLMonitor.CircularGeographicCondition

**Framework:** Core Location  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

A condition that describes a circular geographic area that a center point and radius define.

## Declaration

```swift
struct CircularGeographicCondition
```

<a id="overview"></a>

## Overview

Use `CLMonitor.CircularGeographicCondition` to monitor events that occur in a circular geographic condition that you describe.

## Topics

### Creating a circular geographic condition

- [init(center:radius:)](circulargeographiccondition/init%28center_radius_%29.md): Creates a circular geographic condition with a center point and radius you specify.

### Condition characteristics

- [center](circulargeographiccondition/center.md): The center point of the condition’s area.
- [radius](circulargeographiccondition/radius.md): The radius of the condition’s area, in meters.

## Relationships

### Conforms To

- [CLCondition](../clcondition-swift.protocol.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitor conditions

- [CLMonitor.BeaconIdentityCondition](beaconidentitycondition.md): A condition that describes the characteristics of a beacon.
