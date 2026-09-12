> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/adjustselectionboundary(to:touchphase:baseisstart:flags:)](https://developer.apple.com/documentation/browserenginekit/betextinput/adjustselectionboundary(to:touchphase:baseisstart:flags:))

# adjustSelectionBoundary(to:touchPhase:baseIsStart:flags:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Adjusts the start or end boundary of the current selection to the given point.

## Declaration

```swift
func adjustSelectionBoundary(to point: CGPoint, touchPhase touch: BESelectionTouchPhase, baseIsStart boundaryIsStart: Bool, flags: BESelectionFlags)
```

## Parameters

- `point`: The new boundary point of the selection.
- `touch`: The touch phase of the gesture.
- `boundaryIsStart`: `true` if the `point` is at the new start of the selection; `false` if it’s at the end.
- `flags`: Extra information about the selection.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

When you receive this method, call [selectionBoundaryAdjusted(to:touchPhase:flags:)](../betextinteraction/selectionboundaryadjusted%28to_touchphase_flags_%29.md) to notify the system that your text view handled the update.

# adjustSelectionBoundaryToPoint:touchPhase:baseIsStart:flags: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Adjusts the start or end boundary of the current selection to the given point.

## Declaration

```objectivec
- (void) adjustSelectionBoundaryToPoint:(CGPoint) point touchPhase:(BESelectionTouchPhase) touch baseIsStart:(BOOL) boundaryIsStart flags:(BESelectionFlags) flags;
```

## Parameters

- `point`: The new boundary point of the selection.
- `touch`: The touch phase of the gesture.
- `boundaryIsStart`: `true` if the `point` is at the new start of the selection; `false` if it’s at the end.
- `flags`: Extra information about the selection.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

When you receive this method, call [selectionBoundaryAdjustedToPoint:touchPhase:flags:](../betextinteraction/selectionboundaryadjusted%28to_touchphase_flags_%29.md) to notify the system that your text view handled the update.
