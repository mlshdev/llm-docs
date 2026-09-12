> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contentunavailableview/search](https://developer.apple.com/documentation/swiftui/contentunavailableview/search)

# search

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a `ContentUnavailableView` instance that conveys a search state.

## Declaration

```swift
static var search: ContentUnavailableView<SearchUnavailableContent.Label, SearchUnavailableContent.Description, SearchUnavailableContent.Actions> { get }
```

<a id="discussion"></a>

## Discussion

A `ContentUnavailableView` initialized with this static member is expected to be contained within a searchable view hierarchy. Such a configuration enables the search query to be parsed into the view’s description.

For example, consider the usage of this static member in *ContactsListView*:

```swift
struct ContactsListView: View {
    @ObservedObject private var viewModel = ContactsViewModel()

    var body: some View {
        NavigationStack {
            List {
                ForEach(viewModel.searchResults) { contact in
                    NavigationLink {
                        ContactsView(contact)
                    } label: {
                        Text(contact.name)
                    }
                }
            }
            .navigationTitle("Contacts")
            .searchable(text: $viewModel.searchText)
            .overlay {
                if searchResults.isEmpty {
                    ContentUnavailableView.search
                }
            }
        }
    }
}
```

## See Also

### Getting built-in unavailable views

- [search(text:)](search%28text_%29.md): Conforms when `Label` is `SearchUnavailableContent.Label`, `Description` is `SearchUnavailableContent.Description`, and `Actions` is `SearchUnavailableContent.Actions`. Creates a `ContentUnavailableView` instance that conveys a search state.
