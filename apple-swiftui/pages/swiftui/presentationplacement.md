> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationplacement](https://developer.apple.com/documentation/swiftui/presentationplacement)

# PresentationPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The placement of a presentation within the presenting view.

## Declaration

```swift
struct PresentationPlacement
```

<a id="overview"></a>

## Overview

Only sheet presentations respect this placement.

Use values of this type with the [presentationPlacement(\_:)](view/presentationplacement%28__%29.md) modifier.

## Topics

### Specifying sheet placement

- [automatic](presentationplacement/automatic.md): The system determines the placement of the presentation.
- [center](presentationplacement/center.md): Centers the presentation within the presenting view.
- [leading](presentationplacement/leading.md): Places the presentation on the leading edge of the presenting view.
- [trailing](presentationplacement/trailing.md): Places the presentation on the trailing edge of the presenting view.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
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
- [PresentationContentInteraction](presentationcontentinteraction.md): A behavior that you can use to influence how a presentation responds to swipe gestures.
- [presentationPlacement(\_:)](view/presentationplacement%28__%29.md): Sets the placement of a presentation within the presenting view.
