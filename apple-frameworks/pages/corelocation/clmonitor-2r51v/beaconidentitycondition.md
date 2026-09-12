> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v/beaconidentitycondition](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/beaconidentitycondition)

# CLMonitor.BeaconIdentityCondition

**Framework:** Core Location  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 14.0+

A condition that describes the characteristics of a beacon.

## Declaration

```swift
struct BeaconIdentityCondition
```

<a id="overview"></a>

## Overview

Use `CLMonitor.BeaconIdentityCondition` to observe events from beacons based on any combination on their UUID, major, or minor characteristics.

## Topics

### Creating a beacon identity condition

- [init(uuid:)](beaconidentitycondition/init%28uuid_%29.md): Creates a beacon identity condition with the UUID characteristic only, and wildcard values for the major and minor characteristics.
- [init(uuid:major:)](beaconidentitycondition/init%28uuid_major_%29.md): Creates a beacon identity condition with UUID and major characteristics, and a wildcard for the minor characteristic.
- [init(uuid:major:minor:)](beaconidentitycondition/init%28uuid_major_minor_%29.md): Creates a beacon identity condition with UUID, and major and minor characteristics.

### Instance Properties

- [major](beaconidentitycondition/major.md)
- [minor](beaconidentitycondition/minor.md)
- [uuid](beaconidentitycondition/uuid.md)

## Relationships

### Conforms To

- [CLCondition](../clcondition-swift.protocol.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitor conditions

- [CLMonitor.CircularGeographicCondition](circulargeographiccondition.md): A condition that describes a circular geographic area that a center point and radius define.
