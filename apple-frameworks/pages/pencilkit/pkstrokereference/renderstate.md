> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkstrokereference/renderstate

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
