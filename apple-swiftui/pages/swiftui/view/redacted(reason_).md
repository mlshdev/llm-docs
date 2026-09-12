> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/redacted(reason:)](https://developer.apple.com/documentation/swiftui/view/redacted(reason:))

# redacted(reason:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Adds a reason to apply a redaction to this view hierarchy.

## Declaration

```swift
nonisolated func redacted(reason: RedactionReasons) -> some View

```

<a id="discussion"></a>

## Discussion

Adding a redaction is an additive process: any redaction provided will be added to the reasons provided by the parent.

## See Also

### Redacting private content

- [Designing your app for the Always On state](https://developer.apple.com/documentation/watchos-apps/designing-your-app-for-the-always-on-state): Customize your watchOS app’s user interface for continuous display.
- [Protecting sensitive content when screen sharing and remote control are active](../protecting-sensitive-content-when-screen-sharing.md): Detect active screen capture sessions and respond appropriately to protect sensitive content in your app.
- [privacySensitive(\_:)](privacysensitive%28__%29.md): Marks the view as containing sensitive, private user data.
- [unredacted()](unredacted%28%29.md): Removes any reason to apply a redaction to this view hierarchy.
- [redactionReasons](../environmentvalues/redactionreasons.md): The current redaction reasons applied to the view hierarchy.
- [isSceneCaptured](../environmentvalues/isscenecaptured.md): The current capture state.
- [RedactionReasons](../redactionreasons.md): The reasons to apply a redaction to data displayed on screen.
