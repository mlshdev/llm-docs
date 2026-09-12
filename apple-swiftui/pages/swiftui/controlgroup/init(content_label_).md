> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlgroup/init(content:label:)](https://developer.apple.com/documentation/swiftui/controlgroup/init(content:label:))

# init(content:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new control group with the specified content and a label.

## Declaration

```swift
nonisolated init<C, L>(@ContentBuilder content: () -> C, @ContentBuilder label: () -> L) where Content == LabeledControlGroupContent<C, L>, C : View, L : View
```

## Parameters

- `content`: The content to display.
- `label`: A view that describes the purpose of the group.

## See Also

### Creating a control group

- [init(content:)](init%28content_%29.md): Creates a new ControlGroup with the specified children
- [init(\_:content:)](init%28__content_%29.md): Conforms when `Content` conforms to `View`. Creates a new control group with the specified content that generates its label from a string.
