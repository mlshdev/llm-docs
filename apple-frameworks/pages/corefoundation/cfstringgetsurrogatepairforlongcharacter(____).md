> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetsurrogatepairforlongcharacter(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetsurrogatepairforlongcharacter(_:_:))

# CFStringGetSurrogatePairForLongCharacter(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Maps a given UTF-32 character to a pair of UTF-16 surrogate characters.

## Declaration

```swift
func CFStringGetSurrogatePairForLongCharacter(_ character: UTF32Char, _ surrogates: UnsafeMutablePointer<UniChar>!) -> Bool
```

## Parameters

- `character`: A UTF-32 character.
- `surrogates`: A buffer to contain the returned surrogate pair.

  The buffer must have space for at least 2 UTF-16 characters.

<a id="return-value"></a>

## Return Value

`true` if `character` is mapped to a surrogate pair, otherwise `false`.

## See Also

### Managing Surrogates

- [CFStringGetLongCharacterForSurrogatePair(\_:\_:)](cfstringgetlongcharacterforsurrogatepair%28____%29.md): Returns a UTF-32 character that corresponds to a given pair of UTF-16 surrogate characters.
- [CFStringIsSurrogateHighCharacter(\_:)](cfstringissurrogatehighcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a high character in a surrogate pair.
- [CFStringIsSurrogateLowCharacter(\_:)](cfstringissurrogatelowcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a low character in a surrogate pair.

# CFStringGetSurrogatePairForLongCharacter (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Maps a given UTF-32 character to a pair of UTF-16 surrogate characters.

## Declaration

```objectivec
static Boolean CFStringGetSurrogatePairForLongCharacter(UTF32Char character, UniChar *surrogates);
```

## Parameters

- `character`: A UTF-32 character.
- `surrogates`: A buffer to contain the returned surrogate pair.

  The buffer must have space for at least 2 UTF-16 characters.

<a id="return-value"></a>

## Return Value

`true` if `character` is mapped to a surrogate pair, otherwise `false`.

## See Also

### Managing Surrogates

- [CFStringGetLongCharacterForSurrogatePair](cfstringgetlongcharacterforsurrogatepair%28____%29.md): Returns a UTF-32 character that corresponds to a given pair of UTF-16 surrogate characters.
- [CFStringIsSurrogateHighCharacter](cfstringissurrogatehighcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a high character in a surrogate pair.
- [CFStringIsSurrogateLowCharacter](cfstringissurrogatelowcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a low character in a surrogate pair.
