> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/submittriggers/search](https://developer.apple.com/documentation/swiftui/submittriggers/search)

# search

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Defines triggers originating from search fields constructed from searchable modifiers.

## Declaration

```swift
static let search: SubmitTriggers
```

<a id="discussion"></a>

## Discussion

In the example below, only the search field or search completions placed by the searchable modifier will trigger the view model to submit its current search query.

```swift
@StateObject private var viewModel = ViewModel()

NavigationView {
    SidebarView()
    DetailView()
}
.searchable(
    text: $viewModel.searchText,
    placement: .sidebar
) {
    SuggestionsView()
}
.onSubmit(of: .search) {
    viewModel.submitCurrentSearchQuery()
}
```

## See Also

### Getting submit triggers

- [text](text.md): Defines triggers originating from text input controls like `TextField` and `SecureField`.
