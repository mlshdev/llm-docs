> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/backforwardlist-swift.struct](https://developer.apple.com/documentation/webkit/webpage/backforwardlist-swift.struct)

# WebPage.BackForwardList

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An observable representation of a webpage’s previously loaded resources.

## Declaration

```swift
@MainActor struct BackForwardList
```

<a id="overview"></a>

## Overview

This type can be used to facilitate navigating to prior or subsequent loaded resources and for observing when new entries get added or removed.

In this example, the back-forward list is used to create a SwiftUI View to facilitate navigating to previous or next items:

```swift
private struct BackForwardMenuView: View {
    struct LabelConfiguration {
        let text: String
        let systemImage: String
    }

    let list: [WebPage.BackForwardList.Item]
    let label: LabelConfiguration
    let navigateToItem: (WebPage.BackForwardList.Item) -> Void

    var body: some View {
        Menu {
            ForEach(list) { item in
                Button(item.title ?? item.url.absoluteString) {
                    navigateToItem(item)
                }
            }
        } label: {
            Label(label.text, systemImage: label.systemImage)
                .labelStyle(.iconOnly)
        } primaryAction: {
            navigateToItem(list.first!)
        }
        .disabled(list.isEmpty)
    }
}
```

The view can then be used for both the back and forward list using a specific [WebPage](../webpage.md):

```swift
struct ContentView: some View {
    @State private var page = WebPage()

    var body: some View {
        WebView(page)
            .toolbar {
                ToolbarItemGroup {
                    ToolbarBackForwardMenuView(
                        list: page.backForwardList.backList.reversed(),
                        label: .init(text: "Backward", systemImage: "chevron.backward")
                    ) {
                        viewModel.page.load($0)
                    }

                    ToolbarBackForwardMenuView(
                        list: page.backForwardList.forwardList,
                        label: .init(text: "Forward", systemImage: "chevron.forward")
                    ) {
                        viewModel.page.load($0)
                    }
                }
            }
    }
}
```

Because [backForwardList](backforwardlist-swift.property.md) is an observable property, the states of these buttons are automatically updated.

## Topics

### Structures

- [WebPage.BackForwardList.Item](backforwardlist-swift.struct/item.md): A representation of a resource that a webpage previously visited.

### Instance Properties

- [backList](backforwardlist-swift.struct/backlist.md): The array of items that precede the current item.
- [currentItem](backforwardlist-swift.struct/currentitem.md): The current item.
- [forwardList](backforwardlist-swift.struct/forwardlist.md): The array of items that follow the current item.

### Subscripts

- [subscript(\_:)](backforwardlist-swift.struct/subscript%28__%29.md): Accesses the item at the relative offset from the current item.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing navigation between webpages

- [WebPage.NavigationEvent](navigationevent.md): A particular state that occurs during the progression of a navigation.
- [WebPage.BackForwardList.Item](backforwardlist-swift.struct/item.md): A representation of a resource that a webpage previously visited.
- [WebPage.BackForwardList.Item.ID](backforwardlist-swift.struct/item/id-swift.struct.md): An opaque type representing the identifier for an item.
