> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/accessibilitytextcontenttype(_:)](https://developer.apple.com/documentation/swiftui/text/accessibilitytextcontenttype(_:))

# accessibilityTextContentType(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets an accessibility text content type.

## Declaration

```swift
nonisolated func accessibilityTextContentType(_ value: AccessibilityTextContentType) -> Text
```

## Parameters

- `value`: The accessibility content type from the available [AccessibilityTextContentType](../accessibilitytextcontenttype.md) options.

<a id="discussion"></a>

## Discussion

Use this modifier to set the content type of this accessibility element. Assistive technologies can use this property to choose an appropriate way to output the text. For example, when encountering a source coding context, VoiceOver could choose to speak all punctuation.

If you don’t set a value with this method, the default content type is [plain](../accessibilitytextcontenttype/plain.md).

## See Also

### Providing accessibility information

- [accessibilityHeading(\_:)](accessibilityheading%28__%29.md): Sets the accessibility level of this heading.
- [accessibilityLabel(\_:)](accessibilitylabel%28__%29.md): Adds a label to the view that describes its contents.
