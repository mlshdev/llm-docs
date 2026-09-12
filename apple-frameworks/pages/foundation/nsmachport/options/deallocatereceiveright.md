> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachport/options/deallocatereceiveright](https://developer.apple.com/documentation/foundation/nsmachport/options/deallocatereceiveright)

# deallocateReceiveRight (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Remove a receive right when the `NSMachPort` object is invalidated or destroyed.

## Declaration

```swift
static var deallocateReceiveRight: NSMachPort.Options { get }
```

## See Also

### Constants

- [deallocateSendRight](deallocatesendright.md): Deallocate a send right when the `NSMachPort` object is invalidated or destroyed.

# NSMachPortDeallocateReceiveRight (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Remove a receive right when the `NSMachPort` object is invalidated or destroyed.

## Declaration

```objectivec
NSMachPortDeallocateReceiveRight
```

## See Also

### Constants

- [NSMachPortDeallocateNone](../../nsmachportoptions/nsmachportdeallocatenone.md): Do not remove any send or receive rights.
- [NSMachPortDeallocateSendRight](deallocatesendright.md): Deallocate a send right when the `NSMachPort` object is invalidated or destroyed.
