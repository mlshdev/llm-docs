> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbhostfreedescriptor-3fve6

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
