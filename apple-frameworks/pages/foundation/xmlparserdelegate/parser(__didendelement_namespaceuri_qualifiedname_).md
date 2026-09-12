> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparserdelegate/parser(_:didendelement:namespaceuri:qualifiedname:)](https://developer.apple.com/documentation/foundation/xmlparserdelegate/parser(_:didendelement:namespaceuri:qualifiedname:))

# parser(\_:didEndElement:namespaceURI:qualifiedName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters an end tag for a specific element.

## Declaration

```swift
optional func parser(_ parser: XMLParser, didEndElement elementName: String, namespaceURI: String?, qualifiedName qName: String?)
```

## Parameters

- `parser`: A parser object.
- `elementName`: A string that is the name of an element (in its end tag).
- `namespaceURI`: If namespace processing is turned on, contains the URI for the current namespace as a string object.
- `qName`: If namespace processing is turned on, contains the qualified name for the current namespace as a string object.

## See Also

### Related Documentation

- [shouldProcessNamespaces](../xmlparser/shouldprocessnamespaces.md): A Boolean value that determines whether the parser reports the namespaces and qualified names of elements.

### Handling XML

- [parserDidStartDocument(\_:)](parserdidstartdocument%28__%29.md): Sent by the parser object to the delegate when it begins parsing a document.
- [parserDidEndDocument(\_:)](parserdidenddocument%28__%29.md): Sent by the parser object to the delegate when it has successfully completed parsing.
- [parser(\_:didStartElement:namespaceURI:qualifiedName:attributes:)](parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md): Sent by a parser object to its delegate when it encounters a start tag for a given element.
- [parser(\_:didStartMappingPrefix:toURI:)](parser%28__didstartmappingprefix_touri_%29.md): Sent by a parser object to its delegate the first time it encounters a given namespace prefix, which is mapped to a URI.
- [parser(\_:didEndMappingPrefix:)](parser%28__didendmappingprefix_%29.md): Sent by a parser object to its delegate when a given namespace prefix goes out of scope.
- [parser(\_:resolveExternalEntityName:systemID:)](parser%28__resolveexternalentityname_systemid_%29.md): Sent by a parser object to its delegate when it encounters a given external entity with a specific system ID.
- [parser(\_:parseErrorOccurred:)](parser%28__parseerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal error.
- [parser(\_:validationErrorOccurred:)](parser%28__validationerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal validation error. `NSXMLParser` currently does not invoke this method and does not perform validation.
- [parser(\_:foundCharacters:)](parser%28__foundcharacters_%29.md): Sent by a parser object to provide its delegate with a string representing all or part of the characters of the current element.
- [parser(\_:foundIgnorableWhitespace:)](parser%28__foundignorablewhitespace_%29.md): Reported by a parser object to provide its delegate with a string representing all or part of the ignorable whitespace characters of the current element.
- [parser(\_:foundProcessingInstructionWithTarget:data:)](parser%28__foundprocessinginstructionwithtarget_data_%29.md): Sent by a parser object to its delegate when it encounters a processing instruction.
- [parser(\_:foundComment:)](parser%28__foundcomment_%29.md): Sent by a parser object to its delegate when it encounters a comment in the XML.
- [parser(\_:foundCDATA:)](parser%28__foundcdata_%29.md): Sent by a parser object to its delegate when it encounters a CDATA block.

# parser:didEndElement:namespaceURI:qualifiedName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters an end tag for a specific element.

## Declaration

```objectivec
- (void) parser:(NSXMLParser *) parser didEndElement:(NSString *) elementName namespaceURI:(NSString *) namespaceURI qualifiedName:(NSString *) qName;
```

## Parameters

- `parser`: A parser object.
- `elementName`: A string that is the name of an element (in its end tag).
- `namespaceURI`: If namespace processing is turned on, contains the URI for the current namespace as a string object.
- `qName`: If namespace processing is turned on, contains the qualified name for the current namespace as a string object.

## See Also

### Related Documentation

- [shouldProcessNamespaces](../xmlparser/shouldprocessnamespaces.md): A Boolean value that determines whether the parser reports the namespaces and qualified names of elements.

### Handling XML

- [parserDidStartDocument:](parserdidstartdocument%28__%29.md): Sent by the parser object to the delegate when it begins parsing a document.
- [parserDidEndDocument:](parserdidenddocument%28__%29.md): Sent by the parser object to the delegate when it has successfully completed parsing.
- [parser:didStartElement:namespaceURI:qualifiedName:attributes:](parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md): Sent by a parser object to its delegate when it encounters a start tag for a given element.
- [parser:didStartMappingPrefix:toURI:](parser%28__didstartmappingprefix_touri_%29.md): Sent by a parser object to its delegate the first time it encounters a given namespace prefix, which is mapped to a URI.
- [parser:didEndMappingPrefix:](parser%28__didendmappingprefix_%29.md): Sent by a parser object to its delegate when a given namespace prefix goes out of scope.
- [parser:resolveExternalEntityName:systemID:](parser%28__resolveexternalentityname_systemid_%29.md): Sent by a parser object to its delegate when it encounters a given external entity with a specific system ID.
- [parser:parseErrorOccurred:](parser%28__parseerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal error.
- [parser:validationErrorOccurred:](parser%28__validationerroroccurred_%29.md): Sent by a parser object to its delegate when it encounters a fatal validation error. `NSXMLParser` currently does not invoke this method and does not perform validation.
- [parser:foundCharacters:](parser%28__foundcharacters_%29.md): Sent by a parser object to provide its delegate with a string representing all or part of the characters of the current element.
- [parser:foundIgnorableWhitespace:](parser%28__foundignorablewhitespace_%29.md): Reported by a parser object to provide its delegate with a string representing all or part of the ignorable whitespace characters of the current element.
- [parser:foundProcessingInstructionWithTarget:data:](parser%28__foundprocessinginstructionwithtarget_data_%29.md): Sent by a parser object to its delegate when it encounters a processing instruction.
- [parser:foundComment:](parser%28__foundcomment_%29.md): Sent by a parser object to its delegate when it encounters a comment in the XML.
- [parser:foundCDATA:](parser%28__foundcdata_%29.md): Sent by a parser object to its delegate when it encounters a CDATA block.
