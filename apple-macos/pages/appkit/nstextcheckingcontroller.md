> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcheckingcontroller](https://developer.apple.com/documentation/appkit/nstextcheckingcontroller)

# NSTextCheckingController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

## Declaration

```swift
class NSTextCheckingController
```

## Topics

### Initializers

- [init(client:)](nstextcheckingcontroller/init%28client_%29.md)

### Instance Properties

- [client](nstextcheckingcontroller/client.md)
- [spellCheckerDocumentTag](nstextcheckingcontroller/spellcheckerdocumenttag.md)

### Instance Methods

- [changeSpelling(\_:)](nstextcheckingcontroller/changespelling%28__%29.md)
- [checkSpelling(\_:)](nstextcheckingcontroller/checkspelling%28__%29.md)
- [checkText(in:types:options:)](nstextcheckingcontroller/checktext%28in_types_options_%29.md)
- [checkTextInDocument(\_:)](nstextcheckingcontroller/checktextindocument%28__%29.md)
- [checkTextInSelection(\_:)](nstextcheckingcontroller/checktextinselection%28__%29.md)
- [considerTextChecking(for:)](nstextcheckingcontroller/considertextchecking%28for_%29.md)
- [didChangeSelectedRange()](nstextcheckingcontroller/didchangeselectedrange%28%29.md)
- [didChangeText(in:)](nstextcheckingcontroller/didchangetext%28in_%29.md)
- [ignoreSpelling(\_:)](nstextcheckingcontroller/ignorespelling%28__%29.md)
- [insertedText(in:)](nstextcheckingcontroller/insertedtext%28in_%29.md)
- [invalidate()](nstextcheckingcontroller/invalidate%28%29.md)
- [menu(at:clickedOnSelection:effectiveRange:)](nstextcheckingcontroller/menu%28at_clickedonselection_effectiverange_%29.md)
- [orderFrontSubstitutionsPanel(\_:)](nstextcheckingcontroller/orderfrontsubstitutionspanel%28__%29.md)
- [showGuessPanel(\_:)](nstextcheckingcontroller/showguesspanel%28__%29.md)
- [updateCandidates()](nstextcheckingcontroller/updatecandidates%28%29.md)
- [validAnnotations()](nstextcheckingcontroller/validannotations%28%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Text-checking

- [NSTextCheckingClient](nstextcheckingclient.md)
- [NSTextInputTraits](nstextinputtraits.md)
- [NSTextInputTraitType](nstextinputtraittype.md)

# NSTextCheckingController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

## Declaration

```objectivec
@interface NSTextCheckingController : NSObject
```

## Topics

### Initializers

- [initWithClient:](nstextcheckingcontroller/init%28client_%29.md)

### Instance Properties

- [client](nstextcheckingcontroller/client.md)
- [spellCheckerDocumentTag](nstextcheckingcontroller/spellcheckerdocumenttag.md)

### Instance Methods

- [changeSpelling:](nstextcheckingcontroller/changespelling%28__%29.md)
- [checkSpelling:](nstextcheckingcontroller/checkspelling%28__%29.md)
- [checkTextInRange:types:options:](nstextcheckingcontroller/checktext%28in_types_options_%29.md)
- [checkTextInDocument:](nstextcheckingcontroller/checktextindocument%28__%29.md)
- [checkTextInSelection:](nstextcheckingcontroller/checktextinselection%28__%29.md)
- [considerTextCheckingForRange:](nstextcheckingcontroller/considertextchecking%28for_%29.md)
- [didChangeSelectedRange](nstextcheckingcontroller/didchangeselectedrange%28%29.md)
- [didChangeTextInRange:](nstextcheckingcontroller/didchangetext%28in_%29.md)
- [ignoreSpelling:](nstextcheckingcontroller/ignorespelling%28__%29.md)
- [insertedTextInRange:](nstextcheckingcontroller/insertedtext%28in_%29.md)
- [invalidate](nstextcheckingcontroller/invalidate%28%29.md)
- [menuAtIndex:clickedOnSelection:effectiveRange:](nstextcheckingcontroller/menu%28at_clickedonselection_effectiverange_%29.md)
- [orderFrontSubstitutionsPanel:](nstextcheckingcontroller/orderfrontsubstitutionspanel%28__%29.md)
- [showGuessPanel:](nstextcheckingcontroller/showguesspanel%28__%29.md)
- [updateCandidates](nstextcheckingcontroller/updatecandidates%28%29.md)
- [validAnnotations](nstextcheckingcontroller/validannotations%28%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Text-checking

- [NSTextCheckingClient](nstextcheckingclient.md)
- [NSTextInputTraits](nstextinputtraits.md)
- [NSTextInputTraitType](nstextinputtraittype.md)
