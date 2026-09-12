> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlecolor](https://developer.apple.com/documentation/spritekit/skemitternode/particlecolor)

# particleColor (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The average initial color for a particle.

## Declaration

```swift
var particleColor: UIColor { get set }
```

```swift
var particleColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `[SKColor clearColor]`.

A particle’s color is blended with the texture using its blend color factor. See [SKEmitterNode](../skemitternode.md).

> **Important**

>  If you create an [SKEmitterNode](../skemitternode.md) object using Xcode’s particle editor, it uses the [particleColorSequence](particlecolorsequence.md) property to implement the color change. This means that the [particleColor](particlecolor.md) property is ignored.

## See Also

### Configuring Particle Color

- [particleColorSequence](particlecolorsequence.md): The sequence used to specify the color components of a particle over its lifetime.
- [particleColorAlphaRange](particlecoloralpharange.md): The range of allowed random values for the alpha component of a particle’s initial color.
- [particleColorBlueRange](particlecolorbluerange.md): The range of allowed random values for the blue component of a particle’s initial color.
- [particleColorGreenRange](particlecolorgreenrange.md): The range of allowed random values for the green component of a particle’s initial color.
- [particleColorRedRange](particlecolorredrange.md): The range of allowed random values for the red component of a particle’s initial color.
- [particleColorAlphaSpeed](particlecoloralphaspeed.md): The rate at which the alpha component of a particle’s color changes per second.
- [particleColorBlueSpeed](particlecolorbluespeed.md): The rate at which the blue component of a particle’s color changes per second.
- [particleColorGreenSpeed](particlecolorgreenspeed.md): The rate at which the green component of a particle’s color changes per second.
- [particleColorRedSpeed](particlecolorredspeed.md): The rate at which the red component of a particle’s color changes per second.

# particleColor (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The average initial color for a particle.

## Declaration

```objectivec
@property (nonatomic, retain) UIColor * particleColor;
```

```objectivec
@property (nonatomic, retain) NSColor * particleColor;
```

<a id="Discussion"></a>

## Discussion

The default value is `[SKColor clearColor]`.

A particle’s color is blended with the texture using its blend color factor. See [SKEmitterNode](../skemitternode.md).

> **Important**

>  If you create an [SKEmitterNode](../skemitternode.md) object using Xcode’s particle editor, it uses the [particleColorSequence](particlecolorsequence.md) property to implement the color change. This means that the [particleColor](particlecolor.md) property is ignored.

## See Also

### Configuring Particle Color

- [particleColorSequence](particlecolorsequence.md): The sequence used to specify the color components of a particle over its lifetime.
- [particleColorAlphaRange](particlecoloralpharange.md): The range of allowed random values for the alpha component of a particle’s initial color.
- [particleColorBlueRange](particlecolorbluerange.md): The range of allowed random values for the blue component of a particle’s initial color.
- [particleColorGreenRange](particlecolorgreenrange.md): The range of allowed random values for the green component of a particle’s initial color.
- [particleColorRedRange](particlecolorredrange.md): The range of allowed random values for the red component of a particle’s initial color.
- [particleColorAlphaSpeed](particlecoloralphaspeed.md): The rate at which the alpha component of a particle’s color changes per second.
- [particleColorBlueSpeed](particlecolorbluespeed.md): The rate at which the blue component of a particle’s color changes per second.
- [particleColorGreenSpeed](particlecolorgreenspeed.md): The rate at which the green component of a particle’s color changes per second.
- [particleColorRedSpeed](particlecolorredspeed.md): The rate at which the red component of a particle’s color changes per second.
