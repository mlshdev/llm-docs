> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/removeattribute(forname:)](https://developer.apple.com/documentation/foundation/xmlelement/removeattribute(forname:))

# removeAttribute(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes an attribute node identified by name.

## Declaration

```swift
func removeAttribute(forName name: String)
```

## Parameters

- `name`: A string specifying the name of an attribute.

## See Also

### Handling Attributes

- [addAttribute(\_:)](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attribute(forName:)](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attribute(forLocalName:uri:)](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [setAttributesWith(\_:)](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAs(\_:)](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.

# removeAttributeForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes an attribute node identified by name.

## Declaration

```objectivec
- (void) removeAttributeForName:(NSString *) name;
```

## Parameters

- `name`: A string specifying the name of an attribute.

## See Also

### Handling Attributes

- [addAttribute:](addattribute%28__%29.md): Adds an attribute node to the receiver.
- [attributeForName:](attribute%28forname_%29.md): Returns the attribute node of the receiver with the specified name.
- [attributeForLocalName:URI:](attribute%28forlocalname_uri_%29.md): Returns the attribute node of the receiver that is identified by a local name and URI.
- [attributes](attributes.md): Sets all attributes of the receiver at once, replacing any existing attribute nodes.
- [setAttributesWithDictionary:](setattributeswith%28__%29.md): Sets the attributes of the receiver based on the key-value pairs specified in the passed dictionary.
- [setAttributesAsDictionary:](setattributesas%28__%29.md): Deprecated. Sets the attributes of the receiver based on the key-value pairs specified in the passed-in dictionary.
