> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/attribute(forname:)](https://developer.apple.com/documentation/foundation/xmlelement/attribute(forname:))

# attribute(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the attribute node of the receiver with the specified name.

## Declaration

```swift
func attribute(forName name: String) -> XMLNode?
```

## Parameters

- `name`: A string specifying the name of an attribute.

<a id="return-value"></a>

## Return Value

An XML node object representing a matching attribute or `nil` if no such node was found.

<a id="Discussion"></a>

## Discussion

If `name` is a qualified name, then this method invokes [attribute(forLocalName:uri:)](attribute%28forlocalname_uri_%29.md) with the URI parameter set to the URI associated with the prefix. Otherwise comparison is based on string equality of the qualified or non-qualified name.

## See Also

### Handling Attributes

- [addAttribute(\_:)](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attribute(forLocalName:uri:)](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttribute(forName:)](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWith(\_:)](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAs(\_:)](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.

# attributeForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the attribute node of the receiver with the specified name.

## Declaration

```objectivec
- (NSXMLNode *) attributeForName:(NSString *) name;
```

## Parameters

- `name`: A string specifying the name of an attribute.

<a id="return-value"></a>

## Return Value

An XML node object representing a matching attribute or `nil` if no such node was found.

<a id="Discussion"></a>

## Discussion

If `name` is a qualified name, then this method invokes [attributeForLocalName:URI:](attribute%28forlocalname_uri_%29.md) with the URI parameter set to the URI associated with the prefix. Otherwise comparison is based on string equality of the qualified or non-qualified name.

## See Also

### Handling Attributes

- [addAttribute:](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attributeForLocalName:URI:](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttributeForName:](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWithDictionary:](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAsDictionary:](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.
