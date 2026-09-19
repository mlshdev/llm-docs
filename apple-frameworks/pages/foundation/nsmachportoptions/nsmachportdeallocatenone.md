> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmachportoptions/nsmachportdeallocatenone

# NSMachPortDeallocateNone

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Do not remove any send or receive rights.

## Declaration

```objectivec
NSMachPortDeallocateNone
```

## See Also

### Constants

- [NSMachPortDeallocateReceiveRight](../nsmachport/options/deallocatereceiveright.md): Remove a receive right when the `NSMachPort` object is invalidated or destroyed.
- [NSMachPortDeallocateSendRight](../nsmachport/options/deallocatesendright.md): Deallocate a send right when the `NSMachPort` object is invalidated or destroyed.
