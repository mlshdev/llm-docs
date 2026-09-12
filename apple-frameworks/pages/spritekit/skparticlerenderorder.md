> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skparticlerenderorder](https://developer.apple.com/documentation/spritekit/skparticlerenderorder)

# SKParticleRenderOrder (Swift)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The order to use when the emitter’s particles are rendered.

## Declaration

```swift
enum SKParticleRenderOrder
```

## Topics

### Constants

- [SKParticleRenderOrder.oldestLast](skparticlerenderorder/oldestlast.md): The particles are rendered from newest to oldest. This is the default value.
- [SKParticleRenderOrder.oldestFirst](skparticlerenderorder/oldestfirst.md): The particles are rendered from oldest to newest.
- [SKParticleRenderOrder.dontCare](skparticlerenderorder/dontcare.md): The particles can be rendered in any order. SpriteKit may choose to reorder the particles to improve rendering performance.

### Initializers

- [init(rawValue:)](skparticlerenderorder/init%28rawvalue_%29.md)

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
- [SKBlendMode](skblendmode.md): The modes that describe how the source and destination pixel colors are used to calculate the new destination color.
- [SKInterpolationMode](skinterpolationmode.md): The modes used to interpolate between keyframes in the sequence.
- [SKLabelHorizontalAlignmentMode](sklabelhorizontalalignmentmode.md): Options for aligning text horizontally.
- [SKLabelVerticalAlignmentMode](sklabelverticalalignmentmode.md): Options for aligning text vertically.
- [SKRepeatMode](skrepeatmode.md): The modes used to determine how the sequence repeats.
- [SKSceneScaleMode](skscenescalemode.md): The modes that determine how the scene’s area is mapped to the view that presents it.
- [SKTextureFilteringMode](sktexturefilteringmode.md): Texture filtering modes to use when the texture is drawn in a size other than its native size.
- [SKTileAdjacencyMask](sktileadjacencymask.md): An enumeration defining how neighboring tiles are automatically placed next to each other.
- [SKTileDefinitionRotation](sktiledefinitionrotation.md): The allowed rotations for a given tile.
- [SKTileSetType](sktilesettype.md): An enumeration defining how tiles are arranged.
- [SKTransitionDirection](sktransitiondirection.md): For some transitions, the direction in which the transition is performed.
- [SKUniformType](skuniformtype.md): An enumerated type to identify the type of a uniform object.
- [SKNodeFocusBehavior](sknodefocusbehavior.md): Options for the focusable states of a SpriteKit node.

# SKParticleRenderOrder (Objective-C)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The order to use when the emitter’s particles are rendered.

## Declaration

```objectivec
enum SKParticleRenderOrder : NSUInteger;
```

## Topics

### Constants

- [SKParticleRenderOrderOldestLast](skparticlerenderorder/oldestlast.md): The particles are rendered from newest to oldest. This is the default value.
- [SKParticleRenderOrderOldestFirst](skparticlerenderorder/oldestfirst.md): The particles are rendered from oldest to newest.
- [SKParticleRenderOrderDontCare](skparticlerenderorder/dontcare.md): The particles can be rendered in any order. SpriteKit may choose to reorder the particles to improve rendering performance.

## See Also

### Enumerations

- [SKActionTimingMode](skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [SKAttributeType](skattributetype.md): Options that specify an attribute’s data type.
- [SKBlendMode](skblendmode.md): The modes that describe how the source and destination pixel colors are used to calculate the new destination color.
- [SKInterpolationMode](skinterpolationmode.md): The modes used to interpolate between keyframes in the sequence.
- [SKLabelHorizontalAlignmentMode](sklabelhorizontalalignmentmode.md): Options for aligning text horizontally.
- [SKLabelVerticalAlignmentMode](sklabelverticalalignmentmode.md): Options for aligning text vertically.
- [SKRepeatMode](skrepeatmode.md): The modes used to determine how the sequence repeats.
- [SKSceneScaleMode](skscenescalemode.md): The modes that determine how the scene’s area is mapped to the view that presents it.
- [SKTextureFilteringMode](sktexturefilteringmode.md): Texture filtering modes to use when the texture is drawn in a size other than its native size.
- [SKTileAdjacencyMask](sktileadjacencymask.md): An enumeration defining how neighboring tiles are automatically placed next to each other.
- [SKTileDefinitionRotation](sktiledefinitionrotation.md): The allowed rotations for a given tile.
- [SKTileSetType](sktilesettype.md): An enumeration defining how tiles are arranged.
- [SKTransitionDirection](sktransitiondirection.md): For some transitions, the direction in which the transition is performed.
- [SKUniformType](skuniformtype.md): An enumerated type to identify the type of a uniform object.
- [SKNodeFocusBehavior](sknodefocusbehavior.md): Options for the focusable states of a SpriteKit node.
