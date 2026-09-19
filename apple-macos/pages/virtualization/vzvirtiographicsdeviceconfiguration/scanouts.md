> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzvirtiographicsdeviceconfiguration/scanouts

# scanouts (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The array of output devices.

## Declaration

```swift
var scanouts: [VZVirtioGraphicsScanoutConfiguration] { get set }
```

## See Also

### Instance properties

- [VZVirtioGraphicsScanoutConfiguration](../vzvirtiographicsscanoutconfiguration.md): The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.

# scanouts (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The array of output devices.

## Declaration

```objectivec
@property (copy) NSArray<VZVirtioGraphicsScanoutConfiguration *> * scanouts;
```

## See Also

### Instance properties

- [VZVirtioGraphicsScanoutConfiguration](../vzvirtiographicsscanoutconfiguration.md): The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.
