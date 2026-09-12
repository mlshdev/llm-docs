> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabview/init(selection:content:)](https://developer.apple.com/documentation/swiftui/tabview/init(selection:content:))

# init(selection:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a tab view that uses a builder to create and specify selection values for its tabs.

## Declaration

```swift
nonisolated init<C>(selection: Binding<SelectionValue>, @TabContentBuilder<SelectionValue> content: () -> C) where Content == TabContentBuilder<SelectionValue>.Content<C>, C : TabContent
```

## Parameters

- `selection`: The selection in the TabView. The value of this binding must match the `value` of the tabs in `content`.
- `content`: The [Tab](../tab.md) content.

## See Also

### Creating a tab view

- [init(content:)](init%28content_%29.md): Conforms when `SelectionValue` is `Int` and `Content` conforms to `View`.
