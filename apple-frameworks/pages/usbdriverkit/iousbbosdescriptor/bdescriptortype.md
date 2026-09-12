> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbbosdescriptor/bdescriptortype](https://developer.apple.com/documentation/usbdriverkit/iousbbosdescriptor/bdescriptortype)

# bDescriptorType

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The type of the descriptor.

## Declaration

```objectivec
uint8_t bDescriptorType;
```

<a id="Discussion"></a>

## Discussion

The value in this field is always [kIOUSBDescriptorTypeBOS](../tiousbdescriptortype/kiousbdescriptortypebos.md).

## See Also

### Accessing the Descriptor Properties

- [bLength](blength.md): The size of the descriptor in bytes.
- [wTotalLength](wtotallength.md): The length, in bytes, of the descriptor and all of its subdescriptors.
- [bNumDeviceCaps](bnumdevicecaps.md): The number of separate device capability descriptors in the binary object store.
