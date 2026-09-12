> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknodefocusbehavior](https://developer.apple.com/documentation/spritekit/sknodefocusbehavior)

# SKNodeFocusBehavior (Swift)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

Options for the focusable states of a SpriteKit node.

## Declaration

```swift
enum SKNodeFocusBehavior
```

## Topics

### Enumeration Cases

- [SKNodeFocusBehavior.none](sknodefocusbehavior/none.md): Node is not focusable.
- [SKNodeFocusBehavior.occluding](sknodefocusbehavior/occluding.md): Node is not focusable and prevents nodes that it visually obscures from becoming focusable.
- [SKNodeFocusBehavior.focusable](sknodefocusbehavior/focusable.md): Node is focusable and prevents nodes that it visually obscures from becoming focusable.

### Initializers

- [init(rawValue:)](sknodefocusbehavior/init%28rawvalue_%29.md)

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
- [SKParticleRenderOrder](skparticlerenderorder.md): The order to use when the emitter’s particles are rendered.
- [SKRepeatMode](skrepeatmode.md): The modes used to determine how the sequence repeats.
- [SKSceneScaleMode](skscenescalemode.md): The modes that determine how the scene’s area is mapped to the view that presents it.
- [SKTextureFilteringMode](sktexturefilteringmode.md): Texture filtering modes to use when the texture is drawn in a size other than its native size.
- [SKTileAdjacencyMask](sktileadjacencymask.md): An enumeration defining how neighboring tiles are automatically placed next to each other.
- [SKTileDefinitionRotation](sktiledefinitionrotation.md): The allowed rotations for a given tile.
- [SKTileSetType](sktilesettype.md): An enumeration defining how tiles are arranged.
- [SKTransitionDirection](sktransitiondirection.md): For some transitions, the direction in which the transition is performed.
- [SKUniformType](skuniformtype.md): An enumerated type to identify the type of a uniform object.

# SKNodeFocusBehavior (Objective-C)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

Options for the focusable states of a SpriteKit node.

## Declaration

```objectivec
enum SKNodeFocusBehavior : NSInteger;
```

## Topics

### Enumeration Cases

- [SKNodeFocusBehaviorNone](sknodefocusbehavior/none.md): Node is not focusable.
- [SKNodeFocusBehaviorOccluding](sknodefocusbehavior/occluding.md): Node is not focusable and prevents nodes that it visually obscures from becoming focusable.
- [SKNodeFocusBehaviorFocusable](sknodefocusbehavior/focusable.md): Node is focusable and prevents nodes that it visually obscures from becoming focusable.

## See Also

### Enumerations

- [SKActionTimingMode](skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [SKAttributeType](skattributetype.md): Options that specify an attribute’s data type.
- [SKBlendMode](skblendmode.md): The modes that describe how the source and destination pixel colors are used to calculate the new destination color.
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
