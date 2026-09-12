> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/redactionreasons/privacy](https://developer.apple.com/documentation/swiftui/redactionreasons/privacy)

# privacy

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Displayed data should be obscured to protect private information.

## Declaration

```swift
static let privacy: RedactionReasons
```

<a id="discussion"></a>

## Discussion

Views marked with [privacySensitive(\_:)](../view/privacysensitive%28__%29.md) will be automatically redacted using a standard styling. To apply a custom treatment the redaction reason can be read out of the environment.

```swift
struct BankingContentView: View {
    @Environment(\.redactionReasons) var redactionReasons

    var body: some View {
        if redactionReasons.contains(.privacy) {
            FullAppCover()
        } else {
            AppContent()
        }
    }
}
```

## See Also

### Getting redaction reasons

- [invalidated](invalidated.md): Displayed data should appear as invalidated and pending a new update.
- [placeholder](placeholder.md): Displayed data should appear as generic placeholders.
