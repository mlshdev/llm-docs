> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/naturallanguage/nllanguagerecognizer/languagehints-3gy00

# languageHints

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A dictionary that maps languages to their probabilities in the language identification process.

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary<NSString *,NSNumber *> * languageHints;
```

<a id="Discussion"></a>

## Discussion

This is a dictionary mapping languages to their probabilities and used by [processString:](processstring%28__%29.md).

## See Also

### Guiding the recognizer

- [languageConstraints](languageconstraints.md): Limits the set of possible languages that the recognizer will return.
