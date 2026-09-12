> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetchangerequest/deleteassets(_:)](https://developer.apple.com/documentation/photos/phassetchangerequest/deleteassets(_:))

# deleteAssets(\_:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Requests that the specified assets be deleted.

## Declaration

```swift
class func deleteAssets(_ assets: any NSFastEnumeration)
```

## Parameters

- `assets`: An array of [PHAsset](../phasset.md) objects to be deleted.

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to delete assets. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

# deleteAssets: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Requests that the specified assets be deleted.

## Declaration

```objectivec
+ (void) deleteAssets:(id<NSFastEnumeration>) assets;
```

## Parameters

- `assets`: An array of [PHAsset](../phasset.md) objects to be deleted.

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to delete assets. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).
