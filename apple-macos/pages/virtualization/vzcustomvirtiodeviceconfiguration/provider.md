> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodeviceconfiguration/provider](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodeviceconfiguration/provider)

# provider (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The custom Virtio device provider.

## Declaration

```swift
var provider: VZCustomVirtioDeviceProvider? { get set }
```

<a id="discussion"></a>

## Discussion

This data defines how the virtual device is implemented.

## See Also

### Related Documentation

- [VZCustomVirtioDeviceDelegateProvider](../vzcustomvirtiodevicedelegateprovider.md): A custom Virtio Device provider for devices that implement a custom Virtio device configuration delegate.

# provider (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The custom Virtio device provider.

## Declaration

```objectivec
@property (strong, readwrite, nullable) VZCustomVirtioDeviceProvider * provider;
```

<a id="discussion"></a>

## Discussion

This data defines how the virtual device is implemented.

## See Also

### Related Documentation

- [VZCustomVirtioDeviceDelegateProvider](../vzcustomvirtiodevicedelegateprovider.md): A custom Virtio Device provider for devices that implement a custom Virtio device configuration delegate.
