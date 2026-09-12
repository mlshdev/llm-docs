> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursoraudiodependencyinfo/audiosamplepacketrefreshcount](https://developer.apple.com/documentation/avfoundation/avsamplecursoraudiodependencyinfo/audiosamplepacketrefreshcount)

# audioSamplePacketRefreshCount (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of samples, starting at the current sample, that must be fed to the decoder to achieve full decoder refresh.

## Declaration

```swift
var audioSamplePacketRefreshCount: Int
```

<a id="Discussion"></a>

## Discussion

The value of [audioSampleIsIndependentlyDecodable](audiosampleisindependentlydecodable.md) must be [true](https://developer.apple.com/documentation/swift/true) for this value to take effect.

The value of this property is `0` for Immediate Playout Frames (IPFs).

## See Also

### Querying independent decodability

- [audioSampleIsIndependentlyDecodable](audiosampleisindependentlydecodable.md): A Boolean value indicating whether the sample is independently decodable.

# audioSamplePacketRefreshCount (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of samples, starting at the current sample, that must be fed to the decoder to achieve full decoder refresh.

## Declaration

```objectivec
NSInteger audioSamplePacketRefreshCount;
```

<a id="Discussion"></a>

## Discussion

The value of [audioSampleIsIndependentlyDecodable](audiosampleisindependentlydecodable.md) must be [true](https://developer.apple.com/documentation/swift/true) for this value to take effect.

The value of this property is `0` for Immediate Playout Frames (IPFs).

## See Also

### Querying independent decodability

- [audioSampleIsIndependentlyDecodable](audiosampleisindependentlydecodable.md): A Boolean value indicating whether the sample is independently decodable.
