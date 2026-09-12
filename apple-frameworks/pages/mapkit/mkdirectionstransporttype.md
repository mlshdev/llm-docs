> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirectionstransporttype](https://developer.apple.com/documentation/mapkit/mkdirectionstransporttype)

# MKDirectionsTransportType (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Constants that specify the type of conveyance to use.

## Declaration

```swift
struct MKDirectionsTransportType
```

## Topics

### Transport types

- [any](mkdirectionstransporttype/any.md): Directions suitable for any transportation option.
- [automobile](mkdirectionstransporttype/automobile.md): Directions suitable for use while driving.
- [cycling](mkdirectionstransporttype/cycling.md): Directions suitable for use while cycling.
- [transit](mkdirectionstransporttype/transit.md): Directions suitable for public transportation.
- [walking](mkdirectionstransporttype/walking.md): Directions suitable for a pedestrian.

### Creating direction transport types

- [init(rawValue:)](mkdirectionstransporttype/init%28rawvalue_%29.md): Creates a direction transport type using a raw unsigned integer value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# MKDirectionsTransportType (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Constants that specify the type of conveyance to use.

## Declaration

```objectivec
enum MKDirectionsTransportType : NSUInteger;
```

## Topics

### Transport types

- [MKDirectionsTransportTypeAny](mkdirectionstransporttype/any.md): Directions suitable for any transportation option.
- [MKDirectionsTransportTypeAutomobile](mkdirectionstransporttype/automobile.md): Directions suitable for use while driving.
- [MKDirectionsTransportTypeCycling](mkdirectionstransporttype/cycling.md): Directions suitable for use while cycling.
- [MKDirectionsTransportTypeTransit](mkdirectionstransporttype/transit.md): Directions suitable for public transportation.
- [MKDirectionsTransportTypeWalking](mkdirectionstransporttype/walking.md): Directions suitable for a pedestrian.
