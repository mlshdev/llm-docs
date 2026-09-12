> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostiosource/endpointaddress](https://developer.apple.com/documentation/iousbhost/iousbhostiosource/endpointaddress)

# endpointAddress (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The pipe or stream’s endpoint address.

## Declaration

```swift
var endpointAddress: Int { get }
```

## See Also

### Obtaining Device Information

- [deviceAddress](deviceaddress.md): The device’s bus address.
- [hostInterface](hostinterface.md): The interface for the input/output source.

# endpointAddress (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The pipe or stream’s endpoint address.

## Declaration

```objectivec
@property (readonly) NSUInteger endpointAddress;
```

## See Also

### Obtaining Device Information

- [deviceAddress](deviceaddress.md): The device’s bus address.
- [hostInterface](hostinterface.md): The interface for the input/output source.
