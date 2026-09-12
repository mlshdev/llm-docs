> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/resolver](https://developer.apple.com/documentation/appintents/resolver)

# Resolver

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface to convert a value from one type to a different type.

## Declaration

```swift
protocol Resolver : Hashable, Sendable
```

## Topics

### Resolving the type

- [resolve(from:context:)](resolver/resolve%28from_context_%29.md): Converts the specified value into the expected data type.
- [Input](resolver/input.md)
- [Output](resolver/output.md)

### Managing the resolution process

- [ResolverSpecification](resolverspecification.md): An internal type that a resolver uses to convert data values.
- [EmptyResolverSpecification](emptyresolverspecification.md)
- [StringSearchCriteriaFromStringResolverSpecificification](stringsearchcriteriafromstringresolverspecificification.md): An internal type that a resolver uses to convert data values.
- [ResolverSpecificationBuilder](resolverspecificationbuilder.md): A result builder that declaratively specifies a set of resolvers.

### Type Aliases

- [Resolver.Context](resolver/context.md)

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [RangeCheckingResolver](rangecheckingresolver.md)

### Conforming Types

- [AttributedStringFromStringResolver](attributedstringfromstringresolver.md)
- [BoolFromStringResolver](boolfromstringresolver.md)
- [DoubleFromIntResolver](doublefromintresolver.md)
- [DoubleFromStringResolver](doublefromstringresolver.md)
- [DoubleResolver](doubleresolver.md)
- [IntFromDoubleResolver](intfromdoubleresolver.md)
- [IntFromStringResolver](intfromstringresolver.md)
- [IntResolver](intresolver.md)
- [StringFromDoubleResolver](stringfromdoubleresolver.md)
- [StringFromIntResolver](stringfromintresolver.md)
- [StringSearchCriteriaFromStringResolverSpecificification](stringsearchcriteriafromstringresolverspecificification.md)
- [URLFromStringResolver](urlfromstringresolver.md)
