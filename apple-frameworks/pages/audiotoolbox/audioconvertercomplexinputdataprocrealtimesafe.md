> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconvertercomplexinputdataprocrealtimesafe](https://developer.apple.com/documentation/audiotoolbox/audioconvertercomplexinputdataprocrealtimesafe)

# AudioConverterComplexInputDataProcRealtimeSafe (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias AudioConverterComplexInputDataProcRealtimeSafe = (AudioConverterRef, UnsafeMutablePointer<UInt32>, UnsafeMutablePointer<AudioBufferList>, UnsafeMutablePointer<UnsafeMutablePointer<AudioStreamPacketDescription>?>?, UnsafeMutableRawPointer?) -> OSStatus
```

<a id="discussion"></a>

## Discussion

Realtime-safe variant of AudioConverterComplexInputDataProc.

See the discussions of AudioConverterComplexInputDataProc and AudioConverterFillComplexBuffer.

# AudioConverterComplexInputDataProcRealtimeSafe (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef int (*)(struct OpaqueAudioConverter *, unsigned int *, struct AudioBufferList *, struct AudioStreamPacketDescription **, void *) __attribute__((nonblocking)) AudioConverterComplexInputDataProcRealtimeSafe;
```

<a id="discussion"></a>

## Discussion

Realtime-safe variant of AudioConverterComplexInputDataProc.

See the discussions of AudioConverterComplexInputDataProc and AudioConverterFillComplexBuffer.
