> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnumber/isequal(to:)](https://developer.apple.com/documentation/foundation/nsnumber/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the number object’s value and a given number are equal.

## Declaration

```swift
func isEqual(to number: NSNumber) -> Bool
```

## Parameters

- `number`: The number to compare to the number object’s value.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the number object’s value and `number` are equal, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two `NSNumber` objects are considered equal if they have the same id values or if they have equivalent values (as determined by the [compare(\_:)](compare%28__%29.md) method).

This method is more efficient than [compare(\_:)](compare%28__%29.md) if you know the two objects are numbers.

## See Also

### Comparing NSNumber Objects

- [compare(\_:)](compare%28__%29.md): Returns an `NSComparisonResult` value that indicates whether the number object’s value is greater than, equal to, or less than a given number.

# isEqualToNumber: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the number object’s value and a given number are equal.

## Declaration

```objectivec
- (BOOL) isEqualToNumber:(NSNumber *) number;
```

## Parameters

- `number`: The number to compare to the number object’s value.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the number object’s value and `number` are equal, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two `NSNumber` objects are considered equal if they have the same id values or if they have equivalent values (as determined by the [compare:](compare%28__%29.md) method).

This method is more efficient than [compare:](compare%28__%29.md) if you know the two objects are numbers.

## See Also

### Comparing NSNumber Objects

- [compare:](compare%28__%29.md): Returns an `NSComparisonResult` value that indicates whether the number object’s value is greater than, equal to, or less than a given number.
