> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitytraits/togglebutton](https://developer.apple.com/documentation/uikit/uiaccessibilitytraits/togglebutton)

# toggleButton (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The accessibility element behaves like a toggle button.

## Declaration

```swift
nonisolated static let toggleButton: UIAccessibilityTraits
```

<a id="Discussion"></a>

## Discussion

Use this trait to characterize an accessibility element that represents a button that toggles a value on, off, or mixed status. VoiceOver will describe the options offered by the toggle button.

> **Note**

>  If you want VoiceOver to describe the toggle as a switch button, combine the toggle trait with a button trait.

## See Also

### Constants

- [none](none.md): The accessibility element has no traits.
- [button](button.md): The accessibility element behaves like a button.
- [link](link.md): The accessibility element behaves like a link.
- [image](image.md): The accessibility element behaves like an image.
- [searchField](searchfield.md): The accessibility element behaves like a search field.
- [keyboardKey](keyboardkey.md): The accessibility element behaves like a keyboard key.
- [staticText](statictext.md): The accessibility element behaves like static text that can’t change.
- [header](header.md): The accessibility element is a header that divides content into sections, such as the title of a navigation bar.
- [tabBar](tabbar.md): The accessibility element behaves like a tab bar.
- [summaryElement](summaryelement.md): The accessibility element provides summary information when the app starts.
- [selected](selected.md): The accessibility element is currently in a selected state.
- [notEnabled](notenabled.md): The accessibility element isn’t in an enabled state and doesn’t respond to user interaction.
- [adjustable](adjustable.md): The accessibility element allows continuous adjustment through a range of values.
- [allowsDirectInteraction](allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
- [updatesFrequently](updatesfrequently.md): The accessibility element frequently updates its label or value.

# UIAccessibilityTraitToggleButton (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The accessibility element behaves like a toggle button.

## Declaration

```objectivec
extern const UIAccessibilityTraits UIAccessibilityTraitToggleButton;
```

<a id="Discussion"></a>

## Discussion

Use this trait to characterize an accessibility element that represents a button that toggles a value on, off, or mixed status. VoiceOver will describe the options offered by the toggle button.

> **Note**

>  If you want VoiceOver to describe the toggle as a switch button, combine the toggle trait with a button trait.

## See Also

### Constants

- [UIAccessibilityTraitNone](none.md): The accessibility element has no traits.
- [UIAccessibilityTraitButton](button.md): The accessibility element behaves like a button.
- [UIAccessibilityTraitLink](link.md): The accessibility element behaves like a link.
- [UIAccessibilityTraitImage](image.md): The accessibility element behaves like an image.
- [UIAccessibilityTraitSearchField](searchfield.md): The accessibility element behaves like a search field.
- [UIAccessibilityTraitKeyboardKey](keyboardkey.md): The accessibility element behaves like a keyboard key.
- [UIAccessibilityTraitStaticText](statictext.md): The accessibility element behaves like static text that can’t change.
- [UIAccessibilityTraitHeader](header.md): The accessibility element is a header that divides content into sections, such as the title of a navigation bar.
- [UIAccessibilityTraitTabBar](tabbar.md): The accessibility element behaves like a tab bar.
- [UIAccessibilityTraitSummaryElement](summaryelement.md): The accessibility element provides summary information when the app starts.
- [UIAccessibilityTraitSelected](selected.md): The accessibility element is currently in a selected state.
- [UIAccessibilityTraitNotEnabled](notenabled.md): The accessibility element isn’t in an enabled state and doesn’t respond to user interaction.
- [UIAccessibilityTraitAdjustable](adjustable.md): The accessibility element allows continuous adjustment through a range of values.
- [UIAccessibilityTraitAllowsDirectInteraction](allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
- [UIAccessibilityTraitUpdatesFrequently](updatesfrequently.md): The accessibility element frequently updates its label or value.
