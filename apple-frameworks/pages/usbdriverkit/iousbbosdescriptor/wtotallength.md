> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbbosdescriptor/wtotallength

# wTotalLength

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The length, in bytes, of the descriptor and all of its subdescriptors.

## Declaration

```objectivec
uint16_t wTotalLength;
```

## See Also

### Accessing the Descriptor Properties

- [bLength](blength.md): The size of the descriptor in bytes.
- [bDescriptorType](bdescriptortype.md): The type of the descriptor.
- [bNumDeviceCaps](bnumdevicecaps.md): The number of separate device capability descriptors in the binary object store.
