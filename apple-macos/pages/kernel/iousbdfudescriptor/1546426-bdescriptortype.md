> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdfudescriptor/1546426-bdescriptortype](https://developer.apple.com/documentation/kernel/iousbdfudescriptor/1546426-bdescriptortype)

# bDescriptorType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

The type of the descriptor.

## Declaration

```objectivec
uint8_t bDescriptorType;
```

## See Also

### Getting the Properties

- [bLength](1546015-blength.md): The size of the descriptor.
- [bmAttributes](1546360-bmattributes.md): A bitmap encoding of supported device-level features.
- [wDetachTimeout](1546084-wdetachtimeout.md): The time in milliseconds that the device waits after receipt of a detach request.
- [wTransferSize](1546379-wtransfersize.md): The maximum number of bytes that the device can accept per control-write transaction.
