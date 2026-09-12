> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtdnode/init(xmlstring:)-1dyhd](https://developer.apple.com/documentation/foundation/xmldtdnode/init(xmlstring:)-1dyhd)

# init(xmlString:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLDTDNode` object initialized with the DTD declaration in a given string.

## Declaration

```swift
init?(xmlString string: String)
```

## Parameters

- `string`: The DTD declaration.

<a id="return-value"></a>

## Return Value

An `NSXMLDTDNode` object initialized with the DTD declaration in `string`. Returns `nil` if initialization did not succeed, as might occur if the passed-in declaration is malformed.

<a id="Discussion"></a>

## Discussion

The node kind (NSXMLNode) assigned to the returned object—element, attribute, entity, or notation declaration— is based on the full XML string that is parsed. To assign a subkind, set the [dtdKind](dtdkind-swift.property.md) property.

You may also use the [dtdNode(withXMLString:)](../xmlnode/dtdnode%28withxmlstring_%29.md) or [init(kind:)](../xmlnode/init%28kind_%29.md) methods to create `NSXMLDTDNode` instances. However, you cannot use the latter method to create `NSXMLDTDNode` instances for attribute-list declarations.

## See Also

### Related Documentation

- [Tree-Based XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSXML_Concepts/NSXML.html#//apple_ref/doc/uid/TP40001269)

# initWithXMLString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLDTDNode` object initialized with the DTD declaration in a given string.

## Declaration

```objectivec
- (instancetype) initWithXMLString:(NSString *) string;
```

## Parameters

- `string`: The DTD declaration.

<a id="return-value"></a>

## Return Value

An `NSXMLDTDNode` object initialized with the DTD declaration in `string`. Returns `nil` if initialization did not succeed, as might occur if the passed-in declaration is malformed.

<a id="Discussion"></a>

## Discussion

The node kind (NSXMLNode) assigned to the returned object—element, attribute, entity, or notation declaration— is based on the full XML string that is parsed. To assign a subkind, set the [DTDKind](dtdkind-swift.property.md) property.

You may also use the [DTDNodeWithXMLString:](../xmlnode/dtdnode%28withxmlstring_%29.md) or [initWithKind:](../xmlnode/init%28kind_%29.md) methods to create `NSXMLDTDNode` instances. However, you cannot use the latter method to create `NSXMLDTDNode` instances for attribute-list declarations.

## See Also

### Related Documentation

- [Tree-Based XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSXML_Concepts/NSXML.html#//apple_ref/doc/uid/TP40001269)
