> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparserdelegate/parser(_:foundelementdeclarationwithname:model:)](https://developer.apple.com/documentation/foundation/xmlparserdelegate/parser(_:foundelementdeclarationwithname:model:))

# parser(\_:foundElementDeclarationWithName:model:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters a declaration of an element with a given model.

## Declaration

```swift
optional func parser(_ parser: XMLParser, foundElementDeclarationWithName elementName: String, model: String)
```

## Parameters

- `parser`: An `NSXMLParser` object parsing XML.
- `elementName`: A string that is the name of an element.
- `model`: A string that specifies a model for `elementName`.

## See Also

### Related Documentation

- [parser(\_:didStartElement:namespaceURI:qualifiedName:attributes:)](parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md): Sent by a parser object to its delegate when it encounters a start tag for a given element.

### Handling the DTD

- [parser(\_:foundAttributeDeclarationWithName:forElement:type:defaultValue:)](parser%28__foundattributedeclarationwithname_forelement_type_defaultvalue_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an attribute that is associated with a specific element.
- [parser(\_:foundExternalEntityDeclarationWithName:publicID:systemID:)](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser(\_:foundInternalEntityDeclarationWithName:value:)](parser%28__foundinternalentitydeclarationwithname_value_%29.md): Sent by a parser object to the delegate when it encounters an internal entity declaration.
- [parser(\_:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName:)](parser%28__foundunparsedentitydeclarationwithname_publicid_systemid_notationname_%29.md): Sent by a parser object to its delegate when it encounters an unparsed entity declaration.
- [parser(\_:foundNotationDeclarationWithName:publicID:systemID:)](parser%28__foundnotationdeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters a notation declaration.

# parser:foundElementDeclarationWithName:model: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters a declaration of an element with a given model.

## Declaration

```objectivec
- (void) parser:(NSXMLParser *) parser foundElementDeclarationWithName:(NSString *) elementName model:(NSString *) model;
```

## Parameters

- `parser`: An `NSXMLParser` object parsing XML.
- `elementName`: A string that is the name of an element.
- `model`: A string that specifies a model for `elementName`.

## See Also

### Related Documentation

- [parser:didStartElement:namespaceURI:qualifiedName:attributes:](parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md): Sent by a parser object to its delegate when it encounters a start tag for a given element.

### Handling the DTD

- [parser:foundAttributeDeclarationWithName:forElement:type:defaultValue:](parser%28__foundattributedeclarationwithname_forelement_type_defaultvalue_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an attribute that is associated with a specific element.
- [parser:foundExternalEntityDeclarationWithName:publicID:systemID:](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser:foundInternalEntityDeclarationWithName:value:](parser%28__foundinternalentitydeclarationwithname_value_%29.md): Sent by a parser object to the delegate when it encounters an internal entity declaration.
- [parser:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName:](parser%28__foundunparsedentitydeclarationwithname_publicid_systemid_notationname_%29.md): Sent by a parser object to its delegate when it encounters an unparsed entity declaration.
- [parser:foundNotationDeclarationWithName:publicID:systemID:](parser%28__foundnotationdeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters a notation declaration.
