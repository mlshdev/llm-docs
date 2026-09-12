> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sharelink/init(_:items:subject:message:preview:)](https://developer.apple.com/documentation/swiftui/sharelink/init(_:items:subject:message:preview:))

# init(\_:items:subject:message:preview:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an instance, with a custom label, that presents the share interface.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, items: Data, subject: Text? = nil, message: Text? = nil, preview: @escaping (Data.Element) -> SharePreview<PreviewImage, PreviewIcon>)
```

## Parameters

- `titleResource`: A resource for the title of the share action.
- `items`: The items to share.
- `subject`: A title for the items to show when sharing to activities that support a subject field.
- `message`: A description of the items to show when sharing to activities that support a message field. Activities may support attributed text or HTML strings.
- `preview`: A closure that returns a representation of each item to render in a preview.

## See Also

### Sharing items with a preview

- [init(items:subject:message:preview:)](init%28items_subject_message_preview_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `PreviewImage` conforms to `Transferable`, `PreviewIcon` conforms to `Transferable`, `Label` is `DefaultShareLinkLabel`, and `Data.Element` conforms to `Transferable`. Creates an instance that presents the share interface.
- [init(items:subject:message:preview:label:)](init%28items_subject_message_preview_label_%29.md): Creates an instance that presents the share interface.
