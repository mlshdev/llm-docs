> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/gcsupportsmultiplemicrogamepads](https://developer.apple.com/documentation/bundleresources/information-property-list/gcsupportsmultiplemicrogamepads)

# GCSupportsMultipleMicroGamepads

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** tvOS 9.0+

A Boolean value indicating whether the physical Apple TV Remote and the Apple TV Remote app operate as separate game controllers.

## Details

`GCSupportsMultipleMicroGamepads`

<a id="Discussion"></a>

## Discussion

If set to `YES`, your app supports multiple remotes with gamepads; otherwise, it doesn’t. If you support the 2nd Generation Siri Remote, set this key to `YES`. If you don’t set this key to `YES`, the combined micro gamepads won’t have the extra inputs of the 2nd Generation Siri Remote.

## See Also

### Games

- [AVGameBypassSystemSpatialAudio](avgamebypasssystemspatialaudio.md): A key that ignores the system spatial-audio toggle in Control Center.
- [GKGameCenterBadgingDisabled](gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.
- [GCDisableInferringGameMetadata](gcdisableinferringgamemetadata.md): A Boolean value that indicates whether the Games app excludes game information for non-App Store games.
- [GCSupportedGameControllers](gcsupportedgamecontrollers.md): The types of game controller profiles that the app supports or requires.
- [GCSupportsControllerUserInteraction](gcsupportscontrolleruserinteraction.md): A Boolean value indicating whether the app supports a game controller.
- [GCRequiresControllerUserInteraction](gcrequirescontrolleruserinteraction.md): The platforms for which your app requires or you recommend a game controller.
- [LSSupportsGameMode](lssupportsgamemode.md): A Boolean value indicating whether the app supports Game Mode.
- [GCSupportsGameMode](gcsupportsgamemode.md): Deprecated. A Boolean value indicating whether the app supports game mode.
- [GKShowChallengeBanners](gkshowchallengebanners.md): Deprecated. A Boolean value that indicates whether GameKit can display challenge banners in a game.
