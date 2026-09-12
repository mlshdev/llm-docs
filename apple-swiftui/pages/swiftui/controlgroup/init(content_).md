> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlgroup/init(content:)](https://developer.apple.com/documentation/swiftui/controlgroup/init(content:))

# init(content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new ControlGroup with the specified children

## Declaration

```swift
nonisolated init(@ContentBuilder content: () -> Content)
```

## Parameters

- `content`: The children to display

## See Also

### Creating a control group

- [init(content:label:)](init%28content_label_%29.md): Conforms when `Content` conforms to `View`. Creates a new control group with the specified content and a label.
- [init(\_:content:)](init%28__content_%29.md): Conforms when `Content` conforms to `View`. Creates a new control group with the specified content that generates its label from a string.
