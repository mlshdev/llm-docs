> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestionspicker/init(_:oncompletion:)-4e82p](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionspicker/init(_:oncompletion:)-4e82p)

# init(\_:onCompletion:)

**Framework:** Journaling Suggestions  
**Kind:** Initializer  
**Availability:** iOS 17.2+

Creates a suggestions picker with button text defined by the given string.

## Declaration

```swift
@MainActor @preconcurrency init<S>(_ title: S, onCompletion: @escaping (JournalingSuggestion) async -> Void) where S : StringProtocol
```

## Parameters

- `title`: A string that describes the suggestion picker’s purpose in the context of your app.
- `onCompletion`: Code that you supply, which processes any suggestions that a person chooses in the picker.

<a id="discussion"></a>

## Discussion

This initializer creates a text view on your behalf and uses the string argument to set its text.

## See Also

### Creating a suggestions picker

- [init(label:onCompletion:)](init%28label_oncompletion_%29.md): Creates a suggestions picker within the given view.
- [init(\_:onCompletion:)](init%28__oncompletion_%29-7uxov.md): Conforms when `Label` is `Text`. Creates a suggestions picker with button text defined by the given localized string key.
