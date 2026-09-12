> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityheading(_:)](https://developer.apple.com/documentation/swiftui/view/accessibilityheading(_:))

# accessibilityHeading(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets the accessibility level of this heading.

## Declaration

```swift
nonisolated func accessibilityHeading(_ level: AccessibilityHeadingLevel) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

## Parameters

- `level`: The heading level to associate with this element from the available [AccessibilityHeadingLevel](../accessibilityheadinglevel.md) levels.

<a id="discussion"></a>

## Discussion

Use this modifier to set the level of this heading in relation to other headings. The system speaks the level number of levels [AccessibilityHeadingLevel.h1](../accessibilityheadinglevel/h1.md) through [AccessibilityHeadingLevel.h6](../accessibilityheadinglevel/h6.md) alongside the text.

The default heading level if you don’t use this modifier is [AccessibilityHeadingLevel.unspecified](../accessibilityheadinglevel/unspecified.md).

## See Also

### Describing content

- [accessibilityTextContentType(\_:)](accessibilitytextcontenttype%28__%29.md): Sets an accessibility text content type.
- [AccessibilityHeadingLevel](../accessibilityheadinglevel.md): The hierarchy of a heading in relation to other headings.
- [AccessibilityTextContentType](../accessibilitytextcontenttype.md): Textual context that assistive technologies can use to improve the presentation of spoken text.
