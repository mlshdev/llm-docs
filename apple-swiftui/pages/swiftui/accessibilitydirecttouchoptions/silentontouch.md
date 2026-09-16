> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/accessibilitydirecttouchoptions/silentontouch

# silentOnTouch

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Allows a direct touch area to immediately receive touch events without an assitive technology, such as VoiceOver, speaking. Appropriate for apps that provide direct audio feedback on touch that would conflict with speech feedback.

## Declaration

```swift
static let silentOnTouch: AccessibilityDirectTouchOptions
```

## See Also

### Getting the options

- [requiresActivation](requiresactivation.md): Prevents touch passthrough with the direct touch area until an assistive technology, such as VoiceOver, has activated the direct touch area through a user action, for example a double tap.
