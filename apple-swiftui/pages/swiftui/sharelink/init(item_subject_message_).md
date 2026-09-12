> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sharelink/init(item:subject:message:)](https://developer.apple.com/documentation/swiftui/sharelink/init(item:subject:message:))

# init(item:subject:message:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an instance that presents the share interface.

## Declaration

```swift
nonisolated init(item: String, subject: Text? = nil, message: Text? = nil) where Data == CollectionOfOne<String>
```

## Parameters

- `item`: The item to share.
- `subject`: A title for the item to show when sharing to activities that support a subject field.
- `message`: A description of the item to show when sharing to activities that support a message field. Activities may support attributed text or HTML strings.

<a id="discussion"></a>

## Discussion

Use this initializer when you want the system-standard appearance for `ShareLink`.

## See Also

### Sharing an item

- [init(\_:item:subject:message:)](init%28__item_subject_message_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `PreviewImage` is `Never`, `PreviewIcon` is `Never`, `Label` is `DefaultShareLinkLabel`, and `Data.Element` conforms to `Transferable`. Creates an instance, with a custom label, that presents the share interface.
- [init(item:subject:message:label:)](init%28item_subject_message_label_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `PreviewImage` is `Never`, `PreviewIcon` is `Never`, `Label` conforms to `View`, and `Data.Element` conforms to `Transferable`. Creates an instance that presents the share interface.
