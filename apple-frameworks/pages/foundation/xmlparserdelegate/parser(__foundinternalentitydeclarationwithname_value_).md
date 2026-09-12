> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparserdelegate/parser(_:foundinternalentitydeclarationwithname:value:)](https://developer.apple.com/documentation/foundation/xmlparserdelegate/parser(_:foundinternalentitydeclarationwithname:value:))

# parser(\_:foundInternalEntityDeclarationWithName:value:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to the delegate when it encounters an internal entity declaration.

## Declaration

```swift
optional func parser(_ parser: XMLParser, foundInternalEntityDeclarationWithName name: String, value: String?)
```

## Parameters

- `parser`: An `NSXMLParser` object parsing XML.
- `name`: A string that is the declared name of an internal entity.
- `value`: A string that is the value of entity `name`.

## See Also

### Handling the DTD

- [parser(\_:foundAttributeDeclarationWithName:forElement:type:defaultValue:)](parser%28__foundattributedeclarationwithname_forelement_type_defaultvalue_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an attribute that is associated with a specific element.
- [parser(\_:foundElementDeclarationWithName:model:)](parser%28__foundelementdeclarationwithname_model_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an element with a given model.
- [parser(\_:foundExternalEntityDeclarationWithName:publicID:systemID:)](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser(\_:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName:)](parser%28__foundunparsedentitydeclarationwithname_publicid_systemid_notationname_%29.md): Sent by a parser object to its delegate when it encounters an unparsed entity declaration.
- [parser(\_:foundNotationDeclarationWithName:publicID:systemID:)](parser%28__foundnotationdeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters a notation declaration.

# parser:foundInternalEntityDeclarationWithName:value: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent by a parser object to the delegate when it encounters an internal entity declaration.

## Declaration

```objectivec
- (void) parser:(NSXMLParser *) parser foundInternalEntityDeclarationWithName:(NSString *) name value:(NSString *) value;
```

## Parameters

- `parser`: An `NSXMLParser` object parsing XML.
- `name`: A string that is the declared name of an internal entity.
- `value`: A string that is the value of entity `name`.

## See Also

### Handling the DTD

- [parser:foundAttributeDeclarationWithName:forElement:type:defaultValue:](parser%28__foundattributedeclarationwithname_forelement_type_defaultvalue_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an attribute that is associated with a specific element.
- [parser:foundElementDeclarationWithName:model:](parser%28__foundelementdeclarationwithname_model_%29.md): Sent by a parser object to its delegate when it encounters a declaration of an element with a given model.
- [parser:foundExternalEntityDeclarationWithName:publicID:systemID:](parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters an external entity declaration.
- [parser:foundUnparsedEntityDeclarationWithName:publicID:systemID:notationName:](parser%28__foundunparsedentitydeclarationwithname_publicid_systemid_notationname_%29.md): Sent by a parser object to its delegate when it encounters an unparsed entity declaration.
- [parser:foundNotationDeclarationWithName:publicID:systemID:](parser%28__foundnotationdeclarationwithname_publicid_systemid_%29.md): Sent by a parser object to its delegate when it encounters a notation declaration.
