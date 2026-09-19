> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaption/init(_:timerange:)

# init(\_:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a caption that contains text and a time range.

## Declaration

```swift
init(_ text: String, timeRange: CMTimeRange)
```

## Parameters

- `text`: The text the caption displays.
- `timeRange`: The range of time when the caption is active.

# initWithText:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a caption that contains text and a time range.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text timeRange:(CMTimeRange) timeRange;
```

## Parameters

- `text`: The text the caption displays.
- `timeRange`: The range of time when the caption is active.
