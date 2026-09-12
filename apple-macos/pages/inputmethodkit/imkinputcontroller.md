> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller)

# IMKInputController (Swift)

**Framework:** InputMethodKit  
**Kind:** Class  
**Availability:** macOS 10.5+

The `IMKInputController` class provides a base class for custom input controller classes. The [IMKServer](imkserver.md)  class, which is allocated in the main function of an input method, creates an input controller object for each input session created by a client application. For every input session there is a corresponding `IMKInputController` object.

## Declaration

```swift
class IMKInputController
```

<a id="overview"></a>

## Overview

An `IMKInputController` object controls text input on the input method side. It manages events and text from the applications and converted text from the input method engine. `IMKInputController` implements fully the [IMKStateSetting](imkstatesetting.md) and [IMKMouseHandling](imkmousehandling.md) protocols.  Typically you do not need to override this class, but you do need to provide  a delegate object that implements the methods that your are interested in.  The `IMKInputController` versions of the protocol methods check whether the delegate object implements a method, and  calls the delegate version if it exists.

## Topics

### Initializing an Input Controller

- [init(server:delegate:client:)](imkinputcontroller/init%28server_delegate_client_%29.md): Initializes the input control by setting the delegate.

### Working with Ranges

- [compositionAttributes(at:)](imkinputcontroller/compositionattributes%28at_%29.md): Returns a dictionary of text attributes.
- [selectionRange()](imkinputcontroller/selectionrange%28%29.md): Returns where the range of the selection that should be placed inside marked text.
- [replacementRange()](imkinputcontroller/replacementrange%28%29.md): Returns the range in the client document that the text should replace.
- [mark(forStyle:at:)](imkinputcontroller/mark%28forstyle_at_%29.md): Returns a dictionary of text attributes that can mark a range of an attributed string to send to a client.

### Managing the Delegate

- [delegate()](imkinputcontroller/delegate%28%29.md): Returns the delegate for input controller object.
- [setDelegate(\_:)](imkinputcontroller/setdelegate%28__%29.md): Sets the delegate for input controller object.

### Getting the Client and Server Objects

- [server()](imkinputcontroller/server%28%29.md): Returns the server object that manages the input controller.
- [client()](imkinputcontroller/client%28%29.md): Returns the client object associated with the input controller.

### Tracking Selections

- [annotationSelected(\_:forCandidate:)](imkinputcontroller/annotationselected%28__forcandidate_%29.md): Sends the selected candidate string and annotation string to the input controller.
- [candidateSelectionChanged(\_:)](imkinputcontroller/candidateselectionchanged%28__%29.md): Informs an input controller that the current candidate selection in the candidate window has changed.
- [candidateSelected(\_:)](imkinputcontroller/candidateselected%28__%29.md): Informs an input controller that a new candidate is selected.

### Managing Composition

- [updateComposition()](imkinputcontroller/updatecomposition%28%29.md): Informs the input controller that the composition has changed.
- [cancelComposition()](imkinputcontroller/cancelcomposition%28%29.md): Stops the current composition and replaces marked text with the original text.

### Hiding the User Interface

- [hidePalettes()](imkinputcontroller/hidepalettes%28%29.md): Informs an input method that it should close any visible user interface.

### Working with Custom Commands

- [doCommand(by:command:)](imkinputcontroller/docommand%28by_command_%29.md): Passes commands that are not generated as part of the text input process.
- [menu()](imkinputcontroller/menu%28%29.md): Returns a menu of commands that are specific to an input method.

### Instance Methods

- [inputControllerWillClose()](imkinputcontroller/inputcontrollerwillclose%28%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [IMKMouseHandling](imkmousehandling.md)
- [IMKStateSetting](imkstatesetting.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

- [IMKCandidates](imkcandidates.md): The `IMKCandidates` class presents candidates to users and notifies the appropriate [IMKInputController](imkinputcontroller.md) object when the user selects a candidate. **Candidates** are alternate characters for a given input sequence. The `IMKCandidates` class supports using a candidates window in your input method; using `IMKCandidates` is optional. Not all input methods require them.
- [IMKServer](imkserver.md): The `IMKServer` class manages client connections to your input method. When you write the main function for your input method, you create an `IMKServer` object. You should never need to override this class.

# IMKInputController (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Class  
**Availability:** macOS 10.5+

The `IMKInputController` class provides a base class for custom input controller classes. The [IMKServer](imkserver.md)  class, which is allocated in the main function of an input method, creates an input controller object for each input session created by a client application. For every input session there is a corresponding `IMKInputController` object.

## Declaration

```objectivec
@interface IMKInputController : NSObject
```

<a id="overview"></a>

## Overview

An `IMKInputController` object controls text input on the input method side. It manages events and text from the applications and converted text from the input method engine. `IMKInputController` implements fully the [IMKStateSetting](imkstatesetting.md) and [IMKMouseHandling](imkmousehandling.md) protocols.  Typically you do not need to override this class, but you do need to provide  a delegate object that implements the methods that your are interested in.  The `IMKInputController` versions of the protocol methods check whether the delegate object implements a method, and  calls the delegate version if it exists.

## Topics

### Initializing an Input Controller

- [initWithServer:delegate:client:](imkinputcontroller/init%28server_delegate_client_%29.md): Initializes the input control by setting the delegate.

### Working with Ranges

- [compositionAttributesAtRange:](imkinputcontroller/compositionattributes%28at_%29.md): Returns a dictionary of text attributes.
- [selectionRange](imkinputcontroller/selectionrange%28%29.md): Returns where the range of the selection that should be placed inside marked text.
- [replacementRange](imkinputcontroller/replacementrange%28%29.md): Returns the range in the client document that the text should replace.
- [markForStyle:atRange:](imkinputcontroller/mark%28forstyle_at_%29.md): Returns a dictionary of text attributes that can mark a range of an attributed string to send to a client.

### Managing the Delegate

- [delegate](imkinputcontroller/delegate%28%29.md): Returns the delegate for input controller object.
- [setDelegate:](imkinputcontroller/setdelegate%28__%29.md): Sets the delegate for input controller object.

### Getting the Client and Server Objects

- [server](imkinputcontroller/server%28%29.md): Returns the server object that manages the input controller.
- [client](imkinputcontroller/client%28%29.md): Returns the client object associated with the input controller.

### Tracking Selections

- [annotationSelected:forCandidate:](imkinputcontroller/annotationselected%28__forcandidate_%29.md): Sends the selected candidate string and annotation string to the input controller.
- [candidateSelectionChanged:](imkinputcontroller/candidateselectionchanged%28__%29.md): Informs an input controller that the current candidate selection in the candidate window has changed.
- [candidateSelected:](imkinputcontroller/candidateselected%28__%29.md): Informs an input controller that a new candidate is selected.

### Managing Composition

- [updateComposition](imkinputcontroller/updatecomposition%28%29.md): Informs the input controller that the composition has changed.
- [cancelComposition](imkinputcontroller/cancelcomposition%28%29.md): Stops the current composition and replaces marked text with the original text.

### Hiding the User Interface

- [hidePalettes](imkinputcontroller/hidepalettes%28%29.md): Informs an input method that it should close any visible user interface.

### Working with Custom Commands

- [doCommandBySelector:commandDictionary:](imkinputcontroller/docommand%28by_command_%29.md): Passes commands that are not generated as part of the text input process.
- [menu](imkinputcontroller/menu%28%29.md): Returns a menu of commands that are specific to an input method.

### Instance Methods

- [inputControllerWillClose](imkinputcontroller/inputcontrollerwillclose%28%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [IMKMouseHandling](imkmousehandling.md)
- [IMKStateSetting](imkstatesetting.md)

## See Also

### Classes

- [IMKCandidates](imkcandidates.md): The `IMKCandidates` class presents candidates to users and notifies the appropriate [IMKInputController](imkinputcontroller.md) object when the user selects a candidate. **Candidates** are alternate characters for a given input sequence. The `IMKCandidates` class supports using a candidates window in your input method; using `IMKCandidates` is optional. Not all input methods require them.
- [IMKServer](imkserver.md): The `IMKServer` class manages client connections to your input method. When you write the main function for your input method, you create an `IMKServer` object. You should never need to override this class.
