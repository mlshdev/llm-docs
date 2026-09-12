> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbgetendpointdescriptoroptions/kiousbgetendpointdescriptorcurrentpolicy](https://developer.apple.com/documentation/kernel/iousbgetendpointdescriptoroptions/kiousbgetendpointdescriptorcurrentpolicy)

# kIOUSBGetEndpointDescriptorCurrentPolicy

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.15+

The descriptor controlling the current endpoint policy.

## Declaration

```objectivec
kIOUSBGetEndpointDescriptorCurrentPolicy
```

<a id="discussion"></a>

## Discussion

Specify this option when you want to include descriptor changes you made using the [AdjustPipe](../iousbhostpipe/3294684-adjustpipe.md) method.

## See Also

### Getting the Options

- [kIOUSBGetEndpointDescriptorOriginal](kiousbgetendpointdescriptororiginal.md): The original descriptor that the system uses to create the pipe.
