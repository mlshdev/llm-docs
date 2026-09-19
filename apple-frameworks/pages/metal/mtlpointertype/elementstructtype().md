> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlpointertype/elementstructtype()

# elementStructType() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides a description of the underlying struct when the pointer points to a struct.

## Declaration

```swift
func elementStructType() -> MTLStructType?
```

<a id="return-value"></a>

## Return Value

An object that describes the struct. If the pointer does not point to an struct, this method returns `nil`.

## See Also

### Obtaining details for complex pointer elements

- [elementArrayType()](elementarraytype%28%29.md): Provides a description of the underlying array when the pointer points to an array.

# elementStructType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides a description of the underlying struct when the pointer points to a struct.

## Declaration

```objectivec
- (MTLStructType *) elementStructType;
```

<a id="return-value"></a>

## Return Value

An object that describes the struct. If the pointer does not point to an struct, this method returns `nil`.

## See Also

### Obtaining details for complex pointer elements

- [elementArrayType](elementarraytype%28%29.md): Provides a description of the underlying array when the pointer points to an array.
