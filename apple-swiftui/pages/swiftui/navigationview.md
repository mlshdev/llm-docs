> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationview](https://developer.apple.com/documentation/swiftui/navigationview)

# NavigationView

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 7.0+ (deprecated in 27.0)

A view for presenting a stack of views that represents a visible path in a navigation hierarchy.

> Use [NavigationStack](navigationstack.md) and [NavigationSplitView](navigationsplitview.md) instead. For more information, see [Migrating to new navigation types](migrating-to-new-navigation-types.md).

## Declaration

```swift
nonisolated struct NavigationView<Content> where Content : View
```

## Mentioned In

- [Migrating to new navigation types](migrating-to-new-navigation-types.md)
- [Picking container views for your content](picking-container-views-for-your-content.md)

<a id="overview"></a>

## Overview

Use a `NavigationView` to create a navigation-based app in which the user can traverse a collection of views. Users navigate to a destination view by selecting a [NavigationLink](navigationlink.md) that you provide. On iPadOS and macOS, the destination content appears in the next column. Other platforms push a new view onto the stack, and enable removing items from the stack with platform-specific controls, like a Back button or a swipe gesture.

![A diagram showing a multicolumn navigation view on macOS, and a stack of views on iOS.](https://developer.apple.com/images/com.apple.SwiftUI/NavigationView-1@2x.png)

Use the [init(content:)](navigationview/init%28content_%29.md) initializer to create a navigation view that directly associates navigation links and their destination views:

```swift
NavigationView {
    List(model.notes) { note in
        NavigationLink(note.title, destination: NoteEditor(id: note.id))
    }
    Text("Select a Note")
}
```

Style a navigation view by modifying it with the [navigationViewStyle(\_:)](view/navigationviewstyle%28__%29.md) view modifier. Use other modifiers, like [navigationTitle(\_:)](https://developer.apple.com/documentation/swiftui/view/navigationtitle%28_:%29-avgj), on views presented by the navigation view to customize the navigation interface for the presented view.

## Topics

### Creating a navigation view

- [init(content:)](navigationview/init%28content_%29.md): Deprecated. Creates a destination-based navigation view.

### Styling navigation views

- [navigationViewStyle(\_:)](view/navigationviewstyle%28__%29.md): Deprecated. Sets the style for navigation views within this view.
- [NavigationViewStyle](navigationviewstyle.md): Deprecated. A specification for the appearance and interaction of a navigation view.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Deprecated Types

- [tabItem(\_:)](view/tabitem%28__%29.md): Deprecated. Sets the tab bar item associated with this view.
