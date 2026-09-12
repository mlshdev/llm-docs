> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetendpointdescriptoroptions/kiousbgetendpointdescriptorcurrentpolicy](https://developer.apple.com/documentation/usbdriverkit/iousbgetendpointdescriptoroptions/kiousbgetendpointdescriptorcurrentpolicy)

# kIOUSBGetEndpointDescriptorCurrentPolicy

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 19.0+

The descriptor controlling the current endpoint policy.

## Declaration

```objectivec
kIOUSBGetEndpointDescriptorCurrentPolicy
```

<a id="Discussion"></a>

## Discussion

Specify this option when you want the include descriptor changes you made using the [AdjustPipe](../iousbhostpipe/adjustpipe.md) method.

## See Also

### Getting the Descriptor Options

- [kIOUSBGetEndpointDescriptorOriginal](kiousbgetendpointdescriptororiginal.md): The original descriptor used to create the pipe.
