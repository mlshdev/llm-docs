> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitytraits/adjustable](https://developer.apple.com/documentation/uikit/uiaccessibilitytraits/adjustable)

# adjustable (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The accessibility element allows continuous adjustment through a range of values.

## Declaration

```swift
nonisolated static let adjustable: UIAccessibilityTraits
```

<a id="Discussion"></a>

## Discussion

Use this trait to characterize an accessibility element that users can adjust in a continuous manner, such as a slider or a picker view. If you specify this trait on an accessibility element, you must also implement the [accessibilityIncrement()](../../objectivec/nsobject-swift.class/accessibilityincrement%28%29.md) and [accessibilityDecrement()](../../objectivec/nsobject-swift.class/accessibilitydecrement%28%29.md) methods in the `UIAccessibilityAction` protocol.

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
- [tabBar](tabbar.md): The accessibility element behaves like a tab bar.
- [summaryElement](summaryelement.md): The accessibility element provides summary information when the app starts.
- [selected](selected.md): The accessibility element is currently in a selected state.
- [notEnabled](notenabled.md): The accessibility element isn’t in an enabled state and doesn’t respond to user interaction.
- [allowsDirectInteraction](allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
- [updatesFrequently](updatesfrequently.md): The accessibility element frequently updates its label or value.

# UIAccessibilityTraitAdjustable (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The accessibility element allows continuous adjustment through a range of values.

## Declaration

```objectivec
extern const UIAccessibilityTraits UIAccessibilityTraitAdjustable;
```

<a id="Discussion"></a>

## Discussion

Use this trait to characterize an accessibility element that users can adjust in a continuous manner, such as a slider or a picker view. If you specify this trait on an accessibility element, you must also implement the [accessibilityIncrement](../../objectivec/nsobject-swift.class/accessibilityincrement%28%29.md) and [accessibilityDecrement](../../objectivec/nsobject-swift.class/accessibilitydecrement%28%29.md) methods in the `UIAccessibilityAction` protocol.

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
- [UIAccessibilityTraitTabBar](tabbar.md): The accessibility element behaves like a tab bar.
- [UIAccessibilityTraitSummaryElement](summaryelement.md): The accessibility element provides summary information when the app starts.
- [UIAccessibilityTraitSelected](selected.md): The accessibility element is currently in a selected state.
- [UIAccessibilityTraitNotEnabled](notenabled.md): The accessibility element isn’t in an enabled state and doesn’t respond to user interaction.
- [UIAccessibilityTraitAllowsDirectInteraction](allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
- [UIAccessibilityTraitUpdatesFrequently](updatesfrequently.md): The accessibility element frequently updates its label or value.
