> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/medecodeframeoptions/realtimeplayback](https://developer.apple.com/documentation/mediaextension/medecodeframeoptions/realtimeplayback)

# realTimePlayback (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that hints to the decoder to use a low-power mode that can’t decode faster than 1x real-time.

## Declaration

```swift
var realTimePlayback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The system sets this value to [false](https://developer.apple.com/documentation/swift/false) during all uses other than 1x forward real-time playback, including seeking, playback at other rates, and export.

This hint only applies to the current decode session. If multiple instances of a decoder operate at the same time, it may not be acceptable to use a low-power mode if the system can’t sustain real-time playback across all the streams.

## See Also

### Inspecting frame decoding options

- [doNotOutputFrame](donotoutputframe.md): A Boolean value that hints to the decoder whether or not it should emit an image buffer for the frame.

# realTimePlayback (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that hints to the decoder to use a low-power mode that can’t decode faster than 1x real-time.

## Declaration

```objectivec
@property (readwrite) BOOL realTimePlayback;
```

<a id="Discussion"></a>

## Discussion

The system sets this value to [false](https://developer.apple.com/documentation/swift/false) during all uses other than 1x forward real-time playback, including seeking, playback at other rates, and export.

This hint only applies to the current decode session. If multiple instances of a decoder operate at the same time, it may not be acceptable to use a low-power mode if the system can’t sustain real-time playback across all the streams.

## See Also

### Inspecting frame decoding options

- [doNotOutputFrame](donotoutputframe.md): A Boolean value that hints to the decoder whether or not it should emit an image buffer for the frame.
