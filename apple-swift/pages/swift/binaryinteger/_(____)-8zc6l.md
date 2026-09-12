> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryinteger/_(_:_:)-8zc6l](https://developer.apple.com/documentation/swift/binaryinteger/_(_:_:)-8zc6l)

# /(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the quotient of dividing the first value by the second.

## Declaration

```swift
static func / (lhs: Self, rhs: Self) -> Self
```

## Parameters

- `lhs`: The value to divide.
- `rhs`: The value to divide `lhs` by. `rhs` must not be zero.

<a id="discussion"></a>

## Discussion

For integer types, any remainder of the division is discarded.

```swift
let x = 21 / 5
// x == 4
```

## See Also

### Arithmetic

- [+(\_:\_:)](+%28____%29.md): Adds two values and produces their sum.
- [-(\_:\_:)](-%28____%29.md): Subtracts one value from another and produces their difference.
- [\*(\_:\_:)](_%28____%29.md): Multiplies two values and produces their product.
