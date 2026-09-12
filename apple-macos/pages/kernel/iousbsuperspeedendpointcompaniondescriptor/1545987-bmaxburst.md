> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbsuperspeedendpointcompaniondescriptor/1545987-bmaxburst](https://developer.apple.com/documentation/kernel/iousbsuperspeedendpointcompaniondescriptor/1545987-bmaxburst)

# bMaxBurst

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The maximum number of packets the endpoint can send or receive as part of a burst.

## Declaration

```objectivec
uint8_t bMaxBurst;
```

## See Also

### Getting the Properties

- [bLength](1546150-blength.md): The size of the descriptor.
- [bDescriptorType](1546448-bdescriptortype.md): The type of the descriptor.
- [bmAttributes](1545944-bmattributes.md): A bitmap encoding of supported device-level features.
- [wBytesPerInterval](1546415-wbytesperinterval.md): The total number of bytes this endpoint transfers every service interval.
