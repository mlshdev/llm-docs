> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phassetresource/datasize-5lxva

# dataSize

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The size of the resource in bytes

## Declaration

```swift
var dataSize: Int? { get }
```

<a id="discussion"></a>

## Discussion

The size may be unknown until a resource has finished being generated or processed, and some resources never report one. `nil` means the size is unknown, not that it is zero.

## See Also

### Inspecting an Asset Resource

- [type](type.md): The relationship of an asset resource to its owning asset.
- [PHAssetResourceType](../phassetresourcetype.md): Describes the relationship of an asset resource to its owning asset.
- [contentType](contenttype.md): The content type of the data associated with this asset resource
- [assetLocalIdentifier](assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [originalFilename](originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](pixelwidth.md): The width of the resource, in pixels.
