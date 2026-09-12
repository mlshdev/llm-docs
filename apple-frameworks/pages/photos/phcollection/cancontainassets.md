> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollection/cancontainassets](https://developer.apple.com/documentation/photos/phcollection/cancontainassets)

# canContainAssets (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the collection can contain assets.

## Declaration

```swift
var canContainAssets: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this value is `true`, the collection is a [PHAssetCollection](../phassetcollection.md) object; otherwise, `false`. For details on asset collections, see [PHAssetCollection](../phassetcollection.md).

## See Also

### Determining Collection Capabilities

- [canContainCollections](cancontaincollections.md): A Boolean value indicating whether the collection can contain other collections.
- [canPerform(\_:)](canperform%28__%29.md): Returns whether the collection supports the specified editing operation.
- [PHCollectionEditOperation](../phcollectioneditoperation.md): Values identifying possible actions that a collection can support, used by the [canPerform(\_:)](canperform%28__%29.md) method.

# canContainAssets (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the collection can contain assets.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL canContainAssets;
```

<a id="Discussion"></a>

## Discussion

If this value is `true`, the collection is a [PHAssetCollection](../phassetcollection.md) object; otherwise, `false`. For details on asset collections, see [PHAssetCollection](../phassetcollection.md).

## See Also

### Determining Collection Capabilities

- [canContainCollections](cancontaincollections.md): A Boolean value indicating whether the collection can contain other collections.
- [canPerformEditOperation:](canperform%28__%29.md): Returns whether the collection supports the specified editing operation.
- [PHCollectionEditOperation](../phcollectioneditoperation.md): Values identifying possible actions that a collection can support, used by the [canPerformEditOperation:](canperform%28__%29.md) method.
