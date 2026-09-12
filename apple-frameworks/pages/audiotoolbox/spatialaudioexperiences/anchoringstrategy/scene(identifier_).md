> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/spatialaudioexperiences/anchoringstrategy/scene(identifier:)](https://developer.apple.com/documentation/audiotoolbox/spatialaudioexperiences/anchoringstrategy/scene(identifier:))

# SpatialAudioExperiences.AnchoringStrategy.scene(identifier:)

**Framework:** Audio Toolbox  
**Kind:** Case  
**Availability:** visionOS 26.0+

Anchor to the visual center of a particular UIScene.

## Declaration

```swift
case scene(identifier: String)
```

<a id="discussion"></a>

## Discussion

The sound tracks the center of the UIScene’s volume or window even as the user moves it around their space.

Use the [persistentIdentifier](../../../uikit/uiscenesession/persistentidentifier.md) for a [UIScene](../../../uikit/uiscene.md) as the identifier.

Configuring your sound with an unknown scene identifier causes the sound to receive a front anchoring strategy.

If a sound starts with a known scene identifer but the scene becomes unknown later on, the sound remains aligned with the scene’s last-known location until the user executes a recenter gesture at which point it reverts to a front anchoring strategy.

Using the UIScene identifier from an [ImmersiveSpace](https://developer.apple.com/documentation/swiftui/immersivespace) results in the same behavior as a front anchoring strategy.
