> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationadaptation](https://developer.apple.com/documentation/swiftui/presentationadaptation)

# PresentationAdaptation

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Strategies for adapting a presentation to a different size class.

## Declaration

```swift
struct PresentationAdaptation
```

<a id="overview"></a>

## Overview

Use values of this type with the [presentationCompactAdaptation(\_:)](view/presentationcompactadaptation%28__%29.md) and [presentationCompactAdaptation(horizontal:vertical:)](view/presentationcompactadaptation%28horizontal_vertical_%29.md) modifiers.

## Topics

### Getting adaptation strategies

- [automatic](presentationadaptation/automatic.md): Use the default presentation adaptation.
- [none](presentationadaptation/none.md): Don’t adapt for the size class, if possible.
- [fullScreenCover](presentationadaptation/fullscreencover.md): Prefer a full-screen-cover appearance when adapting for size classes.
- [popover](presentationadaptation/popover.md): Prefer a popover appearance when adapting for size classes.
- [sheet](presentationadaptation/sheet.md): Prefer a sheet appearance when adapting for size classes.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adapting a presentation size

- [presentationCompactAdaptation(horizontal:vertical:)](view/presentationcompactadaptation%28horizontal_vertical_%29.md): Specifies how to adapt a presentation to horizontally and vertically compact size classes.
- [presentationCompactAdaptation(\_:)](view/presentationcompactadaptation%28__%29.md): Specifies how to adapt a presentation to compact size classes.
- [presentationSizing(\_:)](view/presentationsizing%28__%29.md): Sets the sizing of the containing presentation.
- [PresentationSizing](presentationsizing.md): A type that defines the size of the presentation content and how the presentation size adjusts to its content’s size changing.
- [PresentationSizingRoot](presentationsizingroot.md): A proxy to a view provided to the presentation with a defined presentation size.
- [PresentationSizingContext](presentationsizingcontext.md): Contextual information about a presentation.
