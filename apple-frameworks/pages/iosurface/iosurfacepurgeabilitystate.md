> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iosurface/iosurfacepurgeabilitystate](https://developer.apple.com/documentation/iosurface/iosurfacepurgeabilitystate)

# IOSurfacePurgeabilityState (Swift)

**Framework:** IOSurface  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
struct IOSurfacePurgeabilityState
```

## Topics

### Initializers

- [init(rawValue:)](iosurfacepurgeabilitystate/init%28rawvalue_%29.md)

### Type Properties

- [purgeableEmpty](iosurfacepurgeabilitystate/purgeableempty.md)
- [purgeableKeepCurrent](iosurfacepurgeabilitystate/purgeablekeepcurrent.md)
- [purgeableVolatile](iosurfacepurgeabilitystate/purgeablevolatile.md)

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

## See Also

### Structures

- [IOSurfaceLockOptions](iosurfacelockoptions.md)
- [IOSurfacePropertyKey](iosurfacepropertykey.md)

# IOSurfacePurgeabilityState (Objective-C)

**Framework:** IOSurface  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
enum IOSurfacePurgeabilityState : uint32_t;
```

## Topics

### Type Properties

- [kIOSurfacePurgeableEmpty](iosurfacepurgeabilitystate/purgeableempty.md)
- [kIOSurfacePurgeableKeepCurrent](iosurfacepurgeabilitystate/purgeablekeepcurrent.md)
- [kIOSurfacePurgeableVolatile](iosurfacepurgeabilitystate/purgeablevolatile.md)

### Constants

- [kIOSurfacePurgeableNonVolatile](iosurfacepurgeabilitystate/kiosurfacepurgeablenonvolatile.md)

## See Also

### Structures

- [IOSurfaceLockOptions](iosurfacelockoptions.md)
- [IOSurfacePropertyKey](iosurfacepropertykey.md)
