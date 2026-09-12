> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptiongroup/init(captions:timerange:)](https://developer.apple.com/documentation/avfoundation/avcaptiongroup/init(captions:timerange:))

# init(captions:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a caption group with captions and a time range.

## Declaration

```swift
init(captions: [AVCaption], timeRange: CMTimeRange)
```

## Parameters

- `captions`: The captions of the caption group.
- `timeRange`: The time range of the caption group.

## See Also

### Creating a caption group

- [init(timeRange:)](init%28timerange_%29.md): Creates a caption group with a time range.

# initWithCaptions:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a caption group with captions and a time range.

## Declaration

```objectivec
- (instancetype) initWithCaptions:(NSArray<AVCaption *> *) captions timeRange:(CMTimeRange) timeRange;
```

## Parameters

- `captions`: The captions of the caption group.
- `timeRange`: The time range of the caption group.

## See Also

### Creating a caption group

- [initWithTimeRange:](init%28timerange_%29.md): Creates a caption group with a time range.
