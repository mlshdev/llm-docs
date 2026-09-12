> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visualintelligence/semanticcontentdescriptor/valuetype](https://developer.apple.com/documentation/visualintelligence/semanticcontentdescriptor/valuetype)

# SemanticContentDescriptor.ValueType

**Framework:** Visual Intelligence  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS

A type that represents the value of a semantic content descriptor.

## Declaration

```swift
typealias ValueType = SemanticContentDescriptor
```

<a id="discussion"></a>

## Discussion

This type defines the value type that the system uses when working with a [SemanticContentDescriptor](../semanticcontentdescriptor.md) instance. It’s part of the internal type system in App Intents for handling visual intelligence data.

## See Also

### Protocol conformance

- [defaultResolverSpecification](defaultresolverspecification.md): A default implementation of an internal type that the App Intents framework uses to convert data values with resolvers.
- [SemanticContentDescriptor.Specification](specification.md): A type that specifies how the system resolves a semantic content descriptor.
- [SemanticContentDescriptor.UnwrappedType](unwrappedtype.md): A type that represents the unwrapped value of a semantic content descriptor.
