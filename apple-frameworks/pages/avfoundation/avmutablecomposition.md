> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition](https://developer.apple.com/documentation/avfoundation/avmutablecomposition)

# AVMutableComposition (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that you use to create a new composition from existing assets.

## Declaration

```swift
class AVMutableComposition
```

<a id="overview"></a>

## Overview

Use this object to add and remove composition tracks, and add, remove, and scale their time ranges. You can make an immutable snapshot of a mutable composition for playback and inspection as follows:

```swift
// Use a mutable composition object you create.
let mutableComposition = AVMutableComposition()
        
guard let composition = mutableComposition.copy() as? AVComposition else { return }
        
// Create a player item to inspect and play the composition.
let playerItem = AVPlayerItem(asset: composition)
```

## Topics

### Creating a composition

- [init(urlAssetInitializationOptions:)](avmutablecomposition/init%28urlassetinitializationoptions_%29-rh4y.md): Creates a mutable composition that uses the specified initialization options.

### Loading tracks

- [tracks](avpartialasyncproperty/tracks-92p4a.md): Conforms when `Root` inherits `AVMutableComposition`. The tracks that a composition contains.
- [loadTrack(withTrackID:completionHandler:)](avmutablecomposition/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](avmutablecomposition/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](avmutablecomposition/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Accessing tracks

Prefer loading tracks asynchronously using the methods in Loading Tracks.

- [tracks](avmutablecomposition/tracks.md): The tracks that a composition contains.
- [track(withTrackID:)](avmutablecomposition/track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracks(withMediaType:)](avmutablecomposition/tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracks(withMediaCharacteristic:)](avmutablecomposition/tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.

### Managing composition tracks

- [mutableTrack(compatibleWith:)](avmutablecomposition/mutabletrack%28compatiblewith_%29.md): Returns a composition track into which you can insert any time range of the specified asset track.
- [addMutableTrack(withMediaType:preferredTrackID:)](avmutablecomposition/addmutabletrack%28withmediatype_preferredtrackid_%29.md): Adds an empty track to a composition.
- [removeTrack(\_:)](avmutablecomposition/removetrack%28__%29.md): Removes a specified track from the composition.

### Managing Cinematic tracks

- [addTracks(for:preferredStartingTrackID:)](avmutablecomposition/addtracks%28for_preferredstartingtrackid_%29.md)

### Managing time ranges

- [removeTimeRange(\_:)](avmutablecomposition/removetimerange%28__%29.md): Removes a specified time range from all tracks of the composition.
- [scaleTimeRange(\_:toDuration:)](avmutablecomposition/scaletimerange%28__toduration_%29.md): Changes the duration of all tracks in a given time range.
- [insertEmptyTimeRange(\_:)](avmutablecomposition/insertemptytimerange%28__%29.md): Adds or extends an empty time range within all tracks of the composition.
- [insertTimeRange(\_:of:at:completionHandler:)](avmutablecomposition/inserttimerange%28__of_at_completionhandler_%29.md): Deprecated. Inserts all tracks of an asset for a time range into a composition.
- [insertTimeRange(\_:of:at:)](avmutablecomposition/inserttimerange%28__of_at_%29.md): Deprecated. Inserts all the tracks within a given time range of a specified asset into the composition.

### Configuring video size

- [naturalSize](avmutablecomposition/naturalsize.md): The encoded or authored size of the visual portion of the asset.

### Instance methods

- [insertTimeRange(\_:of:at:isolation:)](avmutablecomposition/inserttimerange%28__of_at_isolation_%29.md)

### Initializers

- [init(URLAssetInitializationOptions:)](avmutablecomposition/init%28urlassetinitializationoptions_%29-6codz.md)

## Relationships

### Inherits From

- [AVComposition](avcomposition.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Mutable compositions

- [AVMutableCompositionTrack](avmutablecompositiontrack.md): A mutable track in a composition that you use to insert, remove, and scale track segments without affecting their low-level representation.

# AVMutableComposition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that you use to create a new composition from existing assets.

## Declaration

```objectivec
@interface AVMutableComposition : AVComposition
```

<a id="overview"></a>

## Overview

Use this object to add and remove composition tracks, and add, remove, and scale their time ranges. You can make an immutable snapshot of a mutable composition for playback and inspection as follows:

```swift
// Use a mutable composition object you create.
let mutableComposition = AVMutableComposition()
        
guard let composition = mutableComposition.copy() as? AVComposition else { return }
        
// Create a player item to inspect and play the composition.
let playerItem = AVPlayerItem(asset: composition)
```

## Topics

### Creating a composition

- [composition](avmutablecomposition/composition.md): Returns a new mutable composition.
- [compositionWithURLAssetInitializationOptions:](avmutablecomposition/init%28urlassetinitializationoptions_%29-rh4y.md): Creates a mutable composition that uses the specified initialization options.

### Loading tracks

- [loadTrackWithTrackID:completionHandler:](avmutablecomposition/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracksWithMediaType:completionHandler:](avmutablecomposition/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracksWithMediaCharacteristic:completionHandler:](avmutablecomposition/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Accessing tracks

Prefer loading tracks asynchronously using the methods in Loading Tracks.

- [tracks](avmutablecomposition/tracks.md): The tracks that a composition contains.
- [trackWithTrackID:](avmutablecomposition/track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracksWithMediaType:](avmutablecomposition/tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](avmutablecomposition/tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.

### Managing composition tracks

- [mutableTrackCompatibleWithTrack:](avmutablecomposition/mutabletrack%28compatiblewith_%29.md): Returns a composition track into which you can insert any time range of the specified asset track.
- [addMutableTrackWithMediaType:preferredTrackID:](avmutablecomposition/addmutabletrack%28withmediatype_preferredtrackid_%29.md): Adds an empty track to a composition.
- [removeTrack:](avmutablecomposition/removetrack%28__%29.md): Removes a specified track from the composition.

### Managing Cinematic tracks

- [addTracksForCinematicAssetInfo:preferredStartingTrackID:](avmutablecomposition/addtracksforcinematicassetinfo_preferredstartingtrackid_.md): Adds a group of empty tracks associated with a cinematic asset to a mutable composition.

### Managing time ranges

- [removeTimeRange:](avmutablecomposition/removetimerange%28__%29.md): Removes a specified time range from all tracks of the composition.
- [scaleTimeRange:toDuration:](avmutablecomposition/scaletimerange%28__toduration_%29.md): Changes the duration of all tracks in a given time range.
- [insertEmptyTimeRange:](avmutablecomposition/insertemptytimerange%28__%29.md): Adds or extends an empty time range within all tracks of the composition.
- [insertTimeRange:ofAsset:atTime:completionHandler:](avmutablecomposition/inserttimerange%28__of_at_completionhandler_%29.md): Deprecated. Inserts all tracks of an asset for a time range into a composition.
- [insertTimeRange:ofAsset:atTime:error:](avmutablecomposition/inserttimerange%28__of_at_%29.md): Deprecated. Inserts all the tracks within a given time range of a specified asset into the composition.

### Configuring video size

- [naturalSize](avmutablecomposition/naturalsize.md): The encoded or authored size of the visual portion of the asset.

## Relationships

### Inherits From

- [AVComposition](avcomposition.md)

## See Also

### Mutable compositions

- [AVMutableCompositionTrack](avmutablecompositiontrack.md): A mutable track in a composition that you use to insert, remove, and scale track segments without affecting their low-level representation.
