> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/journalingsuggestionspicker(ispresented:journalingsuggestiontoken:oncompletion:)](https://developer.apple.com/documentation/swiftui/view/journalingsuggestionspicker(ispresented:journalingsuggestiontoken:oncompletion:))

# journalingSuggestionsPicker(isPresented:journalingSuggestionToken:onCompletion:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Presents a visual picker interface that contains events and images that a person can select to retrieve more information.

## Declaration

```swift
@MainActor @preconcurrency func journalingSuggestionsPicker(isPresented: Binding<Bool>, journalingSuggestionToken: JournalingSuggestionPresentationToken?, onCompletion: @escaping (JournalingSuggestion) async -> Void) -> some View

```

## Parameters

- `isPresented`: A binding to a `Bool` value that determines whether to show the picker.
- `journalingSuggestionToken`: A `JournalingSuggestionPresentationToken` struct to determine the content shown in the picker.
- `onCompletion`: Code that you supply, which processes any suggestions that a person may choose in the picker.

<a id="discussion"></a>

## Discussion

For more information about the Journaling Suggestions picker, see: doc:presenting-the-suggestions-picker-and-processing-a-selection.

## See Also

### Presenting journaling suggestions

- [journalingSuggestionsPicker(isPresented:onCompletion:)](journalingsuggestionspicker%28ispresented_oncompletion_%29.md): Presents a visual picker interface that contains events and images that a person can select to retrieve more information.
