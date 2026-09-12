> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinputviewcontroller/requestsupplementarylexicon(completion:)](https://developer.apple.com/documentation/uikit/uiinputviewcontroller/requestsupplementarylexicon(completion:))

# requestSupplementaryLexicon(completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Obtains a supplementary lexicon of term pairs in a custom keyboard.

## Declaration

```swift
func requestSupplementaryLexicon(completion completionHandler: @escaping (UILexicon) -> Void)
```

```swift
func requestSupplementaryLexicon() async -> UILexicon
```

## Parameters

- `completionHandler`: Code that you write to make use of the returned `UILexicon` object.

<a id="Discussion"></a>

## Discussion

Call this method to obtain a [UILexicon](../uilexicon.md) object containing a basic set of term pairs for use in autocorrection or textual suggestions based on user input. The [UILexicon](../uilexicon.md) object contains words from various sources, including:

- Unpaired first names and last names from the user’s Address Book database
- Text shortcuts defined in the Settings \> General \> Keyboard \> Shortcuts list
- A common words dictionary

Consider this lexicon as a supplement to a more complete lexicon of your own design.

# requestSupplementaryLexiconWithCompletion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Obtains a supplementary lexicon of term pairs in a custom keyboard.

## Declaration

```objectivec
- (void) requestSupplementaryLexiconWithCompletion:(void (^)(UILexicon *)) completionHandler;
```

## Parameters

- `completionHandler`: Code that you write to make use of the returned `UILexicon` object.

<a id="Discussion"></a>

## Discussion

Call this method to obtain a [UILexicon](../uilexicon.md) object containing a basic set of term pairs for use in autocorrection or textual suggestions based on user input. The [UILexicon](../uilexicon.md) object contains words from various sources, including:

- Unpaired first names and last names from the user’s Address Book database
- Text shortcuts defined in the Settings \> General \> Keyboard \> Shortcuts list
- A common words dictionary

Consider this lexicon as a supplement to a more complete lexicon of your own design.
