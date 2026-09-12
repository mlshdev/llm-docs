> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablestring/deletecharacters(in:)](https://developer.apple.com/documentation/foundation/nsmutablestring/deletecharacters(in:))

# deleteCharacters(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiver the characters in a given range.

## Declaration

```swift
func deleteCharacters(in range: NSRange)
```

## Parameters

- `range`: The range of characters to delete. `range` must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an `NSRangeException` if any part of `range` lies beyond the end of the string.

<a id="Discussion"></a>

## Discussion

This method treats the length of the string as a valid range value that returns an empty string.

## See Also

### Modifying a String

- [append(\_:)](append%28__%29.md): Adds to the end of the receiver the characters of a given string.
- [applyTransform(\_:reverse:range:updatedRange:)](applytransform%28__reverse_range_updatedrange_%29.md): Transliterates the receiver by applying a specified ICU string transform.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts into the receiver the characters of a given string at a given location.
- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29.md): Replaces the characters from `range` with those in `aString`.
- [replaceOccurrences(of:with:options:range:)](replaceoccurrences%28of_with_options_range_%29.md): Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.
- [setString(\_:)](setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.

# deleteCharactersInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiver the characters in a given range.

## Declaration

```objectivec
- (void) deleteCharactersInRange:(NSRange) range;
```

## Parameters

- `range`: The range of characters to delete. `range` must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an `NSRangeException` if any part of `range` lies beyond the end of the string.

<a id="Discussion"></a>

## Discussion

This method treats the length of the string as a valid range value that returns an empty string.

## See Also

### Modifying a String

- [appendFormat:](appendformat_.md): Adds a constructed string to the receiver.
- [appendString:](append%28__%29.md): Adds to the end of the receiver the characters of a given string.
- [applyTransform:reverse:range:updatedRange:](applytransform%28__reverse_range_updatedrange_%29.md): Transliterates the receiver by applying a specified ICU string transform.
- [insertString:atIndex:](insert%28__at_%29.md): Inserts into the receiver the characters of a given string at a given location.
- [replaceCharactersInRange:withString:](replacecharacters%28in_with_%29.md): Replaces the characters from `range` with those in `aString`.
- [replaceOccurrencesOfString:withString:options:range:](replaceoccurrences%28of_with_options_range_%29.md): Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.
- [setString:](setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.
