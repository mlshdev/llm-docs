> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/redactionreasons](https://developer.apple.com/documentation/swiftui/environmentvalues/redactionreasons)

# redactionReasons

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The current redaction reasons applied to the view hierarchy.

## Declaration

```swift
var redactionReasons: RedactionReasons { get set }
```

## See Also

### Redacting private content

- [Designing your app for the Always On state](https://developer.apple.com/documentation/watchos-apps/designing-your-app-for-the-always-on-state): Customize your watchOS app’s user interface for continuous display.
- [Protecting sensitive content when screen sharing and remote control are active](../protecting-sensitive-content-when-screen-sharing.md): Detect active screen capture sessions and respond appropriately to protect sensitive content in your app.
- [privacySensitive(\_:)](../view/privacysensitive%28__%29.md): Marks the view as containing sensitive, private user data.
- [redacted(reason:)](../view/redacted%28reason_%29.md): Adds a reason to apply a redaction to this view hierarchy.
- [unredacted()](../view/unredacted%28%29.md): Removes any reason to apply a redaction to this view hierarchy.
- [isSceneCaptured](isscenecaptured.md): The current capture state.
- [RedactionReasons](../redactionreasons.md): The reasons to apply a redaction to data displayed on screen.
