> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlarraytype/elementpointertype()](https://developer.apple.com/documentation/metal/mtlarraytype/elementpointertype())

# elementPointerType() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides a description of the underlying pointer type when an array holds pointers as its elements.

## Declaration

```swift
func elementPointerType() -> MTLPointerType?
```

<a id="return-value"></a>

## Return Value

An object that describes the pointer. If the array elements aren’t pointers, this method returns `nil`.

<a id="discussion"></a>

## Discussion

Use this method if [elementType](elementtype.md) is [MTLDataType.pointer](../mtldatatype/pointer.md).

## See Also

### Obtaining details for complex array elements

- [element()](element%28%29.md): Provides a description of the underlying type when an array holds other arrays as its elements.
- [elementStructType()](elementstructtype%28%29.md): Provides a description of the underlying struct type when an array holds structs as its elements.
- [elementTextureReferenceType()](elementtexturereferencetype%28%29.md): Provides a description of the underlying texture type when an array holds textures as its elements.

# elementPointerType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides a description of the underlying pointer type when an array holds pointers as its elements.

## Declaration

```objectivec
- (MTLPointerType *) elementPointerType;
```

<a id="return-value"></a>

## Return Value

An object that describes the pointer. If the array elements aren’t pointers, this method returns `nil`.

<a id="discussion"></a>

## Discussion

Use this method if [elementType](elementtype.md) is [MTLDataTypePointer](../mtldatatype/pointer.md).

## See Also

### Obtaining details for complex array elements

- [elementArrayType](element%28%29.md): Provides a description of the underlying type when an array holds other arrays as its elements.
- [elementStructType](elementstructtype%28%29.md): Provides a description of the underlying struct type when an array holds structs as its elements.
- [elementTextureReferenceType](elementtexturereferencetype%28%29.md): Provides a description of the underlying texture type when an array holds textures as its elements.
