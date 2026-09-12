> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbsuperspeedendpointcompaniondescriptor/wbytesperinterval](https://developer.apple.com/documentation/usbdriverkit/iousbsuperspeedendpointcompaniondescriptor/wbytesperinterval)

# wBytesPerInterval

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The total number of bytes this endpoint transfers during each service interval.

## Declaration

```objectivec
uint16_t wBytesPerInterval;
```

## See Also

### Accessing the Descriptor Properties

- [bLength](blength.md): The length of this descriptor in bytes.
- [bDescriptorType](bdescriptortype.md): The type of the descriptor.
- [bMaxBurst](bmaxburst.md): The maximum number of packets the endpoint can send or receive in one burst.
- [bmAttributes](bmattributes.md): The attributes associated with the endpoint.
