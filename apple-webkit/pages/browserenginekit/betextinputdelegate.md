> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinputdelegate](https://developer.apple.com/documentation/browserenginekit/betextinputdelegate)

# BETextInputDelegate (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

A delegate protocol that a browser text view uses to notify the text system of changes.

## Declaration

```swift
protocol BETextInputDelegate
```

## Mentioned In

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md)

<a id="overview"></a>

## Overview

You don’t conform to `BETextInputDelegate` in your classes, or implement its methods. The system creates objects that conform to this protocol and sets them as the [asyncInputDelegate](betextinput/asyncinputdelegate.md) on your browser’s custom text views.

## Topics

### Text selection

- [selectionWillChange(for:)](betextinputdelegate/selectionwillchange%28for_%29.md): Tells the system when the selection is about to change in the document.
- [selectionDidChange(for:)](betextinputdelegate/selectiondidchange%28for_%29.md): Tells the system when the selection has changed in the document.

### Deferring actions to the text system

- [shouldDeferEventHandlingToSystem(for:context:)](betextinputdelegate/shoulddefereventhandlingtosystem%28for_context_%29.md): Notify the text system that your web browser’s custom text view isn’t handling key events.
- [textInput(\_:deferReplaceTextActionToSystem:)](betextinputdelegate/textinput%28__deferreplacetextactiontosystem_%29.md): Defers a replace text action to the ssytem.

### Providing completion suggestions

- [textInput(\_:setCandidateSuggestions:)](betextinputdelegate/textinput%28__setcandidatesuggestions_%29.md): Provides text suggestions to the system.

### Removing stored context information

- [invalidateTextEntryContext(for:)](betextinputdelegate/invalidatetextentrycontext%28for_%29.md): Tells the system the text entry context has changed and that text entry UI’s need to be refreshed.

## See Also

### Custom text views

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md): Process keyboard interactions asynchronously in your iOS browser app’s text view.
- [Supporting extended text interactions](support-extended-text-interactions.md): Share content, add replacement shortcuts, and perform other rich actions in browser text views.
- [BETextInput](betextinput.md): A protocol for asynchronous text views that integrate with the text system.

# BETextInputDelegate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

A delegate protocol that a browser text view uses to notify the text system of changes.

## Declaration

```objectivec
@protocol BETextInputDelegate
```

## Mentioned In

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md)

<a id="overview"></a>

## Overview

You don’t conform to `BETextInputDelegate` in your classes, or implement its methods. The system creates objects that conform to this protocol and sets them as the [asyncInputDelegate](betextinput/asyncinputdelegate.md) on your browser’s custom text views.

## Topics

### Text selection

- [selectionWillChangeForTextInput:](betextinputdelegate/selectionwillchange%28for_%29.md): Tells the system when the selection is about to change in the document.
- [selectionDidChangeForTextInput:](betextinputdelegate/selectiondidchange%28for_%29.md): Tells the system when the selection has changed in the document.

### Deferring actions to the text system

- [shouldDeferEventHandlingToSystemForTextInput:context:](betextinputdelegate/shoulddefereventhandlingtosystem%28for_context_%29.md): Notify the text system that your web browser’s custom text view isn’t handling key events.
- [textInput:deferReplaceTextActionToSystem:](betextinputdelegate/textinput%28__deferreplacetextactiontosystem_%29.md): Defers a replace text action to the ssytem.

### Providing completion suggestions

- [textInput:setCandidateSuggestions:](betextinputdelegate/textinput%28__setcandidatesuggestions_%29.md): Provides text suggestions to the system.

### Removing stored context information

- [invalidateTextEntryContextForTextInput:](betextinputdelegate/invalidatetextentrycontext%28for_%29.md): Tells the system the text entry context has changed and that text entry UI’s need to be refreshed.

## See Also

### Custom text views

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md): Process keyboard interactions asynchronously in your iOS browser app’s text view.
- [Supporting extended text interactions](support-extended-text-interactions.md): Share content, add replacement shortcuts, and perform other rich actions in browser text views.
- [BETextInput](betextinput.md): A protocol for asynchronous text views that integrate with the text system.
