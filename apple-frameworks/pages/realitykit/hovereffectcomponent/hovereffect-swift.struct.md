> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hovereffectcomponent/hovereffect-swift.struct](https://developer.apple.com/documentation/realitykit/hovereffectcomponent/hovereffect-swift.struct)

# HoverEffectComponent.HoverEffect

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An effect that applies when a person looks at or directly touches the entity.

## Declaration

```swift
struct HoverEffect
```

## Topics

### Instance Properties

- [groupID](hovereffect-swift.struct/groupid.md): An optional group identifier for the hover effect.

### Type Methods

- [highlight(\_:)](hovereffect-swift.struct/highlight%28__%29.md): Returns a hover effect style that uniformly highlights the entity and also applies a feathered spotlight effect.
- [highlight(\_:groupID:)](hovereffect-swift.struct/highlight%28__groupid_%29.md): Returns a highlight hover effect that is assigned to the group.
- [shader(\_:)](hovereffect-swift.struct/shader%28__%29.md): Returns a hover effect style that applies hover state data to a custom shader that applies to the entity’s model.
- [shader(\_:groupID:)](hovereffect-swift.struct/shader%28__groupid_%29.md): Returns a shader hover effect that is assigned to the group.
- [spotlight(\_:)](hovereffect-swift.struct/spotlight%28__%29.md): Returns a hover effect that displays a feathered spotlight on the entity where the current hover location is.
- [spotlight(\_:groupID:)](hovereffect-swift.struct/spotlight%28__groupid_%29.md): Returns a spotlight hover effect that is assigned to the group.
