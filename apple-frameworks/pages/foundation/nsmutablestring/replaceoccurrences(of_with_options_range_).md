> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablestring/replaceoccurrences(of:with:options:range:)](https://developer.apple.com/documentation/foundation/nsmutablestring/replaceoccurrences(of:with:options:range:))

# replaceOccurrences(of:with:options:range:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.

## Declaration

```swift
func replaceOccurrences(of target: String, with replacement: String, options: NSString.CompareOptions = [], range searchRange: NSRange) -> Int
```

## Parameters

- `target`: The string to replace.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `target` is `nil`.
- `replacement`: The string with which to replace `target`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `replacement` is `nil`.
- `options`: A mask specifying search options. See [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i) for details.

  If `opts` is `NSBackwardsSearch`, the search is done from the end of the range. If `opts` is `NSAnchoredSearch`, only anchored (but potentially multiple) instances are replaced. `NSLiteralSearch` and `NSCaseInsensitiveSearch` also apply.
- `searchRange`: The range of characters to replace. `searchRange` must not exceed the bounds of the receiver. Specify `searchRange` as `NSMakeRange(0, [receiver length])` to process the entire string.

  > **Important**

  >  Raises an `NSRangeException` if any part of `searchRange` lies beyond the end of the receiver.

<a id="return-value"></a>

## Return Value

The number of replacements made.

<a id="Discussion"></a>

## Discussion

This method treats the length of the string as a valid range value that returns an empty string.

## See Also

### Modifying a String

- [append(\_:)](append%28__%29.md): Adds to the end of the receiver the characters of a given string.
- [applyTransform(\_:reverse:range:updatedRange:)](applytransform%28__reverse_range_updatedrange_%29.md): Transliterates the receiver by applying a specified ICU string transform.
- [deleteCharacters(in:)](deletecharacters%28in_%29.md): Removes from the receiver the characters in a given range.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts into the receiver the characters of a given string at a given location.
- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29.md): Replaces the characters from `range` with those in `aString`.
- [setString(\_:)](setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.

# replaceOccurrencesOfString:withString:options:range: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.

## Declaration

```objectivec
- (NSUInteger) replaceOccurrencesOfString:(NSString *) target withString:(NSString *) replacement options:(NSStringCompareOptions) options range:(NSRange) searchRange;
```

## Parameters

- `target`: The string to replace.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `target` is `nil`.
- `replacement`: The string with which to replace `target`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `replacement` is `nil`.
- `options`: A mask specifying search options. See [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i) for details.

  If `opts` is `NSBackwardsSearch`, the search is done from the end of the range. If `opts` is `NSAnchoredSearch`, only anchored (but potentially multiple) instances are replaced. `NSLiteralSearch` and `NSCaseInsensitiveSearch` also apply.
- `searchRange`: The range of characters to replace. `searchRange` must not exceed the bounds of the receiver. Specify `searchRange` as `NSMakeRange(0, [receiver length])` to process the entire string.

  > **Important**

  >  Raises an `NSRangeException` if any part of `searchRange` lies beyond the end of the receiver.

<a id="return-value"></a>

## Return Value

The number of replacements made.

<a id="Discussion"></a>

## Discussion

This method treats the length of the string as a valid range value that returns an empty string.

## See Also

### Modifying a String

- [appendFormat:](appendformat_.md): Adds a constructed string to the receiver.
- [appendString:](append%28__%29.md): Adds to the end of the receiver the characters of a given string.
- [applyTransform:reverse:range:updatedRange:](applytransform%28__reverse_range_updatedrange_%29.md): Transliterates the receiver by applying a specified ICU string transform.
- [deleteCharactersInRange:](deletecharacters%28in_%29.md): Removes from the receiver the characters in a given range.
- [insertString:atIndex:](insert%28__at_%29.md): Inserts into the receiver the characters of a given string at a given location.
- [replaceCharactersInRange:withString:](replacecharacters%28in_with_%29.md): Replaces the characters from `range` with those in `aString`.
- [setString:](setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.
