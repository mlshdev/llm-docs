> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetaltexturegettypeid()](https://developer.apple.com/documentation/corevideo/cvmetaltexturegettypeid())

# CVMetalTextureGetTypeID() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the Core Foundation type identifier for a CoreVideo Metal texture-based image buffer.

## Declaration

```swift
func CVMetalTextureGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for the `CVMetalTextureRef` type.

## See Also

### Related Documentation

- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)
- [Metal](../metal.md): Render advanced 3D graphics and compute data in parallel with graphics processors.

### Inspecting Textures

- [CVMetalTextureGetTexture(\_:)](cvmetaltexturegettexture%28__%29.md): Returns the Metal texture object for the image buffer.
- [CVMetalTextureGetCleanTexCoords(\_:\_:\_:\_:\_:)](cvmetaltexturegetcleantexcoords%28__________%29.md): Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVMetalTextureIsFlipped(\_:)](cvmetaltextureisflipped%28__%29.md): Returns a Boolean value indicating whether the texture image is vertically flipped.

# CVMetalTextureGetTypeID (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the Core Foundation type identifier for a CoreVideo Metal texture-based image buffer.

## Declaration

```objectivec
extern CFTypeID CVMetalTextureGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for the `CVMetalTextureRef` type.

## See Also

### Related Documentation

- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)
- [Metal](../metal.md): Render advanced 3D graphics and compute data in parallel with graphics processors.

### Inspecting Textures

- [CVMetalTextureGetTexture](cvmetaltexturegettexture%28__%29.md): Returns the Metal texture object for the image buffer.
- [CVMetalTextureGetCleanTexCoords](cvmetaltexturegetcleantexcoords%28__________%29.md): Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVMetalTextureIsFlipped](cvmetaltextureisflipped%28__%29.md): Returns a Boolean value indicating whether the texture image is vertically flipped.
