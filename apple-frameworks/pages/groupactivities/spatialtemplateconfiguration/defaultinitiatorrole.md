> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/groupactivities/spatialtemplateconfiguration/defaultinitiatorrole

# defaultInitiatorRole

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The default role to assign to the initiator of the group activity.

## Declaration

```swift
let defaultInitiatorRole: (any SpatialTemplateRole)?
```

<a id="discussion"></a>

## Discussion

Spatial templates use roles to determine which seats are available to participants. If you specify a value for this property at initialization time, the spatial template assigns this role to the person who starts the group activity. For example, you might assign a presenter role to the person who starts an activity to deliver a presentation.
