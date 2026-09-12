> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstroke-swift.struct/substroke(range:)](https://developer.apple.com/documentation/pencilkit/pkstroke-swift.struct/substroke(range:))

# substroke(range:)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Returns a copy of this stroke containing the control points in the given range.

## Declaration

```swift
func substroke(range: ClosedRange<CGFloat>) -> PKStroke
```

## Parameters

- `range`: The range of control points in the receiver to copy to the returned stroke.

<a id="return-value"></a>

## Return Value

A new stroke containing only the control points within the specified range.

## Mentioned In

- [Controlling stroke rendering for animation and editing](../controlling-stroke-rendering-for-animation-and-editing.md)

<a id="discussion"></a>

## Discussion

Maintains information for PencilKit rendering to make the copied part of the stroke render the same as the receiver. The returned stroke may have a `renderState` set to maintain this information.
