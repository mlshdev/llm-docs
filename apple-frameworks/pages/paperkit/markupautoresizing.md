> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupautoresizing](https://developer.apple.com/documentation/paperkit/markupautoresizing)

# MarkupAutoresizing

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Automatic sizing behaviors for this markup.

## Declaration

```swift
struct MarkupAutoresizing
```

<a id="overview"></a>

## Overview

Controls whether the markup automatically adjusts its dimensions to fit content changes.

```swift
var textBox = ShapeMarkup(
    shape: .rectangle,
    frame: CGRect(x: 0, y: 0, width: 100, height: 50),
    attributedText: AttributedString("Short"),
    autoresizing: [.flexibleWidth]
)

textBox.attributedText = AttributedString("This is much longer text")
// textBox.frame.width is unaffected, but textBox.renderFrame.width has automatically increased
```

## Topics

### Resizing options

- [flexibleHeight](markupautoresizing/flexibleheight.md): Automatically adjust height to fit content changes.
- [flexibleWidth](markupautoresizing/flexiblewidth.md): Automatically adjust width to fit content changes.

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

### Configuration

- [FeatureSet](featureset.md): The features PaperKit supports in its UI and data models.
- [ShapeConfiguration](shapeconfiguration.md): A configuration that specifies the appearance of a shape.
- [RenderingOptions](renderingoptions.md): The rendering options for drawing paper data models.
