> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostfreedescriptor-2hkne](https://developer.apple.com/documentation/usbdriverkit/iousbhostfreedescriptor-2hkne)

# IOUSBHostFreeDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Releases the specified device descriptor.

## Declaration

```objectivec
void IOUSBHostFreeDescriptor(const IOUSBDeviceDescriptor *descriptor);
```

## Parameters

- `descriptor`: The descriptor to release.

## See Also

### Disposing of Descriptors

- [IOUSBHostFreeDescriptor](iousbhostfreedescriptor-2r7k.md): Releases the specified configuration descriptor.
- [IOUSBHostFreeDescriptor](iousbhostfreedescriptor-5j4pp.md): Releases the specified BOS descriptor.
- [IOUSBHostFreeDescriptor](iousbhostfreedescriptor-3fve6.md): Releases the specified string descriptor.
