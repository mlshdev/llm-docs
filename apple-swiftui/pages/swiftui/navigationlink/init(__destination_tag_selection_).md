> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationlink/init(_:destination:tag:selection:)](https://developer.apple.com/documentation/swiftui/navigationlink/init(_:destination:tag:selection:))

# init(\_:destination:tag:selection:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · tvOS 13.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 9.0)

Creates a navigation link that presents a destination view when a bound selection variable matches a value you provide, using a text label that the link generates from a title string.

> Use [init(\_:value:)](https://developer.apple.com/documentation/swiftui/navigationlink/init%28_:value:%29-9ziux) inside a [List](../list.md) within a [NavigationStack](../navigationstack.md) or [NavigationSplitView](../navigationsplitview.md). For more information, see [Migrating to new navigation types](../migrating-to-new-navigation-types.md).

## Declaration

```swift
nonisolated init<S, V>(_ title: S, destination: Destination, tag: V, selection: Binding<V?>) where S : StringProtocol, V : Hashable
```

## Parameters

- `title`: A string for creating a text label.
- `destination`: A view for the navigation link to present.
- `tag`: The value of `selection` that causes the link to present `destination`.
- `selection`: A bound variable that causes the link to present `destination` when `selection` becomes equal to `tag`.

## See Also

### Creating links with view arguments

- [init(\_:destination:isActive:)](init%28__destination_isactive_%29.md): Deprecated. Conforms when `Label` is `Text` and `Destination` conforms to `View`. Creates a navigation link that presents a destination view when active, with a text label that the link generates from a localized string key.
- [init(destination:isActive:label:)](init%28destination_isactive_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` conforms to `View`. Creates a navigation link that presents the destination view when active.
- [init(destination:tag:selection:label:)](init%28destination_tag_selection_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` conforms to `View`. Creates a navigation link that presents the destination view when a bound selection variable equals a given tag value.
