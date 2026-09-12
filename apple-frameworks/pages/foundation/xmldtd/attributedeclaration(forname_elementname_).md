> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtd/attributedeclaration(forname:elementname:)](https://developer.apple.com/documentation/foundation/xmldtd/attributedeclaration(forname:elementname:))

# attributeDeclaration(forName:elementName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the DTD node representing an attribute-list declaration for a given attribute and its element.

## Declaration

```swift
func attributeDeclaration(forName name: String, elementName: String) -> XMLDTDNode?
```

## Parameters

- `name`: A string object identifying the name of an attribute.
- `elementName`: A string object identifying the name of an element.

<a id="return-value"></a>

## Return Value

An autoreleased [XMLDTDNode](../xmldtdnode.md) object, or `nil` if there is no matching attribute-list declaration.

<a id="Discussion"></a>

## Discussion

For example, in the attribute-list declaration:

```objc
<!ATTLIST person idnum CDATA "0000">
```

“idnum” would correspond to `attrName` and “person” would correspond to `elementName`.

## See Also

### Getting DTD Nodes by Name

- [predefinedEntityDeclaration(forName:)](predefinedentitydeclaration%28forname_%29.md): Returns a DTD node representing the predefined entity declaration with the specified name.
- [elementDeclaration(forName:)](elementdeclaration%28forname_%29.md): Returns the DTD node representing an element declaration for a specified element.
- [entityDeclaration(forName:)](entitydeclaration%28forname_%29.md): Returns the DTD node representing the entity declaration for a specified entity.
- [notationDeclaration(forName:)](notationdeclaration%28forname_%29.md): Returns the DTD node representing the notation declaration identified by the specified notation name.

# attributeDeclarationForName:elementName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the DTD node representing an attribute-list declaration for a given attribute and its element.

## Declaration

```objectivec
- (NSXMLDTDNode *) attributeDeclarationForName:(NSString *) name elementName:(NSString *) elementName;
```

## Parameters

- `name`: A string object identifying the name of an attribute.
- `elementName`: A string object identifying the name of an element.

<a id="return-value"></a>

## Return Value

An autoreleased [NSXMLDTDNode](../xmldtdnode.md) object, or `nil` if there is no matching attribute-list declaration.

<a id="Discussion"></a>

## Discussion

For example, in the attribute-list declaration:

```objc
<!ATTLIST person idnum CDATA "0000">
```

“idnum” would correspond to `attrName` and “person” would correspond to `elementName`.

## See Also

### Getting DTD Nodes by Name

- [predefinedEntityDeclarationForName:](predefinedentitydeclaration%28forname_%29.md): Returns a DTD node representing the predefined entity declaration with the specified name.
- [elementDeclarationForName:](elementdeclaration%28forname_%29.md): Returns the DTD node representing an element declaration for a specified element.
- [entityDeclarationForName:](entitydeclaration%28forname_%29.md): Returns the DTD node representing the entity declaration for a specified entity.
- [notationDeclarationForName:](notationdeclaration%28forname_%29.md): Returns the DTD node representing the notation declaration identified by the specified notation name.
