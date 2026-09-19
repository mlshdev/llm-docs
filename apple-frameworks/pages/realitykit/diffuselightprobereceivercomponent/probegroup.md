> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/diffuselightprobereceivercomponent/probegroup

# probeGroup

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The entity providing diffuse probe lighting to this receiver.

## Declaration

```swift
var probeGroup: Entity
```

<a id="discussion"></a>

## Discussion

The referenced entity must have a [DiffuseLightProbeGroupComponent](../diffuselightprobegroupcomponent.md) attached and must exist within the scene hierarchy. The receiver’s diffuse lighting is interpolated from probes in this group based on the receiver entity’s position.
