> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/groupbox/init(content:label:)](https://developer.apple.com/documentation/swiftui/groupbox/init(content:label:))

# init(content:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Creates a group box with the provided label and view content.

## Declaration

```swift
@export(implementation) nonisolated init(@ContentBuilder content: () -> Content, @ContentBuilder label: () -> Label)
```

## Parameters

- `content`: A [ContentBuilder](../contentbuilder.md) that produces the content for the group box.
- `label`: A [ContentBuilder](../contentbuilder.md) that produces a label for the group box.

## See Also

### Creating a group box

- [init(content:)](init%28content_%29.md): Conforms when `Label` is `EmptyView` and `Content` conforms to `View`. Creates an unlabeled group box with the provided view content.
- [init(\_:content:)](init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a group box with the provided view content and title.
