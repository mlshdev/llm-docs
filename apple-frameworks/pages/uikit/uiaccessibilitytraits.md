> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitytraits](https://developer.apple.com/documentation/uikit/uiaccessibilitytraits)

# UIAccessibilityTraits (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Constants that describe how an accessibility element behaves.

## Declaration

```swift
struct UIAccessibilityTraits
```

<a id="overview"></a>

## Overview

Set these traits to tell an assistive app how an accessibility element behaves or how to treat it.

## Topics

### Constants

- [none](uiaccessibilitytraits/none.md): The accessibility element has no traits.
- [button](uiaccessibilitytraits/button.md): The accessibility element behaves like a button.
- [link](uiaccessibilitytraits/link.md): The accessibility element behaves like a link.
- [image](uiaccessibilitytraits/image.md): The accessibility element behaves like an image.
- [searchField](uiaccessibilitytraits/searchfield.md): The accessibility element behaves like a search field.
- [toggleButton](uiaccessibilitytraits/togglebutton.md): The accessibility element behaves like a toggle button.
- [keyboardKey](uiaccessibilitytraits/keyboardkey.md): The accessibility element behaves like a keyboard key.
- [staticText](uiaccessibilitytraits/statictext.md): The accessibility element behaves like static text that can’t change.
- [header](uiaccessibilitytraits/header.md): The accessibility element is a header that divides content into sections, such as the title of a navigation bar.
- [tabBar](uiaccessibilitytraits/tabbar.md): The accessibility element behaves like a tab bar.
- [summaryElement](uiaccessibilitytraits/summaryelement.md): The accessibility element provides summary information when the app starts.
- [selected](uiaccessibilitytraits/selected.md): The accessibility element is currently in a selected state.
- [notEnabled](uiaccessibilitytraits/notenabled.md): The accessibility element isn’t in an enabled state and doesn’t respond to user interaction.
- [adjustable](uiaccessibilitytraits/adjustable.md): The accessibility element allows continuous adjustment through a range of values.
- [allowsDirectInteraction](uiaccessibilitytraits/allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
- [updatesFrequently](uiaccessibilitytraits/updatesfrequently.md): The accessibility element frequently updates its label or value.
- [causesPageTurn](uiaccessibilitytraits/causespageturn.md): The accessibility element causes an automatic page turn when VoiceOver finishes reading the text within it.
- [playsSound](uiaccessibilitytraits/playssound.md): The accessibility element plays its own sound when the user activates it.
- [startsMediaSession](uiaccessibilitytraits/startsmediasession.md): The accessibility element starts a media session when the user activates it.
- [supportsZoom](uiaccessibilitytraits/supportszoom.md): The accessibility element supports zooming in and out on its content.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Supporting basic accessibility

- [isAccessibilityElement](../objectivec/nsobject-swift.class/isaccessibilityelement.md)
- [accessibilityLabel](../objectivec/nsobject-swift.class/accessibilitylabel.md)
- [accessibilityValue](../objectivec/nsobject-swift.class/accessibilityvalue.md)
- [accessibilityHint](../objectivec/nsobject-swift.class/accessibilityhint.md)
- [accessibilityTraits](../objectivec/nsobject-swift.class/accessibilitytraits.md)

# UIAccessibilityTraits (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Constants that describe how an accessibility element behaves.

## Declaration

```objectivec
typedef uint64_t UIAccessibilityTraits;
```

<a id="overview"></a>

## Overview

Set these traits to tell an assistive app how an accessibility element behaves or how to treat it.

## Topics

### Constants

- [UIAccessibilityTraitNone](uiaccessibilitytraits/none.md): The accessibility element has no traits.
- [UIAccessibilityTraitButton](uiaccessibilitytraits/button.md): The accessibility element behaves like a button.
- [UIAccessibilityTraitLink](uiaccessibilitytraits/link.md): The accessibility element behaves like a link.
- [UIAccessibilityTraitImage](uiaccessibilitytraits/image.md): The accessibility element behaves like an image.
- [UIAccessibilityTraitSearchField](uiaccessibilitytraits/searchfield.md): The accessibility element behaves like a search field.
- [UIAccessibilityTraitToggleButton](uiaccessibilitytraits/togglebutton.md): The accessibility element behaves like a toggle button.
- [UIAccessibilityTraitKeyboardKey](uiaccessibilitytraits/keyboardkey.md): The accessibility element behaves like a keyboard key.
- [UIAccessibilityTraitStaticText](uiaccessibilitytraits/statictext.md): The accessibility element behaves like static text that can’t change.
- [UIAccessibilityTraitHeader](uiaccessibilitytraits/header.md): The accessibility element is a header that divides content into sections, such as the title of a navigation bar.
- [UIAccessibilityTraitTabBar](uiaccessibilitytraits/tabbar.md): The accessibility element behaves like a tab bar.
- [UIAccessibilityTraitSummaryElement](uiaccessibilitytraits/summaryelement.md): The accessibility element provides summary information when the app starts.
- [UIAccessibilityTraitSelected](uiaccessibilitytraits/selected.md): The accessibility element is currently in a selected state.
- [UIAccessibilityTraitNotEnabled](uiaccessibilitytraits/notenabled.md): The accessibility element isn’t in an enabled state and doesn’t respond to user interaction.
- [UIAccessibilityTraitAdjustable](uiaccessibilitytraits/adjustable.md): The accessibility element allows continuous adjustment through a range of values.
- [UIAccessibilityTraitAllowsDirectInteraction](uiaccessibilitytraits/allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
- [UIAccessibilityTraitUpdatesFrequently](uiaccessibilitytraits/updatesfrequently.md): The accessibility element frequently updates its label or value.
- [UIAccessibilityTraitCausesPageTurn](uiaccessibilitytraits/causespageturn.md): The accessibility element causes an automatic page turn when VoiceOver finishes reading the text within it.
- [UIAccessibilityTraitPlaysSound](uiaccessibilitytraits/playssound.md): The accessibility element plays its own sound when the user activates it.
- [UIAccessibilityTraitStartsMediaSession](uiaccessibilitytraits/startsmediasession.md): The accessibility element starts a media session when the user activates it.
- [UIAccessibilityTraitSupportsZoom](uiaccessibilitytraits/supportszoom.md): The accessibility element supports zooming in and out on its content.

## See Also

### Supporting basic accessibility

- [isAccessibilityElement](../objectivec/nsobject-swift.class/isaccessibilityelement.md)
- [accessibilityLabel](../objectivec/nsobject-swift.class/accessibilitylabel.md)
- [accessibilityValue](../objectivec/nsobject-swift.class/accessibilityvalue.md)
- [accessibilityHint](../objectivec/nsobject-swift.class/accessibilityhint.md)
- [accessibilityTraits](../objectivec/nsobject-swift.class/accessibilitytraits.md)
