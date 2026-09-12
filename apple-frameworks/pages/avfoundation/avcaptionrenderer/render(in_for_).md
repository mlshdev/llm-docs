> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionrenderer/render(in:for:)](https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/render(in:for:))

# render(in:for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Draw the captions for the time you specify.

## Declaration

```swift
func render(in ctx: CGContext, for time: CMTime)
```

## Parameters

- `ctx`: The drawing content.
- `time`: The time value for which the system draws the captions.

# renderInContext:forTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Draw the captions for the time you specify.

## Declaration

```objectivec
- (void) renderInContext:(CGContextRef) ctx forTime:(CMTime) time;
```

## Parameters

- `ctx`: The drawing content.
- `time`: The time value for which the system draws the captions.
