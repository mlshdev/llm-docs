> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtd/entitydeclaration(forname:)](https://developer.apple.com/documentation/foundation/xmldtd/entitydeclaration(forname:))

# entityDeclaration(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the DTD node representing the entity declaration for a specified entity.

## Declaration

```swift
func entityDeclaration(forName name: String) -> XMLDTDNode?
```

## Parameters

- `name`: A string that is the name of an entity.

<a id="return-value"></a>

## Return Value

An autoreleased [XMLDTDNode](../xmldtdnode.md) object, or `nil` if there is no match.

## See Also

### Getting DTD Nodes by Name

- [predefinedEntityDeclaration(forName:)](predefinedentitydeclaration%28forname_%29.md): Returns a DTD node representing the predefined entity declaration with the specified name.
- [elementDeclaration(forName:)](elementdeclaration%28forname_%29.md): Returns the DTD node representing an element declaration for a specified element.
- [attributeDeclaration(forName:elementName:)](attributedeclaration%28forname_elementname_%29.md): Returns the DTD node representing an attribute-list declaration for a given attribute and its element.
- [notationDeclaration(forName:)](notationdeclaration%28forname_%29.md): Returns the DTD node representing the notation declaration identified by the specified notation name.

# entityDeclarationForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the DTD node representing the entity declaration for a specified entity.

## Declaration

```objectivec
- (NSXMLDTDNode *) entityDeclarationForName:(NSString *) name;
```

## Parameters

- `name`: A string that is the name of an entity.

<a id="return-value"></a>

## Return Value

An autoreleased [NSXMLDTDNode](../xmldtdnode.md) object, or `nil` if there is no match.

## See Also

### Getting DTD Nodes by Name

- [predefinedEntityDeclarationForName:](predefinedentitydeclaration%28forname_%29.md): Returns a DTD node representing the predefined entity declaration with the specified name.
- [elementDeclarationForName:](elementdeclaration%28forname_%29.md): Returns the DTD node representing an element declaration for a specified element.
- [attributeDeclarationForName:elementName:](attributedeclaration%28forname_elementname_%29.md): Returns the DTD node representing an attribute-list declaration for a given attribute and its element.
- [notationDeclarationForName:](notationdeclaration%28forname_%29.md): Returns the DTD node representing the notation declaration identified by the specified notation name.
