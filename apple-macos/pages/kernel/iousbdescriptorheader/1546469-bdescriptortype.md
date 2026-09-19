> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbdescriptorheader/1546469-bdescriptortype

# bDescriptorType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The type of the descriptor.

## Declaration

```objectivec
uint8_t bDescriptorType;
```

<a id="discussion"></a>

## Discussion

For a list of possible values, see [tIOUSBDescriptorType](https://developer.apple.com/documentation/iokit/tiousbdescriptortype).

## See Also

### Getting the Descriptor Properties

- [bLength](1546043-blength.md): The size of the descriptor.
