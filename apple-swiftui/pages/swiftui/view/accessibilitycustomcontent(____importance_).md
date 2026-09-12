> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilitycustomcontent(_:_:importance:)](https://developer.apple.com/documentation/swiftui/view/accessibilitycustomcontent(_:_:importance:))

# accessibilityCustomContent(\_:\_:importance:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Add additional accessibility information to the view.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityCustomContent(_ key: AccessibilityCustomContentKey, _ valueResource: LocalizedStringResource, importance: AXCustomContent.Importance = .default) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

## Parameters

- `key`: Key used to specify the identifier and label of the of the additional accessibility information entry.
- `valueResource`: Text resource for the additional accessibility information. For example: “landscape.” A value of `nil` will remove any entry of additional information added earlier for any `key` withthe same identifier.
- `importance`: Importance of the accessibility information. High-importance information gets read out immediately, while default-importance information must be explicitly asked for by the user.

<a id="discussion"></a>

## Discussion

Use this method to add information you want accessibility users to be able to access about this element, beyond the basics of label, value, and hint. For example, `accessibilityCustomContent` can be used to add information about the orientation of a photograph, or the number of people found in the picture.

> **Note**

> Repeated calls of `accessibilityCustomContent` with `key`s having different identifiers will create new entries of additional information. Calling `accessibilityCustomContent` repeatedly with `key`s having matching identifiers will replace the previous entry.

## See Also

### Adding custom descriptions

- [AccessibilityCustomContentKey](../accessibilitycustomcontentkey.md): Key used to specify the identifier and label associated with an entry of additional accessibility information.
