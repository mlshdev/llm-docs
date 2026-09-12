> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/formpresentationsizing](https://developer.apple.com/documentation/swiftui/formpresentationsizing)

# FormPresentationSizing

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The size is appropriate for forms and slightly less wide than`.page`

## Declaration

```swift
struct FormPresentationSizing
```

<a id="overview"></a>

## Overview

On iOS, `.form` sizing enforces a platform-defined floor for the vertical and horizontal dimensions. On macOS, no floor is enforced, however a maximum proposed height is derived from the presenter height. To achieve presentations outside of these bounds, see `PresentationSizing.fitted` or implement your own custom [PresentationSizing](presentationsizing.md).

> **See Also**

> [form](presentationsizing/form.md)

## Relationships

### Conforms To

- [PresentationSizing](presentationsizing.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AutomaticPresentationSizing](automaticpresentationsizing.md): The default presentation sizing, appropriate for the platform.
- [FittedPresentationSizing](fittedpresentationsizing.md): The size of the presentation is dictated by the ideal size of the content.
- [PagePresentationSizing](pagepresentationsizing.md): The size is roughly the size of a page of paper, appropriate for informational or compositional content.
