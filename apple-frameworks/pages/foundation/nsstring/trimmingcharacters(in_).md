> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/trimmingcharacters(in:)](https://developer.apple.com/documentation/foundation/nsstring/trimmingcharacters(in:))

# trimmingCharacters(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string made by removing from both ends of the receiver characters contained in a given character set.

## Declaration

```swift
func trimmingCharacters(in set: CharacterSet) -> String
```

## Parameters

- `set`: A character set containing the characters to remove from the receiver. `set` must not be `nil`.

<a id="return-value"></a>

## Return Value

A new string made by removing from both ends of the receiver characters contained in `set`. If the receiver is composed entirely of characters from `set`, the empty string is returned.

<a id="Discussion"></a>

## Discussion

Use [whitespaces](../nscharacterset/whitespaces.md) or [whitespacesAndNewlines](../nscharacterset/whitespacesandnewlines.md) to remove whitespace around strings.

## See Also

### Dividing Strings

- [components(separatedBy:)](components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.
- [components(separatedBy:)](components%28separatedby_%29-27x9g.md): Returns an array containing substrings from the receiver that have been divided by characters in a given set.
- [substring(from:)](substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substring(with:)](substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.
- [substring(to:)](substring%28to_%29.md): Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.

# stringByTrimmingCharactersInSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string made by removing from both ends of the receiver characters contained in a given character set.

## Declaration

```objectivec
- (NSString *) stringByTrimmingCharactersInSet:(NSCharacterSet *) set;
```

## Parameters

- `set`: A character set containing the characters to remove from the receiver. `set` must not be `nil`.

<a id="return-value"></a>

## Return Value

A new string made by removing from both ends of the receiver characters contained in `set`. If the receiver is composed entirely of characters from `set`, the empty string is returned.

<a id="Discussion"></a>

## Discussion

Use [whitespaceCharacterSet](../nscharacterset/whitespaces.md) or [whitespaceAndNewlineCharacterSet](../nscharacterset/whitespacesandnewlines.md) to remove whitespace around strings.

## See Also

### Dividing Strings

- [componentsSeparatedByString:](components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.
- [componentsSeparatedByCharactersInSet:](components%28separatedby_%29-27x9g.md): Returns an array containing substrings from the receiver that have been divided by characters in a given set.
- [substringFromIndex:](substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substringWithRange:](substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.
- [substringToIndex:](substring%28to_%29.md): Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.
