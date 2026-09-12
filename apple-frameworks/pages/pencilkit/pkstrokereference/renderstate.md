> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokereference/renderstate](https://developer.apple.com/documentation/pencilkit/pkstrokereference/renderstate)

# renderState (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The render details of the stroke, such as particle positioning. Uses default rendering when nil.

## Declaration

```swift
var renderState: PKStrokeRenderStateReference? { get }
```

<a id="discussion"></a>

## Discussion

This may be set on substrokes returned by `-substrokeWithRange:`.

# renderState (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The render details of the stroke, such as particle positioning. Uses default rendering when nil.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) PKStrokeRenderState * renderState;
```

<a id="discussion"></a>

## Discussion

This may be set on substrokes returned by `-substrokeWithRange:`.
