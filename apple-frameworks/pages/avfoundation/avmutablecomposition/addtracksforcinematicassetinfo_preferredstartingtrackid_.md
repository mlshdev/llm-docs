> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/addtracksforcinematicassetinfo:preferredstartingtrackid:](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/addtracksforcinematicassetinfo:preferredstartingtrackid:)

# addTracksForCinematicAssetInfo:preferredStartingTrackID:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Adds a group of empty tracks associated with a cinematic asset to a mutable composition.

## Declaration

```objectivec
- (CNCompositionInfo *) addTracksForCinematicAssetInfo:(CNAssetInfo *) assetInfo preferredStartingTrackID:(CMPersistentTrackID) preferredStartingTrackID;
```

<a id="return-value"></a>

## Return Value

Information about the composition tracks added to the mutable composition. Be sure to call insertTimeRange on the result to specify at least one time range of cinematic asset you’d like in the composition.
