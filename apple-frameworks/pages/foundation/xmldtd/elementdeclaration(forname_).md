> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtd/elementdeclaration(forname:)](https://developer.apple.com/documentation/foundation/xmldtd/elementdeclaration(forname:))

# elementDeclaration(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the DTD node representing an element declaration for a specified element.

## Declaration

```swift
func elementDeclaration(forName name: String) -> XMLDTDNode?
```

## Parameters

- `name`: A string that is the name of an element.

<a id="return-value"></a>

## Return Value

An autoreleased [XMLDTDNode](../xmldtdnode.md) object, or `nil` if there is no match.

## See Also

### Getting DTD Nodes by Name

- [predefinedEntityDeclaration(forName:)](predefinedentitydeclaration%28forname_%29.md): Returns a DTD node representing the predefined entity declaration with the specified name.
- [attributeDeclaration(forName:elementName:)](attributedeclaration%28forname_elementname_%29.md): Returns the DTD node representing an attribute-list declaration for a given attribute and its element.
- [entityDeclaration(forName:)](entitydeclaration%28forname_%29.md): Returns the DTD node representing the entity declaration for a specified entity.
- [notationDeclaration(forName:)](notationdeclaration%28forname_%29.md): Returns the DTD node representing the notation declaration identified by the specified notation name.

# elementDeclarationForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the DTD node representing an element declaration for a specified element.

## Declaration

```objectivec
- (NSXMLDTDNode *) elementDeclarationForName:(NSString *) name;
```

## Parameters

- `name`: A string that is the name of an element.

<a id="return-value"></a>

## Return Value

An autoreleased [NSXMLDTDNode](../xmldtdnode.md) object, or `nil` if there is no match.

## See Also

### Getting DTD Nodes by Name

- [predefinedEntityDeclarationForName:](predefinedentitydeclaration%28forname_%29.md): Returns a DTD node representing the predefined entity declaration with the specified name.
- [attributeDeclarationForName:elementName:](attributedeclaration%28forname_elementname_%29.md): Returns the DTD node representing an attribute-list declaration for a given attribute and its element.
- [entityDeclarationForName:](entitydeclaration%28forname_%29.md): Returns the DTD node representing the entity declaration for a specified entity.
- [notationDeclarationForName:](notationdeclaration%28forname_%29.md): Returns the DTD node representing the notation declaration identified by the specified notation name.
