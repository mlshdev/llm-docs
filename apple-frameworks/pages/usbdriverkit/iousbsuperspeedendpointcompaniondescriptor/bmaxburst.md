> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbsuperspeedendpointcompaniondescriptor/bmaxburst](https://developer.apple.com/documentation/usbdriverkit/iousbsuperspeedendpointcompaniondescriptor/bmaxburst)

# bMaxBurst

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The maximum number of packets the endpoint can send or receive in one burst.

## Declaration

```objectivec
uint8_t bMaxBurst;
```

## See Also

### Accessing the Descriptor Properties

- [bLength](blength.md): The length of this descriptor in bytes.
- [bDescriptorType](bdescriptortype.md): The type of the descriptor.
- [bmAttributes](bmattributes.md): The attributes associated with the endpoint.
- [wBytesPerInterval](wbytesperinterval.md): The total number of bytes this endpoint transfers during each service interval.
