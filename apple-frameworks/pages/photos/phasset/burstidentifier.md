> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/burstidentifier](https://developer.apple.com/documentation/photos/phasset/burstidentifier)

# burstIdentifier (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The unique identifier shared by photo assets from the same burst sequence.

## Declaration

```swift
var burstIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

When the user takes a sequence of photos in burst mode with the Camera app (on supported devices), the Photos app user interface groups the resulting assets together. The Photos framework identifies a burst sequence as a group of assets sharing the same burst identifier string.

## See Also

### Related Documentation

- [fetchAssets(withBurstIdentifier:options:)](fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.

### Working with Burst Photo Assets

- [burstSelectionTypes](burstselectiontypes.md): The selection type of the asset in a burst photo sequence.
- [PHAssetBurstSelectionType](../phassetburstselectiontype.md): Bit mask values indicating whether and how an asset is marked as a favorite member of a burst photo sequence. Used by the [burstSelectionTypes](burstselectiontypes.md) property.
- [representsBurst](representsburst.md): A Boolean value that indicates whether the asset is the representative photo from a burst photo sequence.

# burstIdentifier (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The unique identifier shared by photo assets from the same burst sequence.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * burstIdentifier;
```

<a id="Discussion"></a>

## Discussion

When the user takes a sequence of photos in burst mode with the Camera app (on supported devices), the Photos app user interface groups the resulting assets together. The Photos framework identifies a burst sequence as a group of assets sharing the same burst identifier string.

## See Also

### Related Documentation

- [fetchAssetsWithBurstIdentifier:options:](fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.

### Working with Burst Photo Assets

- [burstSelectionTypes](burstselectiontypes.md): The selection type of the asset in a burst photo sequence.
- [PHAssetBurstSelectionType](../phassetburstselectiontype.md): Bit mask values indicating whether and how an asset is marked as a favorite member of a burst photo sequence. Used by the [burstSelectionTypes](burstselectiontypes.md) property.
- [representsBurst](representsburst.md): A Boolean value that indicates whether the asset is the representative photo from a burst photo sequence.
