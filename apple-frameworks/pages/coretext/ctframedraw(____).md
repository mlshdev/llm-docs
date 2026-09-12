> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframedraw(_:_:)](https://developer.apple.com/documentation/coretext/ctframedraw(_:_:))

# CTFrameDraw(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws an entire frame into a context.

## Declaration

```swift
func CTFrameDraw(_ frame: CTFrame, _ context: CGContext)
```

## Parameters

- `frame`: The frame to draw.
- `context`: The context in which to draw the frame.

<a id="Discussion"></a>

## Discussion

If both the frame and the context are valid, the frame is drawn in the context. This call can leave the context in any state and does not flush it after the draw operation.

# CTFrameDraw (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws an entire frame into a context.

## Declaration

```objectivec
extern void CTFrameDraw(CTFrameRef frame, CGContextRef context);
```

## Parameters

- `frame`: The frame to draw.
- `context`: The context in which to draw the frame.

<a id="Discussion"></a>

## Discussion

If both the frame and the context are valid, the frame is drawn in the context. This call can leave the context in any state and does not flush it after the draw operation.
