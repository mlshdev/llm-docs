> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessionobserver/session(_:didoutputaudiosamplebuffer:)](https://developer.apple.com/documentation/arkit/arsessionobserver/session(_:didoutputaudiosamplebuffer:))

# session(\_:didOutputAudioSampleBuffer:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that a new sample buffer of recorded audio is available.

## Declaration

```swift
optional func session(_ session: ARSession, didOutputAudioSampleBuffer audioSampleBuffer: CMSampleBuffer)
```

## Parameters

- `session`: The session providing information.
- `audioSampleBuffer`: The sample buffer that was output.

<a id="Discussion"></a>

## Discussion

ARKit calls this method on your delegate object only if you’re running an AR session with a configuration whose  [providesAudioData](../arconfiguration/providesaudiodata.md) setting is [true](https://developer.apple.com/documentation/swift/true).

# session:didOutputAudioSampleBuffer: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that a new sample buffer of recorded audio is available.

## Declaration

```objectivec
- (void) session:(ARSession *) session didOutputAudioSampleBuffer:(CMSampleBufferRef) audioSampleBuffer;
```

## Parameters

- `session`: The session providing information.
- `audioSampleBuffer`: The sample buffer that was output.

<a id="Discussion"></a>

## Discussion

ARKit calls this method on your delegate object only if you’re running an AR session with a configuration whose  [providesAudioData](../arconfiguration/providesaudiodata.md) setting is [true](https://developer.apple.com/documentation/swift/true).
