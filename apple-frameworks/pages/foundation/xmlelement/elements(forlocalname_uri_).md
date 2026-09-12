> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/elements(forlocalname:uri:)](https://developer.apple.com/documentation/foundation/xmlelement/elements(forlocalname:uri:))

# elements(forLocalName:uri:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the child element nodes (as `NSXMLElement` objects) of the receiver that are matched with the specified local name and URI.

## Declaration

```swift
func elements(forLocalName localName: String, uri URI: String?) -> [XMLElement]
```

## Parameters

- `localName`: A string specifying a local name of an element.
- `URI`: A string specifying a URI associated with an element.

<a id="return-value"></a>

## Return Value

An array of `NSXMLElement` objects or an empty array if no matching children could be found.

## See Also

### Obtaining Child Elements

- [elements(forName:)](elements%28forname_%29.md): Returns the child element nodes (as `NSXMLElement` objects) of the receiver that have a specified name.

# elementsForLocalName:URI: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the child element nodes (as `NSXMLElement` objects) of the receiver that are matched with the specified local name and URI.

## Declaration

```objectivec
- (NSArray<NSXMLElement *> *) elementsForLocalName:(NSString *) localName URI:(NSString *) URI;
```

## Parameters

- `localName`: A string specifying a local name of an element.
- `URI`: A string specifying a URI associated with an element.

<a id="return-value"></a>

## Return Value

An array of `NSXMLElement` objects or an empty array if no matching children could be found.

## See Also

### Obtaining Child Elements

- [elementsForName:](elements%28forname_%29.md): Returns the child element nodes (as `NSXMLElement` objects) of the receiver that have a specified name.
