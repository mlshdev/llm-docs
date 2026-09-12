> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/withcurrentsnapshot(_:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/withcurrentsnapshot(_:))

# withCurrentSnapshot(\_:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

## Declaration

```swift
func withCurrentSnapshot(_ callback: (TableSnapshot) -> Void)
```

## See Also

### Creating a tabletop game

- [init(tableSetup:version:)](init%28tablesetup_version_%29.md): Creates a tabletop game with the specified table configuration and version of rules.
- [rootPose](rootpose.md): Update the root pose for the current player
- [update(deltaTime:)](update%28deltatime_%29.md): Update the game manually. Call this function if `automaticUpdate` was not set when registering the Tabletop instance.
