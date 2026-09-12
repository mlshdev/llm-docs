> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetlongcharacterforsurrogatepair(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetlongcharacterforsurrogatepair(_:_:))

# CFStringGetLongCharacterForSurrogatePair(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a UTF-32 character that corresponds to a given pair of UTF-16 surrogate characters.

## Declaration

```swift
func CFStringGetLongCharacterForSurrogatePair(_ surrogateHigh: UniChar, _ surrogateLow: UniChar) -> UTF32Char
```

## Parameters

- `surrogateHigh`: The high surrogate character.
- `surrogateLow`: The low surrogate character.

<a id="return-value"></a>

## Return Value

A UTF32Char that corresponds to the combination of `surrogateHigh` and `surrogateLow`.

## See Also

### Managing Surrogates

- [CFStringGetSurrogatePairForLongCharacter(\_:\_:)](cfstringgetsurrogatepairforlongcharacter%28____%29.md): Maps a given UTF-32 character to a pair of UTF-16 surrogate characters.
- [CFStringIsSurrogateHighCharacter(\_:)](cfstringissurrogatehighcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a high character in a surrogate pair.
- [CFStringIsSurrogateLowCharacter(\_:)](cfstringissurrogatelowcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a low character in a surrogate pair.

# CFStringGetLongCharacterForSurrogatePair (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a UTF-32 character that corresponds to a given pair of UTF-16 surrogate characters.

## Declaration

```objectivec
static UTF32Char CFStringGetLongCharacterForSurrogatePair(UniChar surrogateHigh, UniChar surrogateLow);
```

## Parameters

- `surrogateHigh`: The high surrogate character.
- `surrogateLow`: The low surrogate character.

<a id="return-value"></a>

## Return Value

A UTF32Char that corresponds to the combination of `surrogateHigh` and `surrogateLow`.

## See Also

### Managing Surrogates

- [CFStringGetSurrogatePairForLongCharacter](cfstringgetsurrogatepairforlongcharacter%28____%29.md): Maps a given UTF-32 character to a pair of UTF-16 surrogate characters.
- [CFStringIsSurrogateHighCharacter](cfstringissurrogatehighcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a high character in a surrogate pair.
- [CFStringIsSurrogateLowCharacter](cfstringissurrogatelowcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a low character in a surrogate pair.
