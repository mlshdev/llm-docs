> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteractiondelegate](https://developer.apple.com/documentation/browserenginekit/betextinteractiondelegate)

# BETextInteractionDelegate (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

A set of methods that informs you about selection changes in text views.

## Declaration

```swift
protocol BETextInteractionDelegate
```

## Topics

### Text selection changes

- [systemWillChangeSelection(for:)](betextinteractiondelegate/systemwillchangeselection%28for_%29.md): Invoked by the system when the selection is about to change in the document.
- [systemDidChangeSelection(for:)](betextinteractiondelegate/systemdidchangeselection%28for_%29.md): Invoked by the system when the selection is about to change in the document.

## See Also

### Interaction responses

- [BETextInteraction](betextinteraction.md): An interaction you add to a text view to support extended text gestures.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.
- [BEGestureType](begesturetype.md): The types of touch gestures that operate on input text.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.

# BETextInteractionDelegate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

A set of methods that informs you about selection changes in text views.

## Declaration

```objectivec
@protocol BETextInteractionDelegate
```

## Topics

### Text selection changes

- [systemWillChangeSelectionForInteraction:](betextinteractiondelegate/systemwillchangeselection%28for_%29.md): Invoked by the system when the selection is about to change in the document.
- [systemDidChangeSelectionForInteraction:](betextinteractiondelegate/systemdidchangeselection%28for_%29.md): Invoked by the system when the selection is about to change in the document.

## See Also

### Interaction responses

- [BETextInteraction](betextinteraction.md): An interaction you add to a text view to support extended text gestures.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.
- [BEGestureType](begesturetype.md): The types of touch gestures that operate on input text.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.
