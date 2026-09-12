> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgraphicsdevice/displays](https://developer.apple.com/documentation/virtualization/vzgraphicsdevice/displays)

# displays (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The list of graphics displays configured for this graphics device.

## Declaration

```swift
var displays: [VZGraphicsDisplay] { get }
```

<a id="Discussion"></a>

## Discussion

This is a list of the graphics displays configured on the graphics device configuration.

## See Also

### Related Documentation

- [VZMacGraphicsDisplayConfiguration](../vzmacgraphicsdisplayconfiguration.md): The configuration for a Mac graphics device.
- [VZVirtioGraphicsScanoutConfiguration](../vzvirtiographicsscanoutconfiguration.md): The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.

# displays (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The list of graphics displays configured for this graphics device.

## Declaration

```objectivec
@property (copy, readonly) NSArray<VZGraphicsDisplay *> * displays;
```

<a id="Discussion"></a>

## Discussion

This is a list of the graphics displays configured on the graphics device configuration.

## See Also

### Related Documentation

- [VZMacGraphicsDisplayConfiguration](../vzmacgraphicsdisplayconfiguration.md): The configuration for a Mac graphics device.
- [VZVirtioGraphicsScanoutConfiguration](../vzvirtiographicsscanoutconfiguration.md): The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.
