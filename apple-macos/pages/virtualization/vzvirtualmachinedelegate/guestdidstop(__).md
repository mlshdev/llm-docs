> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachinedelegate/guestdidstop(_:)](https://developer.apple.com/documentation/virtualization/vzvirtualmachinedelegate/guestdidstop(_:))

# guestDidStop(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Tells the delegate that the guest operating system stopped the VM.

## Declaration

```swift
optional func guestDidStop(_ virtualMachine: VZVirtualMachine)
```

## Parameters

- `virtualMachine`: The VM that called the delegate method.

## See Also

### Stopping the VM

- [virtualMachine(\_:didStopWithError:)](virtualmachine%28__didstopwitherror_%29.md): Tells the delegate that the VM stopped because of an error.

# guestDidStopVirtualMachine: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Tells the delegate that the guest operating system stopped the VM.

## Declaration

```objectivec
- (void) guestDidStopVirtualMachine:(VZVirtualMachine *) virtualMachine;
```

## Parameters

- `virtualMachine`: The VM that called the delegate method.

## See Also

### Stopping the VM

- [virtualMachine:didStopWithError:](virtualmachine%28__didstopwitherror_%29.md): Tells the delegate that the VM stopped because of an error.
