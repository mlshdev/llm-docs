> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparserdelegate/parser(_:foundnotationdeclarationwithname:publicid:systemid:)](https://developer.apple.com/documentation/foundation/xmlparserdelegate/parser(_:foundnotationdeclarationwithname:publicid:systemid:))

# parser(\_:foundNotationDeclarationWithName:publicID:systemID:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters a notation declaration.

## Declaration

```swift
optional func parser(_ parser: XMLParser, foundNotationDeclarationWithName name: String, publicID: String?, systemID: String?)
```

## Parameters

- `parser`: An `NSXMLParser` object parsing XML.
- `name`: A string that is the name of the notation.
- `publicID`: A string specifying the public ID associated with the notation `name`.
- `systemID`: A string specifying the system ID associated with the notation `name`.

## See Also

### Handling the DTD

- [parser(\_:foundAttributeDeclarationWithName:forElement:type:defaultValue:)](parser%28__foundattributedeclarationwithname_forelement_type_defaultvalue_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an attribute that is associated with a specific element.
- [parser(\_:foundElementDeclarationWithName:model:)](parser%28__foundelementdeclarationwithname_model_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an element with a given model.
- [parser(\_:foundExternalEntityDeclarationWithName:publicID:systemID:)](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser(\_:foundInternalEntityDeclarationWithName:value:)](parser%28__foundinternalentitydeclarationwithname_value_%29.md): Sent by a parser object to the delegate when it encounters an internal entity declaration.
- [parser(\_:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName:)](parser%28__foundunparsedentitydeclarationwithname_publicid_systemid_notationname_%29.md): Sent by a parser object to its delegate when it encounters an unparsed entity declaration.

# parser:foundNotationDeclarationWithName:publicID:systemID: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters a notation declaration.

## Declaration

```objectivec
- (void) parser:(NSXMLParser *) parser foundNotationDeclarationWithName:(NSString *) name publicID:(NSString *) publicID systemID:(NSString *) systemID;
```

## Parameters

- `parser`: An `NSXMLParser` object parsing XML.
- `name`: A string that is the name of the notation.
- `publicID`: A string specifying the public ID associated with the notation `name`.
- `systemID`: A string specifying the system ID associated with the notation `name`.

## See Also

### Handling the DTD

- [parser:foundAttributeDeclarationWithName:forElement:type:defaultValue:](parser%28__foundattributedeclarationwithname_forelement_type_defaultvalue_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an attribute that is associated with a specific element.
- [parser:foundElementDeclarationWithName:model:](parser%28__foundelementdeclarationwithname_model_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an element with a given model.
- [parser:foundExternalEntityDeclarationWithName:publicID:systemID:](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser:foundInternalEntityDeclarationWithName:value:](parser%28__foundinternalentitydeclarationwithname_value_%29.md): Sent by a parser object to the delegate when it encounters an internal entity declaration.
- [parser:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName:](parser%28__foundunparsedentitydeclarationwithname_publicid_systemid_notationname_%29.md): Sent by a parser object to its delegate when it encounters an unparsed entity declaration.
