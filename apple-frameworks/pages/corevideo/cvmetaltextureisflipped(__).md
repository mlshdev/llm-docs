> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetaltextureisflipped(_:)](https://developer.apple.com/documentation/corevideo/cvmetaltextureisflipped(_:))

# CVMetalTextureIsFlipped(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the texture image is vertically flipped.

## Declaration

```swift
func CVMetalTextureIsFlipped(_ image: CVMetalTexture) -> Bool
```

## Parameters

- `image`: A CoreVideo Metal texture-based image buffer.

<a id="return-value"></a>

## Return Value

If `True`, the texture coordinate `{0,0}` represents the upper left of the texture; if `False`, the texture coordinate `{0,0}` represents the lower left of the texture.

## See Also

### Inspecting Textures

- [CVMetalTextureGetTexture(\_:)](cvmetaltexturegettexture%28__%29.md): Returns the Metal texture object for the image buffer.
- [CVMetalTextureGetCleanTexCoords(\_:\_:\_:\_:\_:)](cvmetaltexturegetcleantexcoords%28__________%29.md): Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVMetalTextureGetTypeID()](cvmetaltexturegettypeid%28%29.md): Returns the Core Foundation type identifier for a CoreVideo Metal texture-based image buffer.

# CVMetalTextureIsFlipped (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the texture image is vertically flipped.

## Declaration

```objectivec
extern Boolean CVMetalTextureIsFlipped(CVMetalTextureRef image);
```

## Parameters

- `image`: A CoreVideo Metal texture-based image buffer.

<a id="return-value"></a>

## Return Value

If `True`, the texture coordinate `{0,0}` represents the upper left of the texture; if `False`, the texture coordinate `{0,0}` represents the lower left of the texture.

## See Also

### Inspecting Textures

- [CVMetalTextureGetTexture](cvmetaltexturegettexture%28__%29.md): Returns the Metal texture object for the image buffer.
- [CVMetalTextureGetCleanTexCoords](cvmetaltexturegetcleantexcoords%28__________%29.md): Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVMetalTextureGetTypeID](cvmetaltexturegettypeid%28%29.md): Returns the Core Foundation type identifier for a CoreVideo Metal texture-based image buffer.
