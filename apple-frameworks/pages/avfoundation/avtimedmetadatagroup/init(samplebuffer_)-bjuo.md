> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avtimedmetadatagroup/init(samplebuffer:)-bjuo](https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup/init(samplebuffer:)-bjuo)

# init(sampleBuffer:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

> Use init(sampleBuffer: CMReadySampleBuffer\<CMSampleBuffer.DynamicContent\>) instead

## Declaration

```swift
init?(sampleBuffer: CMSampleBuffer)
```

## Parameters

- `sampleBuffer`: A CMSampleBuffer with media type kCMMediaType_Metadata.

<a id="return-value"></a>

## Return Value

An instance of AVTimedMetadataGroup.

<a id="discussion"></a>

## Discussion

Initializes an instance of AVTimedMetadataGroup with a sample buffer.

## See Also

### Creating a timed metadata group

- [init(sampleBuffer:)](init%28samplebuffer_%29-6atlv.md): Creates a timed metadata group with a sample buffer.
- [init(items:timeRange:)](init%28items_timerange_%29.md): Creates a timed metadata group initialized with the given metadata items.

# initWithSampleBuffer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithSampleBuffer:(CMSampleBufferRef) sampleBuffer;
```

## Parameters

- `sampleBuffer`: A CMSampleBuffer with media type kCMMediaType_Metadata.

<a id="return-value"></a>

## Return Value

An instance of AVTimedMetadataGroup.

<a id="discussion"></a>

## Discussion

Initializes an instance of AVTimedMetadataGroup with a sample buffer.

## See Also

### Creating a timed metadata group

- [initWithItems:timeRange:](init%28items_timerange_%29.md): Creates a timed metadata group initialized with the given metadata items.
