> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/shouldreportnamespaceprefixes](https://developer.apple.com/documentation/foundation/xmlparser/shouldreportnamespaceprefixes)

# shouldReportNamespacePrefixes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the parser reports the prefixes indicating the scope of namespace declarations.

## Declaration

```swift
var shouldReportNamespacePrefixes: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the parser reports the scope of namespace declarations, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default value is [false](https://developer.apple.com/documentation/swift/false).

The parser reports prefixes with the delegate methods [parser(\_:didStartMappingPrefix:toURI:)](../xmlparserdelegate/parser%28__didstartmappingprefix_touri_%29.md) and [parser(\_:didEndMappingPrefix:)](../xmlparserdelegate/parser%28__didendmappingprefix_%29.md).

## See Also

### Managing Parser Behavior

- [shouldProcessNamespaces](shouldprocessnamespaces.md): A Boolean value that determines whether the parser reports the namespaces and qualified names of elements.
- [shouldResolveExternalEntities](shouldresolveexternalentities.md): A Boolean value that determines whether the parser reports declarations of external entities.

# shouldReportNamespacePrefixes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the parser reports the prefixes indicating the scope of namespace declarations.

## Declaration

```objectivec
@property BOOL shouldReportNamespacePrefixes;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the parser reports the scope of namespace declarations, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default value is [false](https://developer.apple.com/documentation/swift/false).

The parser reports prefixes with the delegate methods [parser:didStartMappingPrefix:toURI:](../xmlparserdelegate/parser%28__didstartmappingprefix_touri_%29.md) and [parser:didEndMappingPrefix:](../xmlparserdelegate/parser%28__didendmappingprefix_%29.md).

## See Also

### Managing Parser Behavior

- [shouldProcessNamespaces](shouldprocessnamespaces.md): A Boolean value that determines whether the parser reports the namespaces and qualified names of elements.
- [shouldResolveExternalEntities](shouldresolveexternalentities.md): A Boolean value that determines whether the parser reports declarations of external entities.
