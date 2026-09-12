> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextchecker/haslearnedword(_:)](https://developer.apple.com/documentation/uikit/uitextchecker/haslearnedword(_:))

# hasLearnedWord(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns whether the text checker has learned the specified word.

## Declaration

```swift
class func hasLearnedWord(_ word: String) -> Bool
```

## Parameters

- `word`: A string representing a word.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the class has learned the word, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Learning and Ignoring Words

- [ignoreWord(\_:)](ignoreword%28__%29.md): Tells the text checker to ignore the specified word when spell-checking.
- [ignoredWords](ignoredwords.md): Returns the words that the text checker ignores when spell-checking.
- [learnWord(\_:)](learnword%28__%29.md): Tells the text checker to learn the specified word so that it doesn’t evaluate it as misspelled.
- [unlearnWord(\_:)](unlearnword%28__%29.md): Tells the text checker to unlearn the specified word.

# hasLearnedWord: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns whether the text checker has learned the specified word.

## Declaration

```objectivec
+ (BOOL) hasLearnedWord:(NSString *) word;
```

## Parameters

- `word`: A string representing a word.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the class has learned the word, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Learning and Ignoring Words

- [ignoreWord:](ignoreword%28__%29.md): Tells the text checker to ignore the specified word when spell-checking.
- [ignoredWords](ignoredwords.md): Returns the words that the text checker ignores when spell-checking.
- [learnWord:](learnword%28__%29.md): Tells the text checker to learn the specified word so that it doesn’t evaluate it as misspelled.
- [unlearnWord:](unlearnword%28__%29.md): Tells the text checker to unlearn the specified word.
