> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/isdecodable](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/isdecodable)

# isDecodable

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether the track is decodable in the current environment.

## Declaration

```swift
var isDecodable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), the system can decode the track, even if decoding may be too slow for real-time playback.

## See Also

### Accessing track information

- [isPlayable](isplayable.md): A Boolean value that indicates whether the track is playable in the current environment.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the track’s container enables it.
- [isSelfContained](isselfcontained.md): A Boolean value that indicates whether this track references sample data only within its container file.
- [totalSampleDataLength](totalsampledatalength.md): The total number of bytes of sample data the track requires.
- [hasMediaCharacteristic(\_:)](hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the track references media with the specified media characteristic.
