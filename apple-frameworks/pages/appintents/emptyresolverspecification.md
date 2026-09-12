> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/emptyresolverspecification](https://developer.apple.com/documentation/appintents/emptyresolverspecification)

# EmptyResolverSpecification

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
struct EmptyResolverSpecification<Value> where Value : _IntentValue
```

## Topics

### Creating the specification type

- [init()](emptyresolverspecification/init%28%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ResolverSpecification](resolverspecification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Managing the resolution process

- [ResolverSpecification](resolverspecification.md): An internal type that a resolver uses to convert data values.
- [StringSearchCriteriaFromStringResolverSpecificification](stringsearchcriteriafromstringresolverspecificification.md): An internal type that a resolver uses to convert data values.
- [ResolverSpecificationBuilder](resolverspecificationbuilder.md): A result builder that declaratively specifies a set of resolvers.
