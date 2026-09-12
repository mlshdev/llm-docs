> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestionspicker/init(_:oncompletion:)-7uxov](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionspicker/init(_:oncompletion:)-7uxov)

# init(\_:onCompletion:)

**Framework:** Journaling Suggestions  
**Kind:** Initializer  
**Availability:** iOS 17.2+

Creates a suggestions picker with button text defined by the given localized string key.

## Declaration

```swift
@MainActor @preconcurrency init(_ title: LocalizedStringKey, onCompletion: @escaping (JournalingSuggestion) async -> Void)
```

## Parameters

- `title`: A localized string key that describes the suggestion picker’s purpose in the context of your app.
- `onCompletion`: Code that you supply, which processes any suggestions that a person chooses in the picker.

<a id="discussion"></a>

## Discussion

This initializer creates a text view similar to the results of calling [init(\_:tableName:bundle:comment:)](https://developer.apple.com/documentation/swiftui/text/init%28_:tablename:bundle:comment:%29). See [Text](https://developer.apple.com/documentation/swiftui/text) for more information about localizing strings.

## See Also

### Creating a suggestions picker

- [init(label:onCompletion:)](init%28label_oncompletion_%29.md): Creates a suggestions picker within the given view.
- [init(\_:onCompletion:)](init%28__oncompletion_%29-4e82p.md): Conforms when `Label` is `Text`. Creates a suggestions picker with button text defined by the given string.
