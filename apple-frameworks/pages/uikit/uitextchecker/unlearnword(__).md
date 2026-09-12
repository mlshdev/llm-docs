> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextchecker/unlearnword(_:)](https://developer.apple.com/documentation/uikit/uitextchecker/unlearnword(_:))

# unlearnWord(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the text checker to unlearn the specified word.

## Declaration

```swift
class func unlearnWord(_ word: String)
```

## Parameters

- `word`: A string representing the word for the class to unlearn.

<a id="Discussion"></a>

## Discussion

When a `UITextChecker` object unlearns a word, it is removed from the dictionary.

## See Also

### Learning and Ignoring Words

- [ignoreWord(\_:)](ignoreword%28__%29.md): Tells the text checker to ignore the specified word when spell-checking.
- [ignoredWords](ignoredwords.md): Returns the words that the text checker ignores when spell-checking.
- [learnWord(\_:)](learnword%28__%29.md): Tells the text checker to learn the specified word so that it doesn’t evaluate it as misspelled.
- [hasLearnedWord(\_:)](haslearnedword%28__%29.md): Returns whether the text checker has learned the specified word.

# unlearnWord: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the text checker to unlearn the specified word.

## Declaration

```objectivec
+ (void) unlearnWord:(NSString *) word;
```

## Parameters

- `word`: A string representing the word for the class to unlearn.

<a id="Discussion"></a>

## Discussion

When a `UITextChecker` object unlearns a word, it is removed from the dictionary.

## See Also

### Learning and Ignoring Words

- [ignoreWord:](ignoreword%28__%29.md): Tells the text checker to ignore the specified word when spell-checking.
- [ignoredWords](ignoredwords.md): Returns the words that the text checker ignores when spell-checking.
- [learnWord:](learnword%28__%29.md): Tells the text checker to learn the specified word so that it doesn’t evaluate it as misspelled.
- [hasLearnedWord:](haslearnedword%28__%29.md): Returns whether the text checker has learned the specified word.
