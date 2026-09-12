> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpointertype/elementarraytype()](https://developer.apple.com/documentation/metal/mtlpointertype/elementarraytype())

# elementArrayType() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides a description of the underlying array when the pointer points to an array.

## Declaration

```swift
func elementArrayType() -> MTLArrayType?
```

<a id="return-value"></a>

## Return Value

An object that describes the array. If the pointer does not point to an array, this method returns `nil`.

## See Also

### Obtaining details for complex pointer elements

- [elementStructType()](elementstructtype%28%29.md): Provides a description of the underlying struct when the pointer points to a struct.

# elementArrayType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides a description of the underlying array when the pointer points to an array.

## Declaration

```objectivec
- (MTLArrayType *) elementArrayType;
```

<a id="return-value"></a>

## Return Value

An object that describes the array. If the pointer does not point to an array, this method returns `nil`.

## See Also

### Obtaining details for complex pointer elements

- [elementStructType](elementstructtype%28%29.md): Provides a description of the underlying struct when the pointer points to a struct.
