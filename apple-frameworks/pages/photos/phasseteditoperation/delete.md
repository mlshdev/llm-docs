> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phasseteditoperation/delete

# PHAssetEditOperation.delete (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset can be deleted from the photo library.

## Declaration

```swift
case delete
```

<a id="Discussion"></a>

## Discussion

To delete one or more assets, create a change request with the [deleteAssets(\_:)](../phassetchangerequest/deleteassets%28__%29.md) method inside a [PHPhotoLibrary](../phphotolibrary.md) change block.

## See Also

### Constants

- [PHAssetEditOperation.content](content.md): The asset’s photo or video content can be edited.
- [PHAssetEditOperation.properties](properties.md): The asset’s metadata properties can be edited.

# PHAssetEditOperationDelete (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset can be deleted from the photo library.

## Declaration

```objectivec
PHAssetEditOperationDelete
```

<a id="Discussion"></a>

## Discussion

To delete one or more assets, create a change request with the [deleteAssets:](../phassetchangerequest/deleteassets%28__%29.md) method inside a [PHPhotoLibrary](../phphotolibrary.md) change block.

## See Also

### Constants

- [PHAssetEditOperationContent](content.md): The asset’s photo or video content can be edited.
- [PHAssetEditOperationProperties](properties.md): The asset’s metadata properties can be edited.
