> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/elements(forname:)](https://developer.apple.com/documentation/foundation/xmlelement/elements(forname:))

# elements(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the child element nodes (as `NSXMLElement` objects) of the receiver that have a specified name.

## Declaration

```swift
func elements(forName name: String) -> [XMLElement]
```

## Parameters

- `name`: A string specifying the name of the child element nodes to find and return. If `name` is a qualified name, then this method invokes [elements(forLocalName:uri:)](elements%28forlocalname_uri_%29.md) with the URI parameter set to the URI associated with the prefix. Otherwise comparison is based on string equality of the qualified or non-qualified name.

<a id="return-value"></a>

## Return Value

An array of of `NSXMLElement` objects or an empty array if no matching children can be found.

## See Also

### Obtaining Child Elements

- [elements(forLocalName:uri:)](elements%28forlocalname_uri_%29.md): Returns the child element nodes (as `NSXMLElement` objects) of the receiver that are matched with the specified local name and URI.

# elementsForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the child element nodes (as `NSXMLElement` objects) of the receiver that have a specified name.

## Declaration

```objectivec
- (NSArray<NSXMLElement *> *) elementsForName:(NSString *) name;
```

## Parameters

- `name`: A string specifying the name of the child element nodes to find and return. If `name` is a qualified name, then this method invokes [elementsForLocalName:URI:](elements%28forlocalname_uri_%29.md) with the URI parameter set to the URI associated with the prefix. Otherwise comparison is based on string equality of the qualified or non-qualified name.

<a id="return-value"></a>

## Return Value

An array of of `NSXMLElement` objects or an empty array if no matching children can be found.

## See Also

### Obtaining Child Elements

- [elementsForLocalName:URI:](elements%28forlocalname_uri_%29.md): Returns the child element nodes (as `NSXMLElement` objects) of the receiver that are matched with the specified local name and URI.
