> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/textselectiondisplayinteraction](https://developer.apple.com/documentation/browserenginekit/betextinteraction/textselectiondisplayinteraction)

# textSelectionDisplayInteraction (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An interaction that manages the system’s text-selection UI.

## Declaration

```swift
var textSelectionDisplayInteraction: UITextSelectionDisplayInteraction { get }
```

## See Also

### Text selection

- [delegate](delegate.md): A delegate object that the interaction notifies when the system changes the text selection.
- [BETextInteractionDelegate](../betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [selectionBoundaryAdjusted(to:touchPhase:flags:)](selectionboundaryadjusted%28to_touchphase_flags_%29.md): Notifies the system after the text view adjusts its selection.
- [selectionChangedWithGesture(at:gesture:state:flags:)](selectionchangedwithgesture%28at_gesture_state_flags_%29.md): Notifies the system that the text view changed its selection.

# textSelectionDisplayInteraction (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An interaction that manages the system’s text-selection UI.

## Declaration

```objectivec
@property (nonatomic, readonly) UITextSelectionDisplayInteraction * textSelectionDisplayInteraction;
```

## See Also

### Text selection

- [delegate](delegate.md): A delegate object that the interaction notifies when the system changes the text selection.
- [BETextInteractionDelegate](../betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [selectionBoundaryAdjustedToPoint:touchPhase:flags:](selectionboundaryadjusted%28to_touchphase_flags_%29.md): Notifies the system after the text view adjusts its selection.
- [selectionChangedWithGestureAtPoint:gesture:state:flags:](selectionchangedwithgesture%28at_gesture_state_flags_%29.md): Notifies the system that the text view changed its selection.
