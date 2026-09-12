> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/directtouchoptions/silentontouch](https://developer.apple.com/documentation/uikit/uiaccessibility/directtouchoptions/silentontouch)

# silentOnTouch (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Allows a direct touch area to immediately receive touch events without triggering VoiceOver audio.

## Declaration

```swift
static var silentOnTouch: UIAccessibility.DirectTouchOptions { get }
```

<a id="Discussion"></a>

## Discussion

You may want a user interface element that, when a person interacts with it, provides audio feedback that would conflict with VoiceOver. In a music creation app, for example, you can designate the keyboard as “silent on touch,” so that VoiceOver doesn’t compete with the keyboard sounds.

# UIAccessibilityDirectTouchOptionSilentOnTouch (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Allows a direct touch area to immediately receive touch events without triggering VoiceOver audio.

## Declaration

```objectivec
UIAccessibilityDirectTouchOptionSilentOnTouch
```

<a id="Discussion"></a>

## Discussion

You may want a user interface element that, when a person interacts with it, provides audio feedback that would conflict with VoiceOver. In a music creation app, for example, you can designate the keyboard as “silent on touch,” so that VoiceOver doesn’t compete with the keyboard sounds.
