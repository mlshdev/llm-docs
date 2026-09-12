> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/searchpresentationtoolbarbehavior(_:)](https://developer.apple.com/documentation/swiftui/view/searchpresentationtoolbarbehavior(_:))

# searchPresentationToolbarBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.1+ · iPadOS 17.1+ · Mac Catalyst 17.1+ · macOS 14.1+ · tvOS 17.1+ · visionOS 1.0+ · watchOS 10.1+

Configures the search toolbar presentation behavior for any searchable modifiers within this view.

## Declaration

```swift
nonisolated func searchPresentationToolbarBehavior(_ behavior: SearchPresentationToolbarBehavior) -> some View

```

<a id="discussion"></a>

## Discussion

By default on iOS, a toolbar may hide parts of its content when presenting search to focus on searching. You can override this behavior by providing a value of [avoidHidingContent](../searchpresentationtoolbarbehavior/avoidhidingcontent.md) to this modifer.

```swift
@State private var searchText = ""

List {
    // ... content
}
.searchable(text: $searchText)
.searchPresentationToolbarBehavior(.avoidHidingContent)
```

## See Also

### Displaying toolbar content during search

- [SearchPresentationToolbarBehavior](../searchpresentationtoolbarbehavior.md): A type that defines how the toolbar behaves when presenting search.
