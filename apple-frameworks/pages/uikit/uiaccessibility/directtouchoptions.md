> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/directtouchoptions](https://developer.apple.com/documentation/uikit/uiaccessibility/directtouchoptions)

# UIAccessibility.DirectTouchOptions (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Constants that configure how VoiceOver produces audio for direct touch areas.

## Declaration

```swift
struct DirectTouchOptions
```

<a id="overview"></a>

## Overview

*Direct touch areas* are regions of the screen where VoiceOver passes gestures directly to the app instead of interpreting them as VoiceOver commands.

Examples of direct touch areas include:

- A keyboard in a music-creation app
- A player view in a game that produces sounds
- An area where you sign your name in a document

If an element doesn’t use `UIAccessibility.DirectTouchOptions`, VoiceOver speaks the element and immediately starts sending touch events to the app.

Specify `DirectTouchOptions` to customize VoiceOver regions using these two constants:

- Use [silentOnTouch](https://developer.apple.com/documentation/swiftui/accessibilitydirecttouchoptions/silentontouch) to ensure VoiceOver is silent when a person touches the direct touch area. In this region, the app produces its own audio feedback without conflicting with VoiceOver audio.
- Use [requiresActivation](https://developer.apple.com/documentation/swiftui/accessibilitydirecttouchoptions/requiresactivation) to ensure a person interacts with the user interface element before a touch passes through to the element. This is useful for scenarios where an errant touch may produce undesired input, such as a signature field.

## Topics

### Initializers

- [init(rawValue:)](directtouchoptions/init%28rawvalue_%29.md): Creates a new direct touch options structure using an unsigned integer.

### Type Properties

- [requiresActivation](directtouchoptions/requiresactivation.md): Inhibits passthrough to the direct touch area until a person double-taps the element.
- [silentOnTouch](directtouchoptions/silentontouch.md): Allows a direct touch area to immediately receive touch events without triggering VoiceOver audio.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring behavior

- [accessibilityCustomRotors](../../objectivec/nsobject-swift.class/accessibilitycustomrotors.md)
- [accessibilityElementsHidden](../../objectivec/nsobject-swift.class/accessibilityelementshidden.md)
- [accessibilityRespondsToUserInteraction](../../objectivec/nsobject-swift.class/accessibilityrespondstouserinteraction.md)
- [accessibilityViewIsModal](../../objectivec/nsobject-swift.class/accessibilityviewismodal.md)
- [shouldGroupAccessibilityChildren](../../objectivec/nsobject-swift.class/shouldgroupaccessibilitychildren.md)
- [accessibilityDirectTouchOptions](../../objectivec/nsobject-swift.class/accessibilitydirecttouchoptions.md)

# UIAccessibilityDirectTouchOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Constants that configure how VoiceOver produces audio for direct touch areas.

## Declaration

```objectivec
enum UIAccessibilityDirectTouchOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

*Direct touch areas* are regions of the screen where VoiceOver passes gestures directly to the app instead of interpreting them as VoiceOver commands.

Examples of direct touch areas include:

- A keyboard in a music-creation app
- A player view in a game that produces sounds
- An area where you sign your name in a document

If an element doesn’t use `UIAccessibility.DirectTouchOptions`, VoiceOver speaks the element and immediately starts sending touch events to the app.

Specify `DirectTouchOptions` to customize VoiceOver regions using these two constants:

- Use [silentOnTouch](https://developer.apple.com/documentation/swiftui/accessibilitydirecttouchoptions/silentontouch) to ensure VoiceOver is silent when a person touches the direct touch area. In this region, the app produces its own audio feedback without conflicting with VoiceOver audio.
- Use [requiresActivation](https://developer.apple.com/documentation/swiftui/accessibilitydirecttouchoptions/requiresactivation) to ensure a person interacts with the user interface element before a touch passes through to the element. This is useful for scenarios where an errant touch may produce undesired input, such as a signature field.

## Topics

### Enumeration Cases

- [UIAccessibilityDirectTouchOptionRequiresActivation](directtouchoptions/requiresactivation.md): Inhibits passthrough to the direct touch area until a person double-taps the element.
- [UIAccessibilityDirectTouchOptionSilentOnTouch](directtouchoptions/silentontouch.md): Allows a direct touch area to immediately receive touch events without triggering VoiceOver audio.
- [UIAccessibilityDirectTouchOptionNone](../uiaccessibilitydirecttouchoptions/uiaccessibilitydirecttouchoptionnone.md): Allows a direct touch area to receive touch events with VoiceOver speaking normally.

## See Also

### Configuring behavior

- [accessibilityCustomRotors](../../objectivec/nsobject-swift.class/accessibilitycustomrotors.md)
- [accessibilityElementsHidden](../../objectivec/nsobject-swift.class/accessibilityelementshidden.md)
- [accessibilityRespondsToUserInteraction](../../objectivec/nsobject-swift.class/accessibilityrespondstouserinteraction.md)
- [accessibilityViewIsModal](../../objectivec/nsobject-swift.class/accessibilityviewismodal.md)
- [shouldGroupAccessibilityChildren](../../objectivec/nsobject-swift.class/shouldgroupaccessibilitychildren.md)
- [accessibilityDirectTouchOptions](../../objectivec/nsobject-swift.class/accessibilitydirecttouchoptions.md)
