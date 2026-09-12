> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbendpointdescriptor/1546209-binterval](https://developer.apple.com/documentation/kernel/iousbendpointdescriptor/1546209-binterval)

# bInterval

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The interval to use when polling the endpoint for data transfers.

## Declaration

```objectivec
uint8_t bInterval;
```

<a id="discussion"></a>

## Discussion

Specify the value in frames or microframes, depending on the device’s speed.

## See Also

### Getting the Properties

- [bLength](1546156-blength.md): The size of the descriptor.
- [bDescriptorType](1545995-bdescriptortype.md): The type of the descriptor.
- [bEndpointAddress](1546243-bendpointaddress.md): The address of the endpoint.
- [bmAttributes](1546048-bmattributes.md): The attributes of the endpoint.
- [wMaxPacketSize](1546305-wmaxpacketsize.md): The maximum packet size that the endpoint supports.
