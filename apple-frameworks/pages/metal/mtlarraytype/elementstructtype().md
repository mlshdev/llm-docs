> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlarraytype/elementstructtype()](https://developer.apple.com/documentation/metal/mtlarraytype/elementstructtype())

# elementStructType() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Provides a description of the underlying struct type when an array holds structs as its elements.

## Declaration

```swift
func elementStructType() -> MTLStructType?
```

<a id="return-value"></a>

## Return Value

An object that describes the struct. If the array elements aren’t structs, this method returns `nil`.

<a id="discussion"></a>

## Discussion

Use this method if [elementType](elementtype.md) is [MTLDataType.struct](../mtldatatype/struct.md).

## See Also

### Obtaining details for complex array elements

- [element()](element%28%29.md): Provides a description of the underlying type when an array holds other arrays as its elements.
- [elementPointerType()](elementpointertype%28%29.md): Provides a description of the underlying pointer type when an array holds pointers as its elements.
- [elementTextureReferenceType()](elementtexturereferencetype%28%29.md): Provides a description of the underlying texture type when an array holds textures as its elements.

# elementStructType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Provides a description of the underlying struct type when an array holds structs as its elements.

## Declaration

```objectivec
- (MTLStructType *) elementStructType;
```

<a id="return-value"></a>

## Return Value

An object that describes the struct. If the array elements aren’t structs, this method returns `nil`.

<a id="discussion"></a>

## Discussion

Use this method if [elementType](elementtype.md) is [MTLDataTypeStruct](../mtldatatype/struct.md).

## See Also

### Obtaining details for complex array elements

- [elementArrayType](element%28%29.md): Provides a description of the underlying type when an array holds other arrays as its elements.
- [elementPointerType](elementpointertype%28%29.md): Provides a description of the underlying pointer type when an array holds pointers as its elements.
- [elementTextureReferenceType](elementtexturereferencetype%28%29.md): Provides a description of the underlying texture type when an array holds textures as its elements.
