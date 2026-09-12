> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupinteractions](https://developer.apple.com/documentation/paperkit/markupinteractions)

# MarkupInteractions

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Interactions that people can perform on markup elements.

## Declaration

```swift
struct MarkupInteractions
```

<a id="overview"></a>

## Overview

Use `MarkupInteractions` to control which actions people can perform on markup elements. By default, all interactions are enabled (`.all`), allowing people to freely select, move, resize, rotate, style, and delete markup.

```swift
// Prevent people from deleting markup
markup.allowedInteractions = .all.subtracting(.delete)

// Allow only selection and moving
markup.allowedInteractions = [.select, .move]

// Make markup completely read-only
markup.allowedInteractions = .readOnly
```

## Topics

### Configuring interactions

- [rotate](markupinteractions/rotate.md): Allows rotation.
- [resize](markupinteractions/resize.md): Allows resizing.
- [move](markupinteractions/move.md): Allows moving.
- [delete](markupinteractions/delete.md): Allows deletion.
- [style](markupinteractions/style.md): Allows style changes.
- [select](markupinteractions/select.md): Allows selection.

### Using presets

- [all](markupinteractions/all.md): All interactions enabled (default).
- [readOnly](markupinteractions/readonly.md): Read-only: no interactions enabled.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Markup elements

- [Markup](markup.md): A markup component.
- [ImageMarkup](imagemarkup.md): A markup element that represents an image.
- [ShapeMarkup](shapemarkup.md): A markup element that represents a shape or text box with customizable appearance and behavior.
- [LinkMarkup](linkmarkup.md): A URL link that a person can tap on in the canvas.
- [LoupeMarkup](loupemarkup.md): A loupe magnifier that magnifies the content below the loupe.
