> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/write(to:)](https://developer.apple.com/documentation/modelio/mdltexture/write(to:))

# write(to:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Exports the texture data to an image file at the specified URL.

## Declaration

```swift
func write(to URL: URL) -> Bool
```

## Parameters

- `URL`: The file URL at which to write the texture image.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if export succeeded; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Model I/O automatically infers the file format in which to export the image from the filename extension of the `url` parameter. This method can export textures in JPEG, TIFF, PNG, or (in macOS only) OpenEXR format.

## See Also

### Exporting Textures

- [write(to:type:)](write%28to_type_%29.md): Exports the texture data to an image file at the specified URL, of the specified type.
- [imageFromTexture()](imagefromtexture%28%29.md): Exports the texture data as a CoreGraphics image.

# writeToURL: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Exports the texture data to an image file at the specified URL.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) URL;
```

## Parameters

- `URL`: The file URL at which to write the texture image.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if export succeeded; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Model I/O automatically infers the file format in which to export the image from the filename extension of the `url` parameter. This method can export textures in JPEG, TIFF, PNG, or (in macOS only) OpenEXR format.

## See Also

### Exporting Textures

- [writeToURL:type:](write%28to_type_%29.md): Exports the texture data to an image file at the specified URL, of the specified type.
- [imageFromTexture](imagefromtexture%28%29.md): Exports the texture data as a CoreGraphics image.
