> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/attribute(forlocalname:uri:)](https://developer.apple.com/documentation/foundation/xmlelement/attribute(forlocalname:uri:))

# attribute(forLocalName:uri:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the attribute node of the receiver that is identified by a local name and URI.

## Declaration

```swift
func attribute(forLocalName localName: String, uri URI: String?) -> XMLNode?
```

## Parameters

- `localName`: A string specifying the local name of an attribute.
- `URI`: A sting identifying the URI associated with an attribute.

<a id="return-value"></a>

## Return Value

An XML node object representing a matching attribute or `nil` if no such node was found.

## See Also

### Handling Attributes

- [addAttribute(\_:)](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attribute(forName:)](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttribute(forName:)](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWith(\_:)](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAs(\_:)](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.

# attributeForLocalName:URI: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the attribute node of the receiver that is identified by a local name and URI.

## Declaration

```objectivec
- (NSXMLNode *) attributeForLocalName:(NSString *) localName URI:(NSString *) URI;
```

## Parameters

- `localName`: A string specifying the local name of an attribute.
- `URI`: A sting identifying the URI associated with an attribute.

<a id="return-value"></a>

## Return Value

An XML node object representing a matching attribute or `nil` if no such node was found.

## See Also

### Handling Attributes

- [addAttribute:](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attributeForName:](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [removeAttributeForName:](removeattribute%28forname_%29.md): Removes an attribute node identified by name.
- [setAttributesWithDictionary:](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAsDictionary:](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.
