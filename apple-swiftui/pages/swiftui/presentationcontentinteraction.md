> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationcontentinteraction](https://developer.apple.com/documentation/swiftui/presentationcontentinteraction)

# PresentationContentInteraction

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A behavior that you can use to influence how a presentation responds to swipe gestures.

## Declaration

```swift
struct PresentationContentInteraction
```

<a id="overview"></a>

## Overview

Use values of this type with the [presentationContentInteraction(\_:)](view/presentationcontentinteraction%28__%29.md) modifier.

## Topics

### Getting interaction behaviors

- [automatic](presentationcontentinteraction/automatic.md): The default swipe behavior for the presentation.
- [resizes](presentationcontentinteraction/resizes.md): A behavior that prioritizes resizing a presentation when swiping, rather than scrolling the content of the presentation.
- [scrolls](presentationcontentinteraction/scrolls.md): A behavior that prioritizes scrolling the content of a presentation when swiping, rather than resizing the presentation.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a sheet’s height and placement

- [presentationDetents(\_:)](view/presentationdetents%28__%29.md): Sets the available detents for the enclosing sheet.
- [presentationDetents(\_:selection:)](view/presentationdetents%28__selection_%29.md): Sets the available detents for the enclosing sheet, giving you programmatic control of the currently selected detent.
- [presentationContentInteraction(\_:)](view/presentationcontentinteraction%28__%29.md): Configures the behavior of swipe gestures on a presentation.
- [presentationDragIndicator(\_:)](view/presentationdragindicator%28__%29.md): Sets the visibility of the drag indicator on top of a sheet.
- [PresentationDetent](presentationdetent.md): A type that represents a height where a sheet naturally rests.
- [CustomPresentationDetent](custompresentationdetent.md): The definition of a custom detent with a calculated height.
- [presentationPlacement(\_:)](view/presentationplacement%28__%29.md): Sets the placement of a presentation within the presenting view.
- [PresentationPlacement](presentationplacement.md): The placement of a presentation within the presenting view.
