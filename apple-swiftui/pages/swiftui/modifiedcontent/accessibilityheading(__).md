> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibilityheading(_:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityheading(_:))

# accessibilityHeading(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Set the level of this heading.

## Declaration

```swift
nonisolated func accessibilityHeading(_ level: AccessibilityHeadingLevel) -> ModifiedContent<Content, Modifier>
```

## Parameters

- `level`: The heading level to associate with this element from the available [AccessibilityHeadingLevel](../accessibilityheadinglevel.md) levels.

<a id="discussion"></a>

## Discussion

Use this modifier to set the level of this heading in relation to other headings. The system speaks the level number of levels [AccessibilityHeadingLevel.h1](../accessibilityheadinglevel/h1.md) through [AccessibilityHeadingLevel.h6](../accessibilityheadinglevel/h6.md) alongside the text.

The default heading level if you don’t use this modifier is [AccessibilityHeadingLevel.unspecified](../accessibilityheadinglevel/unspecified.md).
