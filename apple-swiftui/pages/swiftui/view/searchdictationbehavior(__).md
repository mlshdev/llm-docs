> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/searchdictationbehavior(_:)](https://developer.apple.com/documentation/swiftui/view/searchdictationbehavior(_:))

# searchDictationBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Configures the dictation behavior for any search fields configured by the searchable modifier.

## Declaration

```swift
nonisolated func searchDictationBehavior(_ dictationBehavior: TextInputDictationBehavior) -> some View

```

<a id="discussion"></a>

## Discussion

By default, search fields on visionOS will automatically start dictation when looking at the dictation button in the search field. You can change this behavior by providing a value of [preventDictation](../textinputdictationbehavior/preventdictation.md) to this modifier.

See the [TextInputDictationBehavior](../textinputdictationbehavior.md) type for more information on the available dictation behaviors.

## See Also

### Dictating text

- [TextInputDictationActivation](../textinputdictationactivation.md)
- [TextInputDictationBehavior](../textinputdictationbehavior.md)
