> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translation/languageavailability/supportedlanguages

# supportedLanguages

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

A list of translation languages the framework supports.

## Declaration

```swift
var supportedLanguages: [Locale.Language] { get async }
```

<a id="return-value"></a>

## Return Value

An array of languages the framework supports.

<a id="discussion"></a>

## Discussion

A language must download before it can be used in a translation.
