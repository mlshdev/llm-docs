> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationsplitviewvisibility](https://developer.apple.com/documentation/swiftui/navigationsplitviewvisibility)

# NavigationSplitViewVisibility

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The visibility of the leading columns in a navigation split view.

## Declaration

```swift
struct NavigationSplitViewVisibility
```

<a id="overview"></a>

## Overview

Use a value of this type to control the visibility of the columns of a [NavigationSplitView](navigationsplitview.md). Create a [State](state.md) property with a value of this type, and pass a [Binding](binding.md) to that state to the [init(columnVisibility:sidebar:detail:)](navigationsplitview/init%28columnvisibility_sidebar_detail_%29.md) or [init(columnVisibility:sidebar:content:detail:)](navigationsplitview/init%28columnvisibility_sidebar_content_detail_%29.md) initializer when you create the navigation split view. You can then modify the value elsewhere in your code to:

- Hide all but the trailing column with [detailOnly](navigationsplitviewvisibility/detailonly.md).
- Hide the leading column of a three-column navigation split view with [doubleColumn](navigationsplitviewvisibility/doublecolumn.md).
- Show all the columns with [all](navigationsplitviewvisibility/all.md).
- Rely on the automatic behavior for the current context with [automatic](navigationsplitviewvisibility/automatic.md).

> **Note**

> Some platforms don’t respect every option. For example, macOS always displays the content column.

## Topics

### Getting visibilities

- [automatic](navigationsplitviewvisibility/automatic.md): Use the default leading column visibility for the current device.
- [all](navigationsplitviewvisibility/all.md): Show all the columns of a three-column navigation split view.
- [doubleColumn](navigationsplitviewvisibility/doublecolumn.md): Show the content column and detail area of a three-column navigation split view, or the sidebar column and detail area of a two-column navigation split view.
- [detailOnly](navigationsplitviewvisibility/detailonly.md): Hide the leading two columns of a three-column navigation split view, so that just the detail area shows.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presenting views in columns

- [Bringing robust navigation structure to your SwiftUI app](bringing-robust-navigation-structure-to-your-swiftui-app.md): Use navigation links, stacks, destinations, and paths to provide a streamlined experience for all platforms, as well as behaviors such as deep linking and state restoration.
- [Migrating to new navigation types](migrating-to-new-navigation-types.md): Improve navigation behavior in your app by replacing navigation views with navigation stacks and navigation split views.
- [NavigationSplitView](navigationsplitview.md): A view that presents views in two or three columns, where selections in leading columns control presentations in subsequent columns.
- [navigationSplitViewStyle(\_:)](view/navigationsplitviewstyle%28__%29.md): Sets the style for navigation split views within this view.
- [navigationSplitViewColumnWidth(\_:)](view/navigationsplitviewcolumnwidth%28__%29.md): Sets a fixed, preferred width for the column containing this view.
- [navigationSplitViewColumnWidth(min:ideal:max:)](view/navigationsplitviewcolumnwidth%28min_ideal_max_%29.md): Sets a flexible, preferred width for the column containing this view.
- [NavigationLink](navigationlink.md): A view that controls a navigation presentation.
