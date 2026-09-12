> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablestring/replacecharacters(in:with:)](https://developer.apple.com/documentation/foundation/nsmutablestring/replacecharacters(in:with:))

# replaceCharacters(in:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the characters from `range` with those in `aString`.

## Declaration

```swift
func replaceCharacters(in range: NSRange, with aString: String)
```

## Parameters

- `range`: The range of characters to replace. `range` must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an `NSRangeException` if any part of `range` lies beyond the end of the receiver.
- `aString`: The string with which to replace the characters in `range`. `aString` must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method treats the length of the string as a valid range value that returns an empty string.

## See Also

### Modifying a String

- [append(\_:)](append%28__%29.md): Adds to the end of the receiver the characters of a given string.
- [applyTransform(\_:reverse:range:updatedRange:)](applytransform%28__reverse_range_updatedrange_%29.md): Transliterates the receiver by applying a specified ICU string transform.
- [deleteCharacters(in:)](deletecharacters%28in_%29.md): Removes from the receiver the characters in a given range.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts into the receiver the characters of a given string at a given location.
- [replaceOccurrences(of:with:options:range:)](replaceoccurrences%28of_with_options_range_%29.md): Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.
- [setString(\_:)](setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.

# replaceCharactersInRange:withString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the characters from `range` with those in `aString`.

## Declaration

```objectivec
- (void) replaceCharactersInRange:(NSRange) range withString:(NSString *) aString;
```

## Parameters

- `range`: The range of characters to replace. `range` must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an `NSRangeException` if any part of `range` lies beyond the end of the receiver.
- `aString`: The string with which to replace the characters in `range`. `aString` must not be `nil`.

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
- [replaceOccurrencesOfString:withString:options:range:](replaceoccurrences%28of_with_options_range_%29.md): Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.
- [setString:](setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.
