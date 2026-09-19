> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phasseteditoperation/properties

# PHAssetEditOperation.properties (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset’s metadata properties can be edited.

## Declaration

```swift
case properties
```

<a id="Discussion"></a>

## Discussion

To change an asset’s properties, create a change request with the [init(for:)](../phassetchangerequest/init%28for_%29.md) method inside a [PHPhotoLibrary](../phphotolibrary.md) change block.

## See Also

### Constants

- [PHAssetEditOperation.delete](delete.md): The asset can be deleted from the photo library.
- [PHAssetEditOperation.content](content.md): The asset’s photo or video content can be edited.

# PHAssetEditOperationProperties (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset’s metadata properties can be edited.

## Declaration

```objectivec
PHAssetEditOperationProperties
```

<a id="Discussion"></a>

## Discussion

To change an asset’s properties, create a change request with the [changeRequestForAsset:](../phassetchangerequest/init%28for_%29.md) method inside a [PHPhotoLibrary](../phphotolibrary.md) change block.

## See Also

### Constants

- [PHAssetEditOperationDelete](delete.md): The asset can be deleted from the photo library.
- [PHAssetEditOperationContent](content.md): The asset’s photo or video content can be edited.
