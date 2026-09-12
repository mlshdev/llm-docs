> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcreationrequest/addresource(with:data:options:)](https://developer.apple.com/documentation/photos/phassetcreationrequest/addresource(with:data:options:))

# addResource(with:data:options:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Adds a data resource to the asset being created, using the specified data.

## Declaration

```swift
func addResource(with type: PHAssetResourceType, data: Data, options: PHAssetResourceCreationOptions?)
```

## Parameters

- `type`: The role of this data resource in constructing an asset. For details, see [PHAssetResourceType](../phassetresourcetype.md).
- `data`: The data for the asset resource.
- `options`: Options affecting how Photos constructs the asset resource and incorporates its data into the Photos library. For details, see [PHAssetResourceCreationOptions](../phassetresourcecreationoptions.md).

<a id="Discussion"></a>

## Discussion

Photos imports the asset resource data only when it executes the [PHPhotoLibrary](../phphotolibrary.md) change block in which you create a [PHAssetCreationRequest](../phassetcreationrequest.md) object and call this method. If you attempt to create an asset with invalid data or an invalid combination of resources, Photos reports an error in the completion handler of your [PHPhotoLibrary](../phphotolibrary.md) call.

## See Also

### Providing Data Resources for the New Asset

- [addResource(with:fileURL:options:)](addresource%28with_fileurl_options_%29.md): Adds a data resource to the asset being created, using the file at the specified URL.

# addResourceWithType:data:options: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Adds a data resource to the asset being created, using the specified data.

## Declaration

```objectivec
- (void) addResourceWithType:(PHAssetResourceType) type data:(NSData *) data options:(PHAssetResourceCreationOptions *) options;
```

## Parameters

- `type`: The role of this data resource in constructing an asset. For details, see [PHAssetResourceType](../phassetresourcetype.md).
- `data`: The data for the asset resource.
- `options`: Options affecting how Photos constructs the asset resource and incorporates its data into the Photos library. For details, see [PHAssetResourceCreationOptions](../phassetresourcecreationoptions.md).

<a id="Discussion"></a>

## Discussion

Photos imports the asset resource data only when it executes the [PHPhotoLibrary](../phphotolibrary.md) change block in which you create a [PHAssetCreationRequest](../phassetcreationrequest.md) object and call this method. If you attempt to create an asset with invalid data or an invalid combination of resources, Photos reports an error in the completion handler of your [PHPhotoLibrary](../phphotolibrary.md) call.

## See Also

### Providing Data Resources for the New Asset

- [addResourceWithType:fileURL:options:](addresource%28with_fileurl_options_%29.md): Adds a data resource to the asset being created, using the file at the specified URL.
