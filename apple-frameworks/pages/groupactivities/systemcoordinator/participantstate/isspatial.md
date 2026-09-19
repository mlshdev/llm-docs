> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/groupactivities/systemcoordinator/participantstate/isspatial

# isSpatial

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether the person supports being in a shared simulation space for an activity.

## Declaration

```swift
let isSpatial: Bool
```

## Mentioned In

- [Adding spatial Persona support to an activity](../../adding-spatial-persona-support-to-an-activity.md)

<a id="discussion"></a>

## Discussion

The value of this property is `true` when the current person supports activities that place participants relative to the activity itself. The person must use a device that supports spatial experiences, and must configure their spatial Persona to support inclusion in a shared simulation space.
