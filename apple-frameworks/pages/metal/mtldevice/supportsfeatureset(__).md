> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportsfeatureset(_:)](https://developer.apple.com/documentation/metal/mtldevice/supportsfeatureset(_:))

# supportsFeatureSet(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a Boolean value that indicates whether the GPU device supports a specific feature set.

> Use the [supportsFamily(\_:)](supportsfamily%28__%29.md) method instead if your app is running on an OS that supports that method.

## Declaration

```swift
func supportsFeatureSet(_ featureSet: MTLFeatureSet) -> Bool
```

## Parameters

- `featureSet`: An [MTLFeatureSet](../mtlfeatureset.md) instance.

## See Also

### Related Documentation

- [Detecting GPU features and Metal software versions](../detecting-gpu-features-and-metal-software-versions.md): Use the device object’s properties to determine how you perform tasks in Metal.

### Checking a GPU device’s feature support

- [supportsFamily(\_:)](supportsfamily%28__%29.md): Returns a Boolean value that indicates whether the GPU device supports the feature set of a specific GPU family.
- [MTLGPUFamily](../mtlgpufamily.md): Represents the functionality for families of GPUs.
- [MTLFeatureSet](../mtlfeatureset.md): Deprecated. The device feature sets that define specific platform, hardware, and software configurations.

# supportsFeatureSet: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a Boolean value that indicates whether the GPU device supports a specific feature set.

> Use the [supportsFamily:](supportsfamily%28__%29.md) method instead if your app is running on an OS that supports that method.

## Declaration

```objectivec
- (BOOL) supportsFeatureSet:(MTLFeatureSet) featureSet;
```

## Parameters

- `featureSet`: An [MTLFeatureSet](../mtlfeatureset.md) instance.

## See Also

### Related Documentation

- [Detecting GPU features and Metal software versions](../detecting-gpu-features-and-metal-software-versions.md): Use the device object’s properties to determine how you perform tasks in Metal.

### Checking a GPU device’s feature support

- [supportsFamily:](supportsfamily%28__%29.md): Returns a Boolean value that indicates whether the GPU device supports the feature set of a specific GPU family.
- [MTLGPUFamily](../mtlgpufamily.md): Represents the functionality for families of GPUs.
- [MTLFeatureSet](../mtlfeatureset.md): Deprecated. The device feature sets that define specific platform, hardware, and software configurations.
