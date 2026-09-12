> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/redactionreasons/placeholder](https://developer.apple.com/documentation/swiftui/redactionreasons/placeholder)

# placeholder

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Displayed data should appear as generic placeholders.

## Declaration

```swift
static let placeholder: RedactionReasons
```

<a id="discussion"></a>

## Discussion

Text and images will be automatically masked to appear as generic placeholders, though maintaining their original size and shape. Use this to create a placeholder UI without directly exposing placeholder data to users.

## See Also

### Getting redaction reasons

- [invalidated](invalidated.md): Displayed data should appear as invalidated and pending a new update.
- [privacy](privacy.md): Displayed data should be obscured to protect private information.
