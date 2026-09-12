> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/shouldprocessnamespaces](https://developer.apple.com/documentation/foundation/xmlparser/shouldprocessnamespaces)

# shouldProcessNamespaces (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the parser reports the namespaces and qualified names of elements.

## Declaration

```swift
var shouldProcessNamespaces: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the parser reports namespace and qualified name, [false](https://developer.apple.com/documentation/swift/false) otherwise.

The parser reports element names with the delegate methods [parser(\_:didStartElement:namespaceURI:qualifiedName:attributes:)](../xmlparserdelegate/parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md) and [parser(\_:didEndElement:namespaceURI:qualifiedName:)](../xmlparserdelegate/parser%28__didendelement_namespaceuri_qualifiedname_%29.md).

## See Also

### Managing Parser Behavior

- [shouldReportNamespacePrefixes](shouldreportnamespaceprefixes.md): A Boolean value that determines whether the parser reports the prefixes indicating the scope of namespace declarations.
- [shouldResolveExternalEntities](shouldresolveexternalentities.md): A Boolean value that determines whether the parser reports declarations of external entities.

# shouldProcessNamespaces (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the parser reports the namespaces and qualified names of elements.

## Declaration

```objectivec
@property BOOL shouldProcessNamespaces;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the parser reports namespace and qualified name, [false](https://developer.apple.com/documentation/swift/false) otherwise.

The parser reports element names with the delegate methods [parser:didStartElement:namespaceURI:qualifiedName:attributes:](../xmlparserdelegate/parser%28__didstartelement_namespaceuri_qualifiedname_attributes_%29.md) and [parser:didEndElement:namespaceURI:qualifiedName:](../xmlparserdelegate/parser%28__didendelement_namespaceuri_qualifiedname_%29.md).

## See Also

### Managing Parser Behavior

- [shouldReportNamespacePrefixes](shouldreportnamespaceprefixes.md): A Boolean value that determines whether the parser reports the prefixes indicating the scope of namespace declarations.
- [shouldResolveExternalEntities](shouldresolveexternalentities.md): A Boolean value that determines whether the parser reports declarations of external entities.
