> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilitytextcontenttype(_:)](https://developer.apple.com/documentation/swiftui/view/accessibilitytextcontenttype(_:))

# accessibilityTextContentType(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets an accessibility text content type.

## Declaration

```swift
nonisolated func accessibilityTextContentType(_ value: AccessibilityTextContentType) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

## Parameters

- `value`: The accessibility content type from the available [AccessibilityTextContentType](../accessibilitytextcontenttype.md) options.

<a id="discussion"></a>

## Discussion

Use this modifier to set the content type of this accessibility element. Assistive technologies can use this property to choose an appropriate way to output the text. For example, when encountering a source coding context, VoiceOver could choose to speak all punctuation.

The default content type [plain](../accessibilitytextcontenttype/plain.md).

## See Also

### Describing content

- [accessibilityHeading(\_:)](accessibilityheading%28__%29.md): Sets the accessibility level of this heading.
- [AccessibilityHeadingLevel](../accessibilityheadinglevel.md): The hierarchy of a heading in relation to other headings.
- [AccessibilityTextContentType](../accessibilitytextcontenttype.md): Textual context that assistive technologies can use to improve the presentation of spoken text.
