> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparserdelegate/parser(_:foundunparsedentitydeclarationwithname:publicid:systemid:notationname:)](https://developer.apple.com/documentation/foundation/xmlparserdelegate/parser(_:foundunparsedentitydeclarationwithname:publicid:systemid:notationname:))

# parser(\_:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters an unparsed entity declaration.

## Declaration

```swift
optional func parser(_ parser: XMLParser, foundUnparsedEntityDeclarationWithName name: String, publicID: String?, systemID: String?, notationName: String?)
```

## Parameters

- `parser`: An `NSXMLParser` object parsing XML.
- `name`: A string that is the name of the unparsed entity in the declaration.
- `publicID`: A string specifying the public ID associated with the entity `name`.
- `systemID`: A string specifying the system ID associated with the entity `name`.
- `notationName`: A string specifying a notation of the declaration of entity `name`.

## See Also

### Related Documentation

- [parser(\_:resolveExternalEntityName:systemID:)](parser%28__resolveexternalentityname_systemid_%29.md): Sent by a parser object to its delegate when it encounters a given external entity with a specific system ID.

### Handling the DTD

- [parser(\_:foundAttributeDeclarationWithName:forElement:type:defaultValue:)](parser%28__foundattributedeclarationwithname_forelement_type_defaultvalue_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an attribute that is associated with a specific element.
- [parser(\_:foundElementDeclarationWithName:model:)](parser%28__foundelementdeclarationwithname_model_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an element with a given model.
- [parser(\_:foundExternalEntityDeclarationWithName:publicID:systemID:)](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser(\_:foundInternalEntityDeclarationWithName:value:)](parser%28__foundinternalentitydeclarationwithname_value_%29.md): Sent by a parser object to the delegate when it encounters an internal entity declaration.
- [parser(\_:foundNotationDeclarationWithName:publicID:systemID:)](parser%28__foundnotationdeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters a notation declaration.

# parser:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to its delegate when it encounters an unparsed entity declaration.

## Declaration

```objectivec
- (void) parser:(NSXMLParser *) parser foundUnparsedEntityDeclarationWithName:(NSString *) name publicID:(NSString *) publicID systemID:(NSString *) systemID notationName:(NSString *) notationName;
```

## Parameters

- `parser`: An `NSXMLParser` object parsing XML.
- `name`: A string that is the name of the unparsed entity in the declaration.
- `publicID`: A string specifying the public ID associated with the entity `name`.
- `systemID`: A string specifying the system ID associated with the entity `name`.
- `notationName`: A string specifying a notation of the declaration of entity `name`.

## See Also

### Related Documentation

- [parser:resolveExternalEntityName:systemID:](parser%28__resolveexternalentityname_systemid_%29.md): Sent by a parser object to its delegate when it encounters a given external entity with a specific system ID.

### Handling the DTD

- [parser:foundAttributeDeclarationWithName:forElement:type:defaultValue:](parser%28__foundattributedeclarationwithname_forelement_type_defaultvalue_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an attribute that is associated with a specific element.
- [parser:foundElementDeclarationWithName:model:](parser%28__foundelementdeclarationwithname_model_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an element with a given model.
- [parser:foundExternalEntityDeclarationWithName:publicID:systemID:](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser:foundInternalEntityDeclarationWithName:value:](parser%28__foundinternalentitydeclarationwithname_value_%29.md): Sent by a parser object to the delegate when it encounters an internal entity declaration.
- [parser:foundNotationDeclarationWithName:publicID:systemID:](parser%28__foundnotationdeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters a notation declaration.
