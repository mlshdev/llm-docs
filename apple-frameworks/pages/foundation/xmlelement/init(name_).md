> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/init(name:)](https://developer.apple.com/documentation/foundation/xmlelement/init(name:))

# init(name:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLElement` object initialized with the specified name.

## Declaration

```swift
convenience init(name: String)
```

## Parameters

- `name`: A string specifying the name of the element.

<a id="return-value"></a>

## Return Value

The initialized `NSXMLElement` object or `nil` if initialization did not succeed.

<a id="Discussion"></a>

## Discussion

The XML string representation of this object is ```<``name``></``name``>```. This method invokes [init(name:uri:)](init%28name_uri_%29-1r286.md) with the URI parameter set to `nil`.

## See Also

### Related Documentation

- [Tree-Based XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSXML_Concepts/NSXML.html#//apple_ref/doc/uid/TP40001269)

### Initializing NSXMLElement Objects

- [init(name:stringValue:)](init%28name_stringvalue_%29.md): Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.
- [init(name:uri:)](init%28name_uri_%29-1r286.md): Returns an `NSXMLElement` object initialized with the specified name and URI.
- [init(xmlString:)](init%28xmlstring_%29-7vkg7.md): Returns an `NSXMLElement` object created from a specified string containing XML markup.
- [init(kind:options:)](init%28kind_options_%29.md)

# initWithName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLElement` object initialized with the specified name.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name;
```

## Parameters

- `name`: A string specifying the name of the element.

<a id="return-value"></a>

## Return Value

The initialized `NSXMLElement` object or `nil` if initialization did not succeed.

<a id="Discussion"></a>

## Discussion

The XML string representation of this object is ```<``name``></``name``>```. This method invokes [initWithName:URI:](init%28name_uri_%29-1r286.md) with the URI parameter set to `nil`.

## See Also

### Related Documentation

- [Tree-Based XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSXML_Concepts/NSXML.html#//apple_ref/doc/uid/TP40001269)

### Initializing NSXMLElement Objects

- [initWithName:stringValue:](init%28name_stringvalue_%29.md): Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.
- [initWithName:URI:](init%28name_uri_%29-1r286.md): Returns an `NSXMLElement` object initialized with the specified name and URI.
- [initWithXMLString:error:](init%28xmlstring_%29-7vkg7.md): Returns an `NSXMLElement` object created from a specified string containing XML markup.
- [initWithKind:options:](init%28kind_options_%29.md)
