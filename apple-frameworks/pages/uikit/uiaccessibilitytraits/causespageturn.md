> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitytraits/causespageturn](https://developer.apple.com/documentation/uikit/uiaccessibilitytraits/causespageturn)

# causesPageTurn (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The accessibility element causes an automatic page turn when VoiceOver finishes reading the text within it.

## Declaration

```swift
nonisolated static let causesPageTurn: UIAccessibilityTraits
```

<a id="Discussion"></a>

## Discussion

Use this trait to characterize an accessibility element that represents a page of content within a set of pages, such as a view that represents a page in a book. When VoiceOver finishes reading the content in the current page, it calls [accessibilityScroll(\_:)](../../objectivec/nsobject-swift.class/accessibilityscroll%28__%29.md) with [UIAccessibilityScrollDirection.next](../uiaccessibilityscrolldirection/next.md) to scroll to the next content page. If VoiceOver detects that the new content doesn’t differ from the previous content, it stops scrolling.

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
- [adjustable](adjustable.md): The accessibility element allows continuous adjustment through a range of values.
- [allowsDirectInteraction](allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.

# UIAccessibilityTraitCausesPageTurn (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The accessibility element causes an automatic page turn when VoiceOver finishes reading the text within it.

## Declaration

```objectivec
extern const UIAccessibilityTraits UIAccessibilityTraitCausesPageTurn;
```

<a id="Discussion"></a>

## Discussion

Use this trait to characterize an accessibility element that represents a page of content within a set of pages, such as a view that represents a page in a book. When VoiceOver finishes reading the content in the current page, it calls [accessibilityScroll:](../../objectivec/nsobject-swift.class/accessibilityscroll%28__%29.md) with [UIAccessibilityScrollDirectionNext](../uiaccessibilityscrolldirection/next.md) to scroll to the next content page. If VoiceOver detects that the new content doesn’t differ from the previous content, it stops scrolling.

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
- [UIAccessibilityTraitAdjustable](adjustable.md): The accessibility element allows continuous adjustment through a range of values.
- [UIAccessibilityTraitAllowsDirectInteraction](allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
