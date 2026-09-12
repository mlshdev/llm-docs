> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportsfamily(_:)](https://developer.apple.com/documentation/metal/mtldevice/supportsfamily(_:))

# supportsFamily(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the GPU device supports the feature set of a specific GPU family.

## Declaration

```swift
func supportsFamily(_ gpuFamily: MTLGPUFamily) -> Bool
```

## Parameters

- `gpuFamily`: An [MTLGPUFamily](../mtlgpufamily.md) instance.

## Mentioned In

- [Improving your game’s graphics performance and settings](../improving-your-games-graphics-performance-and-settings.md)
- [Choosing a resource storage mode for Intel and AMD GPUs](../choosing-a-resource-storage-mode-for-intel-and-amd-gpus.md)
- [Setting resource storage modes](../setting-resource-storage-modes.md)

## See Also

### Checking a GPU device’s feature support

- [MTLGPUFamily](../mtlgpufamily.md): Represents the functionality for families of GPUs.
- [supportsFeatureSet(\_:)](supportsfeatureset%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the GPU device supports a specific feature set.
- [MTLFeatureSet](../mtlfeatureset.md): Deprecated. The device feature sets that define specific platform, hardware, and software configurations.

# supportsFamily: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the GPU device supports the feature set of a specific GPU family.

## Declaration

```objectivec
- (BOOL) supportsFamily:(MTLGPUFamily) gpuFamily;
```

## Parameters

- `gpuFamily`: An [MTLGPUFamily](../mtlgpufamily.md) instance.

## Mentioned In

- [Improving your game’s graphics performance and settings](../improving-your-games-graphics-performance-and-settings.md)
- [Choosing a resource storage mode for Intel and AMD GPUs](../choosing-a-resource-storage-mode-for-intel-and-amd-gpus.md)
- [Setting resource storage modes](../setting-resource-storage-modes.md)

## See Also

### Checking a GPU device’s feature support

- [MTLGPUFamily](../mtlgpufamily.md): Represents the functionality for families of GPUs.
- [supportsFeatureSet:](supportsfeatureset%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the GPU device supports a specific feature set.
- [MTLFeatureSet](../mtlfeatureset.md): Deprecated. The device feature sets that define specific platform, hardware, and software configurations.
