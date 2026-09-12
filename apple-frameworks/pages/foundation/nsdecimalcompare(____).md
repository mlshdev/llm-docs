> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalcompare(_:_:)](https://developer.apple.com/documentation/foundation/nsdecimalcompare(_:_:))

# NSDecimalCompare(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares two decimal values.

## Declaration

```swift
func NSDecimalCompare(_ leftOperand: UnsafePointer<Decimal>, _ rightOperand: UnsafePointer<Decimal>) -> ComparisonResult
```

<a id="return-value"></a>

## Return Value

`NSOrderedDescending` if `leftOperand` is bigger than `rightOperand`; `NSOrderedAscending` if `rightOperand` is bigger than `leftOperand`; or `NSOrderedSame` if the two operands are equal.

<a id="Discussion"></a>

## Discussion

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).

## See Also

### Comparing decimals

- [isEqual(to:)](decimal/isequal%28to_%29.md): Indicates whether this decimal is equal to the specified one.
- [isLess(than:)](decimal/isless%28than_%29.md): Indicates whether this decimal is less than the specified one.
- [isLessThanOrEqualTo(\_:)](decimal/islessthanorequalto%28__%29.md): Indicates whether this decimal is less than or equal to the specified one.
- [isTotallyOrdered(belowOrEqualTo:)](decimal/istotallyordered%28beloworequalto_%29.md): Returns a Boolean value indicating whether this instance should precede the given value in an ascending sort.
- [distance(to:)](decimal/distance%28to_%29.md): Returns the distance from this value to the specified value.
- [advanced(by:)](decimal/advanced%28by_%29.md): Returns a new value advanced by the given distance.

# NSDecimalCompare (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares two decimal values.

## Declaration

```objectivec
extern NSComparisonResult NSDecimalCompare(const NSDecimal *leftOperand, const NSDecimal *rightOperand);
```

<a id="return-value"></a>

## Return Value

`NSOrderedDescending` if `leftOperand` is bigger than `rightOperand`; `NSOrderedAscending` if `rightOperand` is bigger than `leftOperand`; or `NSOrderedSame` if the two operands are equal.

<a id="Discussion"></a>

## Discussion

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).
