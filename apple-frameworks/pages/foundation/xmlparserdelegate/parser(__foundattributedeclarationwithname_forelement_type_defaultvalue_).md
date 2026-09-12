> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparserdelegate/parser(_:foundattributedeclarationwithname:forelement:type:defaultvalue:)](https://developer.apple.com/documentation/foundation/xmlparserdelegate/parser(_:foundattributedeclarationwithname:forelement:type:defaultvalue:))

# parser(\_:foundAttributeDeclarationWithName:forElement:type:defaultValue:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters a declaration of an attribute that is associated with a specific element.

## Declaration

```swift
optional func parser(_ parser: XMLParser, foundAttributeDeclarationWithName attributeName: String, forElement elementName: String, type: String?, defaultValue: String?)
```

## Parameters

- `parser`: An `NSXMLParser` object parsing XML.
- `attributeName`: A string that is the name of an attribute.
- `elementName`: A string that is the name of an element that has the attribute `attributeName`.
- `type`: A string, such as “ENTITY”, “NOTATION”, or “ID”, that indicates the type of the attribute.
- `defaultValue`: A string that specifies the default value of the attribute.

## See Also

### Related Documentation

- [parser(\_:didStartElement:namespaceURI:qualifiedName:attributes:)](parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md): Sent by a parser object to its delegate when it encounters a start tag for a given element.

### Handling the DTD

- [parser(\_:foundElementDeclarationWithName:model:)](parser%28__foundelementdeclarationwithname_model_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an element with a given model.
- [parser(\_:foundExternalEntityDeclarationWithName:publicID:systemID:)](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser(\_:foundInternalEntityDeclarationWithName:value:)](parser%28__foundinternalentitydeclarationwithname_value_%29.md): Sent by a parser object to the delegate when it encounters an internal entity declaration.
- [parser(\_:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName:)](parser%28__foundunparsedentitydeclarationwithname_publicid_systemid_notationname_%29.md): Sent by a parser object to its delegate when it encounters an unparsed entity declaration.
- [parser(\_:foundNotationDeclarationWithName:publicID:systemID:)](parser%28__foundnotationdeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters a notation declaration.

# parser:foundAttributeDeclarationWithName:forElement:type:defaultValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters a declaration of an attribute that is associated with a specific element.

## Declaration

```objectivec
- (void) parser:(NSXMLParser *) parser foundAttributeDeclarationWithName:(NSString *) attributeName forElement:(NSString *) elementName type:(NSString *) type defaultValue:(NSString *) defaultValue;
```

## Parameters

- `parser`: An `NSXMLParser` object parsing XML.
- `attributeName`: A string that is the name of an attribute.
- `elementName`: A string that is the name of an element that has the attribute `attributeName`.
- `type`: A string, such as “ENTITY”, “NOTATION”, or “ID”, that indicates the type of the attribute.
- `defaultValue`: A string that specifies the default value of the attribute.

## See Also

### Related Documentation

- [parser:didStartElement:namespaceURI:qualifiedName:attributes:](parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md): Sent by a parser object to its delegate when it encounters a start tag for a given element.

### Handling the DTD

- [parser:foundElementDeclarationWithName:model:](parser%28__foundelementdeclarationwithname_model_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an element with a given model.
- [parser:foundExternalEntityDeclarationWithName:publicID:systemID:](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser:foundInternalEntityDeclarationWithName:value:](parser%28__foundinternalentitydeclarationwithname_value_%29.md): Sent by a parser object to the delegate when it encounters an internal entity declaration.
- [parser:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName:](parser%28__foundunparsedentitydeclarationwithname_publicid_systemid_notationname_%29.md): Sent by a parser object to its delegate when it encounters an unparsed entity declaration.
- [parser:foundNotationDeclarationWithName:publicID:systemID:](parser%28__foundnotationdeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters a notation declaration.
