> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skblendmode](https://developer.apple.com/documentation/spritekit/skblendmode)

# SKBlendMode (Swift)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The modes that describe how the source and destination pixel colors are used to calculate the new destination color.

## Declaration

```swift
enum SKBlendMode
```

## Topics

### Constants

- [SKBlendMode.alpha](skblendmode/alpha.md): The source and destination colors are blended by multiplying the source alpha value.
- [SKBlendMode.add](skblendmode/add.md): The source and destination colors are added together.
- [SKBlendMode.subtract](skblendmode/subtract.md): The source color is subtracted from the destination color.
- [SKBlendMode.multiply](skblendmode/multiply.md): The source color is multiplied by the destination color.
- [SKBlendMode.multiplyX2](skblendmode/multiplyx2.md): The source color is multiplied by the destination color and then doubled.
- [SKBlendMode.screen](skblendmode/screen.md): The source color is added to the destination color times the inverted source color.
- [SKBlendMode.replace](skblendmode/replace.md): The source color replaces the destination color.

### Enumeration Cases

- [SKBlendMode.multiplyAlpha](skblendmode/multiplyalpha.md)

### Initializers

- [init(rawValue:)](skblendmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [SKActionTimingMode](skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [SKAttributeType](skattributetype.md): Options that specify an attribute’s data type.
- [SKInterpolationMode](skinterpolationmode.md): The modes used to interpolate between keyframes in the sequence.
- [SKLabelHorizontalAlignmentMode](sklabelhorizontalalignmentmode.md): Options for aligning text horizontally.
- [SKLabelVerticalAlignmentMode](sklabelverticalalignmentmode.md): Options for aligning text vertically.
- [SKParticleRenderOrder](skparticlerenderorder.md): The order to use when the emitter’s particles are rendered.
- [SKRepeatMode](skrepeatmode.md): The modes used to determine how the sequence repeats.
- [SKSceneScaleMode](skscenescalemode.md): The modes that determine how the scene’s area is mapped to the view that presents it.
- [SKTextureFilteringMode](sktexturefilteringmode.md): Texture filtering modes to use when the texture is drawn in a size other than its native size.
- [SKTileAdjacencyMask](sktileadjacencymask.md): An enumeration defining how neighboring tiles are automatically placed next to each other.
- [SKTileDefinitionRotation](sktiledefinitionrotation.md): The allowed rotations for a given tile.
- [SKTileSetType](sktilesettype.md): An enumeration defining how tiles are arranged.
- [SKTransitionDirection](sktransitiondirection.md): For some transitions, the direction in which the transition is performed.
- [SKUniformType](skuniformtype.md): An enumerated type to identify the type of a uniform object.
- [SKNodeFocusBehavior](sknodefocusbehavior.md): Options for the focusable states of a SpriteKit node.

# SKBlendMode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The modes that describe how the source and destination pixel colors are used to calculate the new destination color.

## Declaration

```objectivec
enum SKBlendMode : NSInteger;
```

## Topics

### Constants

- [SKBlendModeAlpha](skblendmode/alpha.md): The source and destination colors are blended by multiplying the source alpha value.
- [SKBlendModeAdd](skblendmode/add.md): The source and destination colors are added together.
- [SKBlendModeSubtract](skblendmode/subtract.md): The source color is subtracted from the destination color.
- [SKBlendModeMultiply](skblendmode/multiply.md): The source color is multiplied by the destination color.
- [SKBlendModeMultiplyX2](skblendmode/multiplyx2.md): The source color is multiplied by the destination color and then doubled.
- [SKBlendModeScreen](skblendmode/screen.md): The source color is added to the destination color times the inverted source color.
- [SKBlendModeReplace](skblendmode/replace.md): The source color replaces the destination color.

### Enumeration Cases

- [SKBlendModeMultiplyAlpha](skblendmode/multiplyalpha.md)

## See Also

### Enumerations

- [SKActionTimingMode](skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [SKAttributeType](skattributetype.md): Options that specify an attribute’s data type.
- [SKInterpolationMode](skinterpolationmode.md): The modes used to interpolate between keyframes in the sequence.
- [SKLabelHorizontalAlignmentMode](sklabelhorizontalalignmentmode.md): Options for aligning text horizontally.
- [SKLabelVerticalAlignmentMode](sklabelverticalalignmentmode.md): Options for aligning text vertically.
- [SKParticleRenderOrder](skparticlerenderorder.md): The order to use when the emitter’s particles are rendered.
- [SKRepeatMode](skrepeatmode.md): The modes used to determine how the sequence repeats.
- [SKSceneScaleMode](skscenescalemode.md): The modes that determine how the scene’s area is mapped to the view that presents it.
- [SKTextureFilteringMode](sktexturefilteringmode.md): Texture filtering modes to use when the texture is drawn in a size other than its native size.
- [SKTileAdjacencyMask](sktileadjacencymask.md): An enumeration defining how neighboring tiles are automatically placed next to each other.
- [SKTileDefinitionRotation](sktiledefinitionrotation.md): The allowed rotations for a given tile.
- [SKTileSetType](sktilesettype.md): An enumeration defining how tiles are arranged.
- [SKTransitionDirection](sktransitiondirection.md): For some transitions, the direction in which the transition is performed.
- [SKUniformType](skuniformtype.md): An enumerated type to identify the type of a uniform object.
- [SKNodeFocusBehavior](sknodefocusbehavior.md): Options for the focusable states of a SpriteKit node.
