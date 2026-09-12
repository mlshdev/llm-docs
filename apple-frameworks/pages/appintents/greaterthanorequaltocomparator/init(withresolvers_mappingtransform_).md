> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/greaterthanorequaltocomparator/init(withresolvers:mappingtransform:)](https://developer.apple.com/documentation/appintents/greaterthanorequaltocomparator/init(withresolvers:mappingtransform:))

# init(withResolvers:mappingTransform:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Declares support for `Comparable` `>` comparisons between a property and user-supplied values.

## Declaration

```swift
init<Spec>(@ResolverSpecificationBuilder<PropertyType.UnwrappedType> withResolvers resolvers: @escaping () -> Spec, mappingTransform: @escaping (PropertyType.UnwrappedType) -> ComparatorMappingType) where Spec : ResolverSpecification
```

## Parameters

- `resolvers`: Set of `Resolver`s to apply when converting user input to the target `Value` type.
- `mappingTransform`: Closure that transforms the user-supplied value into the `ComparatorMappingType` output type.

## See Also

### Creating a comparator

- [init(mappingTransform:)](init%28mappingtransform_%29.md): Declares support for `Comparable` `>` comparisons between a property and user-supplied values.
- [init(mappingTransform:)](init%28mappingtransform_%29.md): Declares support for `Comparable` `>` comparisons between a property and user-supplied values.
