> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationsizing](https://developer.apple.com/documentation/swiftui/presentationsizing)

# PresentationSizing

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type that defines the size of the presentation content and how the presentation size adjusts to its content’s size changing.

## Declaration

```swift
protocol PresentationSizing
```

<a id="overview"></a>

## Overview

You don’t need to define your own version of this protocol. The system implementations of [form](presentationsizing/form.md), [page](presentationsizing/page.md), and [fitted](presentationsizing/fitted.md) are conveniences that automatically adapt to different device and screen sizes. If you do want to define your own sizing, first consider using the modifiers `PresenationSizing/sticky(horizontal:vertical:)` and [fitted(horizontal:vertical:)](presentationsizing/fitted%28horizontal_vertical_%29.md). For example, to define your own sizing that proposes a 400x400 square size:

```swift
protocol SquareSizing: PresentationSizing {
    func proposedSize(
        for subview: PresentationSizingRoot,
        context: PresentationSizingContext
    ) {
        .init(width: 400, height: 400)
    }
}

extension PresentationSizing where Self == SquareSizing {
    public static var square: Self { SquareSizing() }
}
```

Then, at the callsite, you can modify `.square` just like system sizings, for example, to fit its content vertically:

```swift
.presentationSizing(.square.fitted(horizontal: false, vertical: true))
```

> **See Also**

> [presentationSizing(\_:)](view/presentationsizing%28__%29.md)

## Topics

### Getting built-in presentation size

- [automatic](presentationsizing/automatic.md): Conforms when `Self` is `AutomaticPresentationSizing`. The default presentation sizing, appropriate for the platform.
- [fitted](presentationsizing/fitted.md): Conforms when `Self` is `FittedPresentationSizing`. The presentation sizing is dictated by the ideal size of the content
- [form](presentationsizing/form.md): Conforms when `Self` is `FormPresentationSizing`. The size is appropriate for forms and slightly less wide than`.page`
- [page](presentationsizing/page.md): Conforms when `Self` is `PagePresentationSizing`. The size is roughly the size of a page of paper, appropriate for informational or compositional content.

### Creating custom presentation size

- [fitted(horizontal:vertical:)](presentationsizing/fitted%28horizontal_vertical_%29.md)
- [proposedSize(for:context:)](presentationsizing/proposedsize%28for_context_%29.md)
- [sticky(horizontal:vertical:)](presentationsizing/sticky%28horizontal_vertical_%29.md): Modifies self to be sticky in the specified dimensions — growing, but not shrinking.

### Supporting types

- [AutomaticPresentationSizing](automaticpresentationsizing.md): The default presentation sizing, appropriate for the platform.
- [FittedPresentationSizing](fittedpresentationsizing.md): The size of the presentation is dictated by the ideal size of the content.
- [FormPresentationSizing](formpresentationsizing.md): The size is appropriate for forms and slightly less wide than`.page`
- [PagePresentationSizing](pagepresentationsizing.md): The size is roughly the size of a page of paper, appropriate for informational or compositional content.

## Relationships

### Conforming Types

- [AutomaticPresentationSizing](automaticpresentationsizing.md)
- [FittedPresentationSizing](fittedpresentationsizing.md)
- [FormPresentationSizing](formpresentationsizing.md)
- [PagePresentationSizing](pagepresentationsizing.md)

## See Also

### Adapting a presentation size

- [presentationCompactAdaptation(horizontal:vertical:)](view/presentationcompactadaptation%28horizontal_vertical_%29.md): Specifies how to adapt a presentation to horizontally and vertically compact size classes.
- [presentationCompactAdaptation(\_:)](view/presentationcompactadaptation%28__%29.md): Specifies how to adapt a presentation to compact size classes.
- [PresentationAdaptation](presentationadaptation.md): Strategies for adapting a presentation to a different size class.
- [presentationSizing(\_:)](view/presentationsizing%28__%29.md): Sets the sizing of the containing presentation.
- [PresentationSizingRoot](presentationsizingroot.md): A proxy to a view provided to the presentation with a defined presentation size.
- [PresentationSizingContext](presentationsizingcontext.md): Contextual information about a presentation.
