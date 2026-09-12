> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/property/variability](https://developer.apple.com/documentation/usdkit/usdprim/property/variability)

# USDPrim.Property.Variability

**Framework:** USDKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Whether a property’s value can change over time.

## Declaration

```swift
enum Variability
```

## Topics

### Enumeration Cases

- [USDPrim.Property.Variability.uniform](variability/uniform.md): Value must remain constant across all time samples.
- [USDPrim.Property.Variability.varying](variability/varying.md): Property can have different values at different times (animatable).

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [USDValueProtocol](../../usdvalueprotocol.md)
