> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilitytraits](https://developer.apple.com/documentation/swiftui/accessibilitytraits)

# AccessibilityTraits

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A set of accessibility traits that describe how an element behaves.

## Declaration

```swift
struct AccessibilityTraits
```

## Topics

### Getting traits

- [allowsDirectInteraction](accessibilitytraits/allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
- [causesPageTurn](accessibilitytraits/causespageturn.md): The accessibility element causes an automatic page turn when VoiceOver finishes reading the text within it.
- [isButton](accessibilitytraits/isbutton.md): The accessibility element is a button.
- [isHeader](accessibilitytraits/isheader.md): The accessibility element is a header that divides content into sections, like the title of a navigation bar.
- [isImage](accessibilitytraits/isimage.md): The accessibility element is an image.
- [isKeyboardKey](accessibilitytraits/iskeyboardkey.md): The accessibility element behaves as a keyboard key.
- [isLink](accessibilitytraits/islink.md): The accessibility element is a link.
- [isModal](accessibilitytraits/ismodal.md): The accessibility element is modal.
- [isSearchField](accessibilitytraits/issearchfield.md): The accessibility element is a search field.
- [isSelected](accessibilitytraits/isselected.md): The accessibility element is currently selected.
- [isStaticText](accessibilitytraits/isstatictext.md): The accessibility element is a static text that cannot be modified by the user.
- [isSummaryElement](accessibilitytraits/issummaryelement.md): The accessibility element provides summary information when the application starts.
- [isToggle](accessibilitytraits/istoggle.md): The accessibility element is a toggle.
- [playsSound](accessibilitytraits/playssound.md): The accessibility element plays its own sound when activated.
- [startsMediaSession](accessibilitytraits/startsmediasession.md): The accessibility element starts a media session when it is activated.
- [updatesFrequently](accessibilitytraits/updatesfrequently.md): The accessibility element frequently updates its label or value.

### Type Properties

- [isTabBar](accessibilitytraits/istabbar.md): The accessibility element is a tab bar.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Assigning traits to content

- [accessibilityAddTraits(\_:)](view/accessibilityaddtraits%28__%29.md): Adds the given traits to the view.
- [accessibilityRemoveTraits(\_:)](view/accessibilityremovetraits%28__%29.md): Removes the given traits from this view.
