> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sharelink/init(items:subject:message:label:)](https://developer.apple.com/documentation/swiftui/sharelink/init(items:subject:message:label:))

# init(items:subject:message:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an instance that presents the share interface.

## Declaration

```swift
nonisolated init(items: Data, subject: Text? = nil, message: Text? = nil, @ContentBuilder label: () -> Label)
```

## Parameters

- `items`: The items to share.
- `subject`: A title for the items to show when sharing to activities that support a subject field.
- `message`: A description of the items to show when sharing to activities that support a message field. Activities may support attributed text or HTML strings.
- `label`: A content builder that produces a label that describes the share action.

## See Also

### Sharing items

- [init(items:subject:message:)](init%28items_subject_message_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `PreviewImage` is `Never`, `PreviewIcon` is `Never`, `Label` is `DefaultShareLinkLabel`, and `Data.Element` is `URL`. Creates an instance that presents the share interface.
- [init(\_:items:subject:message:)](init%28__items_subject_message_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `PreviewImage` is `Never`, `PreviewIcon` is `Never`, `Label` is `DefaultShareLinkLabel`, and `Data.Element` is `URL`. Creates an instance, with a custom label, that presents the share interface.
