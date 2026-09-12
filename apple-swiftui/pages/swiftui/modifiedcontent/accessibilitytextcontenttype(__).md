> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibilitytextcontenttype(_:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilitytextcontenttype(_:))

# accessibilityTextContentType(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets an accessibility text content type.

## Declaration

```swift
nonisolated func accessibilityTextContentType(_ textContentType: AccessibilityTextContentType) -> ModifiedContent<Content, Modifier>
```

## Parameters

- `textContentType`: The accessibility content type from the available [AccessibilityTextContentType](../accessibilitytextcontenttype.md) options.

<a id="discussion"></a>

## Discussion

Use this modifier to set the content type of this accessibility element. Assistive technologies can use this property to choose an appropriate way to output the text. For example, when encountering a source coding context, VoiceOver could choose to speak all punctuation.

The default content type [plain](../accessibilitytextcontenttype/plain.md).
