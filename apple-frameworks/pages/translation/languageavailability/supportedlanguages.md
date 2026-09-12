> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/languageavailability/supportedlanguages](https://developer.apple.com/documentation/translation/languageavailability/supportedlanguages)

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
