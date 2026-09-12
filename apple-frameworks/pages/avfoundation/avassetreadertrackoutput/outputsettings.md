> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadertrackoutput/outputsettings](https://developer.apple.com/documentation/avfoundation/avassetreadertrackoutput/outputsettings)

# outputSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The output settings for this track output.

## Declaration

```swift
var outputSettings: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The value is a dictionary that contains values for audio and video settings keys. A value of `nil` indicates that the track output vends samples in their original format as stored in the target track. In that case, the track output skips decoding and returns the samples in decode order. A non-`nil` value causes the track output to decode the samples and return them in presentation order.

## See Also

### Inspecting an output

- [track](track.md): The track from which the output reads sample buffers.

# outputSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The output settings for this track output.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * outputSettings;
```

<a id="Discussion"></a>

## Discussion

The value is a dictionary that contains values for audio and video settings keys. A value of `nil` indicates that the track output vends samples in their original format as stored in the target track. In that case, the track output skips decoding and returns the samples in decode order. A non-`nil` value causes the track output to decode the samples and return them in presentation order.

## See Also

### Inspecting an output

- [track](track.md): The track from which the output reads sample buffers.
