> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/delegate](https://developer.apple.com/documentation/browserenginekit/betextinteraction/delegate)

# delegate (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A delegate object that the interaction notifies when the system changes the text selection.

## Declaration

```swift
weak var delegate: (any BETextInteractionDelegate)? { get set }
```

## See Also

### Text selection

- [BETextInteractionDelegate](../betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [textSelectionDisplayInteraction](textselectiondisplayinteraction.md): An interaction that manages the system’s text-selection UI.
- [selectionBoundaryAdjusted(to:touchPhase:flags:)](selectionboundaryadjusted%28to_touchphase_flags_%29.md): Notifies the system after the text view adjusts its selection.
- [selectionChangedWithGesture(at:gesture:state:flags:)](selectionchangedwithgesture%28at_gesture_state_flags_%29.md): Notifies the system that the text view changed its selection.

# delegate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A delegate object that the interaction notifies when the system changes the text selection.

## Declaration

```objectivec
@property (nonatomic, weak) id<BETextInteractionDelegate> delegate;
```

## See Also

### Text selection

- [BETextInteractionDelegate](../betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [textSelectionDisplayInteraction](textselectiondisplayinteraction.md): An interaction that manages the system’s text-selection UI.
- [selectionBoundaryAdjustedToPoint:touchPhase:flags:](selectionboundaryadjusted%28to_touchphase_flags_%29.md): Notifies the system after the text view adjusts its selection.
- [selectionChangedWithGestureAtPoint:gesture:state:flags:](selectionchangedwithgesture%28at_gesture_state_flags_%29.md): Notifies the system that the text view changed its selection.
