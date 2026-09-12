> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextchecker/ignoredwords](https://developer.apple.com/documentation/uikit/uitextchecker/ignoredwords)

# ignoredWords (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the words that the text checker ignores when spell-checking.

## Declaration

```swift
var ignoredWords: [String]? { get set }
```

<a id="return-value"></a>

## Return Value

An array of strings, each of which specifies a word the receiver ignores when it is spell-checking a document.

<a id="Discussion"></a>

## Discussion

The spell checker excludes ignored words as misspelled words during the current spell-checking session only.

## See Also

### Learning and Ignoring Words

- [ignoreWord(\_:)](ignoreword%28__%29.md): Tells the text checker to ignore the specified word when spell-checking.
- [learnWord(\_:)](learnword%28__%29.md): Tells the text checker to learn the specified word so that it doesn’t evaluate it as misspelled.
- [unlearnWord(\_:)](unlearnword%28__%29.md): Tells the text checker to unlearn the specified word.
- [hasLearnedWord(\_:)](haslearnedword%28__%29.md): Returns whether the text checker has learned the specified word.

# ignoredWords (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the words that the text checker ignores when spell-checking.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSArray<NSString *> * ignoredWords;
```

<a id="return-value"></a>

## Return Value

An array of strings, each of which specifies a word the receiver ignores when it is spell-checking a document.

<a id="Discussion"></a>

## Discussion

The spell checker excludes ignored words as misspelled words during the current spell-checking session only.

## See Also

### Learning and Ignoring Words

- [ignoreWord:](ignoreword%28__%29.md): Tells the text checker to ignore the specified word when spell-checking.
- [learnWord:](learnword%28__%29.md): Tells the text checker to learn the specified word so that it doesn’t evaluate it as misspelled.
- [unlearnWord:](unlearnword%28__%29.md): Tells the text checker to unlearn the specified word.
- [hasLearnedWord:](haslearnedword%28__%29.md): Returns whether the text checker has learned the specified word.
