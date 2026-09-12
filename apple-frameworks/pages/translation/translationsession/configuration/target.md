> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/configuration/target](https://developer.apple.com/documentation/translation/translationsession/configuration/target)

# target

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

The language to translate content into.

## Declaration

```swift
var target: Locale.Language?
```

<a id="discussion"></a>

## Discussion

If left to its default value of `nil`, the session picks a target language according to the `source` and the person’s [preferredLanguages](../../../foundation/locale/preferredlanguages.md). Changing this value cancels the previous tasks and creates a new one.

## See Also

### Specifying translation languages

- [source](source.md): The language to translate content from.
