> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/istotallyordered(beloworequalto:)](https://developer.apple.com/documentation/swift/double/istotallyordered(beloworequalto:))

# isTotallyOrdered(belowOrEqualTo:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether this instance should precede or tie positions with the given value in an ascending sort.

## Declaration

```swift
func isTotallyOrdered(belowOrEqualTo other: Self) -> Bool
```

## Parameters

- `other`: A floating-point value to compare to this value.

<a id="return-value"></a>

## Return Value

`true` if this value is ordered below or the same as `other` in a total ordering of the floating-point type; otherwise, `false`.

<a id="discussion"></a>

## Discussion

This relation is a refinement of the less-than-or-equal-to operator (`<=`) that provides a total order on all values of the type, including signed zeros and NaNs.

The following example uses `isTotallyOrdered(belowOrEqualTo:)` to sort an array of floating-point values, including some that are NaN:

```swift
var numbers = [2.5, 21.25, 3.0, .nan, -9.5]
numbers.sort { !$1.isTotallyOrdered(belowOrEqualTo: $0) }
print(numbers)
// Prints "[-9.5, 2.5, 3.0, 21.25, nan]"
```

The `isTotallyOrdered(belowOrEqualTo:)` method implements the total order relation as defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).

## See Also

### Comparing Values

- [Floating-Point Operators for Double](../floating-point-operators-for-double.md): Perform arithmetic and bitwise operations or compare values.
- [isEqual(to:)](isequal%28to_%29.md): Returns a Boolean value indicating whether this instance is equal to the given value.
- [isLess(than:)](isless%28than_%29.md): Returns a Boolean value indicating whether this instance is less than the given value.
- [isLessThanOrEqualTo(\_:)](islessthanorequalto%28__%29.md): Returns a Boolean value indicating whether this instance is less than or equal to the given value.
- [minimum(\_:\_:)](minimum%28____%29.md): Returns the lesser of the two given values.
- [minimumMagnitude(\_:\_:)](minimummagnitude%28____%29.md): Returns the value with lesser magnitude.
- [maximum(\_:\_:)](maximum%28____%29.md): Returns the greater of the two given values.
- [maximumMagnitude(\_:\_:)](maximummagnitude%28____%29.md): Returns the value with greater magnitude.
