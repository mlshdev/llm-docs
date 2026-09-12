> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/isenabled](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/isenabled)

# isEnabled

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the track’s container enables it.

## Declaration

```swift
var isEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

For file-based media, you can change its [isEnabled](../avplayeritemtrack/isenabled.md) presentation state using [AVPlayerItemTrack](../avplayeritemtrack.md).

## See Also

### Accessing track information

- [isPlayable](isplayable.md): A Boolean value that indicates whether the track is playable in the current environment.
- [isDecodable](isdecodable.md): A Boolean value that indicates whether the track is decodable in the current environment.
- [isSelfContained](isselfcontained.md): A Boolean value that indicates whether this track references sample data only within its container file.
- [totalSampleDataLength](totalsampledatalength.md): The total number of bytes of sample data the track requires.
- [hasMediaCharacteristic(\_:)](hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the track references media with the specified media characteristic.
