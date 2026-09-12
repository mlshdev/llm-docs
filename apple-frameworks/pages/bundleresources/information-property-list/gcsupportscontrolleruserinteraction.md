> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/gcsupportscontrolleruserinteraction](https://developer.apple.com/documentation/bundleresources/information-property-list/gcsupportscontrolleruserinteraction)

# GCSupportsControllerUserInteraction

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value indicating whether the app supports a game controller.

## Details

`GCSupportsControllerUserInteraction`

<a id="Discussion"></a>

## Discussion

To add this key to the information property list, enable the Game Controllers capability in Xcode. If you set this key to `YES` and check ExtendedGamepad under the Game Controllers capability in your project, App Store adds a game controller support badge to your app. Then users can customize their game controller mappings in Settings and Preferences.

> **Important**

>  To recommend the use of a game controller on iOS or if your app requires a game controller on visionOS, add an entry into the [GCRequiresControllerUserInteraction](gcrequirescontrolleruserinteraction.md) dictionary for that platform and set the value to `YES`.

## See Also

### Games

- [AVGameBypassSystemSpatialAudio](avgamebypasssystemspatialaudio.md): A key that ignores the system spatial-audio toggle in Control Center.
- [GKGameCenterBadgingDisabled](gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.
- [GCDisableInferringGameMetadata](gcdisableinferringgamemetadata.md): A Boolean value that indicates whether the Games app excludes game information for non-App Store games.
- [GCSupportedGameControllers](gcsupportedgamecontrollers.md): The types of game controller profiles that the app supports or requires.
- [GCRequiresControllerUserInteraction](gcrequirescontrolleruserinteraction.md): The platforms for which your app requires or you recommend a game controller.
- [GCSupportsMultipleMicroGamepads](gcsupportsmultiplemicrogamepads.md): A Boolean value indicating whether the physical Apple TV Remote and the Apple TV Remote app operate as separate game controllers.
- [LSSupportsGameMode](lssupportsgamemode.md): A Boolean value indicating whether the app supports Game Mode.
- [GCSupportsGameMode](gcsupportsgamemode.md): Deprecated. A Boolean value indicating whether the app supports game mode.
- [GKShowChallengeBanners](gkshowchallengebanners.md): Deprecated. A Boolean value that indicates whether GameKit can display challenge banners in a game.
