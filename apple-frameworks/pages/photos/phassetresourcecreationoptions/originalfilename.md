> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcecreationoptions/originalfilename](https://developer.apple.com/documentation/photos/phassetresourcecreationoptions/originalfilename)

# originalFilename (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The filename for the asset resource being created.

## Declaration

```swift
var originalFilename: String? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this property to track the original name of the file from which you import an asset resource even if you use the [addResource(with:data:options:)](../phassetcreationrequest/addresource%28with_data_options_%29.md) method to create a resource from data instead of from a file. After creating the asset, this information is available in the [originalFilename](../phassetresource/originalfilename.md) property of the corresponding [PHAssetResource](../phassetresource.md) object.

If you do not specify a value for this property and are using the [addResource(with:fileURL:options:)](../phassetcreationrequest/addresource%28with_fileurl_options_%29.md) method to create a resource, Photos infers the filename from that method’s `fileURL` parameter. Otherwise, Photos automatically generates a filename.

## See Also

### Describing a New Asset Resource

- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the resource.
- [contentType](contenttype.md): The type of data being provided for this asset resource. If not specified, one will be inferred from the PHAssetResourceType or file URL extension (if provided).

# originalFilename (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The filename for the asset resource being created.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * originalFilename;
```

<a id="Discussion"></a>

## Discussion

You can use this property to track the original name of the file from which you import an asset resource even if you use the [addResourceWithType:data:options:](../phassetcreationrequest/addresource%28with_data_options_%29.md) method to create a resource from data instead of from a file. After creating the asset, this information is available in the [originalFilename](../phassetresource/originalfilename.md) property of the corresponding [PHAssetResource](../phassetresource.md) object.

If you do not specify a value for this property and are using the [addResourceWithType:fileURL:options:](../phassetcreationrequest/addresource%28with_fileurl_options_%29.md) method to create a resource, Photos infers the filename from that method’s `fileURL` parameter. Otherwise, Photos automatically generates a filename.

## See Also

### Describing a New Asset Resource

- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the resource.
- [contentType](contenttype.md): The type of data being provided for this asset resource. If not specified, one will be inferred from the PHAssetResourceType or file URL extension (if provided).
