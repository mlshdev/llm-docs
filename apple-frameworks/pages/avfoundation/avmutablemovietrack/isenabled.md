> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/isenabled](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/isenabled)

# isEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the track’s container enables it.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

For file-based media, you can change its [isEnabled](../avplayeritemtrack/isenabled.md) presentation state using [AVPlayerItemTrack](../avplayeritemtrack.md).

## See Also

### Accessing track information

- [isPlayable](isplayable.md): A Boolean value that indicates whether the track is playable in the current environment.
- [isDecodable](isdecodable.md): A Boolean value that indicates whether the track is decodable in the current environment.
- [isSelfContained](isselfcontained.md): A Boolean value that indicates whether this track references sample data only within its container file.
- [hasProtectedContent](hasprotectedcontent.md): A Boolean value that indicates whether a track contains protected content.
- [totalSampleDataLength](totalsampledatalength.md): The total number of bytes of sample data the track requires.
- [hasMediaCharacteristic(\_:)](hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the track references media with the specified media characteristic.

# enabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the track’s container enables it.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

For file-based media, you can change its [enabled](../avplayeritemtrack/isenabled.md) presentation state using [AVPlayerItemTrack](../avplayeritemtrack.md).

## See Also

### Accessing track information

- [hasProtectedContent](hasprotectedcontent.md): A Boolean value that indicates whether a track contains protected content.
- [hasMediaCharacteristic:](hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the track references media with the specified media characteristic.
