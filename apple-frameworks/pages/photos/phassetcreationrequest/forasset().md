> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcreationrequest/forasset()](https://developer.apple.com/documentation/photos/phassetcreationrequest/forasset())

# forAsset() (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for adding a new asset to the Photos library using asset resources.

## Declaration

```swift
class func forAsset() -> Self
```

<a id="return-value"></a>

## Return Value

An asset creation request.

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to create a new asset. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md). After calling this method, and before returning from the change block, use [addResource(with:data:options:)](addresource%28with_data_options_%29.md) or [addResource(with:fileURL:options:)](addresource%28with_fileurl_options_%29.md) to specify one or more data resources for the asset.

To set metadata properties of the newly created asset, use the corresponding properties of the change request (provided by the superclass [PHAssetChangeRequest](../phassetchangerequest.md) and listed in Modifying Assets). To reference the newly created asset later in the same change block or after the change block completes, use the [placeholderForCreatedAsset](../phassetchangerequest/placeholderforcreatedasset.md) property to retrieve a placeholder object.

# creationRequestForAsset (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for adding a new asset to the Photos library using asset resources.

## Declaration

```objectivec
+ (instancetype) creationRequestForAsset;
```

<a id="return-value"></a>

## Return Value

An asset creation request.

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to create a new asset. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md). After calling this method, and before returning from the change block, use [addResourceWithType:data:options:](addresource%28with_data_options_%29.md) or [addResourceWithType:fileURL:options:](addresource%28with_fileurl_options_%29.md) to specify one or more data resources for the asset.

To set metadata properties of the newly created asset, use the corresponding properties of the change request (provided by the superclass [PHAssetChangeRequest](../phassetchangerequest.md) and listed in Modifying Assets). To reference the newly created asset later in the same change block or after the change block completes, use the [placeholderForCreatedAsset](../phassetchangerequest/placeholderforcreatedasset.md) property to retrieve a placeholder object.
