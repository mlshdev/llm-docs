> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnumber/compare(_:)](https://developer.apple.com/documentation/foundation/nsnumber/compare(_:))

# compare(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSComparisonResult` value that indicates whether the number object’s value is greater than, equal to, or less than a given number.

## Declaration

```swift
func compare(_ otherNumber: NSNumber) -> ComparisonResult
```

## Parameters

- `otherNumber`: The number to compare to the number object’s value.

  This value must not be `nil`. If the value is `nil`, the behavior is undefined and may change in future versions of macOS.

<a id="return-value"></a>

## Return Value

`NSOrderedAscending` if the value of `otherNumber` is greater than the number object’s, `NSOrderedSame` if they’re equal, and `NSOrderedDescending` if the value of `otherNumber` is less than the number object’s.

<a id="Discussion"></a>

## Discussion

The [compare(\_:)](compare%28__%29.md) method follows the standard C rules for type conversion. For example, if you compare an `NSNumber` object that has an integer value with an `NSNumber` object that has a floating point value, the integer value is converted to a floating-point value for comparison.

## See Also

### Comparing NSNumber Objects

- [isEqual(to:)](isequal%28to_%29.md): Returns a Boolean value that indicates whether the number object’s value and a given number are equal.

# compare: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSComparisonResult` value that indicates whether the number object’s value is greater than, equal to, or less than a given number.

## Declaration

```objectivec
- (NSComparisonResult) compare:(NSNumber *) otherNumber;
```

## Parameters

- `otherNumber`: The number to compare to the number object’s value.

  This value must not be `nil`. If the value is `nil`, the behavior is undefined and may change in future versions of macOS.

<a id="return-value"></a>

## Return Value

`NSOrderedAscending` if the value of `otherNumber` is greater than the number object’s, `NSOrderedSame` if they’re equal, and `NSOrderedDescending` if the value of `otherNumber` is less than the number object’s.

<a id="Discussion"></a>

## Discussion

The [compare:](compare%28__%29.md) method follows the standard C rules for type conversion. For example, if you compare an `NSNumber` object that has an integer value with an `NSNumber` object that has a floating point value, the integer value is converted to a floating-point value for comparison.

## See Also

### Comparing NSNumber Objects

- [isEqualToNumber:](isequal%28to_%29.md): Returns a Boolean value that indicates whether the number object’s value and a given number are equal.
