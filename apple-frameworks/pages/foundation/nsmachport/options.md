> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachport/options](https://developer.apple.com/documentation/foundation/nsmachport/options)

# NSMachPort.Options (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Used to remove access rights to a mach port when the `NSMachPort` object is invalidated or destroyed.

## Declaration

```swift
struct Options
```

## Topics

### Constants

- [deallocateReceiveRight](options/deallocatereceiveright.md): Remove a receive right when the `NSMachPort` object is invalidated or destroyed.
- [deallocateSendRight](options/deallocatesendright.md): Deallocate a send right when the `NSMachPort` object is invalidated or destroyed.

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

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

# NSMachPortOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Used to remove access rights to a mach port when the `NSMachPort` object is invalidated or destroyed.

## Declaration

```objectivec
enum NSMachPortOptions : NSUInteger;
```

## Topics

### Constants

- [NSMachPortDeallocateNone](../nsmachportoptions/nsmachportdeallocatenone.md): Do not remove any send or receive rights.
- [NSMachPortDeallocateReceiveRight](options/deallocatereceiveright.md): Remove a receive right when the `NSMachPort` object is invalidated or destroyed.
- [NSMachPortDeallocateSendRight](options/deallocatesendright.md): Deallocate a send right when the `NSMachPort` object is invalidated or destroyed.
