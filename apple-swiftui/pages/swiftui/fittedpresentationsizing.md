> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fittedpresentationsizing](https://developer.apple.com/documentation/swiftui/fittedpresentationsizing)

# FittedPresentationSizing

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The size of the presentation is dictated by the ideal size of the content.

## Declaration

```swift
struct FittedPresentationSizing
```

<a id="overview"></a>

## Overview

The presentation is sized by proposing `nil` in the horizontal and vertical dimensions.

> **See Also**

> [fitted](presentationsizing/fitted.md)

## Relationships

### Conforms To

- [PresentationSizing](presentationsizing.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AutomaticPresentationSizing](automaticpresentationsizing.md): The default presentation sizing, appropriate for the platform.
- [FormPresentationSizing](formpresentationsizing.md): The size is appropriate for forms and slightly less wide than`.page`
- [PagePresentationSizing](pagepresentationsizing.md): The size is roughly the size of a page of paper, appropriate for informational or compositional content.
