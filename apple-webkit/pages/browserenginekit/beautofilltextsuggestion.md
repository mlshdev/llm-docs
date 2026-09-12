> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beautofilltextsuggestion](https://developer.apple.com/documentation/browserenginekit/beautofilltextsuggestion)

# BEAutoFillTextSuggestion (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.

## Declaration

```swift
class BEAutoFillTextSuggestion
```

## Topics

### Suggestion contents

- [contents](beautofilltextsuggestion/contents.md): A dictionary of content types that map to corresponding string text suggestions for AutoFill functionality.

## Relationships

### Inherits From

- [BETextSuggestion](betextsuggestion.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Replacements and AutoFill

- [BETextAlternatives](betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentContext](betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequest.Options](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.

# BEAutoFillTextSuggestion (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.

## Declaration

```objectivec
@interface BEAutoFillTextSuggestion : BETextSuggestion
```

## Topics

### Suggestion contents

- [contents](beautofilltextsuggestion/contents.md): A dictionary of content types that map to corresponding string text suggestions for AutoFill functionality.

## Relationships

### Inherits From

- [BETextSuggestion](betextsuggestion.md)

## See Also

### Replacements and AutoFill

- [BETextAlternatives](betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentContext](betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequestOptions](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.
