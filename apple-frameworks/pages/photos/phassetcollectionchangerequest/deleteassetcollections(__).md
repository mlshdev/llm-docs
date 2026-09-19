> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phassetcollectionchangerequest/deleteassetcollections(_:)

# deleteAssetCollections(\_:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Requests that the specified asset collections be deleted.

## Declaration

```swift
class func deleteAssetCollections(_ assetCollections: any NSFastEnumeration)
```

## Parameters

- `assetCollections`: An array of [PHAssetCollection](../phassetcollection.md) objects to be deleted.

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to delete asset collections. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

# deleteAssetCollections: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Requests that the specified asset collections be deleted.

## Declaration

```objectivec
+ (void) deleteAssetCollections:(id<NSFastEnumeration>) assetCollections;
```

## Parameters

- `assetCollections`: An array of [PHAssetCollection](../phassetcollection.md) objects to be deleted.

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to delete asset collections. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).
