> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmachardwaremodel/issupported](https://developer.apple.com/documentation/virtualization/vzmachardwaremodel/issupported)

# isSupported (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates whether the host supports this hardware model.

## Declaration

```swift
var isSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this hardware model isn’t supported by the host, the [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md) won’t validate.

The validation error of the `VZVirtualMachineConfiguration` provides more information about why the hardware model isn’t supported.

## See Also

### Configuring the hardware model

- [dataRepresentation](datarepresentation.md): Returns the opaque data representation of the hardware model.

# supported (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates whether the host supports this hardware model.

## Declaration

```objectivec
@property (readonly, getter=isSupported) BOOL supported;
```

<a id="Discussion"></a>

## Discussion

If this hardware model isn’t supported by the host, the [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md) won’t validate.

The validation error of the `VZVirtualMachineConfiguration` provides more information about why the hardware model isn’t supported.

## See Also

### Configuring the hardware model

- [dataRepresentation](datarepresentation.md): Returns the opaque data representation of the hardware model.
