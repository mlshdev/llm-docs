> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/isselfcontained](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/isselfcontained)

# isSelfContained

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether this track references sample data only within its container file.

## Declaration

```swift
var isSelfContained: Bool { get }
```

## See Also

### Accessing track information

- [isPlayable](isplayable.md): A Boolean value that indicates whether the track is playable in the current environment.
- [isDecodable](isdecodable.md): A Boolean value that indicates whether the track is decodable in the current environment.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the track’s container enables it.
- [totalSampleDataLength](totalsampledatalength.md): The total number of bytes of sample data the track requires.
- [hasMediaCharacteristic(\_:)](hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the track references media with the specified media characteristic.
