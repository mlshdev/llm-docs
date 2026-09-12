> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationlink/init(_:destination:isactive:)](https://developer.apple.com/documentation/swiftui/navigationlink/init(_:destination:isactive:))

# init(\_:destination:isActive:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · tvOS 13.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 9.0)

Creates a navigation link that presents a destination view when active, with a text label that the link generates from a localized string key.

> Use [init(\_:value:)](https://developer.apple.com/documentation/swiftui/navigationlink/init%28_:value:%29-810b2) instead. For more information, see [Migrating to new navigation types](../migrating-to-new-navigation-types.md).

## Declaration

```swift
nonisolated init(_ titleKey: LocalizedStringKey, destination: Destination, isActive: Binding<Bool>)
```

## Parameters

- `titleKey`: A localized string key for creating a text label.
- `destination`: A view for the navigation link to present.
- `isActive`: A binding to a Boolean value that indicates whether `destination` is currently presented.

## See Also

### Creating links with view arguments

- [init(destination:isActive:label:)](init%28destination_isactive_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` conforms to `View`. Creates a navigation link that presents the destination view when active.
- [init(\_:destination:tag:selection:)](init%28__destination_tag_selection_%29.md): Deprecated. Conforms when `Label` is `Text` and `Destination` conforms to `View`. Creates a navigation link that presents a destination view when a bound selection variable matches a value you provide, using a text label that the link generates from a title string.
- [init(destination:tag:selection:label:)](init%28destination_tag_selection_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` conforms to `View`. Creates a navigation link that presents the destination view when a bound selection variable equals a given tag value.
