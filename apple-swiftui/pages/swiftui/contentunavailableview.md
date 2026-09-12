> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contentunavailableview](https://developer.apple.com/documentation/swiftui/contentunavailableview)

# ContentUnavailableView

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An interface, consisting of a label and additional content, that you display when the content of your app is unavailable to users.

## Declaration

```swift
nonisolated struct ContentUnavailableView<Label, Description, Actions> where Label : View, Description : View, Actions : View
```

<a id="overview"></a>

## Overview

It is recommended to use `ContentUnavailableView` in situations where a view’s content cannot be displayed. That could be caused by a network error, a list without items, a search that returns no results etc.

You create an `ContentUnavailableView` in its simplest form, by providing a label and some additional content such as a description or a call to action:

```swift
ContentUnavailableView {
    Label("No Mail", systemImage: "tray.fill")
} description: {
    Text("New mails you receive will appear here.")
}
```

The system provides default `ContentUnavailableView`s that you can use in specific situations. The example below illustrates the usage of the [search](contentunavailableview/search.md) view:

```swift
struct ContentView: View {
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

## Topics

### Getting built-in unavailable views

- [search](contentunavailableview/search.md): Conforms when `Label` is `SearchUnavailableContent.Label`, `Description` is `SearchUnavailableContent.Description`, and `Actions` is `SearchUnavailableContent.Actions`. Creates a `ContentUnavailableView` instance that conveys a search state.
- [search(text:)](contentunavailableview/search%28text_%29.md): Conforms when `Label` is `SearchUnavailableContent.Label`, `Description` is `SearchUnavailableContent.Description`, and `Actions` is `SearchUnavailableContent.Actions`. Creates a `ContentUnavailableView` instance that conveys a search state.

### Creating an unavailable view

- [init(label:description:actions:)](contentunavailableview/init%28label_description_actions_%29.md): Creates an interface, consisting of a label and additional content, that you display when the content of your app is unavailable to users.
- [init(\_:image:description:)](contentunavailableview/init%28__image_description_%29.md): Conforms when `Label` is `Label<Text, Image>`, `Description` is `Text?`, and `Actions` is `EmptyView`. Creates an interface, consisting of a title generated from a localized string resource, an image and additional content, that you display when the content of your app is unavailable to users.
- [init(\_:systemImage:description:)](contentunavailableview/init%28__systemimage_description_%29.md): Conforms when `Label` is `Label<Text, Image>`, `Description` is `Text?`, and `Actions` is `EmptyView`. Creates an interface, consisting of a title generated from a localized string resource, a system icon image and additional content, that you display when the content of your app is unavailable to users.

### Supporting types

- [SearchUnavailableContent](searchunavailablecontent.md): A structure that represents the body of a static placeholder search view.

## Relationships

### Conforms To

- [View](view.md)
