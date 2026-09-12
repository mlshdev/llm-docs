> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/groupbox/init(content:)](https://developer.apple.com/documentation/swiftui/groupbox/init(content:))

# init(content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Creates an unlabeled group box with the provided view content.

## Declaration

```swift
nonisolated init(@ContentBuilder content: () -> Content)
```

## Parameters

- `content`: A [ContentBuilder](../contentbuilder.md) that produces the content for the group box.

## See Also

### Creating a group box

- [init(content:label:)](init%28content_label_%29.md): Creates a group box with the provided label and view content.
- [init(\_:content:)](init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a group box with the provided view content and title.
