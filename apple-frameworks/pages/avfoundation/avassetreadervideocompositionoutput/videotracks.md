> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadervideocompositionoutput/videotracks](https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput/videotracks)

# videoTracks (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The tracks from which the output reads the composited video.

## Declaration

```swift
var videoTracks: [AVAssetTrack] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains [AVAssetTrack](../avassettrack.md) objects owned by the target asset reader’s asset.

## See Also

### Inspecting an output

- [videoSettings](videosettings.md): The video settings that the output uses.

# videoTracks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The tracks from which the output reads the composited video.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVAssetTrack *> * videoTracks;
```

<a id="Discussion"></a>

## Discussion

The array contains [AVAssetTrack](../avassettrack.md) objects owned by the target asset reader’s asset.

## See Also

### Inspecting an output

- [videoSettings](videosettings.md): The video settings that the output uses.
