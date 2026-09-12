> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetaltexturegettexture(_:)](https://developer.apple.com/documentation/corevideo/cvmetaltexturegettexture(_:))

# CVMetalTextureGetTexture(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the Metal texture object for the image buffer.

## Declaration

```swift
func CVMetalTextureGetTexture(_ image: CVMetalTexture) -> (any MTLTexture)?
```

## Parameters

- `image`: A CoreVideo Metal texture-based image buffer.

<a id="return-value"></a>

## Return Value

The [MTLTexture](../metal/mtltexture.md) object corresponding to the image buffer.

## See Also

### Inspecting Textures

- [CVMetalTextureGetCleanTexCoords(\_:\_:\_:\_:\_:)](cvmetaltexturegetcleantexcoords%28__________%29.md): Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVMetalTextureIsFlipped(\_:)](cvmetaltextureisflipped%28__%29.md): Returns a Boolean value indicating whether the texture image is vertically flipped.
- [CVMetalTextureGetTypeID()](cvmetaltexturegettypeid%28%29.md): Returns the Core Foundation type identifier for a CoreVideo Metal texture-based image buffer.

# CVMetalTextureGetTexture (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the Metal texture object for the image buffer.

## Declaration

```objectivec
extern id<MTLTexture>CVMetalTextureGetTexture(CVMetalTextureRef image);
```

## Parameters

- `image`: A CoreVideo Metal texture-based image buffer.

<a id="return-value"></a>

## Return Value

The [MTLTexture](../metal/mtltexture.md) object corresponding to the image buffer.

## See Also

### Inspecting Textures

- [CVMetalTextureGetCleanTexCoords](cvmetaltexturegetcleantexcoords%28__________%29.md): Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVMetalTextureIsFlipped](cvmetaltextureisflipped%28__%29.md): Returns a Boolean value indicating whether the texture image is vertically flipped.
- [CVMetalTextureGetTypeID](cvmetaltexturegettypeid%28%29.md): Returns the Core Foundation type identifier for a CoreVideo Metal texture-based image buffer.
