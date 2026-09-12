> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sharelink/init(items:subject:message:preview:label:)](https://developer.apple.com/documentation/swiftui/sharelink/init(items:subject:message:preview:label:))

# init(items:subject:message:preview:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an instance that presents the share interface.

## Declaration

```swift
nonisolated init(items: Data, subject: Text? = nil, message: Text? = nil, preview: @escaping (Data.Element) -> SharePreview<PreviewImage, PreviewIcon>, @ContentBuilder label: () -> Label)
```

## Parameters

- `items`: The items to share.
- `subject`: A title for the items to show when sharing to activities that support a subject field.
- `message`: A description of the items to show when sharing to activities that support a message field. Activities may support attributed text or HTML strings.
- `preview`: A closure that returns a representation of each item to render in a preview.
- `label`: A content builder that produces a label that describes the share action.

## See Also

### Sharing items with a preview

- [init(items:subject:message:preview:)](init%28items_subject_message_preview_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `PreviewImage` conforms to `Transferable`, `PreviewIcon` conforms to `Transferable`, `Label` is `DefaultShareLinkLabel`, and `Data.Element` conforms to `Transferable`. Creates an instance that presents the share interface.
- [init(\_:items:subject:message:preview:)](init%28__items_subject_message_preview_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `PreviewImage` conforms to `Transferable`, `PreviewIcon` conforms to `Transferable`, `Label` is `DefaultShareLinkLabel`, and `Data.Element` conforms to `Transferable`. Creates an instance, with a custom label, that presents the share interface.
