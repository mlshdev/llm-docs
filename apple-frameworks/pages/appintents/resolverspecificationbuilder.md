> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/resolverspecificationbuilder](https://developer.apple.com/documentation/appintents/resolverspecificationbuilder)

# ResolverSpecificationBuilder

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A result builder that declaratively specifies a set of resolvers.

## Declaration

```swift
@resultBuilder enum ResolverSpecificationBuilder<Property> where Property : _IntentValue
```

## Topics

### Building the resolver specification

- [buildBlock()](resolverspecificationbuilder/buildblock%28%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:)](resolverspecificationbuilder/buildblock%28__%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:)](resolverspecificationbuilder/buildblock%28____%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:)](resolverspecificationbuilder/buildblock%28______%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28________%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28__________%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28____________%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28______________%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28________________%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28__________________%29.md): Conforms when `Property` conforms to `_IntentValue`.

### Structures

- [ResolverSpecificationBuilder.Specification](resolverspecificationbuilder/specification.md): Conforms when `Property` conforms to `_IntentValue`.

### Type Methods

- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28____________________%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28______________________%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28________________________%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28__________________________%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28____________________________%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](resolverspecificationbuilder/buildblock%28______________________________%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildExpression(\_:)](resolverspecificationbuilder/buildexpression%28__%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildPartialBlock(accumulated:next:)](resolverspecificationbuilder/buildpartialblock%28accumulated_next_%29.md): Conforms when `Property` conforms to `_IntentValue`.
- [buildPartialBlock(first:)](resolverspecificationbuilder/buildpartialblock%28first_%29.md): Conforms when `Property` conforms to `_IntentValue`.

## See Also

### Managing the resolution process

- [ResolverSpecification](resolverspecification.md): An internal type that a resolver uses to convert data values.
- [EmptyResolverSpecification](emptyresolverspecification.md)
- [StringSearchCriteriaFromStringResolverSpecificification](stringsearchcriteriafromstringresolverspecificification.md): An internal type that a resolver uses to convert data values.
