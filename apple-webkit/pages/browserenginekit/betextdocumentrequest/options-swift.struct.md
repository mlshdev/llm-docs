> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextdocumentrequest/options-swift.struct](https://developer.apple.com/documentation/browserenginekit/betextdocumentrequest/options-swift.struct)

# BETextDocumentRequest.Options (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Options that describe the contextual information for a text document request.

## Declaration

```swift
struct Options
```

## Topics

### Creating an options structure

- [init(rawValue:)](options-swift.struct/init%28rawvalue_%29.md): Initializes an options instance for a text document request with the specified raw value.

### Accessing text content

- [text](options-swift.struct/text.md): An option that requests the plaintext content of the document.
- [attributedText](options-swift.struct/attributedtext.md): An option that requests the document’s text content along with its formatting and style attributes.

### Getting geometric information

- [textRects](options-swift.struct/textrects.md): An option that requests the rectangular bounds of text within a document’s layout.
- [markedTextRects](options-swift.struct/markedtextrects.md): An option that requests the rectangular bounds of marked text regions.

### Getting correction information

- [autocorrectedRanges](options-swift.struct/autocorrectedranges.md): An option that requests the ranges of text the system autocorrects within the document.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](../beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextAlternatives](../betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentContext](../betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest](../betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextSuggestion](../betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](../betextreplacementoptions.md): Options that determine the way your app processes text in webpages.

# BETextDocumentRequestOptions (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Options that describe the contextual information for a text document request.

## Declaration

```objectivec
enum BETextDocumentRequestOptions : NSInteger;
```

## Topics

### Accessing text content

- [BETextDocumentOptionText](options-swift.struct/text.md): An option that requests the plaintext content of the document.
- [BETextDocumentOptionAttributedText](options-swift.struct/attributedtext.md): An option that requests the document’s text content along with its formatting and style attributes.

### Getting geometric information

- [BETextDocumentOptionTextRects](options-swift.struct/textrects.md): An option that requests the rectangular bounds of text within a document’s layout.
- [BETextDocumentOptionMarkedTextRects](options-swift.struct/markedtextrects.md): An option that requests the rectangular bounds of marked text regions.

### Getting correction information

- [BETextDocumentOptionAutocorrectedRanges](options-swift.struct/autocorrectedranges.md): An option that requests the ranges of text the system autocorrects within the document.

### Specifying no options

- [BETextDocumentOptionNone](../betextdocumentrequestoptions/betextdocumentoptionnone.md): An option that specifies no information to request for the text document.

## See Also

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](../beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextAlternatives](../betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentContext](../betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest](../betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextSuggestion](../betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](../betextreplacementoptions.md): Options that determine the way your app processes text in webpages.
