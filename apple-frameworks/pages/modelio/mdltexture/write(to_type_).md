> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/write(to:type:)](https://developer.apple.com/documentation/modelio/mdltexture/write(to:type:))

# write(to:type:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Exports the texture data to an image file at the specified URL, of the specified type.

## Declaration

```swift
func write(to nsurl: URL, type: CFString) -> Bool
```

## Parameters

- `nsurl`: The file URL at which to write the texture image.
- `type`: A Uniform Type Identifier declaring the image file format to use for export.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if export succeeded; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

For the `type` parameter, pass the Uniform Type Identifier for any output format supported by the Image I/O framework, such as the JPEG, TIFF, PNG, or (in macOS only) OpenEXR format. For details, see [Uniform Type Identifiers Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009257).

## See Also

### Exporting Textures

- [write(to:)](write%28to_%29.md): Exports the texture data to an image file at the specified URL.
- [imageFromTexture()](imagefromtexture%28%29.md): Exports the texture data as a CoreGraphics image.

# writeToURL:type: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Exports the texture data to an image file at the specified URL, of the specified type.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) nsurl type:(CFStringRef) type;
```

## Parameters

- `nsurl`: The file URL at which to write the texture image.
- `type`: A Uniform Type Identifier declaring the image file format to use for export.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if export succeeded; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

For the `type` parameter, pass the Uniform Type Identifier for any output format supported by the Image I/O framework, such as the JPEG, TIFF, PNG, or (in macOS only) OpenEXR format. For details, see [Uniform Type Identifiers Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009257).

## See Also

### Exporting Textures

- [writeToURL:](write%28to_%29.md): Exports the texture data to an image file at the specified URL.
- [imageFromTexture](imagefromtexture%28%29.md): Exports the texture data as a CoreGraphics image.
