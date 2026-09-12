> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidictationphrase/alternativeinterpretations](https://developer.apple.com/documentation/uikit/uidictationphrase/alternativeinterpretations)

# alternativeInterpretations (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.1+ · iPadOS 5.1+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of alternative textual interpretations of a dictated phrase.

## Declaration

```swift
var alternativeInterpretations: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

If the system determines only one textual interpretation of a dictated phrase, the value of this property is `nil`. If there’s more than one interpretation, this property contains an array of strings, with the first being most likely interpretation and the last being the least likely.

## See Also

### Obtaining textual interpretations of spoken text

- [text](text.md): The most likely textual interpretation of a dictated phrase.

# alternativeInterpretations (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.1+ · iPadOS 5.1+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of alternative textual interpretations of a dictated phrase.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSString *> * alternativeInterpretations;
```

<a id="Discussion"></a>

## Discussion

If the system determines only one textual interpretation of a dictated phrase, the value of this property is `nil`. If there’s more than one interpretation, this property contains an array of strings, with the first being most likely interpretation and the last being the least likely.

## See Also

### Obtaining textual interpretations of spoken text

- [text](text.md): The most likely textual interpretation of a dictated phrase.
