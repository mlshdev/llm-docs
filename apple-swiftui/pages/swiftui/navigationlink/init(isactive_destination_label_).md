> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationlink/init(isactive:destination:label:)](https://developer.apple.com/documentation/swiftui/navigationlink/init(isactive:destination:label:))

# init(isActive:destination:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · tvOS 13.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 9.0)

Creates a navigation link that presents the destination view when active.

> Use [init(value:label:)](https://developer.apple.com/documentation/swiftui/navigationlink/init%28value:label:%29-3qb8y) inside a [NavigationStack](../navigationstack.md) or [NavigationSplitView](../navigationsplitview.md). For more information, see [Migrating to new navigation types](../migrating-to-new-navigation-types.md).

## Declaration

```swift
@export(implementation) nonisolated init(isActive: Binding<Bool>, @ContentBuilder destination: () -> Destination, @ContentBuilder label: () -> Label)
```

## Parameters

- `isActive`: A binding to a Boolean value that indicates whether `destination` is currently presented.
- `destination`: A view for the navigation link to present.
- `label`: A content builder to produce a label describing the `destination` to present.

## See Also

### Creating links with content builders

- [init(\_:isActive:destination:)](init%28__isactive_destination_%29.md): Deprecated. Conforms when `Label` is `Text` and `Destination` conforms to `View`. Creates a navigation link that presents a destination view when active, with a text label that the link generates from a localized string key.
- [init(\_:tag:selection:destination:)](init%28__tag_selection_destination_%29.md): Deprecated. Conforms when `Label` is `Text` and `Destination` conforms to `View`. Creates a navigation link that presents a destination view when a bound selection variable matches a value you provide, using a text label that the link generates from a title string.
- [init(tag:selection:destination:label:)](init%28tag_selection_destination_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` conforms to `View`. Creates a navigation link that presents the destination view when a bound selection variable equals a given tag value.
