> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sharelink/init(items:subject:message:)](https://developer.apple.com/documentation/swiftui/sharelink/init(items:subject:message:))

# init(items:subject:message:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an instance that presents the share interface.

## Declaration

```swift
nonisolated init(items: Data, subject: Text? = nil, message: Text? = nil)
```

## Parameters

- `items`: The items to share.
- `subject`: A title for the items to show when sharing to activities that support a subject field.
- `message`: A description of the items to show when sharing to activities that support a message field. Activities may support attributed text or HTML strings.

<a id="discussion"></a>

## Discussion

Use this initializer when you want the system-standard appearance for `ShareLink`.

## See Also

### Sharing items

- [init(\_:items:subject:message:)](init%28__items_subject_message_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `PreviewImage` is `Never`, `PreviewIcon` is `Never`, `Label` is `DefaultShareLinkLabel`, and `Data.Element` is `URL`. Creates an instance, with a custom label, that presents the share interface.
- [init(items:subject:message:label:)](init%28items_subject_message_label_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `PreviewImage` is `Never`, `PreviewIcon` is `Never`, `Label` conforms to `View`, and `Data.Element` is `URL`. Creates an instance that presents the share interface.
