> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sklabelnode](https://developer.apple.com/documentation/spritekit/sklabelnode)

# SKLabelNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A graphical element that draws text.

## Declaration

```swift
class SKLabelNode
```

## Mentioned In

- [Adding Text to a Scene](adding-text-to-a-scene.md)
- [Getting Started with Nodes](getting-started-with-nodes.md)
- [Warping SpriteKit Content By Using an Effect Node](warping-spritekit-content-by-using-an-effect-node.md)

<a id="overview"></a>

## Overview

`SKLabelNode` allows you to render text in your scene. You can define a custom style using properties such as [fontName](sklabelnode/fontname.md) and [fontColor](sklabelnode/fontcolor.md), or configure the look of your text with an [NSAttributedString](../foundation/nsattributedstring.md).

## Topics

### Getting Started with Labels

- [Adding Text to a Scene](adding-text-to-a-scene.md): Draw text in your scene, such as a health indicator or a “Game Over” banner, by using a label node.

### Creating a Label

- [init(fontNamed:)](sklabelnode/init%28fontnamed_%29.md): Initializes a new label object with a specified font.
- [init(text:)](sklabelnode/init%28text_%29.md): Initializes a new label object with a text string.
- [init(attributedText:)](sklabelnode/init%28attributedtext_%29.md): Initializes a new label object with an attributed text string.

### Setting a Label’s Text

- [text](sklabelnode/text.md): The string that the label node displays.
- [attributedText](sklabelnode/attributedtext.md): The attributed string displayed by the label.

### Specifying a Label’s Font

- [fontColor](sklabelnode/fontcolor.md): The color of the label.
- [fontName](sklabelnode/fontname.md): The font used for the text in the label.
- [fontSize](sklabelnode/fontsize.md): The size of the font used in the label.

### Controlling a Label’s Alignment

- [verticalAlignmentMode](sklabelnode/verticalalignmentmode.md): The vertical position of the text within the node.
- [SKLabelVerticalAlignmentMode](sklabelverticalalignmentmode.md): Options for aligning text vertically.
- [horizontalAlignmentMode](sklabelnode/horizontalalignmentmode.md): The horizontal position of the text within the node.
- [SKLabelHorizontalAlignmentMode](sklabelhorizontalalignmentmode.md): Options for aligning text horizontally.

### Defining a Label’s Line-Breaking Behavior

Configure these properties to control line-breaking behavior.

- [preferredMaxLayoutWidth](sklabelnode/preferredmaxlayoutwidth.md): The width, in screen points, after which line-break mode should be applied.
- [lineBreakMode](sklabelnode/linebreakmode.md): Determines the line-break mode for multiple lines.
- [numberOfLines](sklabelnode/numberoflines.md): Determines the number of lines to draw.

### Colorizing a Label

- [color](sklabelnode/color.md): An alternative to the font color that can be used for animations.
- [colorBlendFactor](sklabelnode/colorblendfactor.md): A floating-point value that describes how the color is blended with the font color.

### Configuring Alpha Blending

Change how a label uses an alpha value, such as additive blending, that results in the label being brighter than it was before.

- [blendMode](sklabelnode/blendmode.md): The blend mode used to draw the label into the parent’s framebuffer.

## Relationships

### Inherits From

- [SKNode](sknode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Nodes that Draw

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKSpriteNode](skspritenode.md): An image or solid color.
- [SKShapeNode](skshapenode.md): A mathematical shape that can be stroked or filled.
- [SKEmitterNode](skemitternode.md): A source of various particle effects.
- [SKVideoNode](skvideonode.md): A graphical element that plays video content.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SK3DNode](sk3dnode.md): 3D SceneKit content drawn as a flattened sprite.

# SKLabelNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A graphical element that draws text.

## Declaration

```objectivec
@interface SKLabelNode : SKNode
```

## Mentioned In

- [Adding Text to a Scene](adding-text-to-a-scene.md)
- [Getting Started with Nodes](getting-started-with-nodes.md)
- [Warping SpriteKit Content By Using an Effect Node](warping-spritekit-content-by-using-an-effect-node.md)

<a id="overview"></a>

## Overview

`SKLabelNode` allows you to render text in your scene. You can define a custom style using properties such as [fontName](sklabelnode/fontname.md) and [fontColor](sklabelnode/fontcolor.md), or configure the look of your text with an [NSAttributedString](../foundation/nsattributedstring.md).

## Topics

### Getting Started with Labels

- [Adding Text to a Scene](adding-text-to-a-scene.md): Draw text in your scene, such as a health indicator or a “Game Over” banner, by using a label node.

### Creating a Label

- [initWithFontNamed:](sklabelnode/init%28fontnamed_%29.md): Initializes a new label object with a specified font.
- [labelNodeWithFontNamed:](sklabelnode/labelnodewithfontnamed_.md): Initializes a new label object.
- [labelNodeWithText:](sklabelnode/init%28text_%29.md): Initializes a new label object with a text string.
- [labelNodeWithAttributedText:](sklabelnode/init%28attributedtext_%29.md): Initializes a new label object with an attributed text string.

### Setting a Label’s Text

- [text](sklabelnode/text.md): The string that the label node displays.
- [attributedText](sklabelnode/attributedtext.md): The attributed string displayed by the label.

### Specifying a Label’s Font

- [fontColor](sklabelnode/fontcolor.md): The color of the label.
- [fontName](sklabelnode/fontname.md): The font used for the text in the label.
- [fontSize](sklabelnode/fontsize.md): The size of the font used in the label.

### Controlling a Label’s Alignment

- [verticalAlignmentMode](sklabelnode/verticalalignmentmode.md): The vertical position of the text within the node.
- [SKLabelVerticalAlignmentMode](sklabelverticalalignmentmode.md): Options for aligning text vertically.
- [horizontalAlignmentMode](sklabelnode/horizontalalignmentmode.md): The horizontal position of the text within the node.
- [SKLabelHorizontalAlignmentMode](sklabelhorizontalalignmentmode.md): Options for aligning text horizontally.

### Defining a Label’s Line-Breaking Behavior

Configure these properties to control line-breaking behavior.

- [preferredMaxLayoutWidth](sklabelnode/preferredmaxlayoutwidth.md): The width, in screen points, after which line-break mode should be applied.
- [lineBreakMode](sklabelnode/linebreakmode.md): Determines the line-break mode for multiple lines.
- [numberOfLines](sklabelnode/numberoflines.md): Determines the number of lines to draw.

### Colorizing a Label

- [color](sklabelnode/color.md): An alternative to the font color that can be used for animations.
- [colorBlendFactor](sklabelnode/colorblendfactor.md): A floating-point value that describes how the color is blended with the font color.

### Configuring Alpha Blending

Change how a label uses an alpha value, such as additive blending, that results in the label being brighter than it was before.

- [blendMode](sklabelnode/blendmode.md): The blend mode used to draw the label into the parent’s framebuffer.

## Relationships

### Inherits From

- [SKNode](sknode.md)

## See Also

### Nodes that Draw

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKSpriteNode](skspritenode.md): An image or solid color.
- [SKShapeNode](skshapenode.md): A mathematical shape that can be stroked or filled.
- [SKEmitterNode](skemitternode.md): A source of various particle effects.
- [SKVideoNode](skvideonode.md): A graphical element that plays video content.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SK3DNode](sk3dnode.md): 3D SceneKit content drawn as a flattened sprite.
