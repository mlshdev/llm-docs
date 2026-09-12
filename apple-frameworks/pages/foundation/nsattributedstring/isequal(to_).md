> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/isequal(to:)](https://developer.apple.com/documentation/foundation/nsattributedstring/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the attributed string is equal to the specified string.

## Declaration

```swift
func isEqual(to other: NSAttributedString) -> Bool
```

## Parameters

- `other`: The attributed string with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text and attributes in the current string and `otherString` are the same, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method performs a character-by-character comparison of the string and its attributes. The character and its attributes must be the same in both strings for the method to return [true](https://developer.apple.com/documentation/swift/true). In attributed strings with many attributes, such a comparison is unlikely to yield an exact match [true](https://developer.apple.com/documentation/swift/true).

# isEqualToAttributedString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the attributed string is equal to the specified string.

## Declaration

```objectivec
- (BOOL) isEqualToAttributedString:(NSAttributedString *) other;
```

## Parameters

- `other`: The attributed string with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text and attributes in the current string and `otherString` are the same, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method performs a character-by-character comparison of the string and its attributes. The character and its attributes must be the same in both strings for the method to return [true](https://developer.apple.com/documentation/swift/true). In attributed strings with many attributes, such a comparison is unlikely to yield an exact match [true](https://developer.apple.com/documentation/swift/true).
