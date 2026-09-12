> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/shouldresolveexternalentities](https://developer.apple.com/documentation/foundation/xmlparser/shouldresolveexternalentities)

# shouldResolveExternalEntities (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the parser reports declarations of external entities.

## Declaration

```swift
var shouldResolveExternalEntities: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the parser reports declarations of external entities, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default value is [false](https://developer.apple.com/documentation/swift/false). If you set this property to [true](https://developer.apple.com/documentation/swift/true), you may cause other I/O operations, either network-based or disk-based, to load the external DTD.

The parser reports declarations of external entities with the delegate method [parser(\_:foundExternalEntityDeclarationWithName:publicID:systemID:)](../xmlparserdelegate/parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md).

## See Also

### Managing Parser Behavior

- [shouldProcessNamespaces](shouldprocessnamespaces.md): A Boolean value that determines whether the parser reports the namespaces and qualified names of elements.
- [shouldReportNamespacePrefixes](shouldreportnamespaceprefixes.md): A Boolean value that determines whether the parser reports the prefixes indicating the scope of namespace declarations.

# shouldResolveExternalEntities (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the parser reports declarations of external entities.

## Declaration

```objectivec
@property BOOL shouldResolveExternalEntities;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the parser reports declarations of external entities, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default value is [false](https://developer.apple.com/documentation/swift/false). If you set this property to [true](https://developer.apple.com/documentation/swift/true), you may cause other I/O operations, either network-based or disk-based, to load the external DTD.

The parser reports declarations of external entities with the delegate method [parser:foundExternalEntityDeclarationWithName:publicID:systemID:](../xmlparserdelegate/parser%28__foundexternalentitydeclarationwithname_publicid_systemid_%29.md).

## See Also

### Managing Parser Behavior

- [shouldProcessNamespaces](shouldprocessnamespaces.md): A Boolean value that determines whether the parser reports the namespaces and qualified names of elements.
- [shouldReportNamespacePrefixes](shouldreportnamespaceprefixes.md): A Boolean value that determines whether the parser reports the prefixes indicating the scope of namespace declarations.
