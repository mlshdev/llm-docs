> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/resolverspecification](https://developer.apple.com/documentation/appintents/resolverspecification)

# ResolverSpecification

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An internal type that a resolver uses to convert data values.

## Declaration

```swift
protocol ResolverSpecification : Hashable, Sendable, Sequence where Self.Element == any Resolver
```

<a id="overview"></a>

## Overview

Don’t use a [ResolverSpecification](resolverspecification.md) type directly in your code. The system uses this type internally to manage the resolution process.

## Topics

### Getting the value type

- [Output](resolverspecification/output.md)

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

### Conforming Types

- [EmptyResolverSpecification](emptyresolverspecification.md)
- [ResolverSpecificationBuilder.Specification](resolverspecificationbuilder/specification.md)

## See Also

### Managing the resolution process

- [EmptyResolverSpecification](emptyresolverspecification.md)
- [StringSearchCriteriaFromStringResolverSpecificification](stringsearchcriteriafromstringresolverspecificification.md): An internal type that a resolver uses to convert data values.
- [ResolverSpecificationBuilder](resolverspecificationbuilder.md): A result builder that declaratively specifies a set of resolvers.
