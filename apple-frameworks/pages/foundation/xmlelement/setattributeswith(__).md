> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/setattributeswith(_:)](https://developer.apple.com/documentation/foundation/xmlelement/setattributeswith(_:))

# setAttributesWith(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.

## Declaration

```swift
func setAttributesWith(_ attributes: [String : String])
```

## Parameters

- `attributes`: A dictionary of key-value pairs where the attribute name is the key and the object value of the attribute is the dictionary value.

<a id="Discussion"></a>

## Discussion

The method uses these names and object values to create [XMLNode](../xmlnode.md) objects of kind [XMLNode.Kind.attribute](../xmlnode/kind-swift.enum/attribute.md). Existing attributes are removed.

## See Also

### Handling Attributes

- [addAttribute(\_:)](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attribute(forName:)](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attribute(forLocalName:uri:)](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttribute(forName:)](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesAs(\_:)](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.

# setAttributesWithDictionary: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.

## Declaration

```objectivec
- (void) setAttributesWithDictionary:(NSDictionary<NSString *,NSString *> *) attributes;
```

## Parameters

- `attributes`: A dictionary of key-value pairs where the attribute name is the key and the object value of the attribute is the dictionary value.

<a id="Discussion"></a>

## Discussion

The method uses these names and object values to create [NSXMLNode](../xmlnode.md) objects of kind [NSXMLAttributeKind](../xmlnode/kind-swift.enum/attribute.md). Existing attributes are removed.

## See Also

### Handling Attributes

- [addAttribute:](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attributeForName:](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attributeForLocalName:URI:](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttributeForName:](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesAsDictionary:](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.
