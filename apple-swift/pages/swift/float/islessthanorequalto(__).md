> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/islessthanorequalto(_:)](https://developer.apple.com/documentation/swift/float/islessthanorequalto(_:))

# isLessThanOrEqualTo(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether this instance is less than or equal to the given value.

## Declaration

```swift
func isLessThanOrEqualTo(_ other: Float) -> Bool
```

## Parameters

- `other`: The value to compare with this value.

<a id="return-value"></a>

## Return Value

`true` if `other` is greater than this value; otherwise, `false`. If either this value or `other` is NaN, the result of this method is `false`.

<a id="discussion"></a>

## Discussion

This method serves as the basis for the less-than-or-equal-to operator (`<=`) for floating-point values. Some special cases apply:

- Because NaN is incomparable with any value, this method returns `false` when called on NaN or when NaN is passed as `other`.
- `-infinity` compares less than or equal to all values except NaN.
- Every value except NaN compares less than or equal to `+infinity`.

The following example shows the behavior of the `isLessThanOrEqualTo(_:)` method with different kinds of values:

```swift
let x = 15.0
x.isLessThanOrEqualTo(20.0)
// true
x.isLessThanOrEqualTo(.nan)
// false
Double.nan.isLessThanOrEqualTo(x)
// false
```

The `isLessThanOrEqualTo(_:)` method implements the less-than-or-equal predicate defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).

## See Also

### Comparing Values

- [Floating-Point Operators for Float](../floating-point-operators-for-float.md): Perform arithmetic and bitwise operations or compare values.
- [isEqual(to:)](isequal%28to_%29.md): Returns a Boolean value indicating whether this instance is equal to the given value.
- [isLess(than:)](isless%28than_%29.md): Returns a Boolean value indicating whether this instance is less than the given value.
- [isTotallyOrdered(belowOrEqualTo:)](istotallyordered%28beloworequalto_%29.md): Returns a Boolean value indicating whether this instance should precede or tie positions with the given value in an ascending sort.
- [maximum(\_:\_:)](maximum%28____%29.md): Returns the greater of the two given values.
- [maximumMagnitude(\_:\_:)](maximummagnitude%28____%29.md): Returns the value with greater magnitude.
- [minimum(\_:\_:)](minimum%28____%29.md): Returns the lesser of the two given values.
- [minimumMagnitude(\_:\_:)](minimummagnitude%28____%29.md): Returns the value with lesser magnitude.
