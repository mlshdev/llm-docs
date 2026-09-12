> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargument/texturedatatype](https://developer.apple.com/documentation/metal/mtlargument/texturedatatype)

# textureDataType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The data type of a texture argument.

## Declaration

```swift
var textureDataType: MTLDataType { get }
```

<a id="discussion"></a>

## Discussion

For information on possible values, see [MTLDataType](../mtldatatype.md). If the argument is not a texture, querying this property is a fatal error.

## See Also

### Describing a texture argument

- [textureType](texturetype.md): Deprecated. The texture type of a texture argument.
- [isDepthTexture](isdepthtexture.md): Deprecated. A Boolean value that indicates whether the texture is a depth texture.

# textureDataType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The data type of a texture argument.

## Declaration

```objectivec
@property (readonly) MTLDataType textureDataType;
```

<a id="discussion"></a>

## Discussion

For information on possible values, see [MTLDataType](../mtldatatype.md). If the argument is not a texture, querying this property is a fatal error.

## See Also

### Describing a texture argument

- [textureType](texturetype.md): Deprecated. The texture type of a texture argument.
- [isDepthTexture](isdepthtexture.md): Deprecated. A Boolean value that indicates whether the texture is a depth texture.
