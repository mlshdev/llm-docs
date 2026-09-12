> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstructmember/arraytype()](https://developer.apple.com/documentation/metal/mtlstructmember/arraytype())

# arrayType() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Provides a description of the underlying array when the struct member holds an array.

## Declaration

```swift
func arrayType() -> MTLArrayType?
```

<a id="return-value"></a>

## Return Value

An object that describes the array. If [dataType](datatype.md) indicates that this member is not an array, this method returns `nil.`

## See Also

### Obtaining struct member details

- [structType()](structtype%28%29.md): Provides a description of the underlying struct when the struct member holds a struct.
- [pointerType()](pointertype%28%29.md): Provides a description of the underlying pointer when the struct member holds a pointer.
- [textureReferenceType()](texturereferencetype%28%29.md): Provides a description of the underlying texture when the struct member holds a texture.

# arrayType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Provides a description of the underlying array when the struct member holds an array.

## Declaration

```objectivec
- (MTLArrayType *) arrayType;
```

<a id="return-value"></a>

## Return Value

An object that describes the array. If [dataType](datatype.md) indicates that this member is not an array, this method returns `nil.`

## See Also

### Obtaining struct member details

- [structType](structtype%28%29.md): Provides a description of the underlying struct when the struct member holds a struct.
- [pointerType](pointertype%28%29.md): Provides a description of the underlying pointer when the struct member holds a pointer.
- [textureReferenceType](texturereferencetype%28%29.md): Provides a description of the underlying texture when the struct member holds a texture.
