> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextdocumentcontext](https://developer.apple.com/documentation/browserenginekit/betextdocumentcontext)

# BETextDocumentContext (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Information about the text surrounding a selection in a document.

## Declaration

```swift
class BETextDocumentContext
```

## Mentioned In

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md)

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol’s [requestDocumentContext(\_:completionHandler:)](betextinput/requestdocumentcontext%28__completionhandler_%29.md) and [requestTextContextForAutocorrection(completionHandler:)](betextinput/requesttextcontextforautocorrection%28completionhandler_%29.md) methods provide an instance of this class to their completion handlers.

## Topics

### Creating a text document context

- [init(attributedSelectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText:)](betextdocumentcontext/init%28attributedselectedtext_contextbefore_contextafter_markedtext_selectedrangeinmarkedtext_%29.md): Initializes a document with attributed strings that represent the selection and its surrounding context.
- [init(selectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText:)](betextdocumentcontext/init%28selectedtext_contextbefore_contextafter_markedtext_selectedrangeinmarkedtext_%29.md): Initializes a document with plain text strings that represent the selection and its surrounding context.

### Accessing autocorrected ranges

- [autocorrectedRanges](betextdocumentcontext/autocorrectedranges.md): An array of ranges that identify text the system autocorrects, relative to the context string.

### Adding text rectangles

- [addTextRect(\_:forCharacterRange:)](betextdocumentcontext/addtextrect%28__forcharacterrange_%29.md): Adds a rectangle that corresponds to the specified character range in the document.

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

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextAlternatives](betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequest.Options](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.

# BETextDocumentContext (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Information about the text surrounding a selection in a document.

## Declaration

```objectivec
@interface BETextDocumentContext : NSObject
```

## Mentioned In

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md)

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol’s [requestDocumentContext:completionHandler:](betextinput/requestdocumentcontext%28__completionhandler_%29.md) and [requestTextContextForAutocorrectionWithCompletionHandler:](betextinput/requesttextcontextforautocorrection%28completionhandler_%29.md) methods provide an instance of this class to their completion handlers.

## Topics

### Creating a text document context

- [initWithAttributedSelectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText:](betextdocumentcontext/init%28attributedselectedtext_contextbefore_contextafter_markedtext_selectedrangeinmarkedtext_%29.md): Initializes a document with attributed strings that represent the selection and its surrounding context.
- [initWithSelectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText:](betextdocumentcontext/init%28selectedtext_contextbefore_contextafter_markedtext_selectedrangeinmarkedtext_%29.md): Initializes a document with plain text strings that represent the selection and its surrounding context.

### Accessing autocorrected ranges

- [autocorrectedRanges](betextdocumentcontext/autocorrectedranges.md): An array of ranges that identify text the system autocorrects, relative to the context string.

### Adding text rectangles

- [addTextRect:forCharacterRange:](betextdocumentcontext/addtextrect%28__forcharacterrange_%29.md): Adds a rectangle that corresponds to the specified character range in the document.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextAlternatives](betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequestOptions](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.
