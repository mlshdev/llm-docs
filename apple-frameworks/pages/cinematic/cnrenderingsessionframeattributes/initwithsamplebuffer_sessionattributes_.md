> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnrenderingsessionframeattributes/initwithsamplebuffer:sessionattributes:](https://developer.apple.com/documentation/cinematic/cnrenderingsessionframeattributes/initwithsamplebuffer:sessionattributes:)

# initWithSampleBuffer:sessionAttributes:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Initializes the rendering frame attributes from a sample buffer read from a Cinematic metadata track.

## Declaration

```objectivec
- (instancetype) initWithSampleBuffer:(CMSampleBufferRef) sampleBuffer sessionAttributes:(CNRenderingSessionAttributes *) sessionAttributes;
```

## Parameters

- `sampleBuffer`: A sample buffer read from the timed Cinematic metadata track of a cinematic asset.
- `sessionAttributes`: Rendering session attributes loaded from a Cinematic asset.

<a id="return-value"></a>

## Return Value

An object representing the rendering frame attributes from a sample buffer read from a cinematic metadata track.
