> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/groupbox/init(_:content:)](https://developer.apple.com/documentation/swiftui/groupbox/init(_:content:))

# init(\_:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a group box with the provided view content and title.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, @ContentBuilder content: () -> Content)
```

## Parameters

- `titleResource`: Text resource for the group box’s title, which describes the content of the group box.
- `content`: A [ContentBuilder](../contentbuilder.md) that produces the content for the group box.

## See Also

### Creating a group box

- [init(content:)](init%28content_%29.md): Conforms when `Label` is `EmptyView` and `Content` conforms to `View`. Creates an unlabeled group box with the provided view content.
- [init(content:label:)](init%28content_label_%29.md): Creates a group box with the provided label and view content.
