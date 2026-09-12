> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/init(kind:options:)](https://developer.apple.com/documentation/foundation/xmlelement/init(kind:options:))

# init(kind:options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
convenience init(kind: XMLNode.Kind, options: XMLNode.Options = [])
```

## See Also

### Initializing NSXMLElement Objects

- [init(name:)](init%28name_%29.md): Returns an `NSXMLElement` object initialized with the specified name.
- [init(name:stringValue:)](init%28name_stringvalue_%29.md): Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.
- [init(name:uri:)](init%28name_uri_%29-1r286.md): Returns an `NSXMLElement` object initialized with the specified name and URI.
- [init(xmlString:)](init%28xmlstring_%29-7vkg7.md): Returns an `NSXMLElement` object created from a specified string containing XML markup.

# initWithKind:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
- (instancetype) initWithKind:(NSXMLNodeKind) kind options:(NSXMLNodeOptions) options;
```

## See Also

### Initializing NSXMLElement Objects

- [initWithName:](init%28name_%29.md): Returns an `NSXMLElement` object initialized with the specified name.
- [initWithName:stringValue:](init%28name_stringvalue_%29.md): Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.
- [initWithName:URI:](init%28name_uri_%29-1r286.md): Returns an `NSXMLElement` object initialized with the specified name and URI.
- [initWithXMLString:error:](init%28xmlstring_%29-7vkg7.md): Returns an `NSXMLElement` object created from a specified string containing XML markup.
