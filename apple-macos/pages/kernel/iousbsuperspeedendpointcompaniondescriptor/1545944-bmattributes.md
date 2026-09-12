> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbsuperspeedendpointcompaniondescriptor/1545944-bmattributes](https://developer.apple.com/documentation/kernel/iousbsuperspeedendpointcompaniondescriptor/1545944-bmattributes)

# bmAttributes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A bitmap encoding of supported device-level features.

## Declaration

```objectivec
uint8_t bmAttributes;
```

## See Also

### Getting the Properties

- [bLength](1546150-blength.md): The size of the descriptor.
- [bDescriptorType](1546448-bdescriptortype.md): The type of the descriptor.
- [bMaxBurst](1545987-bmaxburst.md): The maximum number of packets the endpoint can send or receive as part of a burst.
- [wBytesPerInterval](1546415-wbytesperinterval.md): The total number of bytes this endpoint transfers every service interval.
