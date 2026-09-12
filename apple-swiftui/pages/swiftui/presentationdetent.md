> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationdetent](https://developer.apple.com/documentation/swiftui/presentationdetent)

# PresentationDetent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that represents a height where a sheet naturally rests.

## Declaration

```swift
struct PresentationDetent
```

## Topics

### Getting built-in detents

- [large](presentationdetent/large.md): The system detent for a sheet at full height.
- [medium](presentationdetent/medium.md): The system detent for a sheet that’s approximately half the height of the screen, and is inactive in compact height.

### Creating custom detents

- [custom(\_:)](presentationdetent/custom%28__%29.md): A custom detent with a calculated height.
- [fraction(\_:)](presentationdetent/fraction%28__%29.md): A custom detent with the specified fractional height.
- [height(\_:)](presentationdetent/height%28__%29.md): A custom detent with the specified height.
- [PresentationDetent.Context](presentationdetent/context.md): Information that you use to calculate the presentation’s height.

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
- [CustomPresentationDetent](custompresentationdetent.md): The definition of a custom detent with a calculated height.
- [PresentationContentInteraction](presentationcontentinteraction.md): A behavior that you can use to influence how a presentation responds to swipe gestures.
- [presentationPlacement(\_:)](view/presentationplacement%28__%29.md): Sets the placement of a presentation within the presenting view.
- [PresentationPlacement](presentationplacement.md): The placement of a presentation within the presenting view.
