> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargument/texturetype](https://developer.apple.com/documentation/metal/mtlargument/texturetype)

# textureType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The texture type of a texture argument.

## Declaration

```swift
var textureType: MTLTextureType { get }
```

<a id="discussion"></a>

## Discussion

For information on possible values, see [MTLTextureType](../mtltexturetype.md). If the argument is not a texture, querying this property is a fatal error.

## See Also

### Describing a texture argument

- [textureDataType](texturedatatype.md): Deprecated. The data type of a texture argument.
- [isDepthTexture](isdepthtexture.md): Deprecated. A Boolean value that indicates whether the texture is a depth texture.

# textureType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The texture type of a texture argument.

## Declaration

```objectivec
@property (readonly) MTLTextureType textureType;
```

<a id="discussion"></a>

## Discussion

For information on possible values, see [MTLTextureType](../mtltexturetype.md). If the argument is not a texture, querying this property is a fatal error.

## See Also

### Describing a texture argument

- [textureDataType](texturedatatype.md): Deprecated. The data type of a texture argument.
- [isDepthTexture](isdepthtexture.md): Deprecated. A Boolean value that indicates whether the texture is a depth texture.
