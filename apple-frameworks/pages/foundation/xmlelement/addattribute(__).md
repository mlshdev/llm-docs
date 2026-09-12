> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/addattribute(_:)](https://developer.apple.com/documentation/foundation/xmlelement/addattribute(_:))

# addAttribute(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds an attribute node to the receiver.

## Declaration

```swift
func addAttribute(_ attribute: XMLNode)
```

## Parameters

- `attribute`: An XML node object representing an attribute. If the receiver already has an attribute with the same name, `anAttribute` replaces the old attribute.

<a id="Discussion"></a>

## Discussion

The order of multiple attributes is preserved if the `NSXMLPreserveAttributeOrder` option is specified when the element is created.

## See Also

### Handling Attributes

- [attribute(forName:)](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attribute(forLocalName:uri:)](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttribute(forName:)](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWith(\_:)](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAs(\_:)](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.

# addAttribute: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds an attribute node to the receiver.

## Declaration

```objectivec
- (void) addAttribute:(NSXMLNode *) attribute;
```

## Parameters

- `attribute`: An XML node object representing an attribute. If the receiver already has an attribute with the same name, `anAttribute` replaces the old attribute.

<a id="Discussion"></a>

## Discussion

The order of multiple attributes is preserved if the `NSXMLPreserveAttributeOrder` option is specified when the element is created.

## See Also

### Handling Attributes

- [attributeForName:](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attributeForLocalName:URI:](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttributeForName:](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWithDictionary:](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAsDictionary:](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.
