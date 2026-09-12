> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursoraudiodependencyinfo/audiosampleisindependentlydecodable](https://developer.apple.com/documentation/avfoundation/avsamplecursoraudiodependencyinfo/audiosampleisindependentlydecodable)

# audioSampleIsIndependentlyDecodable (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value indicating whether the sample is independently decodable.

## Declaration

```swift
var audioSampleIsIndependentlyDecodable: ObjCBool
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) for Immediate Playout Frames (IPFs) and Independent Frames (IFs).

## See Also

### Querying independent decodability

- [audioSamplePacketRefreshCount](audiosamplepacketrefreshcount.md): The number of samples, starting at the current sample, that must be fed to the decoder to achieve full decoder refresh.

# audioSampleIsIndependentlyDecodable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value indicating whether the sample is independently decodable.

## Declaration

```objectivec
BOOL audioSampleIsIndependentlyDecodable;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) for Immediate Playout Frames (IPFs) and Independent Frames (IFs).

## See Also

### Querying independent decodability

- [audioSamplePacketRefreshCount](audiosamplepacketrefreshcount.md): The number of samples, starting at the current sample, that must be fed to the decoder to achieve full decoder refresh.
