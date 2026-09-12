> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstructmember/pointertype()](https://developer.apple.com/documentation/metal/mtlstructmember/pointertype())

# pointerType() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides a description of the underlying pointer when the struct member holds a pointer.

## Declaration

```swift
func pointerType() -> MTLPointerType?
```

<a id="return-value"></a>

## Return Value

An object that describes the pointer. If [dataType](datatype.md) indicates that this member isn’t a pointer, this method returns `nil`.

## See Also

### Obtaining struct member details

- [arrayType()](arraytype%28%29.md): Provides a description of the underlying array when the struct member holds an array.
- [structType()](structtype%28%29.md): Provides a description of the underlying struct when the struct member holds a struct.
- [textureReferenceType()](texturereferencetype%28%29.md): Provides a description of the underlying texture when the struct member holds a texture.

# pointerType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides a description of the underlying pointer when the struct member holds a pointer.

## Declaration

```objectivec
- (MTLPointerType *) pointerType;
```

<a id="return-value"></a>

## Return Value

An object that describes the pointer. If [dataType](datatype.md) indicates that this member isn’t a pointer, this method returns `nil`.

## See Also

### Obtaining struct member details

- [arrayType](arraytype%28%29.md): Provides a description of the underlying array when the struct member holds an array.
- [structType](structtype%28%29.md): Provides a description of the underlying struct when the struct member holds a struct.
- [textureReferenceType](texturereferencetype%28%29.md): Provides a description of the underlying texture when the struct member holds a texture.
