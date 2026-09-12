> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/errorcode](https://developer.apple.com/documentation/foundation/xmlparser/errorcode)

# XMLParser.ErrorCode (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The following error codes are defined by `NSXMLParser`. For error codes not listed here, see the `<libxml/xmlerror.h>` header file.

## Declaration

```swift
enum ErrorCode
```

## Topics

### Constants

- [XMLParser.ErrorCode.internalError](errorcode/internalerror.md): The parser object encountered an internal error.
- [XMLParser.ErrorCode.outOfMemoryError](errorcode/outofmemoryerror.md): The parser object ran out of memory.
- [XMLParser.ErrorCode.documentStartError](errorcode/documentstarterror.md): The parser object is unable to start parsing.
- [XMLParser.ErrorCode.emptyDocumentError](errorcode/emptydocumenterror.md): The document is empty.
- [XMLParser.ErrorCode.prematureDocumentEndError](errorcode/prematuredocumentenderror.md): The document ended unexpectedly.
- [XMLParser.ErrorCode.invalidHexCharacterRefError](errorcode/invalidhexcharacterreferror.md): Invalid hexadecimal character reference encountered.
- [XMLParser.ErrorCode.invalidDecimalCharacterRefError](errorcode/invaliddecimalcharacterreferror.md): Invalid decimal character reference encountered.
- [XMLParser.ErrorCode.invalidCharacterRefError](errorcode/invalidcharacterreferror.md): Invalid character reference encountered.
- [XMLParser.ErrorCode.invalidCharacterError](errorcode/invalidcharactererror.md): Invalid character encountered.
- [XMLParser.ErrorCode.characterRefAtEOFError](errorcode/characterrefateoferror.md): Target of character reference cannot be found.
- [XMLParser.ErrorCode.characterRefInPrologError](errorcode/characterrefinprologerror.md): Invalid character found in the prolog.
- [XMLParser.ErrorCode.characterRefInEpilogError](errorcode/characterrefinepilogerror.md): Invalid character found in the epilog.
- [XMLParser.ErrorCode.characterRefInDTDError](errorcode/characterrefindtderror.md): Invalid character encountered in the DTD.
- [XMLParser.ErrorCode.entityRefAtEOFError](errorcode/entityrefateoferror.md): Target of entity reference is not found.
- [XMLParser.ErrorCode.entityRefInPrologError](errorcode/entityrefinprologerror.md): Invalid entity reference found in the prolog.
- [XMLParser.ErrorCode.entityRefInEpilogError](errorcode/entityrefinepilogerror.md): Invalid entity reference found in the epilog.
- [XMLParser.ErrorCode.entityRefInDTDError](errorcode/entityrefindtderror.md): Invalid entity reference found in the DTD.
- [XMLParser.ErrorCode.parsedEntityRefAtEOFError](errorcode/parsedentityrefateoferror.md): Target of parsed entity reference is not found.
- [XMLParser.ErrorCode.parsedEntityRefInPrologError](errorcode/parsedentityrefinprologerror.md): Target of parsed entity reference is not found in prolog.
- [XMLParser.ErrorCode.parsedEntityRefInEpilogError](errorcode/parsedentityrefinepilogerror.md): Target of parsed entity reference is not found in epilog.
- [XMLParser.ErrorCode.parsedEntityRefInInternalSubsetError](errorcode/parsedentityrefininternalsubseterror.md): Target of parsed entity reference is not found in internal subset.
- [XMLParser.ErrorCode.entityReferenceWithoutNameError](errorcode/entityreferencewithoutnameerror.md): Entity reference is without name.
- [XMLParser.ErrorCode.entityReferenceMissingSemiError](errorcode/entityreferencemissingsemierror.md): Entity reference is missing semicolon.
- [XMLParser.ErrorCode.parsedEntityRefNoNameError](errorcode/parsedentityrefnonameerror.md): Parsed entity reference is without an entity name.
- [XMLParser.ErrorCode.parsedEntityRefMissingSemiError](errorcode/parsedentityrefmissingsemierror.md): Parsed entity reference is missing semicolon.
- [XMLParser.ErrorCode.undeclaredEntityError](errorcode/undeclaredentityerror.md): Entity is not declared.
- [XMLParser.ErrorCode.unparsedEntityError](errorcode/unparsedentityerror.md): Cannot parse entity.
- [XMLParser.ErrorCode.entityIsExternalError](errorcode/entityisexternalerror.md): Cannot parse external entity.
- [XMLParser.ErrorCode.entityIsParameterError](errorcode/entityisparametererror.md): Entity is a parameter.
- [XMLParser.ErrorCode.unknownEncodingError](errorcode/unknownencodingerror.md): Document encoding is unknown.
- [XMLParser.ErrorCode.encodingNotSupportedError](errorcode/encodingnotsupportederror.md): Document encoding is not supported.
- [XMLParser.ErrorCode.stringNotStartedError](errorcode/stringnotstartederror.md): String is not started.
- [XMLParser.ErrorCode.stringNotClosedError](errorcode/stringnotclosederror.md): String is not closed.
- [XMLParser.ErrorCode.namespaceDeclarationError](errorcode/namespacedeclarationerror.md): Invalid namespace declaration encountered.
- [XMLParser.ErrorCode.entityNotStartedError](errorcode/entitynotstartederror.md): Entity is not started.
- [XMLParser.ErrorCode.entityNotFinishedError](errorcode/entitynotfinishederror.md): Entity is not finished.
- [XMLParser.ErrorCode.lessThanSymbolInAttributeError](errorcode/lessthansymbolinattributeerror.md): Angle bracket is used in attribute.
- [XMLParser.ErrorCode.attributeNotStartedError](errorcode/attributenotstartederror.md): Attribute is not started.
- [XMLParser.ErrorCode.attributeNotFinishedError](errorcode/attributenotfinishederror.md): Attribute is not finished.
- [XMLParser.ErrorCode.attributeHasNoValueError](errorcode/attributehasnovalueerror.md): Attribute doesn’t contain a value.
- [XMLParser.ErrorCode.attributeRedefinedError](errorcode/attributeredefinederror.md): Attribute is redefined.
- [XMLParser.ErrorCode.literalNotStartedError](errorcode/literalnotstartederror.md): Literal is not started.
- [XMLParser.ErrorCode.literalNotFinishedError](errorcode/literalnotfinishederror.md): Literal is not finished.
- [XMLParser.ErrorCode.commentNotFinishedError](errorcode/commentnotfinishederror.md): Comment is not finished.
- [XMLParser.ErrorCode.processingInstructionNotStartedError](errorcode/processinginstructionnotstartederror.md): Processing instruction is not started.
- [XMLParser.ErrorCode.processingInstructionNotFinishedError](errorcode/processinginstructionnotfinishederror.md): Processing instruction is not finished.
- [XMLParser.ErrorCode.notationNotStartedError](errorcode/notationnotstartederror.md): Notation is not started.
- [XMLParser.ErrorCode.notationNotFinishedError](errorcode/notationnotfinishederror.md): Notation is not finished.
- [XMLParser.ErrorCode.attributeListNotStartedError](errorcode/attributelistnotstartederror.md): Attribute list is not started.
- [XMLParser.ErrorCode.attributeListNotFinishedError](errorcode/attributelistnotfinishederror.md): Attribute list is not finished.
- [XMLParser.ErrorCode.mixedContentDeclNotStartedError](errorcode/mixedcontentdeclnotstartederror.md): Mixed content declaration is not started.
- [XMLParser.ErrorCode.mixedContentDeclNotFinishedError](errorcode/mixedcontentdeclnotfinishederror.md): Mixed content declaration is not finished.
- [XMLParser.ErrorCode.elementContentDeclNotStartedError](errorcode/elementcontentdeclnotstartederror.md): Element content declaration is not started.
- [XMLParser.ErrorCode.elementContentDeclNotFinishedError](errorcode/elementcontentdeclnotfinishederror.md): Element content declaration is not finished.
- [XMLParser.ErrorCode.xmlDeclNotStartedError](errorcode/xmldeclnotstartederror.md): XML declaration is not started.
- [XMLParser.ErrorCode.xmlDeclNotFinishedError](errorcode/xmldeclnotfinishederror.md): XML declaration is not finished.
- [XMLParser.ErrorCode.conditionalSectionNotStartedError](errorcode/conditionalsectionnotstartederror.md): Conditional section is not started.
- [XMLParser.ErrorCode.conditionalSectionNotFinishedError](errorcode/conditionalsectionnotfinishederror.md): Conditional section is not finished.
- [XMLParser.ErrorCode.externalSubsetNotFinishedError](errorcode/externalsubsetnotfinishederror.md): External subset is not finished.
- [XMLParser.ErrorCode.doctypeDeclNotFinishedError](errorcode/doctypedeclnotfinishederror.md): Document type declaration is not finished.
- [XMLParser.ErrorCode.misplacedCDATAEndStringError](errorcode/misplacedcdataendstringerror.md): Misplaced CDATA end string.
- [XMLParser.ErrorCode.cdataNotFinishedError](errorcode/cdatanotfinishederror.md): CDATA block is not finished.
- [XMLParser.ErrorCode.misplacedXMLDeclarationError](errorcode/misplacedxmldeclarationerror.md): Misplaced XML declaration.
- [XMLParser.ErrorCode.spaceRequiredError](errorcode/spacerequirederror.md): Space is required.
- [XMLParser.ErrorCode.separatorRequiredError](errorcode/separatorrequirederror.md): Separator is required.
- [XMLParser.ErrorCode.nmtokenRequiredError](errorcode/nmtokenrequirederror.md): Name token is required.
- [XMLParser.ErrorCode.nameRequiredError](errorcode/namerequirederror.md): Name is required.
- [XMLParser.ErrorCode.pcdataRequiredError](errorcode/pcdatarequirederror.md): CDATA is required.
- [XMLParser.ErrorCode.uriRequiredError](errorcode/urirequirederror.md): URI is required.
- [XMLParser.ErrorCode.publicIdentifierRequiredError](errorcode/publicidentifierrequirederror.md): Public identifier is required.
- [XMLParser.ErrorCode.ltRequiredError](errorcode/ltrequirederror.md): Left angle bracket is required.
- [XMLParser.ErrorCode.gtRequiredError](errorcode/gtrequirederror.md): Right angle bracket is required.
- [XMLParser.ErrorCode.ltSlashRequiredError](errorcode/ltslashrequirederror.md): Left angle bracket slash is required.
- [XMLParser.ErrorCode.equalExpectedError](errorcode/equalexpectederror.md): Equal sign expected.
- [XMLParser.ErrorCode.tagNameMismatchError](errorcode/tagnamemismatcherror.md): Tag name mismatch.
- [XMLParser.ErrorCode.unfinishedTagError](errorcode/unfinishedtagerror.md): Unfinished tag found.
- [XMLParser.ErrorCode.standaloneValueError](errorcode/standalonevalueerror.md): Standalone value found.
- [XMLParser.ErrorCode.invalidEncodingNameError](errorcode/invalidencodingnameerror.md): Invalid encoding name found.
- [XMLParser.ErrorCode.commentContainsDoubleHyphenError](errorcode/commentcontainsdoublehyphenerror.md): Comment contains double hyphen.
- [XMLParser.ErrorCode.invalidEncodingError](errorcode/invalidencodingerror.md): Invalid encoding.
- [XMLParser.ErrorCode.externalStandaloneEntityError](errorcode/externalstandaloneentityerror.md): External standalone entity.
- [XMLParser.ErrorCode.invalidConditionalSectionError](errorcode/invalidconditionalsectionerror.md): Invalid conditional section.
- [XMLParser.ErrorCode.entityValueRequiredError](errorcode/entityvaluerequirederror.md): Entity value is required.
- [XMLParser.ErrorCode.notWellBalancedError](errorcode/notwellbalancederror.md): Document is not well balanced.
- [XMLParser.ErrorCode.extraContentError](errorcode/extracontenterror.md): Error in content found.
- [XMLParser.ErrorCode.invalidCharacterInEntityError](errorcode/invalidcharacterinentityerror.md): Invalid character in entity found.
- [XMLParser.ErrorCode.parsedEntityRefInInternalError](errorcode/parsedentityrefininternalerror.md): Internal error in parsed entity reference found.
- [XMLParser.ErrorCode.entityRefLoopError](errorcode/entityreflooperror.md): Entity reference loop encountered.
- [XMLParser.ErrorCode.entityBoundaryError](errorcode/entityboundaryerror.md): Entity boundary error.
- [XMLParser.ErrorCode.invalidURIError](errorcode/invalidurierror.md): Invalid URI specified.
- [XMLParser.ErrorCode.uriFragmentError](errorcode/urifragmenterror.md): URI fragment.
- [XMLParser.ErrorCode.noDTDError](errorcode/nodtderror.md): Missing DTD.
- [XMLParser.ErrorCode.delegateAbortedParseError](errorcode/delegateabortedparseerror.md): Delegate aborted parse.

### Initializers

- [init(rawValue:)](errorcode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [XMLParser.ExternalEntityResolvingPolicy](externalentityresolvingpolicy-swift.enum.md): Defines the external entity resolving policy used by an `NSXMLParser` instance.
- [errorDomain](errordomain.md): Indicates an error in XML parsing.

# NSXMLParserError (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The following error codes are defined by `NSXMLParser`. For error codes not listed here, see the `<libxml/xmlerror.h>` header file.

## Declaration

```objectivec
enum NSXMLParserError : NSInteger;
```

## Topics

### Constants

- [NSXMLParserInternalError](errorcode/internalerror.md): The parser object encountered an internal error.
- [NSXMLParserOutOfMemoryError](errorcode/outofmemoryerror.md): The parser object ran out of memory.
- [NSXMLParserDocumentStartError](errorcode/documentstarterror.md): The parser object is unable to start parsing.
- [NSXMLParserEmptyDocumentError](errorcode/emptydocumenterror.md): The document is empty.
- [NSXMLParserPrematureDocumentEndError](errorcode/prematuredocumentenderror.md): The document ended unexpectedly.
- [NSXMLParserInvalidHexCharacterRefError](errorcode/invalidhexcharacterreferror.md): Invalid hexadecimal character reference encountered.
- [NSXMLParserInvalidDecimalCharacterRefError](errorcode/invaliddecimalcharacterreferror.md): Invalid decimal character reference encountered.
- [NSXMLParserInvalidCharacterRefError](errorcode/invalidcharacterreferror.md): Invalid character reference encountered.
- [NSXMLParserInvalidCharacterError](errorcode/invalidcharactererror.md): Invalid character encountered.
- [NSXMLParserCharacterRefAtEOFError](errorcode/characterrefateoferror.md): Target of character reference cannot be found.
- [NSXMLParserCharacterRefInPrologError](errorcode/characterrefinprologerror.md): Invalid character found in the prolog.
- [NSXMLParserCharacterRefInEpilogError](errorcode/characterrefinepilogerror.md): Invalid character found in the epilog.
- [NSXMLParserCharacterRefInDTDError](errorcode/characterrefindtderror.md): Invalid character encountered in the DTD.
- [NSXMLParserEntityRefAtEOFError](errorcode/entityrefateoferror.md): Target of entity reference is not found.
- [NSXMLParserEntityRefInPrologError](errorcode/entityrefinprologerror.md): Invalid entity reference found in the prolog.
- [NSXMLParserEntityRefInEpilogError](errorcode/entityrefinepilogerror.md): Invalid entity reference found in the epilog.
- [NSXMLParserEntityRefInDTDError](errorcode/entityrefindtderror.md): Invalid entity reference found in the DTD.
- [NSXMLParserParsedEntityRefAtEOFError](errorcode/parsedentityrefateoferror.md): Target of parsed entity reference is not found.
- [NSXMLParserParsedEntityRefInPrologError](errorcode/parsedentityrefinprologerror.md): Target of parsed entity reference is not found in prolog.
- [NSXMLParserParsedEntityRefInEpilogError](errorcode/parsedentityrefinepilogerror.md): Target of parsed entity reference is not found in epilog.
- [NSXMLParserParsedEntityRefInInternalSubsetError](errorcode/parsedentityrefininternalsubseterror.md): Target of parsed entity reference is not found in internal subset.
- [NSXMLParserEntityReferenceWithoutNameError](errorcode/entityreferencewithoutnameerror.md): Entity reference is without name.
- [NSXMLParserEntityReferenceMissingSemiError](errorcode/entityreferencemissingsemierror.md): Entity reference is missing semicolon.
- [NSXMLParserParsedEntityRefNoNameError](errorcode/parsedentityrefnonameerror.md): Parsed entity reference is without an entity name.
- [NSXMLParserParsedEntityRefMissingSemiError](errorcode/parsedentityrefmissingsemierror.md): Parsed entity reference is missing semicolon.
- [NSXMLParserUndeclaredEntityError](errorcode/undeclaredentityerror.md): Entity is not declared.
- [NSXMLParserUnparsedEntityError](errorcode/unparsedentityerror.md): Cannot parse entity.
- [NSXMLParserEntityIsExternalError](errorcode/entityisexternalerror.md): Cannot parse external entity.
- [NSXMLParserEntityIsParameterError](errorcode/entityisparametererror.md): Entity is a parameter.
- [NSXMLParserUnknownEncodingError](errorcode/unknownencodingerror.md): Document encoding is unknown.
- [NSXMLParserEncodingNotSupportedError](errorcode/encodingnotsupportederror.md): Document encoding is not supported.
- [NSXMLParserStringNotStartedError](errorcode/stringnotstartederror.md): String is not started.
- [NSXMLParserStringNotClosedError](errorcode/stringnotclosederror.md): String is not closed.
- [NSXMLParserNamespaceDeclarationError](errorcode/namespacedeclarationerror.md): Invalid namespace declaration encountered.
- [NSXMLParserEntityNotStartedError](errorcode/entitynotstartederror.md): Entity is not started.
- [NSXMLParserEntityNotFinishedError](errorcode/entitynotfinishederror.md): Entity is not finished.
- [NSXMLParserLessThanSymbolInAttributeError](errorcode/lessthansymbolinattributeerror.md): Angle bracket is used in attribute.
- [NSXMLParserAttributeNotStartedError](errorcode/attributenotstartederror.md): Attribute is not started.
- [NSXMLParserAttributeNotFinishedError](errorcode/attributenotfinishederror.md): Attribute is not finished.
- [NSXMLParserAttributeHasNoValueError](errorcode/attributehasnovalueerror.md): Attribute doesn’t contain a value.
- [NSXMLParserAttributeRedefinedError](errorcode/attributeredefinederror.md): Attribute is redefined.
- [NSXMLParserLiteralNotStartedError](errorcode/literalnotstartederror.md): Literal is not started.
- [NSXMLParserLiteralNotFinishedError](errorcode/literalnotfinishederror.md): Literal is not finished.
- [NSXMLParserCommentNotFinishedError](errorcode/commentnotfinishederror.md): Comment is not finished.
- [NSXMLParserProcessingInstructionNotStartedError](errorcode/processinginstructionnotstartederror.md): Processing instruction is not started.
- [NSXMLParserProcessingInstructionNotFinishedError](errorcode/processinginstructionnotfinishederror.md): Processing instruction is not finished.
- [NSXMLParserNotationNotStartedError](errorcode/notationnotstartederror.md): Notation is not started.
- [NSXMLParserNotationNotFinishedError](errorcode/notationnotfinishederror.md): Notation is not finished.
- [NSXMLParserAttributeListNotStartedError](errorcode/attributelistnotstartederror.md): Attribute list is not started.
- [NSXMLParserAttributeListNotFinishedError](errorcode/attributelistnotfinishederror.md): Attribute list is not finished.
- [NSXMLParserMixedContentDeclNotStartedError](errorcode/mixedcontentdeclnotstartederror.md): Mixed content declaration is not started.
- [NSXMLParserMixedContentDeclNotFinishedError](errorcode/mixedcontentdeclnotfinishederror.md): Mixed content declaration is not finished.
- [NSXMLParserElementContentDeclNotStartedError](errorcode/elementcontentdeclnotstartederror.md): Element content declaration is not started.
- [NSXMLParserElementContentDeclNotFinishedError](errorcode/elementcontentdeclnotfinishederror.md): Element content declaration is not finished.
- [NSXMLParserXMLDeclNotStartedError](errorcode/xmldeclnotstartederror.md): XML declaration is not started.
- [NSXMLParserXMLDeclNotFinishedError](errorcode/xmldeclnotfinishederror.md): XML declaration is not finished.
- [NSXMLParserConditionalSectionNotStartedError](errorcode/conditionalsectionnotstartederror.md): Conditional section is not started.
- [NSXMLParserConditionalSectionNotFinishedError](errorcode/conditionalsectionnotfinishederror.md): Conditional section is not finished.
- [NSXMLParserExternalSubsetNotFinishedError](errorcode/externalsubsetnotfinishederror.md): External subset is not finished.
- [NSXMLParserDOCTYPEDeclNotFinishedError](errorcode/doctypedeclnotfinishederror.md): Document type declaration is not finished.
- [NSXMLParserMisplacedCDATAEndStringError](errorcode/misplacedcdataendstringerror.md): Misplaced CDATA end string.
- [NSXMLParserCDATANotFinishedError](errorcode/cdatanotfinishederror.md): CDATA block is not finished.
- [NSXMLParserMisplacedXMLDeclarationError](errorcode/misplacedxmldeclarationerror.md): Misplaced XML declaration.
- [NSXMLParserSpaceRequiredError](errorcode/spacerequirederror.md): Space is required.
- [NSXMLParserSeparatorRequiredError](errorcode/separatorrequirederror.md): Separator is required.
- [NSXMLParserNMTOKENRequiredError](errorcode/nmtokenrequirederror.md): Name token is required.
- [NSXMLParserNAMERequiredError](errorcode/namerequirederror.md): Name is required.
- [NSXMLParserPCDATARequiredError](errorcode/pcdatarequirederror.md): CDATA is required.
- [NSXMLParserURIRequiredError](errorcode/urirequirederror.md): URI is required.
- [NSXMLParserPublicIdentifierRequiredError](errorcode/publicidentifierrequirederror.md): Public identifier is required.
- [NSXMLParserLTRequiredError](errorcode/ltrequirederror.md): Left angle bracket is required.
- [NSXMLParserGTRequiredError](errorcode/gtrequirederror.md): Right angle bracket is required.
- [NSXMLParserLTSlashRequiredError](errorcode/ltslashrequirederror.md): Left angle bracket slash is required.
- [NSXMLParserEqualExpectedError](errorcode/equalexpectederror.md): Equal sign expected.
- [NSXMLParserTagNameMismatchError](errorcode/tagnamemismatcherror.md): Tag name mismatch.
- [NSXMLParserUnfinishedTagError](errorcode/unfinishedtagerror.md): Unfinished tag found.
- [NSXMLParserStandaloneValueError](errorcode/standalonevalueerror.md): Standalone value found.
- [NSXMLParserInvalidEncodingNameError](errorcode/invalidencodingnameerror.md): Invalid encoding name found.
- [NSXMLParserCommentContainsDoubleHyphenError](errorcode/commentcontainsdoublehyphenerror.md): Comment contains double hyphen.
- [NSXMLParserInvalidEncodingError](errorcode/invalidencodingerror.md): Invalid encoding.
- [NSXMLParserExternalStandaloneEntityError](errorcode/externalstandaloneentityerror.md): External standalone entity.
- [NSXMLParserInvalidConditionalSectionError](errorcode/invalidconditionalsectionerror.md): Invalid conditional section.
- [NSXMLParserEntityValueRequiredError](errorcode/entityvaluerequirederror.md): Entity value is required.
- [NSXMLParserNotWellBalancedError](errorcode/notwellbalancederror.md): Document is not well balanced.
- [NSXMLParserExtraContentError](errorcode/extracontenterror.md): Error in content found.
- [NSXMLParserInvalidCharacterInEntityError](errorcode/invalidcharacterinentityerror.md): Invalid character in entity found.
- [NSXMLParserParsedEntityRefInInternalError](errorcode/parsedentityrefininternalerror.md): Internal error in parsed entity reference found.
- [NSXMLParserEntityRefLoopError](errorcode/entityreflooperror.md): Entity reference loop encountered.
- [NSXMLParserEntityBoundaryError](errorcode/entityboundaryerror.md): Entity boundary error.
- [NSXMLParserInvalidURIError](errorcode/invalidurierror.md): Invalid URI specified.
- [NSXMLParserURIFragmentError](errorcode/urifragmenterror.md): URI fragment.
- [NSXMLParserNoDTDError](errorcode/nodtderror.md): Missing DTD.
- [NSXMLParserDelegateAbortedParseError](errorcode/delegateabortedparseerror.md): Delegate aborted parse.

## See Also

### Constants

- [NSXMLParserExternalEntityResolvingPolicy](externalentityresolvingpolicy-swift.enum.md): Defines the external entity resolving policy used by an `NSXMLParser` instance.
- [NSXMLParserErrorDomain](errordomain.md): Indicates an error in XML parsing.
