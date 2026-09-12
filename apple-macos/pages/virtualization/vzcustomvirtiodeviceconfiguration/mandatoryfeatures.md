> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodeviceconfiguration/mandatoryfeatures](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodeviceconfiguration/mandatoryfeatures)

# mandatoryFeatures (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The set of mandatory features that the device offers and the guest must accept.

## Declaration

```swift
var mandatoryFeatures: VZVirtioFeatureSet { get }
```

<a id="discussion"></a>

## Discussion

The mandatory features are the set of features that the device offers and the guest must accept. The framework won’t successfully initialize the device if the guest driver fails to accept this set of features. The feature bit `VIRTIO_F_VERSION_1` is always set to `1` internally by default.

# mandatoryFeatures (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The set of mandatory features that the device offers and the guest must accept.

## Declaration

```objectivec
@property (strong, readonly) VZVirtioFeatureSet * mandatoryFeatures;
```

<a id="discussion"></a>

## Discussion

The mandatory features are the set of features that the device offers and the guest must accept. The framework won’t successfully initialize the device if the guest driver fails to accept this set of features. The feature bit `VIRTIO_F_VERSION_1` is always set to `1` internally by default.
