> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachinedelegate](https://developer.apple.com/documentation/virtualization/vzvirtualmachinedelegate)

# VZVirtualMachineDelegate (Swift)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 11.0+

The methods you use to respond to changes in the state of the VM.

## Declaration

```swift
protocol VZVirtualMachineDelegate : NSObjectProtocol
```

## Topics

### Stopping the VM

- [guestDidStop(\_:)](vzvirtualmachinedelegate/guestdidstop%28__%29.md): Tells the delegate that the guest operating system stopped the VM.
- [virtualMachine(\_:didStopWithError:)](vzvirtualmachinedelegate/virtualmachine%28__didstopwitherror_%29.md): Tells the delegate that the VM stopped because of an error.

### Responding to network device errors

- [virtualMachine(\_:networkDevice:attachmentWasDisconnectedWithError:)](vzvirtualmachinedelegate/virtualmachine%28__networkdevice_attachmentwasdisconnectedwitherror_%29.md): The method the framework calls when an error causes a VM’s network attachment to disconnect.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to a stopped VM

- [delegate](vzvirtualmachine/delegate.md): A custom object you use to determine when the VM stops.

# VZVirtualMachineDelegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 11.0+

The methods you use to respond to changes in the state of the VM.

## Declaration

```objectivec
@protocol VZVirtualMachineDelegate <NSObject>
```

## Topics

### Stopping the VM

- [guestDidStopVirtualMachine:](vzvirtualmachinedelegate/guestdidstop%28__%29.md): Tells the delegate that the guest operating system stopped the VM.
- [virtualMachine:didStopWithError:](vzvirtualmachinedelegate/virtualmachine%28__didstopwitherror_%29.md): Tells the delegate that the VM stopped because of an error.

### Responding to network device errors

- [virtualMachine:networkDevice:attachmentWasDisconnectedWithError:](vzvirtualmachinedelegate/virtualmachine%28__networkdevice_attachmentwasdisconnectedwitherror_%29.md): The method the framework calls when an error causes a VM’s network attachment to disconnect.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to a stopped VM

- [delegate](vzvirtualmachine/delegate.md): A custom object you use to determine when the VM stops.
