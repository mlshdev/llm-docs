> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbsuperspeedendpointcompaniondescriptor/bmattributes

# bmAttributes

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The attributes associated with the endpoint.

## Declaration

```objectivec
uint8_t bmAttributes;
```

## See Also

### Accessing the Descriptor Properties

- [bLength](blength.md): The length of this descriptor in bytes.
- [bDescriptorType](bdescriptortype.md): The type of the descriptor.
- [bMaxBurst](bmaxburst.md): The maximum number of packets the endpoint can send or receive in one burst.
- [wBytesPerInterval](wbytesperinterval.md): The total number of bytes this endpoint transfers during each service interval.
