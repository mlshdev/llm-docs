> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/totalsampledatalength](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/totalsampledatalength)

# totalSampleDataLength

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The total number of bytes of sample data the track requires.

## Declaration

```swift
var totalSampleDataLength: Int64 { get }
```

<a id="Discussion"></a>

## Discussion

The value may be `0` if the framework can’t determine the total sample data length.

## See Also

### Accessing track information

- [isPlayable](isplayable.md): A Boolean value that indicates whether the track is playable in the current environment.
- [isDecodable](isdecodable.md): A Boolean value that indicates whether the track is decodable in the current environment.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the track’s container enables it.
- [isSelfContained](isselfcontained.md): A Boolean value that indicates whether this track references sample data only within its container file.
- [hasProtectedContent](hasprotectedcontent.md): A Boolean value that indicates whether a track contains protected content.
- [hasMediaCharacteristic(\_:)](hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the track references media with the specified media characteristic.
