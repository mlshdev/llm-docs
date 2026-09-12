> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/text-interaction](https://developer.apple.com/documentation/browserenginekit/text-interaction)

# Text interaction (Swift)

**Framework:** BrowserEngineKit  
**Kind:** API Collection

Integrate your web browser engine asynchronously with the text system.

## Topics

### Custom text views

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md): Process keyboard interactions asynchronously in your iOS browser app’s text view.
- [Supporting extended text interactions](support-extended-text-interactions.md): Share content, add replacement shortcuts, and perform other rich actions in browser text views.
- [BETextInput](betextinput.md): A protocol for asynchronous text views that integrate with the text system.
- [BETextInputDelegate](betextinputdelegate.md): A delegate protocol that a browser text view uses to notify the text system of changes.

### Interaction responses

- [BETextInteraction](betextinteraction.md): An interaction you add to a text view to support extended text gestures.
- [BETextInteractionDelegate](betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.
- [BEGestureType](begesturetype.md): The types of touch gestures that operate on input text.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.

### Text selection

- [BETextSelectionDirectionNavigation](betextselectiondirectionnavigation.md): A protocol that defines methods for cursor and selection adjustments.
- [BESelectionFlags](beselectionflags.md): Flags that indicate different states or characteristics of a text selection.
- [BESelectionTouchPhase](beselectiontouchphase.md): The different phases of touch interaction during text selection operations.

### Keyboard input

- [BEKeyEntry](bekeyentry.md): A class that represents a keyboard event in the text system.
- [BEKeyEntryContext](bekeyentrycontext.md): A class that describes a key event and the text document with which the event is associated.
- [BEKeyModifierFlags](bekeymodifierflags.md): An enumeration that records the state of the shift-modifier keys.

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextAlternatives](betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentContext](betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequest.Options](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.

### Information about text

- [BEExtendedTextInputTraits](beextendedtextinputtraits.md): An object that customizes text-input appearance and behavior beyond the standard system traits.
- [BEDirectionalTextRange](bedirectionaltextrange.md): Modifications to text length based on its offset.

## See Also

### Web content

- [View and input coordination](view-coordination.md): Display content in the browser’s UI that an extension renders.
- [BEWebAppManifest](bewebappmanifest.md): An object that represents a web app manifest.

# Text interaction (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** API Collection

Integrate your web browser engine asynchronously with the text system.

## Topics

### Custom text views

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md): Process keyboard interactions asynchronously in your iOS browser app’s text view.
- [Supporting extended text interactions](support-extended-text-interactions.md): Share content, add replacement shortcuts, and perform other rich actions in browser text views.
- [BETextInput](betextinput.md): A protocol for asynchronous text views that integrate with the text system.
- [BETextInputDelegate](betextinputdelegate.md): A delegate protocol that a browser text view uses to notify the text system of changes.

### Interaction responses

- [BETextInteraction](betextinteraction.md): An interaction you add to a text view to support extended text gestures.
- [BETextInteractionDelegate](betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.
- [BEGestureType](begesturetype.md): The types of touch gestures that operate on input text.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.

### Text selection

- [BETextSelectionDirectionNavigation](betextselectiondirectionnavigation.md): A protocol that defines methods for cursor and selection adjustments.
- [BESelectionFlags](beselectionflags.md): Flags that indicate different states or characteristics of a text selection.
- [BESelectionTouchPhase](beselectiontouchphase.md): The different phases of touch interaction during text selection operations.

### Keyboard input

- [BEKeyEntry](bekeyentry.md): A class that represents a keyboard event in the text system.
- [BEKeyEntryContext](bekeyentrycontext.md): A class that describes a key event and the text document with which the event is associated.
- [BEKeyModifierFlags](bekeymodifierflags.md): An enumeration that records the state of the shift-modifier keys.

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextAlternatives](betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentContext](betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequestOptions](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.

### Information about text

- [BEExtendedTextInputTraits](beextendedtextinputtraits.md): An object that customizes text-input appearance and behavior beyond the standard system traits.
- [BEDirectionalTextRange](bedirectionaltextrange.md): Modifications to text length based on its offset.

## See Also

### Web content

- [View and input coordination](view-coordination.md): Display content in the browser’s UI that an extension renders.
- [BEWebAppManifest](bewebappmanifest.md): An object that represents a web app manifest.
