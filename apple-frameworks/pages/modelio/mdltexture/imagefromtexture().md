> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/imagefromtexture()](https://developer.apple.com/documentation/modelio/mdltexture/imagefromtexture())

# imageFromTexture() (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Exports the texture data as a CoreGraphics image.

## Declaration

```swift
func imageFromTexture() -> Unmanaged<CGImage>?
```

<a id="return-value"></a>

## Return Value

A CoreGraphics image object containing the texture’s pixel data, or `nil` if the texture data cannot be represented using CoreGraphics.

## See Also

### Exporting Textures

- [write(to:)](write%28to_%29.md): Exports the texture data to an image file at the specified URL.
- [write(to:type:)](write%28to_type_%29.md): Exports the texture data to an image file at the specified URL, of the specified type.

# imageFromTexture (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Exports the texture data as a CoreGraphics image.

## Declaration

```objectivec
- (CGImageRef) imageFromTexture;
```

<a id="return-value"></a>

## Return Value

A CoreGraphics image object containing the texture’s pixel data, or `nil` if the texture data cannot be represented using CoreGraphics.

## See Also

### Exporting Textures

- [writeToURL:](write%28to_%29.md): Exports the texture data to an image file at the specified URL.
- [writeToURL:type:](write%28to_type_%29.md): Exports the texture data to an image file at the specified URL, of the specified type.
