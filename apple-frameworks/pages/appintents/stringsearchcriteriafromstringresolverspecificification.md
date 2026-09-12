> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/stringsearchcriteriafromstringresolverspecificification](https://developer.apple.com/documentation/appintents/stringsearchcriteriafromstringresolverspecificification)

# StringSearchCriteriaFromStringResolverSpecificification

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

An internal type that a resolver uses to convert data values.

## Declaration

```swift
struct StringSearchCriteriaFromStringResolverSpecificification
```

<a id="overview"></a>

## Overview

Don’t use a `StringSearchCriteriaFromStringResolverSpecificification` type directly in your code. The system uses this type internally to manage the resolution process.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Resolver](resolver.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the resolution process

- [ResolverSpecification](resolverspecification.md): An internal type that a resolver uses to convert data values.
- [EmptyResolverSpecification](emptyresolverspecification.md)
- [ResolverSpecificationBuilder](resolverspecificationbuilder.md): A result builder that declaratively specifies a set of resolvers.
