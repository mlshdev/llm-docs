> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/groupactivities/systemcoordinator/participantstate/role

# role

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The role assigned to this participant, if any.

## Declaration

```swift
let role: (any SpatialTemplateRole)?
```

<a id="discussion"></a>

## Discussion

This value could differ from the role attached to the participant’s assigned seat if this participant was assigned a role that has no remaining seats.
