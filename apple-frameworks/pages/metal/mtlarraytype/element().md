> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlarraytype/element()](https://developer.apple.com/documentation/metal/mtlarraytype/element())

# element() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Provides a description of the underlying type when an array holds other arrays as its elements.

## Declaration

```swift
func element() -> MTLArrayType?
```

<a id="return-value"></a>

## Return Value

Returns an object that describes an array. If the array elements aren’t arrays, this method returns `nil`.

<a id="discussion"></a>

## Discussion

Use this method if [elementType](elementtype.md) is [MTLDataType.array](../mtldatatype/array.md).

## See Also

### Obtaining details for complex array elements

- [elementStructType()](elementstructtype%28%29.md): Provides a description of the underlying struct type when an array holds structs as its elements.
- [elementPointerType()](elementpointertype%28%29.md): Provides a description of the underlying pointer type when an array holds pointers as its elements.
- [elementTextureReferenceType()](elementtexturereferencetype%28%29.md): Provides a description of the underlying texture type when an array holds textures as its elements.

# elementArrayType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Provides a description of the underlying type when an array holds other arrays as its elements.

## Declaration

```objectivec
- (MTLArrayType *) elementArrayType;
```

<a id="return-value"></a>

## Return Value

Returns an object that describes an array. If the array elements aren’t arrays, this method returns `nil`.

<a id="discussion"></a>

## Discussion

Use this method if [elementType](elementtype.md) is [MTLDataTypeArray](../mtldatatype/array.md).

## See Also

### Obtaining details for complex array elements

- [elementStructType](elementstructtype%28%29.md): Provides a description of the underlying struct type when an array holds structs as its elements.
- [elementPointerType](elementpointertype%28%29.md): Provides a description of the underlying pointer type when an array holds pointers as its elements.
- [elementTextureReferenceType](elementtexturereferencetype%28%29.md): Provides a description of the underlying texture type when an array holds textures as its elements.
