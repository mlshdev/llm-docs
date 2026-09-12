> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilitytextcontenttype](https://developer.apple.com/documentation/swiftui/accessibilitytextcontenttype)

# AccessibilityTextContentType

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Textual context that assistive technologies can use to improve the presentation of spoken text.

## Declaration

```swift
struct AccessibilityTextContentType
```

<a id="overview"></a>

## Overview

Use an `AccessibilityTextContentType` value when setting the accessibility text content type of a view using the [accessibilityTextContentType(\_:)](view/accessibilitytextcontenttype%28__%29.md) modifier.

## Topics

### Getting content types

- [console](accessibilitytextcontenttype/console.md): A type that represents text used for input, like in the Terminal app.
- [fileSystem](accessibilitytextcontenttype/filesystem.md): A type that represents text used by a file browser, like in the Finder app in macOS.
- [messaging](accessibilitytextcontenttype/messaging.md): A type that represents text used in a message, like in the Messages app.
- [narrative](accessibilitytextcontenttype/narrative.md): A type that represents text used in a story or poem, like in the Books app.
- [plain](accessibilitytextcontenttype/plain.md): A type that represents generic text that has no specific type.
- [sourceCode](accessibilitytextcontenttype/sourcecode.md): A type that represents text used in source code, like in Swift Playgrounds.
- [spreadsheet](accessibilitytextcontenttype/spreadsheet.md): A type that represents text used in a grid of data, like in the Numbers app.
- [wordProcessing](accessibilitytextcontenttype/wordprocessing.md): A type that represents text used in a document, like in the Pages app.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing content

- [accessibilityTextContentType(\_:)](view/accessibilitytextcontenttype%28__%29.md): Sets an accessibility text content type.
- [accessibilityHeading(\_:)](view/accessibilityheading%28__%29.md): Sets the accessibility level of this heading.
- [AccessibilityHeadingLevel](accessibilityheadinglevel.md): The hierarchy of a heading in relation to other headings.
