> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturereferencetype/access](https://developer.apple.com/documentation/metal/mtltexturereferencetype/access)

# access (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The texture’s read/write access to the argument.

## Declaration

```swift
var access: MTLBindingAccess { get }
```

<a id="discussion"></a>

## Discussion

This property indicates the type of access qualifiers (read-only, write-only, or read-write) used in the Metal shading language code. For information on possible values, see [MTLArgumentAccess](../mtlargumentaccess.md).

## See Also

### Describing the texture

- [textureType](texturetype.md): The texture type of the texture.
- [textureDataType](texturedatatype.md): The data type of the texture.
- [isDepthTexture](isdepthtexture.md): A Boolean value that indicates whether the texture is a depth texture.

# access (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The texture’s read/write access to the argument.

## Declaration

```objectivec
@property (readonly) MTLBindingAccess access;
```

<a id="discussion"></a>

## Discussion

This property indicates the type of access qualifiers (read-only, write-only, or read-write) used in the Metal shading language code. For information on possible values, see [MTLArgumentAccess](../mtlargumentaccess.md).

## See Also

### Describing the texture

- [textureType](texturetype.md): The texture type of the texture.
- [textureDataType](texturedatatype.md): The data type of the texture.
- [isDepthTexture](isdepthtexture.md): A Boolean value that indicates whether the texture is a depth texture.
