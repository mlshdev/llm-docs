> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-4482k](https://developer.apple.com/documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-4482k)

# init(withResolvers:mappingTransform:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Declares support for the `contains` operator between an `Array` property and user-supplied values.

## Declaration

```swift
init<Spec>(@ResolverSpecificationBuilder<PropertyType.UnwrappedType> withResolvers resolvers: @escaping () -> Spec, mappingTransform: @escaping (InputType) -> ComparatorMappingType) where PropertyType : _SequenceIntentValue, PropertyType : Sequence, InputType : Equatable, InputType == PropertyType.Element, Spec : ResolverSpecification
```

## Parameters

- `resolvers`: Set of `Resolver`s to apply when converting user input to the target `Value` type.
- `mappingTransform`: Closure that transforms the user-supplied value into the `ComparatorMappingType` output type.

## See Also

### Creating a comparator

- [init(mappingTransform:)](init%28mappingtransform_%29-xvws.md): Declares support for the `contains` operator between a `AttributedString` property and user-supplied values.
- [init(mappingTransform:)](init%28mappingtransform_%29-3xuvt.md): Declares support for the `contains` operator between a `String` property and user-supplied values.
- [init(mappingTransform:)](init%28mappingtransform_%29-7rx55.md): Declares support for the `contains` operator between an optional `Array` property and user-supplied values.
