> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderaudiomixoutput/audiotracks](https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput/audiotracks)

# audioTracks (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The tracks from which the output reads audio.

## Declaration

```swift
var audioTracks: [AVAssetTrack] { get }
```

## See Also

### Inspecting an output

- [audioSettings](audiosettings.md): The audio settings that the output uses.

# audioTracks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The tracks from which the output reads audio.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVAssetTrack *> * audioTracks;
```

## See Also

### Inspecting an output

- [audioSettings](audiosettings.md): The audio settings that the output uses.
