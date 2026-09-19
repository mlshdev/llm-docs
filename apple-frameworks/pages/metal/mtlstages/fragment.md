> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlstages/fragment

# fragment (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Represents all fragment shader stage work in a render pass.

## Declaration

```swift
static var fragment: MTLStages { get }
```

## Mentioned In

- [Synchronizing stages within a pass](../synchronizing-stages-within-a-pass.md)

## See Also

### Render pass stages

- [vertex](vertex.md): Represents all vertex shader stage work in a render pass.
- [tile](tile.md): Represents all tile shading stage work in a render pass.
- [object](object.md): Represents all object shader stage work in a render pass.
- [mesh](mesh.md): Represents all mesh shader stage work work in a render pass.

# MTLStageFragment (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Represents all fragment shader stage work in a render pass.

## Declaration

```objectivec
MTLStageFragment
```

## Mentioned In

- [Synchronizing stages within a pass](../synchronizing-stages-within-a-pass.md)

## See Also

### Render pass stages

- [MTLStageVertex](vertex.md): Represents all vertex shader stage work in a render pass.
- [MTLStageTile](tile.md): Represents all tile shading stage work in a render pass.
- [MTLStageObject](object.md): Represents all object shader stage work in a render pass.
- [MTLStageMesh](mesh.md): Represents all mesh shader stage work work in a render pass.
