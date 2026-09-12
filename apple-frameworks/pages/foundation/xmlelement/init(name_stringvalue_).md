> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/init(name:stringvalue:)](https://developer.apple.com/documentation/foundation/xmlelement/init(name:stringvalue:))

# init(name:stringValue:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.

## Declaration

```swift
convenience init(name: String, stringValue string: String?)
```

## Parameters

- `name`: A string specifying the name of the element.
- `string`: The string value of the receiver’s text node.

<a id="return-value"></a>

## Return Value

The initialized `NSXMLElement` object or `nil` if initialization did not succeed.

<a id="Discussion"></a>

## Discussion

The string representation of this object is ```<``name``>``string``</``name``>```.

## See Also

### Initializing NSXMLElement Objects

- [init(name:)](init%28name_%29.md): Returns an `NSXMLElement` object initialized with the specified name.
- [init(name:uri:)](init%28name_uri_%29-1r286.md): Returns an `NSXMLElement` object initialized with the specified name and URI.
- [init(xmlString:)](init%28xmlstring_%29-7vkg7.md): Returns an `NSXMLElement` object created from a specified string containing XML markup.
- [init(kind:options:)](init%28kind_options_%29.md)

# initWithName:stringValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name stringValue:(NSString *) string;
```

## Parameters

- `name`: A string specifying the name of the element.
- `string`: The string value of the receiver’s text node.

<a id="return-value"></a>

## Return Value

The initialized `NSXMLElement` object or `nil` if initialization did not succeed.

<a id="Discussion"></a>

## Discussion

The string representation of this object is ```<``name``>``string``</``name``>```.

## See Also

### Initializing NSXMLElement Objects

- [initWithName:](init%28name_%29.md): Returns an `NSXMLElement` object initialized with the specified name.
- [initWithName:URI:](init%28name_uri_%29-1r286.md): Returns an `NSXMLElement` object initialized with the specified name and URI.
- [initWithXMLString:error:](init%28xmlstring_%29-7vkg7.md): Returns an `NSXMLElement` object created from a specified string containing XML markup.
- [initWithKind:options:](init%28kind_options_%29.md)
