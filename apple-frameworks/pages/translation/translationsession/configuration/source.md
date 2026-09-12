> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/configuration/source](https://developer.apple.com/documentation/translation/translationsession/configuration/source)

# source

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

The language to translate content from.

## Declaration

```swift
var source: Locale.Language?
```

<a id="discussion"></a>

## Discussion

If left to its default value of `nil`, the session tries to identify the source language automatically, and prompts the person to choose a source language if it’s unclear. Changing this value cancels the previous task and creates a new one.

## See Also

### Specifying translation languages

- [target](target.md): The language to translate content into.
