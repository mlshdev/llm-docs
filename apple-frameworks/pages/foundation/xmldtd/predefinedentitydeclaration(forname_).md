> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtd/predefinedentitydeclaration(forname:)](https://developer.apple.com/documentation/foundation/xmldtd/predefinedentitydeclaration(forname:))

# predefinedEntityDeclaration(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a DTD node representing the predefined entity declaration with the specified name.

## Declaration

```swift
class func predefinedEntityDeclaration(forName name: String) -> XMLDTDNode?
```

## Parameters

- `name`: A string identifying a predefined entity declaration.

<a id="return-value"></a>

## Return Value

An autoreleased [XMLDTDNode](../xmldtdnode.md) object, or `nil` if there is no match for `name`.

<a id="Discussion"></a>

## Discussion

The five predefined entity references (or character references) are “\<” (less-than sign), “\>” (greater-than sign), “&” (ampersand), “"” (quotation mark), and “'” (apostrophe).

## See Also

### Getting DTD Nodes by Name

- [elementDeclaration(forName:)](elementdeclaration%28forname_%29.md): Returns the DTD node representing an element declaration for a specified element.
- [attributeDeclaration(forName:elementName:)](attributedeclaration%28forname_elementname_%29.md): Returns the DTD node representing an attribute-list declaration for a given attribute and its element.
- [entityDeclaration(forName:)](entitydeclaration%28forname_%29.md): Returns the DTD node representing the entity declaration for a specified entity.
- [notationDeclaration(forName:)](notationdeclaration%28forname_%29.md): Returns the DTD node representing the notation declaration identified by the specified notation name.

# predefinedEntityDeclarationForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a DTD node representing the predefined entity declaration with the specified name.

## Declaration

```objectivec
+ (NSXMLDTDNode *) predefinedEntityDeclarationForName:(NSString *) name;
```

## Parameters

- `name`: A string identifying a predefined entity declaration.

<a id="return-value"></a>

## Return Value

An autoreleased [NSXMLDTDNode](../xmldtdnode.md) object, or `nil` if there is no match for `name`.

<a id="Discussion"></a>

## Discussion

The five predefined entity references (or character references) are “\<” (less-than sign), “\>” (greater-than sign), “&” (ampersand), “"” (quotation mark), and “'” (apostrophe).

## See Also

### Getting DTD Nodes by Name

- [elementDeclarationForName:](elementdeclaration%28forname_%29.md): Returns the DTD node representing an element declaration for a specified element.
- [attributeDeclarationForName:elementName:](attributedeclaration%28forname_elementname_%29.md): Returns the DTD node representing an attribute-list declaration for a given attribute and its element.
- [entityDeclarationForName:](entitydeclaration%28forname_%29.md): Returns the DTD node representing the entity declaration for a specified entity.
- [notationDeclarationForName:](notationdeclaration%28forname_%29.md): Returns the DTD node representing the notation declaration identified by the specified notation name.
