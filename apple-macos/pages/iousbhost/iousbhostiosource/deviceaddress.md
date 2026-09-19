> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iousbhost/iousbhostiosource/deviceaddress

# deviceAddress (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The device’s bus address.

## Declaration

```swift
var deviceAddress: Int { get }
```

## See Also

### Obtaining Device Information

- [endpointAddress](endpointaddress.md): The pipe or stream’s endpoint address.
- [hostInterface](hostinterface.md): The interface for the input/output source.

# deviceAddress (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The device’s bus address.

## Declaration

```objectivec
@property (readonly) NSUInteger deviceAddress;
```

## See Also

### Obtaining Device Information

- [endpointAddress](endpointaddress.md): The pipe or stream’s endpoint address.
- [hostInterface](hostinterface.md): The interface for the input/output source.
