> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/avgamebypasssystemspatialaudio](https://developer.apple.com/documentation/bundleresources/information-property-list/avgamebypasssystemspatialaudio)

# AVGameBypassSystemSpatialAudio

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+

A key that ignores the system spatial-audio toggle in Control Center.

## Details

`AVGameBypassSystemSpatialAudio`

<a id="Discussion"></a>

## Discussion

In iOS 18 and tvOS 18 and later, the system automatically adds spatial audio to the output for games. To opt out of automatic spatial audio and support just your preferred spatial audio setup, add this key to your app’s `Info.plist`.

## See Also

### Games

- [GKGameCenterBadgingDisabled](gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.
- [GCDisableInferringGameMetadata](gcdisableinferringgamemetadata.md): A Boolean value that indicates whether the Games app excludes game information for non-App Store games.
- [GCSupportedGameControllers](gcsupportedgamecontrollers.md): The types of game controller profiles that the app supports or requires.
- [GCSupportsControllerUserInteraction](gcsupportscontrolleruserinteraction.md): A Boolean value indicating whether the app supports a game controller.
- [GCRequiresControllerUserInteraction](gcrequirescontrolleruserinteraction.md): The platforms for which your app requires or you recommend a game controller.
- [GCSupportsMultipleMicroGamepads](gcsupportsmultiplemicrogamepads.md): A Boolean value indicating whether the physical Apple TV Remote and the Apple TV Remote app operate as separate game controllers.
- [LSSupportsGameMode](lssupportsgamemode.md): A Boolean value indicating whether the app supports Game Mode.
- [GCSupportsGameMode](gcsupportsgamemode.md): Deprecated. A Boolean value indicating whether the app supports game mode.
- [GKShowChallengeBanners](gkshowchallengebanners.md): Deprecated. A Boolean value that indicates whether GameKit can display challenge banners in a game.
