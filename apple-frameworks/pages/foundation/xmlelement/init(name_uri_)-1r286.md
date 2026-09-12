> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/init(name:uri:)-1r286](https://developer.apple.com/documentation/foundation/xmlelement/init(name:uri:)-1r286)

# init(name:uri:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLElement` object initialized with the specified name and URI.

## Declaration

```swift
init(name: String, uri URI: String?)
```

## Parameters

- `name`: A string that specifies the qualified name of the element.
- `URI`: A string that specifies the namespace URI associated with the element.

<a id="return-value"></a>

## Return Value

The initialized `NSXMLElement` object or `nil` if initialization did not succeed.

<a id="Discussion"></a>

## Discussion

You can look up the namespace prefix for this element node based on its URI using [resolvePrefix(forNamespaceURI:)](resolveprefix%28fornamespaceuri_%29.md).  This method is the primary initializer for the `NSXMLElement` class.

## See Also

### Initializing NSXMLElement Objects

- [init(name:)](init%28name_%29.md): Returns an `NSXMLElement` object initialized with the specified name.
- [init(name:stringValue:)](init%28name_stringvalue_%29.md): Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.
- [init(xmlString:)](init%28xmlstring_%29-7vkg7.md): Returns an `NSXMLElement` object created from a specified string containing XML markup.
- [init(kind:options:)](init%28kind_options_%29.md)

# initWithName:URI: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLElement` object initialized with the specified name and URI.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name URI:(NSString *) URI;
```

## Parameters

- `name`: A string that specifies the qualified name of the element.
- `URI`: A string that specifies the namespace URI associated with the element.

<a id="return-value"></a>

## Return Value

The initialized `NSXMLElement` object or `nil` if initialization did not succeed.

<a id="Discussion"></a>

## Discussion

You can look up the namespace prefix for this element node based on its URI using [resolvePrefixForNamespaceURI:](resolveprefix%28fornamespaceuri_%29.md).  This method is the primary initializer for the `NSXMLElement` class.

## See Also

### Initializing NSXMLElement Objects

- [initWithName:](init%28name_%29.md): Returns an `NSXMLElement` object initialized with the specified name.
- [initWithName:stringValue:](init%28name_stringvalue_%29.md): Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.
- [initWithXMLString:error:](init%28xmlstring_%29-7vkg7.md): Returns an `NSXMLElement` object created from a specified string containing XML markup.
- [initWithKind:options:](init%28kind_options_%29.md)
