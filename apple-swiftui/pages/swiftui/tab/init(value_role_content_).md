> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tab/init(value:role:content:)](https://developer.apple.com/documentation/swiftui/tab/init(value:role:content:))

# init(value:role:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a new tab with a label inferred from the role.

## Declaration

```swift
nonisolated init(value: Value, role: TabRole?, @ContentBuilder content: () -> Content) where Label == DefaultTabLabel
```

## Parameters

- `value`: The `selection` value which selects this tab.
- `role`: The `role` defining the semantic purpose of the tab.
- `content`: The view content of the tab.

## See Also

### Creating a tab

- [init(content:)](init%28content_%29.md): Conforms when `Value` is `Never`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab that you can use in a tab view, with an empty label.
- [init(value:content:)](init%28value_content_%29.md): Conforms when `Value` conforms to `Hashable`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab that you can use in a tab view, with an empty label.
- [init(role:content:)](init%28role_content_%29.md): Conforms when `Value` is `Never`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab that you can use in a tab view, with an empty label.
