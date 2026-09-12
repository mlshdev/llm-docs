> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/selectionboundaryadjusted(to:touchphase:flags:)](https://developer.apple.com/documentation/browserenginekit/betextinteraction/selectionboundaryadjusted(to:touchphase:flags:))

# selectionBoundaryAdjusted(to:touchPhase:flags:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Notifies the system after the text view adjusts its selection.

## Declaration

```swift
func selectionBoundaryAdjusted(to point: CGPoint, touchPhase touch: BESelectionTouchPhase, flags: BESelectionFlags)
```

<a id="discussion"></a>

## Discussion

Call this method when your browser text view receives [adjustSelectionBoundary(to:touchPhase:baseIsStart:flags:)](../betextinput/adjustselectionboundary%28to_touchphase_baseisstart_flags_%29.md).

## See Also

### Text selection

- [delegate](delegate.md): A delegate object that the interaction notifies when the system changes the text selection.
- [BETextInteractionDelegate](../betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [textSelectionDisplayInteraction](textselectiondisplayinteraction.md): An interaction that manages the system’s text-selection UI.
- [selectionChangedWithGesture(at:gesture:state:flags:)](selectionchangedwithgesture%28at_gesture_state_flags_%29.md): Notifies the system that the text view changed its selection.

# selectionBoundaryAdjustedToPoint:touchPhase:flags: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Notifies the system after the text view adjusts its selection.

## Declaration

```objectivec
- (void) selectionBoundaryAdjustedToPoint:(CGPoint) point touchPhase:(BESelectionTouchPhase) touch flags:(BESelectionFlags) flags;
```

<a id="discussion"></a>

## Discussion

Call this method when your browser text view receives [adjustSelectionBoundaryToPoint:touchPhase:baseIsStart:flags:](../betextinput/adjustselectionboundary%28to_touchphase_baseisstart_flags_%29.md).

## See Also

### Text selection

- [delegate](delegate.md): A delegate object that the interaction notifies when the system changes the text selection.
- [BETextInteractionDelegate](../betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [textSelectionDisplayInteraction](textselectiondisplayinteraction.md): An interaction that manages the system’s text-selection UI.
- [selectionChangedWithGestureAtPoint:gesture:state:flags:](selectionchangedwithgesture%28at_gesture_state_flags_%29.md): Notifies the system that the text view changed its selection.
