> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstructmember/texturereferencetype()](https://developer.apple.com/documentation/metal/mtlstructmember/texturereferencetype())

# textureReferenceType() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides a description of the underlying texture when the struct member holds a texture.

## Declaration

```swift
func textureReferenceType() -> MTLTextureReferenceType?
```

<a id="return-value"></a>

## Return Value

An object that describes the texture. If [dataType](datatype.md) indicates that this member isn’t a texture, this method returns `nil`.

## See Also

### Obtaining struct member details

- [arrayType()](arraytype%28%29.md): Provides a description of the underlying array when the struct member holds an array.
- [structType()](structtype%28%29.md): Provides a description of the underlying struct when the struct member holds a struct.
- [pointerType()](pointertype%28%29.md): Provides a description of the underlying pointer when the struct member holds a pointer.

# textureReferenceType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides a description of the underlying texture when the struct member holds a texture.

## Declaration

```objectivec
- (MTLTextureReferenceType *) textureReferenceType;
```

<a id="return-value"></a>

## Return Value

An object that describes the texture. If [dataType](datatype.md) indicates that this member isn’t a texture, this method returns `nil`.

## See Also

### Obtaining struct member details

- [arrayType](arraytype%28%29.md): Provides a description of the underlying array when the struct member holds an array.
- [structType](structtype%28%29.md): Provides a description of the underlying struct when the struct member holds a struct.
- [pointerType](pointertype%28%29.md): Provides a description of the underlying pointer when the struct member holds a pointer.
