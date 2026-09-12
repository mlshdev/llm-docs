> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/isequal(to:)](https://developer.apple.com/documentation/foundation/nsvalue/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the value object and another value object are equal.

## Declaration

```swift
func isEqual(to value: NSValue) -> Bool
```

## Parameters

- `value`: The other value object with which to compare the value object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if both value objects are equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The [NSValue](../nsvalue.md) class compares the type and contents of each value object to determine equality.

# isEqualToValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the value object and another value object are equal.

## Declaration

```objectivec
- (BOOL) isEqualToValue:(NSValue *) value;
```

## Parameters

- `value`: The other value object with which to compare the value object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if both value objects are equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The [NSValue](../nsvalue.md) class compares the type and contents of each value object to determine equality.
