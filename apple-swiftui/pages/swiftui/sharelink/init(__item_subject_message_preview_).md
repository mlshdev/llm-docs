> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sharelink/init(_:item:subject:message:preview:)](https://developer.apple.com/documentation/swiftui/sharelink/init(_:item:subject:message:preview:))

# init(\_:item:subject:message:preview:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an instance, with a custom label, that presents the share interface.

## Declaration

```swift
@export(implementation) nonisolated init<I>(_ titleResource: LocalizedStringResource, item: I, subject: Text? = nil, message: Text? = nil, preview: SharePreview<PreviewImage, PreviewIcon>) where Data == CollectionOfOne<I>, I : Transferable
```

## Parameters

- `titleResource`: A resource for the title of the share action.
- `item`: The item to share.
- `subject`: A title for the item to show when sharing to activities that support a subject field.
- `message`: A description of the item to show when sharing to activities that support a message field. Activities may support attributed text or HTML strings.
- `preview`: A representation of the item to render in a preview.

## See Also

### Sharing an item with a preview

- [init(item:subject:message:preview:)](init%28item_subject_message_preview_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `PreviewImage` conforms to `Transferable`, `PreviewIcon` conforms to `Transferable`, `Label` is `DefaultShareLinkLabel`, and `Data.Element` conforms to `Transferable`. Creates an instance that presents the share interface.
- [init(item:subject:message:preview:label:)](init%28item_subject_message_preview_label_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `PreviewImage` conforms to `Transferable`, `PreviewIcon` conforms to `Transferable`, `Label` conforms to `View`, and `Data.Element` conforms to `Transferable`. Creates an instance that presents the share interface.
