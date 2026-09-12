> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparserdelegate/parser(_:resolveexternalentityname:systemid:)](https://developer.apple.com/documentation/foundation/xmlparserdelegate/parser(_:resolveexternalentityname:systemid:))

# parser(\_:resolveExternalEntityName:systemID:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters a given external entity with a specific system ID.

## Declaration

```swift
optional func parser(_ parser: XMLParser, resolveExternalEntityName name: String, systemID: String?) -> Data?
```

## Parameters

- `parser`: A parser object.
- `name`: A string that specifies the external name of an entity.
- `systemID`: A string that specifies the system ID for the external entity.

<a id="return-value"></a>

## Return Value

An [NSData](../nsdata.md) object that contains the resolution of the given external entity.

<a id="Discussion"></a>

## Discussion

The delegate can resolve the external entity (for example, locating and reading an externally declared DTD) and provide the result to the parser object as an `NSData` object.

## See Also

### Related Documentation

- [parser(\_:foundExternalEntityDeclarationWithName:publicID:systemID:)](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser(\_:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName:)](parser%28__foundunparsedentitydeclarationwithname_publicid_systemid_notationname_%29.md): Sent by a parser object to its delegate when it encounters an unparsed entity declaration.

### Handling XML

- [parserDidStartDocument(\_:)](parserdidstartdocument%28__%29.md): Sent by the parser object to the delegate when it begins parsing a document.
- [parserDidEndDocument(\_:)](parserdidenddocument%28__%29.md): Sent by the parser object to the delegate when it has successfully completed parsing.
- [parser(\_:didStartElement:namespaceURI:qualifiedName:attributes:)](parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md): Sent by a parser object to its delegate when it encounters a start tag for a given element.
- [parser(\_:didEndElement:namespaceURI:qualifiedName:)](parser%28__didendelement_namespaceuri_qualifiedname_%29.md): Sent by a parser object to its delegate when it encounters an end tag for a specific element.
- [parser(\_:didStartMappingPrefix:toURI:)](parser%28__didstartmappingprefix_touri_%29.md): Sent by a parser object to its delegate the first time it encounters a given namespace prefix, which is mapped to a URI.
- [parser(\_:didEndMappingPrefix:)](parser%28__didendmappingprefix_%29.md): Sent by a parser object to its delegate when a given namespace prefix goes out of scope.
- [parser(\_:parseErrorOccurred:)](parser%28__parseerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal error.
- [parser(\_:validationErrorOccurred:)](parser%28__validationerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal validation error. `NSXMLParser` currently does not invoke this method and does not perform validation.
- [parser(\_:foundCharacters:)](parser%28__foundcharacters_%29.md): Sent by a parser object to provide its delegate with a string representing all or part of the characters of the current element.
- [parser(\_:foundIgnorableWhitespace:)](parser%28__foundignorablewhitespace_%29.md): Reported by a parser object to provide its delegate with a string representing all or part of the ignorable whitespace characters of the current element.
- [parser(\_:foundProcessingInstructionWithTarget:data:)](parser%28__foundprocessinginstructionwithtarget_data_%29.md): Sent by a parser object to its delegate when it encounters a processing instruction.
- [parser(\_:foundComment:)](parser%28__foundcomment_%29.md): Sent by a parser object to its delegate when it encounters a comment in the XML.
- [parser(\_:foundCDATA:)](parser%28__foundcdata_%29.md): Sent by a parser object to its delegate when it encounters a CDATA block.

# parser:resolveExternalEntityName:systemID: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters a given external entity with a specific system ID.

## Declaration

```objectivec
- (NSData *) parser:(NSXMLParser *) parser resolveExternalEntityName:(NSString *) name systemID:(NSString *) systemID;
```

## Parameters

- `parser`: A parser object.
- `name`: A string that specifies the external name of an entity.
- `systemID`: A string that specifies the system ID for the external entity.

<a id="return-value"></a>

## Return Value

An [NSData](../nsdata.md) object that contains the resolution of the given external entity.

<a id="Discussion"></a>

## Discussion

The delegate can resolve the external entity (for example, locating and reading an externally declared DTD) and provide the result to the parser object as an `NSData` object.

## See Also

### Related Documentation

- [parser:foundExternalEntityDeclarationWithName:publicID:systemID:](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName:](parser%28__foundunparsedentitydeclarationwithname_publicid_systemid_notationname_%29.md): Sent by a parser object to its delegate when it encounters an unparsed entity declaration.

### Handling XML

- [parserDidStartDocument:](parserdidstartdocument%28__%29.md): Sent by the parser object to the delegate when it begins parsing a document.
- [parserDidEndDocument:](parserdidenddocument%28__%29.md): Sent by the parser object to the delegate when it has successfully completed parsing.
- [parser:didStartElement:namespaceURI:qualifiedName:attributes:](parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md): Sent by a parser object to its delegate when it encounters a start tag for a given element.
- [parser:didEndElement:namespaceURI:qualifiedName:](parser%28__didendelement_namespaceuri_qualifiedname_%29.md): Sent by a parser object to its delegate when it encounters an end tag for a specific element.
- [parser:didStartMappingPrefix:toURI:](parser%28__didstartmappingprefix_touri_%29.md): Sent by a parser object to its delegate the first time it encounters a given namespace prefix, which is mapped to a URI.
- [parser:didEndMappingPrefix:](parser%28__didendmappingprefix_%29.md): Sent by a parser object to its delegate when a given namespace prefix goes out of scope.
- [parser:parseErrorOccurred:](parser%28__parseerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal error.
- [parser:validationErrorOccurred:](parser%28__validationerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal validation error. `NSXMLParser` currently does not invoke this method and does not perform validation.
- [parser:foundCharacters:](parser%28__foundcharacters_%29.md): Sent by a parser object to provide its delegate with a string representing all or part of the characters of the current element.
- [parser:foundIgnorableWhitespace:](parser%28__foundignorablewhitespace_%29.md): Reported by a parser object to provide its delegate with a string representing all or part of the ignorable whitespace characters of the current element.
- [parser:foundProcessingInstructionWithTarget:data:](parser%28__foundprocessinginstructionwithtarget_data_%29.md): Sent by a parser object to its delegate when it encounters a processing instruction.
- [parser:foundComment:](parser%28__foundcomment_%29.md): Sent by a parser object to its delegate when it encounters a comment in the XML.
- [parser:foundCDATA:](parser%28__foundcdata_%29.md): Sent by a parser object to its delegate when it encounters a CDATA block.
