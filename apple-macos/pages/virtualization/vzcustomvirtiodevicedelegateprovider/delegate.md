> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegateprovider/delegate

# delegate (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The delegate object that implements the device.

## Declaration

```swift
weak var delegate: (any VZCustomVirtioDeviceConfigurationDelegate)? { get }
```

# delegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The delegate object that implements the device.

## Declaration

```objectivec
@property (weak, readonly) id<VZCustomVirtioDeviceConfigurationDelegate> delegate;
```
