> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachinedelegate/virtualmachine(_:didstopwitherror:)](https://developer.apple.com/documentation/virtualization/vzvirtualmachinedelegate/virtualmachine(_:didstopwitherror:))

# virtualMachine(\_:didStopWithError:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Tells the delegate that the VM stopped because of an error.

## Declaration

```swift
optional func virtualMachine(_ virtualMachine: VZVirtualMachine, didStopWithError error: any Error)
```

## Parameters

- `virtualMachine`: The VM that called the delegate method.
- `error`: The error.

## See Also

### Stopping the VM

- [guestDidStop(\_:)](guestdidstop%28__%29.md): Tells the delegate that the guest operating system stopped the VM.

# virtualMachine:didStopWithError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Tells the delegate that the VM stopped because of an error.

## Declaration

```objectivec
- (void) virtualMachine:(VZVirtualMachine *) virtualMachine didStopWithError:(NSError *) error;
```

## Parameters

- `virtualMachine`: The VM that called the delegate method.
- `error`: The error.

## See Also

### Stopping the VM

- [guestDidStopVirtualMachine:](guestdidstop%28__%29.md): Tells the delegate that the guest operating system stopped the VM.
