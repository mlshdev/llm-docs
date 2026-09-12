> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nllanguagerecognizer/languageconstraints](https://developer.apple.com/documentation/naturallanguage/nllanguagerecognizer/languageconstraints)

# languageConstraints (Swift)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Limits the set of possible languages that the recognizer will return.

## Declaration

```swift
var languageConstraints: [NLLanguage] { get set }
```

## See Also

### Guiding the recognizer

- [languageHints](languagehints-7dwgv.md): A dictionary that maps languages to their probabilities in the language identification process.

# languageConstraints (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Limits the set of possible languages that the recognizer will return.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * languageConstraints;
```

## See Also

### Guiding the recognizer

- [languageHints](languagehints-3gy00.md): A dictionary that maps languages to their probabilities in the language identification process.
