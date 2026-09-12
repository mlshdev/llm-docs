> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/redactionreasons/invalidated](https://developer.apple.com/documentation/swiftui/redactionreasons/invalidated)

# invalidated

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Displayed data should appear as invalidated and pending a new update.

## Declaration

```swift
static let invalidated: RedactionReasons
```

<a id="discussion"></a>

## Discussion

Views marked with [invalidatableContent(\_:)](../view/invalidatablecontent%28__%29.md) will be automatically redacted with a standard styling indicating the content is invalidated and new content will be available soon.

## See Also

### Getting redaction reasons

- [placeholder](placeholder.md): Displayed data should appear as generic placeholders.
- [privacy](privacy.md): Displayed data should be obscured to protect private information.
