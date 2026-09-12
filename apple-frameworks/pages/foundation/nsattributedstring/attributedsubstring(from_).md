> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/attributedsubstring(from:)](https://developer.apple.com/documentation/foundation/nsattributedstring/attributedsubstring(from:))

# attributedSubstring(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an attributed string consisting of the characters and attributes within the specified range in the attributed string.

## Declaration

```swift
func attributedSubstring(from range: NSRange) -> NSAttributedString
```

## Parameters

- `range`: The range from which to create a new attributed string. `aRange` must lie within the bounds of the receiver.

<a id="return-value"></a>

## Return Value

An `NSAttributedString` object consisting of the characters and attributes within `aRange` in the receiver.

<a id="Discussion"></a>

## Discussion

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `aRange` lies beyond the end of the receiver’s characters. This method treats the length of the string as a valid range value that returns an empty string.

## See Also

### Getting the characters

- [string](string.md): The character contents of the attributed string as a string.
- [length](length.md): The length of the attributed string.

# attributedSubstringFromRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an attributed string consisting of the characters and attributes within the specified range in the attributed string.

## Declaration

```objectivec
- (NSAttributedString *) attributedSubstringFromRange:(NSRange) range;
```

## Parameters

- `range`: The range from which to create a new attributed string. `aRange` must lie within the bounds of the receiver.

<a id="return-value"></a>

## Return Value

An `NSAttributedString` object consisting of the characters and attributes within `aRange` in the receiver.

<a id="Discussion"></a>

## Discussion

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `aRange` lies beyond the end of the receiver’s characters. This method treats the length of the string as a valid range value that returns an empty string.

## See Also

### Getting the characters

- [string](string.md): The character contents of the attributed string as a string.
- [length](length.md): The length of the attributed string.
