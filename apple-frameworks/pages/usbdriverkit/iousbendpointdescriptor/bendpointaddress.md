> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbendpointdescriptor/bendpointaddress](https://developer.apple.com/documentation/usbdriverkit/iousbendpointdescriptor/bendpointaddress)

# bEndpointAddress

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The address of the endpoint.

## Declaration

```objectivec
uint8_t bEndpointAddress;
```

<a id="Discussion"></a>

## Discussion

The address includes information about the direction of the endpoint.

## See Also

### Accessing the Descriptor Properties

- [bLength](blength.md): The length of the descriptor in bytes.
- [bDescriptorType](bdescriptortype.md): The type of the descriptor.
- [bmAttributes](bmattributes.md): The attributes of the endpoint.
- [wMaxPacketSize](wmaxpacketsize.md): The maximum packet size that the endpoint supports.
- [bInterval](binterval.md): The interval to use when polling the endpoint for data transfers, specified in frames or microframes depending on the device’s speed.
