> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparserdelegate/parser(_:foundprocessinginstructionwithtarget:data:)](https://developer.apple.com/documentation/foundation/xmlparserdelegate/parser(_:foundprocessinginstructionwithtarget:data:))

# parser(\_:foundProcessingInstructionWithTarget:data:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters a processing instruction.

## Declaration

```swift
optional func parser(_ parser: XMLParser, foundProcessingInstructionWithTarget target: String, data: String?)
```

## Parameters

- `parser`: A parser object.
- `target`: A string representing the target of a processing instruction.
- `data`: A string representing the data for a processing instruction.

## See Also

### Handling XML

- [parserDidStartDocument(\_:)](parserdidstartdocument%28__%29.md): Sent by the parser object to the delegate when it begins parsing a document.
- [parserDidEndDocument(\_:)](parserdidenddocument%28__%29.md): Sent by the parser object to the delegate when it has successfully completed parsing.
- [parser(\_:didStartElement:namespaceURI:qualifiedName:attributes:)](parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md): Sent by a parser object to its delegate when it encounters a start tag for a given element.
- [parser(\_:didEndElement:namespaceURI:qualifiedName:)](parser%28__didendelement_namespaceuri_qualifiedname_%29.md): Sent by a parser object to its delegate when it encounters an end tag for a specific element.
- [parser(\_:didStartMappingPrefix:toURI:)](parser%28__didstartmappingprefix_touri_%29.md): Sent by a parser object to its delegate the first time it encounters a given namespace prefix, which is mapped to a URI.
- [parser(\_:didEndMappingPrefix:)](parser%28__didendmappingprefix_%29.md): Sent by a parser object to its delegate when a given namespace prefix goes out of scope.
- [parser(\_:resolveExternalEntityName:systemID:)](parser%28__resolveexternalentityname_systemid_%29.md): Sent by a parser object to its delegate when it encounters a given external entity with a specific system ID.
- [parser(\_:parseErrorOccurred:)](parser%28__parseerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal error.
- [parser(\_:validationErrorOccurred:)](parser%28__validationerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal validation error. `NSXMLParser` currently does not invoke this method and does not perform validation.
- [parser(\_:foundCharacters:)](parser%28__foundcharacters_%29.md): Sent by a parser object to provide its delegate with a string representing all or part of the characters of the current element.
- [parser(\_:foundIgnorableWhitespace:)](parser%28__foundignorablewhitespace_%29.md): Reported by a parser object to provide its delegate with a string representing all or part of the ignorable whitespace characters of the current element.
- [parser(\_:foundComment:)](parser%28__foundcomment_%29.md): Sent by a parser object to its delegate when it encounters a comment in the XML.
- [parser(\_:foundCDATA:)](parser%28__foundcdata_%29.md): Sent by a parser object to its delegate when it encounters a CDATA block.

# parser:foundProcessingInstructionWithTarget:data: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters a processing instruction.

## Declaration

```objectivec
- (void) parser:(NSXMLParser *) parser foundProcessingInstructionWithTarget:(NSString *) target data:(NSString *) data;
```

## Parameters

- `parser`: A parser object.
- `target`: A string representing the target of a processing instruction.
- `data`: A string representing the data for a processing instruction.

## See Also

### Handling XML

- [parserDidStartDocument:](parserdidstartdocument%28__%29.md): Sent by the parser object to the delegate when it begins parsing a document.
- [parserDidEndDocument:](parserdidenddocument%28__%29.md): Sent by the parser object to the delegate when it has successfully completed parsing.
- [parser:didStartElement:namespaceURI:qualifiedName:attributes:](parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md): Sent by a parser object to its delegate when it encounters a start tag for a given element.
- [parser:didEndElement:namespaceURI:qualifiedName:](parser%28__didendelement_namespaceuri_qualifiedname_%29.md): Sent by a parser object to its delegate when it encounters an end tag for a specific element.
- [parser:didStartMappingPrefix:toURI:](parser%28__didstartmappingprefix_touri_%29.md): Sent by a parser object to its delegate the first time it encounters a given namespace prefix, which is mapped to a URI.
- [parser:didEndMappingPrefix:](parser%28__didendmappingprefix_%29.md): Sent by a parser object to its delegate when a given namespace prefix goes out of scope.
- [parser:resolveExternalEntityName:systemID:](parser%28__resolveexternalentityname_systemid_%29.md): Sent by a parser object to its delegate when it encounters a given external entity with a specific system ID.
- [parser:parseErrorOccurred:](parser%28__parseerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal error.
- [parser:validationErrorOccurred:](parser%28__validationerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal validation error. `NSXMLParser` currently does not invoke this method and does not perform validation.
- [parser:foundCharacters:](parser%28__foundcharacters_%29.md): Sent by a parser object to provide its delegate with a string representing all or part of the characters of the current element.
- [parser:foundIgnorableWhitespace:](parser%28__foundignorablewhitespace_%29.md): Reported by a parser object to provide its delegate with a string representing all or part of the ignorable whitespace characters of the current element.
- [parser:foundComment:](parser%28__foundcomment_%29.md): Sent by a parser object to its delegate when it encounters a comment in the XML.
- [parser:foundCDATA:](parser%28__foundcdata_%29.md): Sent by a parser object to its delegate when it encounters a CDATA block.
