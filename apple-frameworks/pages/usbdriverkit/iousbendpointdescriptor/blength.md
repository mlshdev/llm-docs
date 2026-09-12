> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbendpointdescriptor/blength](https://developer.apple.com/documentation/usbdriverkit/iousbendpointdescriptor/blength)

# bLength

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The length of the descriptor in bytes.

## Declaration

```objectivec
uint8_t bLength;
```

## See Also

### Accessing the Descriptor Properties

- [bDescriptorType](bdescriptortype.md): The type of the descriptor.
- [bEndpointAddress](bendpointaddress.md): The address of the endpoint.
- [bmAttributes](bmattributes.md): The attributes of the endpoint.
- [wMaxPacketSize](wmaxpacketsize.md): The maximum packet size that the endpoint supports.
- [bInterval](binterval.md): The interval to use when polling the endpoint for data transfers, specified in frames or microframes depending on the device’s speed.
