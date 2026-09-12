> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorframe/init(buffer:presentationtimestamp:)](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorframe/init(buffer:presentationtimestamp:))

# init(buffer:presentationTimeStamp:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Creates a frame object with a pixel buffer and presentation time.

## Declaration

```swift
init?(buffer: CVPixelBuffer, presentationTimeStamp: CMTime)
```

## Parameters

- `buffer`: A pixel buffer for the frame. This value must be non-NULL and IOSurface backed.
- `presentationTimeStamp`: The presentation timestamp of the buffer.

<a id="discussion"></a>

## Discussion

Initialization fails if you specify a `NULL` buffer or one that isn’t backed by an `IOSurface`.

# initWithBuffer:presentationTimeStamp: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Creates a frame object with a pixel buffer and presentation time.

## Declaration

```objectivec
- (instancetype) initWithBuffer:(CVPixelBufferRef) buffer presentationTimeStamp:(CMTime) presentationTimeStamp;
```

## Parameters

- `buffer`: A pixel buffer for the frame. This value must be non-NULL and IOSurface backed.
- `presentationTimeStamp`: The presentation timestamp of the buffer.

<a id="discussion"></a>

## Discussion

Initialization fails if you specify a `NULL` buffer or one that isn’t backed by an `IOSurface`.
