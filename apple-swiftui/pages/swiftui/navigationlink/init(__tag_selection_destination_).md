> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationlink/init(_:tag:selection:destination:)](https://developer.apple.com/documentation/swiftui/navigationlink/init(_:tag:selection:destination:))

# init(\_:tag:selection:destination:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · tvOS 13.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 9.0)

Creates a navigation link that presents a destination view when a bound selection variable matches a value you provide, using a text label that the link generates from a title string.

> Use [init(\_:value:)](https://developer.apple.com/documentation/swiftui/navigationlink/init%28_:value:%29-9ziux) inside a [List](../list.md) within a [NavigationStack](../navigationstack.md) or [NavigationSplitView](../navigationsplitview.md). For more information, see [Migrating to new navigation types](../migrating-to-new-navigation-types.md).

## Declaration

```swift
@export(implementation) nonisolated init<S, V>(_ title: S, tag: V, selection: Binding<V?>, @ContentBuilder destination: () -> Destination) where S : StringProtocol, V : Hashable
```

## Parameters

- `title`: A string for creating a text label.
- `tag`: The value of `selection` that causes the link to present `destination`.
- `selection`: A bound variable that causes the link to present `destination` when `selection` becomes equal to `tag`.
- `destination`: A view for the navigation link to present.

## See Also

### Creating links with content builders

- [init(\_:isActive:destination:)](init%28__isactive_destination_%29.md): Deprecated. Conforms when `Label` is `Text` and `Destination` conforms to `View`. Creates a navigation link that presents a destination view when active, with a text label that the link generates from a localized string key.
- [init(isActive:destination:label:)](init%28isactive_destination_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` conforms to `View`. Creates a navigation link that presents the destination view when active.
- [init(tag:selection:destination:label:)](init%28tag_selection_destination_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` conforms to `View`. Creates a navigation link that presents the destination view when a bound selection variable equals a given tag value.
