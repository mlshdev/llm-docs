> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visualintelligence/semanticcontentdescriptor/specification](https://developer.apple.com/documentation/visualintelligence/semanticcontentdescriptor/specification)

# SemanticContentDescriptor.Specification

**Framework:** Visual Intelligence  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS

A type that specifies how the system resolves a semantic content descriptor.

## Declaration

```swift
typealias Specification = some ResolverSpecification
```

<a id="discussion"></a>

## Discussion

This type is part of the internal mechanism that App Intents uses to process visual intelligence data and to determine how the system resolves a [SemanticContentDescriptor](../semanticcontentdescriptor.md) instance.

## See Also

### Protocol conformance

- [defaultResolverSpecification](defaultresolverspecification.md): A default implementation of an internal type that the App Intents framework uses to convert data values with resolvers.
- [SemanticContentDescriptor.ValueType](valuetype.md): A type that represents the value of a semantic content descriptor.
- [SemanticContentDescriptor.UnwrappedType](unwrappedtype.md): A type that represents the unwrapped value of a semantic content descriptor.
