> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopgame/rootpose

# rootPose

**Framework:** TabletopKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

Update the root pose for the current player

## Declaration

```swift
var rootPose: Pose3D { get set }
```

## See Also

### Creating a tabletop game

- [init(tableSetup:version:)](init%28tablesetup_version_%29.md): Creates a tabletop game with the specified table configuration and version of rules.
- [update(deltaTime:)](update%28deltatime_%29.md): Update the game manually. Call this function if `automaticUpdate` was not set when registering the Tabletop instance.
- [withCurrentSnapshot(\_:)](withcurrentsnapshot%28__%29.md)
