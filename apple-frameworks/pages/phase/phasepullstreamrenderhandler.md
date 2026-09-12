> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepullstreamrenderhandler](https://developer.apple.com/documentation/phase/phasepullstreamrenderhandler)

# PHASEPullStreamRenderHandler (Swift)

**Framework:** PHASE  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias PHASEPullStreamRenderHandler = (UnsafeMutablePointer<ObjCBool>, UnsafePointer<AudioTimeStamp>, AVAudioFrameCount, UnsafeMutablePointer<AudioBufferList>) -> OSStatus
```

## Parameters

- `isSilence`: The client may use this flag to indicate that the buffer it vends contains only silence. The receiver of the buffer can then use the flag as a hint as to whether the buffer needs to be processed or not. Note that because the flag is only a hint, when setting the silence flag, the originator of a buffer must also ensure that it contains silence (zeroes).
- `timestamp`: The HAL time at which the audio data will be rendered. If there is a sample rate conversion or time compression/expansion downstream, the sample time will not be valid.
- `frameCount`: The number of sample frames of audio data requested.
- `outputData`: The output data.

<a id="return-value"></a>

## Return Value

An OSStatus result code. If an error is returned, the audio data should be assumed to be invalid.

<a id="discussion"></a>

## Discussion

Block to supply audio data to PHASEPullStreamNode

```
The caller must supply valid buffers in outputData's mBuffers' mData and mDataByteSize.
mDataByteSize must be consistent with frameCount. This block may provide output in those
specified buffers, or it may replace the mData pointers with pointers to memory which it
owns and guarantees will remain valid until the next render cycle.
```

# PHASEPullStreamRenderBlock (Objective-C)

**Framework:** PHASE  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef int (^)(_Bool *, const struct AudioTimeStamp *, unsigned int, struct AudioBufferList *) PHASEPullStreamRenderBlock;
```

## Parameters

- `isSilence`: The client may use this flag to indicate that the buffer it vends contains only silence. The receiver of the buffer can then use the flag as a hint as to whether the buffer needs to be processed or not. Note that because the flag is only a hint, when setting the silence flag, the originator of a buffer must also ensure that it contains silence (zeroes).
- `timestamp`: The HAL time at which the audio data will be rendered. If there is a sample rate conversion or time compression/expansion downstream, the sample time will not be valid.
- `frameCount`: The number of sample frames of audio data requested.
- `outputData`: The output data.

<a id="return-value"></a>

## Return Value

An OSStatus result code. If an error is returned, the audio data should be assumed to be invalid.

<a id="discussion"></a>

## Discussion

Block to supply audio data to PHASEPullStreamNode

```
The caller must supply valid buffers in outputData's mBuffers' mData and mDataByteSize.
mDataByteSize must be consistent with frameCount. This block may provide output in those
specified buffers, or it may replace the mData pointers with pointers to memory which it
owns and guarantees will remain valid until the next render cycle.
```
