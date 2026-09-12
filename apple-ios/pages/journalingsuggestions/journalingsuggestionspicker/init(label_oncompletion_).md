> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestionspicker/init(label:oncompletion:)](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionspicker/init(label:oncompletion:))

# init(label:onCompletion:)

**Framework:** Journaling Suggestions  
**Kind:** Initializer  
**Availability:** iOS 17.2+

Creates a suggestions picker within the given view.

## Declaration

```swift
@MainActor @preconcurrency init(@ViewBuilder label: () -> Label, onCompletion: @escaping (JournalingSuggestion) async -> Void)
```

## Parameters

- `label`: A view that describes the suggestion picker’s purpose in the context of your app.
- `onCompletion`: Code that you supply, which processes any suggestions that a person chooses in the picker.

## See Also

### Creating a suggestions picker

- [init(\_:onCompletion:)](init%28__oncompletion_%29-7uxov.md): Conforms when `Label` is `Text`. Creates a suggestions picker with button text defined by the given localized string key.
- [init(\_:onCompletion:)](init%28__oncompletion_%29-4e82p.md): Conforms when `Label` is `Text`. Creates a suggestions picker with button text defined by the given string.
