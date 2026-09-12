> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/isscenecaptured](https://developer.apple.com/documentation/swiftui/environmentvalues/isscenecaptured)

# isSceneCaptured

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The current capture state.

## Declaration

```swift
var isSceneCaptured: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Use this value to determine whether the scene is actively being cloned to another destination (like during AirPlay) or is being mirrored or recorded.

Your app can respond to changes in this value to take appropriate action, like obscuring content.

## See Also

### Redacting private content

- [Designing your app for the Always On state](https://developer.apple.com/documentation/watchos-apps/designing-your-app-for-the-always-on-state): Customize your watchOS app’s user interface for continuous display.
- [Protecting sensitive content when screen sharing and remote control are active](../protecting-sensitive-content-when-screen-sharing.md): Detect active screen capture sessions and respond appropriately to protect sensitive content in your app.
- [privacySensitive(\_:)](../view/privacysensitive%28__%29.md): Marks the view as containing sensitive, private user data.
- [redacted(reason:)](../view/redacted%28reason_%29.md): Adds a reason to apply a redaction to this view hierarchy.
- [unredacted()](../view/unredacted%28%29.md): Removes any reason to apply a redaction to this view hierarchy.
- [redactionReasons](redactionreasons.md): The current redaction reasons applied to the view hierarchy.
- [RedactionReasons](../redactionreasons.md): The reasons to apply a redaction to data displayed on screen.
