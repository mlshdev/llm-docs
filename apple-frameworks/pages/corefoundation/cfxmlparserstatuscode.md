> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfxmlparserstatuscode](https://developer.apple.com/documentation/corefoundation/cfxmlparserstatuscode)

# CFXMLParserStatusCode (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** macOS

The various status and error flags that can be returned by the parser.

## Declaration

```swift
struct CFXMLParserStatusCode
```

<a id="overview"></a>

## Overview

Parser status is determined by calling the [CFXMLParserGetStatusCode](cfxmlparsergetstatuscode.md) function. The parser reports errors to your application by invoking the [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md) function.

## Topics

### Constants

- [statusParseNotBegun](cfxmlparserstatuscode/statusparsenotbegun.md): Indicates the parser has not begun.
- [statusParseInProgress](cfxmlparserstatuscode/statusparseinprogress.md): Indicates the parser is in progress.
- [errorUnexpectedEOF](cfxmlparserstatuscode/errorunexpectedeof.md): Indicates an unexpected EOF occurred.
- [errorUnknownEncoding](cfxmlparserstatuscode/errorunknownencoding.md): Indicates an unknown encoding error.
- [errorEncodingConversionFailure](cfxmlparserstatuscode/errorencodingconversionfailure.md): Indicates an encoding conversion error.
- [errorMalformedProcessingInstruction](cfxmlparserstatuscode/errormalformedprocessinginstruction.md): Indicates a malformed processing instruction.
- [errorMalformedDTD](cfxmlparserstatuscode/errormalformeddtd.md): Indicates a malformed DTD.
- [errorMalformedName](cfxmlparserstatuscode/errormalformedname.md): Indicates a malformed name.
- [errorMalformedCDSect](cfxmlparserstatuscode/errormalformedcdsect.md): Indicates a malformed CDATA section.
- [errorMalformedCloseTag](cfxmlparserstatuscode/errormalformedclosetag.md): Indicates a malformed close tag.
- [errorMalformedStartTag](cfxmlparserstatuscode/errormalformedstarttag.md): Indicates a malformed start tag.
- [errorMalformedDocument](cfxmlparserstatuscode/errormalformeddocument.md): Indicates a malformed document.
- [errorElementlessDocument](cfxmlparserstatuscode/errorelementlessdocument.md): Indicates a document containing no elements.
- [errorMalformedComment](cfxmlparserstatuscode/errormalformedcomment.md): Indicates a malformed comment.
- [errorMalformedCharacterReference](cfxmlparserstatuscode/errormalformedcharacterreference.md): Indicates a malformed character reference.
- [errorMalformedParsedCharacterData](cfxmlparserstatuscode/errormalformedparsedcharacterdata.md): Indicates malformed character data.
- [errorNoData](cfxmlparserstatuscode/errornodata.md): Indicates a no data error.

### Initializers

- [init(rawValue:)](cfxmlparserstatuscode/init%28rawvalue_%29.md)

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

### Constants

- [CFXMLParserOptions](cfxmlparseroptions.md): Options you can use to control the parser’s treatment of an XML document.

# CFXMLParserStatusCode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** macOS

The various status and error flags that can be returned by the parser.

## Declaration

```objectivec
enum CFXMLParserStatusCode : CFIndex;
```

<a id="overview"></a>

## Overview

Parser status is determined by calling the [CFXMLParserGetStatusCode](cfxmlparsergetstatuscode.md) function. The parser reports errors to your application by invoking the [CFXMLParserHandleErrorCallBack](cfxmlparserhandleerrorcallback.md) function.

## Topics

### Constants

- [kCFXMLStatusParseNotBegun](cfxmlparserstatuscode/statusparsenotbegun.md): Indicates the parser has not begun.
- [kCFXMLStatusParseInProgress](cfxmlparserstatuscode/statusparseinprogress.md): Indicates the parser is in progress.
- [kCFXMLStatusParseSuccessful](cfxmlparserstatuscode/kcfxmlstatusparsesuccessful.md): Indicates the parser was successful.
- [kCFXMLErrorUnexpectedEOF](cfxmlparserstatuscode/errorunexpectedeof.md): Indicates an unexpected EOF occurred.
- [kCFXMLErrorUnknownEncoding](cfxmlparserstatuscode/errorunknownencoding.md): Indicates an unknown encoding error.
- [kCFXMLErrorEncodingConversionFailure](cfxmlparserstatuscode/errorencodingconversionfailure.md): Indicates an encoding conversion error.
- [kCFXMLErrorMalformedProcessingInstruction](cfxmlparserstatuscode/errormalformedprocessinginstruction.md): Indicates a malformed processing instruction.
- [kCFXMLErrorMalformedDTD](cfxmlparserstatuscode/errormalformeddtd.md): Indicates a malformed DTD.
- [kCFXMLErrorMalformedName](cfxmlparserstatuscode/errormalformedname.md): Indicates a malformed name.
- [kCFXMLErrorMalformedCDSect](cfxmlparserstatuscode/errormalformedcdsect.md): Indicates a malformed CDATA section.
- [kCFXMLErrorMalformedCloseTag](cfxmlparserstatuscode/errormalformedclosetag.md): Indicates a malformed close tag.
- [kCFXMLErrorMalformedStartTag](cfxmlparserstatuscode/errormalformedstarttag.md): Indicates a malformed start tag.
- [kCFXMLErrorMalformedDocument](cfxmlparserstatuscode/errormalformeddocument.md): Indicates a malformed document.
- [kCFXMLErrorElementlessDocument](cfxmlparserstatuscode/errorelementlessdocument.md): Indicates a document containing no elements.
- [kCFXMLErrorMalformedComment](cfxmlparserstatuscode/errormalformedcomment.md): Indicates a malformed comment.
- [kCFXMLErrorMalformedCharacterReference](cfxmlparserstatuscode/errormalformedcharacterreference.md): Indicates a malformed character reference.
- [kCFXMLErrorMalformedParsedCharacterData](cfxmlparserstatuscode/errormalformedparsedcharacterdata.md): Indicates malformed character data.
- [kCFXMLErrorNoData](cfxmlparserstatuscode/errornodata.md): Indicates a no data error.

## See Also

### Constants

- [CFXMLParserOptions](cfxmlparseroptions.md): Options you can use to control the parser’s treatment of an XML document.
