> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoder/splitpoints(forframestart:duration:servicecount:)](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoder/splitpoints(forframestart:duration:servicecount:))

# splitPoints(forFrameStart:duration:serviceCount:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Determines the source media segments based on the number of available encoder services.

## Declaration

```swift
func splitPoints(forFrameStart start: Int64, duration numFrames: Int64, serviceCount: Int32) -> [Any]!
```

## Parameters

- `start`: The frame at which to start segmenting.
- `numFrames`: The number of frames in the source media.
- `serviceCount`: The number of encoder services available to process the source media.

<a id="return-value"></a>

## Return Value

An array of frame numbers indicating the start of each segment.

<a id="discussion"></a>

## Discussion

In a distributed process environment, the Compressor app assigns source media segments to the available encoder instances to process them concurrently. If your extension supports segmenting, the Compressor app calls this method to determine segments of the source media. Segmenting the source media is beneficial for distributed encoding, and for local encoding if you enable additional Compressor app instances.

> **Note**

>  When determining source media segments, specify multiple segments for video data and a single segment for complete audio data.

# splitPointsForFrameStart:duration:serviceCount: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Determines the source media segments based on the number of available encoder services.

## Declaration

```objectivec
- (NSArray *) splitPointsForFrameStart:(int64_t) start duration:(int64_t) numFrames serviceCount:(int32_t) serviceCount;
```

## Parameters

- `start`: The frame at which to start segmenting.
- `numFrames`: The number of frames in the source media.
- `serviceCount`: The number of encoder services available to process the source media.

<a id="return-value"></a>

## Return Value

An array of frame numbers indicating the start of each segment.

<a id="discussion"></a>

## Discussion

In a distributed process environment, the Compressor app assigns source media segments to the available encoder instances to process them concurrently. If your extension supports segmenting, the Compressor app calls this method to determine segments of the source media. Segmenting the source media is beneficial for distributed encoding, and for local encoding if you enable additional Compressor app instances.

> **Note**

>  When determining source media segments, specify multiple segments for video data and a single segment for complete audio data.
