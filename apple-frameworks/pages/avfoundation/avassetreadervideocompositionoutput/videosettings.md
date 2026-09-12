> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadervideocompositionoutput/videosettings](https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput/videosettings)

# videoSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The video settings that the output uses.

## Declaration

```swift
var videoSettings: [String : Any]? { get }
```

## See Also

### Inspecting an output

- [videoTracks](videotracks.md): The tracks from which the output reads the composited video.

# videoSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The video settings that the output uses.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * videoSettings;
```

## See Also

### Inspecting an output

- [videoTracks](videotracks.md): The tracks from which the output reads the composited video.
