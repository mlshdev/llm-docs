> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates](https://developer.apple.com/documentation/inputmethodkit/imkcandidates)

# IMKCandidates (Swift)

**Framework:** InputMethodKit  
**Kind:** Class  
**Availability:** macOS 10.5+

The `IMKCandidates` class presents candidates to users and notifies the appropriate [IMKInputController](imkinputcontroller.md) object when the user selects a candidate. **Candidates** are alternate characters for a given input sequence. The `IMKCandidates` class supports using a candidates window  in your input method; using `IMKCandidates` is optional. Not all input methods require them.

## Declaration

```swift
class IMKCandidates
```

<a id="overview"></a>

## Overview

When you create an `IMKCandidates` object, you attach it to the `IMKServer` object for your input method.  You then need to override the `IMKInputController` methods `candidateSelectionChanged:` and `candidateSelected:` as well as implement a candidates method in your delegate object.  The `IMKInputController` subclass supplies candidates to the `IMKCandidates` object by implementing the candidates method. When you are ready to display a candidates window, call the candidates method to update candidates and to show the candidates window.

## Topics

### Initializing a Candidates Window

- [init(server:panelType:)](imkcandidates/init%28server_paneltype_%29.md): Returns the initialized `IMKCandidates` object.

### Managing Selection Keys

- [setSelectionKeys(\_:)](imkcandidates/setselectionkeys%28__%29.md): Sets the selection keys for the candidates.
- [selectionKeys()](imkcandidates/selectionkeys%28%29.md): Returns an array of `NSNumber` objects where each `NSNumber` object represents a virtual key code.
- [setSelectionKeysKeylayout(\_:)](imkcandidates/setselectionkeyskeylayout%28__%29.md): Sets the key layout that is used to map virtual key codes to characters.
- [selectionKeysKeylayout()](imkcandidates/selectionkeyskeylayout%28%29.md): Returns the key layout that maps virtual key codes to selection keys.

### Managing Window Visibility and Behavior

- [show(\_:)](imkcandidates/show%28__%29.md): Shows the candidates window.
- [hide()](imkcandidates/hide%28%29.md): Hides a candidates window, if it is visible.
- [isVisible()](imkcandidates/isvisible%28%29.md): Returns whether or not the candidates window is visible.
- [setDismissesAutomatically(\_:)](imkcandidates/setdismissesautomatically%28__%29.md): Sets the state of the flag that determines whether the candidates window dismisses automatically.
- [dismissesAutomatically()](imkcandidates/dismissesautomatically%28%29.md): Returns the state of the flag that determines whether the candidates window dismisses automatically.
- [update()](imkcandidates/update%28%29.md): Updates the candidates that are displayed in the candidates window.

### Managing Window Type and Text Attributes

- [panelType()](imkcandidates/paneltype%28%29.md): Returns the style of the candidates window.
- [setPanelType(\_:)](imkcandidates/setpaneltype%28__%29.md): Sets the style of the candidates window.
- [setAttributes(\_:)](imkcandidates/setattributes%28__%29.md): Sets the style attributes for the candidates window.
- [attributes()](imkcandidates/attributes%28%29.md): Returns a dictionary of the style attributes used for the candidates window..

### Showing an Annotation Window

- [showAnnotation(\_:)](imkcandidates/showannotation%28__%29.md): Displays an annotation string in an annotation window.

### Constants

- [IMKCandidatePanelType](imkcandidatepaneltype.md): Types of candidates windows provide by the Input Method Kit.
- [IMKCandidatesLocationHint](imkcandidateslocationhint.md): Hints that suggest where to place the candidates window.

### Initializers

- [init(server:panelType:styleType:)](imkcandidates/init%28server_paneltype_styletype_%29.md)

### Instance Methods

- [attachChild(\_:toCandidate:type:)](imkcandidates/attachchild%28__tocandidate_type_%29.md)
- [candidateFrame()](imkcandidates/candidateframe%28%29.md)
- [candidateIdentifier(atLineNumber:)](imkcandidates/candidateidentifier%28atlinenumber_%29.md)
- [candidateStringIdentifier(\_:)](imkcandidates/candidatestringidentifier%28__%29.md)
- [clearSelection()](imkcandidates/clearselection%28%29.md)
- [detachChild(\_:)](imkcandidates/detachchild%28__%29.md)
- [hideChild()](imkcandidates/hidechild%28%29.md)
- [lineNumberForCandidate(withIdentifier:)](imkcandidates/linenumberforcandidate%28withidentifier_%29.md)
- [selectCandidate(\_:)](imkcandidates/selectcandidate%28__%29.md)
- [selectCandidate(withIdentifier:)](imkcandidates/selectcandidate%28withidentifier_%29.md)
- [selectedCandidate()](imkcandidates/selectedcandidate%28%29.md)
- [selectedCandidateString()](imkcandidates/selectedcandidatestring%28%29.md)
- [setCandidateData(\_:)](imkcandidates/setcandidatedata%28__%29.md)
- [setCandidateFrameTopLeft(\_:)](imkcandidates/setcandidateframetopleft%28__%29.md)
- [show()](imkcandidates/show%28%29.md)
- [showChild()](imkcandidates/showchild%28%29.md)
- [showSublist(\_:subListDelegate:)](imkcandidates/showsublist%28__sublistdelegate_%29.md)

## Relationships

### Inherits From

- [NSResponder](../appkit/nsresponder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)

## See Also

### Classes

- [IMKInputController](imkinputcontroller.md): The `IMKInputController` class provides a base class for custom input controller classes. The [IMKServer](imkserver.md) class, which is allocated in the main function of an input method, creates an input controller object for each input session created by a client application. For every input session there is a corresponding `IMKInputController` object.
- [IMKServer](imkserver.md): The `IMKServer` class manages client connections to your input method. When you write the main function for your input method, you create an `IMKServer` object. You should never need to override this class.

# IMKCandidates (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Class  
**Availability:** macOS 10.5+

The `IMKCandidates` class presents candidates to users and notifies the appropriate [IMKInputController](imkinputcontroller.md) object when the user selects a candidate. **Candidates** are alternate characters for a given input sequence. The `IMKCandidates` class supports using a candidates window  in your input method; using `IMKCandidates` is optional. Not all input methods require them.

## Declaration

```objectivec
@interface IMKCandidates : NSResponder
```

<a id="overview"></a>

## Overview

When you create an `IMKCandidates` object, you attach it to the `IMKServer` object for your input method.  You then need to override the `IMKInputController` methods `candidateSelectionChanged:` and `candidateSelected:` as well as implement a candidates method in your delegate object.  The `IMKInputController` subclass supplies candidates to the `IMKCandidates` object by implementing the candidates method. When you are ready to display a candidates window, call the candidates method to update candidates and to show the candidates window.

## Topics

### Initializing a Candidates Window

- [initWithServer:panelType:](imkcandidates/init%28server_paneltype_%29.md): Returns the initialized `IMKCandidates` object.

### Managing Selection Keys

- [setSelectionKeys:](imkcandidates/setselectionkeys%28__%29.md): Sets the selection keys for the candidates.
- [selectionKeys](imkcandidates/selectionkeys%28%29.md): Returns an array of `NSNumber` objects where each `NSNumber` object represents a virtual key code.
- [setSelectionKeysKeylayout:](imkcandidates/setselectionkeyskeylayout%28__%29.md): Sets the key layout that is used to map virtual key codes to characters.
- [selectionKeysKeylayout](imkcandidates/selectionkeyskeylayout%28%29.md): Returns the key layout that maps virtual key codes to selection keys.

### Managing Window Visibility and Behavior

- [show:](imkcandidates/show%28__%29.md): Shows the candidates window.
- [hide](imkcandidates/hide%28%29.md): Hides a candidates window, if it is visible.
- [isVisible](imkcandidates/isvisible%28%29.md): Returns whether or not the candidates window is visible.
- [setDismissesAutomatically:](imkcandidates/setdismissesautomatically%28__%29.md): Sets the state of the flag that determines whether the candidates window dismisses automatically.
- [dismissesAutomatically](imkcandidates/dismissesautomatically%28%29.md): Returns the state of the flag that determines whether the candidates window dismisses automatically.
- [updateCandidates](imkcandidates/update%28%29.md): Updates the candidates that are displayed in the candidates window.

### Managing Window Type and Text Attributes

- [panelType](imkcandidates/paneltype%28%29.md): Returns the style of the candidates window.
- [setPanelType:](imkcandidates/setpaneltype%28__%29.md): Sets the style of the candidates window.
- [setAttributes:](imkcandidates/setattributes%28__%29.md): Sets the style attributes for the candidates window.
- [attributes](imkcandidates/attributes%28%29.md): Returns a dictionary of the style attributes used for the candidates window..

### Showing an Annotation Window

- [showAnnotation:](imkcandidates/showannotation%28__%29.md): Displays an annotation string in an annotation window.

### Constants

- [IMKCandidatePanelType](imkcandidatepaneltype.md): Types of candidates windows provide by the Input Method Kit.
- [IMKCandidatesLocationHint](imkcandidateslocationhint.md): Hints that suggest where to place the candidates window.

### Initializers

- [initWithServer:panelType:styleType:](imkcandidates/init%28server_paneltype_styletype_%29.md)

### Instance Methods

- [attachChild:toCandidate:type:](imkcandidates/attachchild%28__tocandidate_type_%29.md)
- [candidateFrame](imkcandidates/candidateframe%28%29.md)
- [candidateIdentifierAtLineNumber:](imkcandidates/candidateidentifier%28atlinenumber_%29.md)
- [candidateStringIdentifier:](imkcandidates/candidatestringidentifier%28__%29.md)
- [clearSelection](imkcandidates/clearselection%28%29.md)
- [detachChild:](imkcandidates/detachchild%28__%29.md)
- [hideChild](imkcandidates/hidechild%28%29.md)
- [lineNumberForCandidateWithIdentifier:](imkcandidates/linenumberforcandidate%28withidentifier_%29.md)
- [selectCandidate:](imkcandidates/selectcandidate%28__%29.md)
- [selectCandidateWithIdentifier:](imkcandidates/selectcandidate%28withidentifier_%29.md)
- [selectedCandidate](imkcandidates/selectedcandidate%28%29.md)
- [selectedCandidateString](imkcandidates/selectedcandidatestring%28%29.md)
- [setCandidateData:](imkcandidates/setcandidatedata%28__%29.md)
- [setCandidateFrameTopLeft:](imkcandidates/setcandidateframetopleft%28__%29.md)
- [showCandidates](imkcandidates/show%28%29.md)
- [showChild](imkcandidates/showchild%28%29.md)
- [showSublist:subListDelegate:](imkcandidates/showsublist%28__sublistdelegate_%29.md)

## Relationships

### Inherits From

- [NSResponder](../appkit/nsresponder.md)

## See Also

### Classes

- [IMKInputController](imkinputcontroller.md): The `IMKInputController` class provides a base class for custom input controller classes. The [IMKServer](imkserver.md) class, which is allocated in the main function of an input method, creates an input controller object for each input session created by a client application. For every input session there is a corresponding `IMKInputController` object.
- [IMKServer](imkserver.md): The `IMKServer` class manages client connections to your input method. When you write the main function for your input method, you create an `IMKServer` object. You should never need to override this class.
