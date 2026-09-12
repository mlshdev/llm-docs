> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/gcsupportedgamecontrollers](https://developer.apple.com/documentation/bundleresources/information-property-list/gcsupportedgamecontrollers)

# GCSupportedGameControllers

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The types of game controller profiles that the app supports or requires.

## Details

`GCSupportedGameControllers`

## Properties

- `ProfileName` — `string`: **Allowed values:** `DirectionalGamepad`, `SpatialGamepad`, `ExtendedGamepad`, `MicroGamepad`

<a id="Discussion"></a>

## Discussion

The dictionary keys are `ProfileName` and the possible game controller values are:

- **`ExtendedGamepad`**: The extended set of gamepad controls. See [GCExtendedGamepad](../../gamecontroller/gcextendedgamepad.md).
- **`SpatialGamepad`**: The set of spatial gamepad controls.
- **`MicroGamepad`**: The 1st Generation Siri Remote. See [GCMicroGamepad](../../gamecontroller/gcmicrogamepad.md).
- **`DirectionalGamepad`**: The 2nd Generation Siri Remote. A directional pad without motion or rotation. See [GCDirectionalGamepad](../../gamecontroller/gcdirectionalgamepad.md). Available in iOS 14.3+, macOS 11.1+, Mac Catalyst 14.3+, and tvOS 14.3+.

## See Also

### Games

- [AVGameBypassSystemSpatialAudio](avgamebypasssystemspatialaudio.md): A key that ignores the system spatial-audio toggle in Control Center.
- [GKGameCenterBadgingDisabled](gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.
- [GCDisableInferringGameMetadata](gcdisableinferringgamemetadata.md): A Boolean value that indicates whether the Games app excludes game information for non-App Store games.
- [GCSupportsControllerUserInteraction](gcsupportscontrolleruserinteraction.md): A Boolean value indicating whether the app supports a game controller.
- [GCRequiresControllerUserInteraction](gcrequirescontrolleruserinteraction.md): The platforms for which your app requires or you recommend a game controller.
- [GCSupportsMultipleMicroGamepads](gcsupportsmultiplemicrogamepads.md): A Boolean value indicating whether the physical Apple TV Remote and the Apple TV Remote app operate as separate game controllers.
- [LSSupportsGameMode](lssupportsgamemode.md): A Boolean value indicating whether the app supports Game Mode.
- [GCSupportsGameMode](gcsupportsgamemode.md): Deprecated. A Boolean value indicating whether the app supports game mode.
- [GKShowChallengeBanners](gkshowchallengebanners.md): Deprecated. A Boolean value that indicates whether GameKit can display challenge banners in a game.
