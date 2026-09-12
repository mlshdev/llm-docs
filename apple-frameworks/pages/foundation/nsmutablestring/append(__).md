> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablestring/append(_:)](https://developer.apple.com/documentation/foundation/nsmutablestring/append(_:))

# append(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds to the end of the receiver the characters of a given string.

## Declaration

```swift
func append(_ aString: String)
```

## Parameters

- `aString`: The string to append to the receiver. `aString` must not be `nil`

## See Also

### Modifying a String

- [applyTransform(\_:reverse:range:updatedRange:)](applytransform%28__reverse_range_updatedrange_%29.md): Transliterates the receiver by applying a specified ICU string transform.
- [deleteCharacters(in:)](deletecharacters%28in_%29.md): Removes from the receiver the characters in a given range.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts into the receiver the characters of a given string at a given location.
- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29.md): Replaces the characters from `range` with those in `aString`.
- [replaceOccurrences(of:with:options:range:)](replaceoccurrences%28of_with_options_range_%29.md): Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.
- [setString(\_:)](setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.

# appendString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds to the end of the receiver the characters of a given string.

## Declaration

```objectivec
- (void) appendString:(NSString *) aString;
```

## Parameters

- `aString`: The string to append to the receiver. `aString` must not be `nil`

## See Also

### Related Documentation

- [appendFormat:](appendformat_.md): Adds a constructed string to the receiver.

### Modifying a String

- [appendFormat:](appendformat_.md): Adds a constructed string to the receiver.
- [applyTransform:reverse:range:updatedRange:](applytransform%28__reverse_range_updatedrange_%29.md): Transliterates the receiver by applying a specified ICU string transform.
- [deleteCharactersInRange:](deletecharacters%28in_%29.md): Removes from the receiver the characters in a given range.
- [insertString:atIndex:](insert%28__at_%29.md): Inserts into the receiver the characters of a given string at a given location.
- [replaceCharactersInRange:withString:](replacecharacters%28in_with_%29.md): Replaces the characters from `range` with those in `aString`.
- [replaceOccurrencesOfString:withString:options:range:](replaceoccurrences%28of_with_options_range_%29.md): Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.
- [setString:](setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.
