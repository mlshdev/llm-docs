> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/enumeratelines(_:)](https://developer.apple.com/documentation/foundation/nsstring/enumeratelines(_:))

# enumerateLines(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enumerates all the lines in the string.

## Declaration

```swift
func enumerateLines(_ block: @escaping (String, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `block`: The block executed for the enumeration.

  The block takes two arguments:

  - **line**: The current line of the string being enumerated. The line contains just the contents of the line, without the line terminators. See [getLineStart(\_:end:contentsEnd:for:)](getlinestart%28__end_contentsend_for_%29.md) for a discussion of line terminators.
  - **stop**: A reference to a Boolean value that the block can use to stop the enumeration by setting `*stop = YES`; it should not touch `*stop` otherwise.

## See Also

### Finding Characters and Substrings

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.
- [localizedCaseInsensitiveContains(\_:)](localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContains(\_:)](localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacter(from:)](rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacter(from:options:)](rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [rangeOfCharacter(from:options:range:)](rangeofcharacter%28from_options_range_%29.md): Finds and returns the range in the string of the first character from a given character set found in a given range with given options.
- [range(of:)](range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [range(of:options:)](range%28of_options_%29.md): Finds and returns the range of the first occurrence of a given string within the string, subject to given options.
- [range(of:options:range:)](range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [range(of:options:range:locale:)](range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [localizedStandardRange(of:)](localizedstandardrange%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.
- [enumerateSubstrings(in:options:using:)](enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.

# enumerateLinesUsingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enumerates all the lines in the string.

## Declaration

```objectivec
- (void) enumerateLinesUsingBlock:(void (^)(NSString *line, BOOL *stop)) block;
```

## Parameters

- `block`: The block executed for the enumeration.

  The block takes two arguments:

  - **line**: The current line of the string being enumerated. The line contains just the contents of the line, without the line terminators. See [getLineStart:end:contentsEnd:forRange:](getlinestart%28__end_contentsend_for_%29.md) for a discussion of line terminators.
  - **stop**: A reference to a Boolean value that the block can use to stop the enumeration by setting `*stop = YES`; it should not touch `*stop` otherwise.

## See Also

### Finding Characters and Substrings

- [containsString:](contains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.
- [localizedCaseInsensitiveContainsString:](localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContainsString:](localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacterFromSet:](rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacterFromSet:options:](rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [rangeOfCharacterFromSet:options:range:](rangeofcharacter%28from_options_range_%29.md): Finds and returns the range in the string of the first character from a given character set found in a given range with given options.
- [rangeOfString:](range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [rangeOfString:options:](range%28of_options_%29.md): Finds and returns the range of the first occurrence of a given string within the string, subject to given options.
- [rangeOfString:options:range:](range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [rangeOfString:options:range:locale:](range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [localizedStandardRangeOfString:](localizedstandardrange%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.
- [enumerateSubstringsInRange:options:usingBlock:](enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.
