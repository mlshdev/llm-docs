> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollection/canperform(_:)](https://developer.apple.com/documentation/photos/phcollection/canperform(_:))

# canPerform(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Returns whether the collection supports the specified editing operation.

## Declaration

```swift
func canPerform(_ anOperation: PHCollectionEditOperation) -> Bool
```

## Parameters

- `anOperation`: A bit mask of editing operations to be tested.

<a id="return-value"></a>

## Return Value

`true` if the asset supports the specified editing operation; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If an asset collection or collection list supports editing, you can create a [PHAssetCollectionChangeRequest](../phassetcollectionchangerequest.md) or [PHCollectionListChangeRequest](../phcollectionlistchangerequest.md) object inside a [PHPhotoLibrary](../phphotolibrary.md) change block to submit a change.

## See Also

### Determining Collection Capabilities

- [canContainAssets](cancontainassets.md): A Boolean value indicating whether the collection can contain assets.
- [canContainCollections](cancontaincollections.md): A Boolean value indicating whether the collection can contain other collections.
- [PHCollectionEditOperation](../phcollectioneditoperation.md): Values identifying possible actions that a collection can support, used by the [canPerform(\_:)](canperform%28__%29.md) method.

# canPerformEditOperation: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Returns whether the collection supports the specified editing operation.

## Declaration

```objectivec
- (BOOL) canPerformEditOperation:(PHCollectionEditOperation) anOperation;
```

## Parameters

- `anOperation`: A bit mask of editing operations to be tested.

<a id="return-value"></a>

## Return Value

`true` if the asset supports the specified editing operation; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If an asset collection or collection list supports editing, you can create a [PHAssetCollectionChangeRequest](../phassetcollectionchangerequest.md) or [PHCollectionListChangeRequest](../phcollectionlistchangerequest.md) object inside a [PHPhotoLibrary](../phphotolibrary.md) change block to submit a change.

## See Also

### Determining Collection Capabilities

- [canContainAssets](cancontainassets.md): A Boolean value indicating whether the collection can contain assets.
- [canContainCollections](cancontaincollections.md): A Boolean value indicating whether the collection can contain other collections.
- [PHCollectionEditOperation](../phcollectioneditoperation.md): Values identifying possible actions that a collection can support, used by the [canPerformEditOperation:](canperform%28__%29.md) method.
