> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodeviceconfiguration/optionalfeatures](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodeviceconfiguration/optionalfeatures)

# optionalFeatures (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The set of optional features that the device offers.

## Declaration

```swift
var optionalFeatures: VZVirtioFeatureSet { get }
```

<a id="discussion"></a>

## Discussion

The optional features are the set of features that the guest driver may or may not accept, see [negotiatedFeatures](../vzcustomvirtiodevice/negotiatedfeatures.md) for the set of features that the guest accepts. A few feature bits are always set internally by default for optimal performance.

# optionalFeatures (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The set of optional features that the device offers.

## Declaration

```objectivec
@property (strong, readonly) VZVirtioFeatureSet * optionalFeatures;
```

<a id="discussion"></a>

## Discussion

The optional features are the set of features that the guest driver may or may not accept, see [negotiatedFeatures](../vzcustomvirtiodevice/negotiatedfeatures.md) for the set of features that the guest accepts. A few feature bits are always set internally by default for optimal performance.
