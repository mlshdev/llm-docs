> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/medecodeframeoptions/donotoutputframe](https://developer.apple.com/documentation/mediaextension/medecodeframeoptions/donotoutputframe)

# doNotOutputFrame (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that hints to the decoder whether or not it should emit an image buffer for the frame.

## Declaration

```swift
var doNotOutputFrame: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the decoder emits [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) instead of a [CVImageBuffer](https://developer.apple.com/documentation/corevideo/cvimagebuffer-q40) instance.

## See Also

### Inspecting frame decoding options

- [realTimePlayback](realtimeplayback.md): A Boolean value that hints to the decoder to use a low-power mode that can’t decode faster than 1x real-time.

# doNotOutputFrame (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that hints to the decoder whether or not it should emit an image buffer for the frame.

## Declaration

```objectivec
@property (readwrite) BOOL doNotOutputFrame;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the decoder emits [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) instead of a [CVImageBuffer](https://developer.apple.com/documentation/corevideo/cvimagebuffer-q40) instance.

## See Also

### Inspecting frame decoding options

- [realTimePlayback](realtimeplayback.md): A Boolean value that hints to the decoder to use a low-power mode that can’t decode faster than 1x real-time.
