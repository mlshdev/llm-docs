> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilitytraits/startsmediasession](https://developer.apple.com/documentation/swiftui/accessibilitytraits/startsmediasession)

# startsMediaSession

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The accessibility element starts a media session when it is activated.

## Declaration

```swift
static let startsMediaSession: AccessibilityTraits
```

<a id="discussion"></a>

## Discussion

Use this trait to silence the audio output of an assistive technology, such as VoiceOver, during a media session that should not be interrupted. For example, you might use this trait to silence VoiceOver speech while the user is recording audio.

## See Also

### Getting traits

- [allowsDirectInteraction](allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
- [causesPageTurn](causespageturn.md): The accessibility element causes an automatic page turn when VoiceOver finishes reading the text within it.
- [isButton](isbutton.md): The accessibility element is a button.
- [isHeader](isheader.md): The accessibility element is a header that divides content into sections, like the title of a navigation bar.
- [isImage](isimage.md): The accessibility element is an image.
- [isKeyboardKey](iskeyboardkey.md): The accessibility element behaves as a keyboard key.
- [isLink](islink.md): The accessibility element is a link.
- [isModal](ismodal.md): The accessibility element is modal.
- [isSearchField](issearchfield.md): The accessibility element is a search field.
- [isSelected](isselected.md): The accessibility element is currently selected.
- [isStaticText](isstatictext.md): The accessibility element is a static text that cannot be modified by the user.
- [isSummaryElement](issummaryelement.md): The accessibility element provides summary information when the application starts.
- [isToggle](istoggle.md): The accessibility element is a toggle.
- [playsSound](playssound.md): The accessibility element plays its own sound when activated.
- [updatesFrequently](updatesfrequently.md): The accessibility element frequently updates its label or value.
