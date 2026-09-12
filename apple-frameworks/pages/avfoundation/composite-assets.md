> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/composite-assets](https://developer.apple.com/documentation/avfoundation/composite-assets)

# Composite assets

**Interface languages:** Swift, Objective-C

**Framework:** AVFoundation  
**Kind:** API Collection

Combine tracks and segments of tracks from multiple assets into a composite asset that you can play or process.

## Topics

### Compositions

- [AVComposition](avcomposition.md): An object that combines and arranges media from multiple assets into a single composite asset that you can play or process.
- [AVCompositionTrack](avcompositiontrack.md): A track in a composition that presents media of a uniform type.
- [AVCompositionTrackSegment](avcompositiontracksegment.md): A track segment that maps a time from the source media track to the composition track.

### Mutable compositions

- [AVMutableComposition](avmutablecomposition.md): An object that you use to create a new composition from existing assets.
- [AVMutableCompositionTrack](avmutablecompositiontrack.md): A mutable track in a composition that you use to insert, remove, and scale track segments without affecting their low-level representation.

## See Also

### Editing

- [QuickTime movies](quicktime-movies.md): Access the contents of a QuickTime movie file, and perform sample-level edits of its media tracks.
- [Video effects](video-effects.md): Define standard video transition effects, synchronize layer animations with media timing, and create custom video compositors.
- [Audio mixing](audio-mixing.md): Define how to mix the audio levels from multiple audio tracks over an asset’s duration.
