> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/isequal(to:)](https://developer.apple.com/documentation/swift/double/isequal(to:))

# isEqual(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether this instance is equal to the given value.

## Declaration

```swift
func isEqual(to other: Double) -> Bool
```

## Parameters

- `other`: The value to compare with this value.

<a id="return-value"></a>

## Return Value

`true` if `other` has the same value as this instance; otherwise, `false`. If either this value or `other` is NaN, the result of this method is `false`.

<a id="discussion"></a>

## Discussion

This method serves as the basis for the equal-to operator (`==`) for floating-point values. When comparing two values with this method, `-0` is equal to `+0`. NaN is not equal to any value, including itself. For example:

```swift
let x = 15.0
x.isEqual(to: 15.0)
// true
x.isEqual(to: .nan)
// false
Double.nan.isEqual(to: .nan)
// false
```

The `isEqual(to:)` method implements the equality predicate defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).

## See Also

### Comparing Values

- [Floating-Point Operators for Double](../floating-point-operators-for-double.md): Perform arithmetic and bitwise operations or compare values.
- [isLess(than:)](isless%28than_%29.md): Returns a Boolean value indicating whether this instance is less than the given value.
- [isLessThanOrEqualTo(\_:)](islessthanorequalto%28__%29.md): Returns a Boolean value indicating whether this instance is less than or equal to the given value.
- [isTotallyOrdered(belowOrEqualTo:)](istotallyordered%28beloworequalto_%29.md): Returns a Boolean value indicating whether this instance should precede or tie positions with the given value in an ascending sort.
- [minimum(\_:\_:)](minimum%28____%29.md): Returns the lesser of the two given values.
- [minimumMagnitude(\_:\_:)](minimummagnitude%28____%29.md): Returns the value with lesser magnitude.
- [maximum(\_:\_:)](maximum%28____%29.md): Returns the greater of the two given values.
- [maximumMagnitude(\_:\_:)](maximummagnitude%28____%29.md): Returns the value with greater magnitude.
