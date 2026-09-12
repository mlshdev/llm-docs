> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbsuperspeedendpointcompaniondescriptor/1546448-bdescriptortype](https://developer.apple.com/documentation/kernel/iousbsuperspeedendpointcompaniondescriptor/1546448-bdescriptortype)

# bDescriptorType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The type of the descriptor.

## Declaration

```objectivec
uint8_t bDescriptorType;
```

## See Also

### Getting the Properties

- [bLength](1546150-blength.md): The size of the descriptor.
- [bMaxBurst](1545987-bmaxburst.md): The maximum number of packets the endpoint can send or receive as part of a burst.
- [bmAttributes](1545944-bmattributes.md): A bitmap encoding of supported device-level features.
- [wBytesPerInterval](1546415-wbytesperinterval.md): The total number of bytes this endpoint transfers every service interval.
