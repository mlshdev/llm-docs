> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/selectionchangedwithgesture(at:gesture:state:flags:)](https://developer.apple.com/documentation/browserenginekit/betextinteraction/selectionchangedwithgesture(at:gesture:state:flags:))

# selectionChangedWithGesture(at:gesture:state:flags:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Notifies the system that the text view changed its selection.

## Declaration

```swift
func selectionChangedWithGesture(at point: CGPoint, gesture gestureType: BEGestureType, state gestureState: UIGestureRecognizer.State, flags: BESelectionFlags)
```

<a id="discussion"></a>

## Discussion

Call this method when your browser text view receives [updateCurrentSelection(to:from:in:)](../betextinput/updatecurrentselection%28to_from_in_%29.md).

## See Also

### Text selection

- [delegate](delegate.md): A delegate object that the interaction notifies when the system changes the text selection.
- [BETextInteractionDelegate](../betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [textSelectionDisplayInteraction](textselectiondisplayinteraction.md): An interaction that manages the system’s text-selection UI.
- [selectionBoundaryAdjusted(to:touchPhase:flags:)](selectionboundaryadjusted%28to_touchphase_flags_%29.md): Notifies the system after the text view adjusts its selection.

# selectionChangedWithGestureAtPoint:gesture:state:flags: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Notifies the system that the text view changed its selection.

## Declaration

```objectivec
- (void) selectionChangedWithGestureAtPoint:(CGPoint) point gesture:(BEGestureType) gestureType state:(UIGestureRecognizerState) gestureState flags:(BESelectionFlags) flags;
```

<a id="discussion"></a>

## Discussion

Call this method when your browser text view receives [updateCurrentSelectionTo:fromGesture:inState:](../betextinput/updatecurrentselection%28to_from_in_%29.md).

## See Also

### Text selection

- [delegate](delegate.md): A delegate object that the interaction notifies when the system changes the text selection.
- [BETextInteractionDelegate](../betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [textSelectionDisplayInteraction](textselectiondisplayinteraction.md): An interaction that manages the system’s text-selection UI.
- [selectionBoundaryAdjustedToPoint:touchPhase:flags:](selectionboundaryadjusted%28to_touchphase_flags_%29.md): Notifies the system after the text view adjusts its selection.
