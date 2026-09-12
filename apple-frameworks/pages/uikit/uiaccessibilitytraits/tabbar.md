> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitytraits/tabbar](https://developer.apple.com/documentation/uikit/uiaccessibilitytraits/tabbar)

# tabBar (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The accessibility element behaves like a tab bar.

## Declaration

```swift
nonisolated static let tabBar: UIAccessibilityTraits
```

<a id="Discussion"></a>

## Discussion

Use this trait to characterize an accessibility element that represents an ordered list of tabs.

If an accessibility element has this trait, return [false](https://developer.apple.com/documentation/swift/false) for [isAccessibilityElement](../../objectivec/nsobject-swift.class/isaccessibilityelement.md).

## See Also

### Constants

- [none](none.md): The accessibility element has no traits.
- [button](button.md): The accessibility element behaves like a button.
- [link](link.md): The accessibility element behaves like a link.
- [image](image.md): The accessibility element behaves like an image.
- [searchField](searchfield.md): The accessibility element behaves like a search field.
- [toggleButton](togglebutton.md): The accessibility element behaves like a toggle button.
- [keyboardKey](keyboardkey.md): The accessibility element behaves like a keyboard key.
- [staticText](statictext.md): The accessibility element behaves like static text that can’t change.
- [header](header.md): The accessibility element is a header that divides content into sections, such as the title of a navigation bar.
- [summaryElement](summaryelement.md): The accessibility element provides summary information when the app starts.
- [selected](selected.md): The accessibility element is currently in a selected state.
- [notEnabled](notenabled.md): The accessibility element isn’t in an enabled state and doesn’t respond to user interaction.
- [adjustable](adjustable.md): The accessibility element allows continuous adjustment through a range of values.
- [allowsDirectInteraction](allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
- [updatesFrequently](updatesfrequently.md): The accessibility element frequently updates its label or value.

# UIAccessibilityTraitTabBar (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The accessibility element behaves like a tab bar.

## Declaration

```objectivec
extern const UIAccessibilityTraits UIAccessibilityTraitTabBar;
```

<a id="Discussion"></a>

## Discussion

Use this trait to characterize an accessibility element that represents an ordered list of tabs.

If an accessibility element has this trait, return [false](https://developer.apple.com/documentation/swift/false) for [isAccessibilityElement](../../objectivec/nsobject-swift.class/isaccessibilityelement.md).

## See Also

### Constants

- [UIAccessibilityTraitNone](none.md): The accessibility element has no traits.
- [UIAccessibilityTraitButton](button.md): The accessibility element behaves like a button.
- [UIAccessibilityTraitLink](link.md): The accessibility element behaves like a link.
- [UIAccessibilityTraitImage](image.md): The accessibility element behaves like an image.
- [UIAccessibilityTraitSearchField](searchfield.md): The accessibility element behaves like a search field.
- [UIAccessibilityTraitToggleButton](togglebutton.md): The accessibility element behaves like a toggle button.
- [UIAccessibilityTraitKeyboardKey](keyboardkey.md): The accessibility element behaves like a keyboard key.
- [UIAccessibilityTraitStaticText](statictext.md): The accessibility element behaves like static text that can’t change.
- [UIAccessibilityTraitHeader](header.md): The accessibility element is a header that divides content into sections, such as the title of a navigation bar.
- [UIAccessibilityTraitSummaryElement](summaryelement.md): The accessibility element provides summary information when the app starts.
- [UIAccessibilityTraitSelected](selected.md): The accessibility element is currently in a selected state.
- [UIAccessibilityTraitNotEnabled](notenabled.md): The accessibility element isn’t in an enabled state and doesn’t respond to user interaction.
- [UIAccessibilityTraitAdjustable](adjustable.md): The accessibility element allows continuous adjustment through a range of values.
- [UIAccessibilityTraitAllowsDirectInteraction](allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
- [UIAccessibilityTraitUpdatesFrequently](updatesfrequently.md): The accessibility element frequently updates its label or value.
