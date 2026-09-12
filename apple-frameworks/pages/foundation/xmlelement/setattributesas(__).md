> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/setattributesas(_:)](https://developer.apple.com/documentation/foundation/xmlelement/setattributesas(_:))

# setAttributesAs(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0)

Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.

> This method is deprecated because it does not function properly. Instead use [setAttributesWith(\_:)](setattributeswith%28__%29.md).

## Declaration

```swift
func setAttributesAs(_ attributes: [AnyHashable : Any])
```

## Parameters

- `attributes`: A dictionary of key-value pairs where the attribute name is the key and the object value of the attribute is the dictionary value.

<a id="Discussion"></a>

## Discussion

The method uses these names and object values to create [XMLNode](../xmlnode.md) objects of kind [XMLNode.Kind.attribute](../xmlnode/kind-swift.enum/attribute.md). Existing attributes are not removed.

## See Also

### Handling Attributes

- [addAttribute(\_:)](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attribute(forName:)](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attribute(forLocalName:uri:)](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttribute(forName:)](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWith(\_:)](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.

# setAttributesAsDictionary: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0)

Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.

> This method is deprecated because it does not function properly. Instead use [setAttributesWithDictionary:](setattributeswith%28__%29.md).

## Declaration

```objectivec
- (void) setAttributesAsDictionary:(NSDictionary *) attributes;
```

## Parameters

- `attributes`: A dictionary of key-value pairs where the attribute name is the key and the object value of the attribute is the dictionary value.

<a id="Discussion"></a>

## Discussion

The method uses these names and object values to create [NSXMLNode](../xmlnode.md) objects of kind [NSXMLAttributeKind](../xmlnode/kind-swift.enum/attribute.md). Existing attributes are not removed.

## See Also

### Handling Attributes

- [addAttribute:](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attributeForName:](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attributeForLocalName:URI:](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttributeForName:](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWithDictionary:](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
