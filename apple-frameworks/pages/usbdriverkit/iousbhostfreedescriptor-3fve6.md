> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostfreedescriptor-3fve6](https://developer.apple.com/documentation/usbdriverkit/iousbhostfreedescriptor-3fve6)

# IOUSBHostFreeDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Releases the specified string descriptor.

## Declaration

```objectivec
void IOUSBHostFreeDescriptor(const IOUSBStringDescriptor *descriptor);
```

## Parameters

- `descriptor`: The descriptor to release.

## See Also

### Disposing of Descriptors

- [IOUSBHostFreeDescriptor](iousbhostfreedescriptor-2hkne.md): Releases the specified device descriptor.
- [IOUSBHostFreeDescriptor](iousbhostfreedescriptor-2r7k.md): Releases the specified configuration descriptor.
- [IOUSBHostFreeDescriptor](iousbhostfreedescriptor-5j4pp.md): Releases the specified BOS descriptor.
