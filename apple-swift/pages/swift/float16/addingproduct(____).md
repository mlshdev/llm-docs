> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/addingproduct(_:_:)](https://developer.apple.com/documentation/swift/float16/addingproduct(_:_:))

# addingProduct(\_:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result of adding the product of the two given values to this value, computed without intermediate rounding.

## Declaration

```swift
func addingProduct(_ lhs: Self, _ rhs: Self) -> Self
```

## Parameters

- `lhs`: One of the values to multiply before adding to this value.
- `rhs`: The other value to multiply.

<a id="return-value"></a>

## Return Value

The product of `lhs` and `rhs`, added to this value.

<a id="discussion"></a>

## Discussion

This method is equivalent to the C `fma` function and implements the `fusedMultiplyAdd` operation defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).
