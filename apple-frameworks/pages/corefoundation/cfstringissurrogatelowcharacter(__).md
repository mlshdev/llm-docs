> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringissurrogatelowcharacter(_:)](https://developer.apple.com/documentation/corefoundation/cfstringissurrogatelowcharacter(_:))

# CFStringIsSurrogateLowCharacter(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a given character is a low character in a surrogate pair.

## Declaration

```swift
func CFStringIsSurrogateLowCharacter(_ character: UniChar) -> Bool
```

## Parameters

- `character`: A UTF-16 character.

<a id="return-value"></a>

## Return Value

`true` if `character` is a low character in a surrogate pair, otherwise `false`.

## See Also

### Managing Surrogates

- [CFStringGetLongCharacterForSurrogatePair(\_:\_:)](cfstringgetlongcharacterforsurrogatepair%28____%29.md): Returns a UTF-32 character that corresponds to a given pair of UTF-16 surrogate characters.
- [CFStringGetSurrogatePairForLongCharacter(\_:\_:)](cfstringgetsurrogatepairforlongcharacter%28____%29.md): Maps a given UTF-32 character to a pair of UTF-16 surrogate characters.
- [CFStringIsSurrogateHighCharacter(\_:)](cfstringissurrogatehighcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a high character in a surrogate pair.

# CFStringIsSurrogateLowCharacter (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a given character is a low character in a surrogate pair.

## Declaration

```objectivec
static Boolean CFStringIsSurrogateLowCharacter(UniChar character);
```

## Parameters

- `character`: A UTF-16 character.

<a id="return-value"></a>

## Return Value

`true` if `character` is a low character in a surrogate pair, otherwise `false`.

## See Also

### Managing Surrogates

- [CFStringGetLongCharacterForSurrogatePair](cfstringgetlongcharacterforsurrogatepair%28____%29.md): Returns a UTF-32 character that corresponds to a given pair of UTF-16 surrogate characters.
- [CFStringGetSurrogatePairForLongCharacter](cfstringgetsurrogatepairforlongcharacter%28____%29.md): Maps a given UTF-32 character to a pair of UTF-16 surrogate characters.
- [CFStringIsSurrogateHighCharacter](cfstringissurrogatehighcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a high character in a surrogate pair.
