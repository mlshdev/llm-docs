> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/attributes](https://developer.apple.com/documentation/foundation/xmlelement/attributes)

# attributes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets all attributes of the receiver at once, replacing any existing attribute nodes.

## Declaration

```swift
var attributes: [XMLNode]? { get set }
```

## Parameters

- `attributes`: An array of [XMLNode](../xmlnode.md) objects of kind [XMLNode.Kind.attribute](../xmlnode/kind-swift.enum/attribute.md). If there are attribute nodes with the same name, the first attribute with that name is used. Send this message with `attributes` as `nil` to remove all attributes.

<a id="Discussion"></a>

## Discussion

To set attributes in an element node using an [NSDictionary](../nsdictionary.md) object as the input parameter, see [setAttributesWith(\_:)](setattributeswith%28__%29.md).

## See Also

### Handling Attributes

- [addAttribute(\_:)](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attribute(forName:)](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attribute(forLocalName:uri:)](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [removeAttribute(forName:)](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWith(\_:)](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAs(\_:)](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.

# attributes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets all attributes of the receiver at once, replacing any existing attribute nodes.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSXMLNode *> * attributes;
```

## Parameters

- `attributes`: An array of [NSXMLNode](../xmlnode.md) objects of kind [NSXMLAttributeKind](../xmlnode/kind-swift.enum/attribute.md). If there are attribute nodes with the same name, the first attribute with that name is used. Send this message with `attributes` as `nil` to remove all attributes.

<a id="Discussion"></a>

## Discussion

To set attributes in an element node using an [NSDictionary](../nsdictionary.md) object as the input parameter, see [setAttributesWithDictionary:](setattributeswith%28__%29.md).

## See Also

### Handling Attributes

- [addAttribute:](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attributeForName:](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attributeForLocalName:URI:](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [removeAttributeForName:](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWithDictionary:](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAsDictionary:](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.
