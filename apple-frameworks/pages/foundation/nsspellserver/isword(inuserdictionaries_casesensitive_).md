> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserver/isword(inuserdictionaries:casesensitive:)](https://developer.apple.com/documentation/foundation/nsspellserver/isword(inuserdictionaries:casesensitive:))

# isWord(inUserDictionaries:caseSensitive:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Indicates whether a given word is in the user’s list of learned words or the document’s list of words to ignore.

## Declaration

```swift
func isWord(inUserDictionaries word: String, caseSensitive flag: Bool) -> Bool
```

## Parameters

- `word`: The word to compare with those in the user dictionaries.
- `flag`: Specifies whether the comparison is case sensitive.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether the word is in the user dictionaries. If [true](https://developer.apple.com/documentation/swift/true), the word is acceptable to the user.

# isWordInUserDictionaries:caseSensitive: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Indicates whether a given word is in the user’s list of learned words or the document’s list of words to ignore.

## Declaration

```objectivec
- (BOOL) isWordInUserDictionaries:(NSString *) word caseSensitive:(BOOL) flag;
```

## Parameters

- `word`: The word to compare with those in the user dictionaries.
- `flag`: Specifies whether the comparison is case sensitive.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether the word is in the user dictionaries. If [true](https://developer.apple.com/documentation/swift/true), the word is acceptable to the user.
