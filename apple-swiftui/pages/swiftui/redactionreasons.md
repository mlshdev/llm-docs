> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/redactionreasons](https://developer.apple.com/documentation/swiftui/redactionreasons)

# RedactionReasons

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The reasons to apply a redaction to data displayed on screen.

## Declaration

```swift
struct RedactionReasons
```

## Topics

### Getting redaction reasons

- [invalidated](redactionreasons/invalidated.md): Displayed data should appear as invalidated and pending a new update.
- [placeholder](redactionreasons/placeholder.md): Displayed data should appear as generic placeholders.
- [privacy](redactionreasons/privacy.md): Displayed data should be obscured to protect private information.

### Creating redaction reasons

- [init(rawValue:)](redactionreasons/init%28rawvalue_%29.md): Creates a new set from a raw value.
- [rawValue](redactionreasons/rawvalue.md): The raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Redacting private content

- [Designing your app for the Always On state](https://developer.apple.com/documentation/watchos-apps/designing-your-app-for-the-always-on-state): Customize your watchOS app’s user interface for continuous display.
- [Protecting sensitive content when screen sharing and remote control are active](protecting-sensitive-content-when-screen-sharing.md): Detect active screen capture sessions and respond appropriately to protect sensitive content in your app.
- [privacySensitive(\_:)](view/privacysensitive%28__%29.md): Marks the view as containing sensitive, private user data.
- [redacted(reason:)](view/redacted%28reason_%29.md): Adds a reason to apply a redaction to this view hierarchy.
- [unredacted()](view/unredacted%28%29.md): Removes any reason to apply a redaction to this view hierarchy.
- [redactionReasons](environmentvalues/redactionreasons.md): The current redaction reasons applied to the view hierarchy.
- [isSceneCaptured](environmentvalues/isscenecaptured.md): The current capture state.
