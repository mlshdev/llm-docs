> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-7vx0d](https://developer.apple.com/documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-7vx0d)

# init(withResolvers:mappingTransform:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Declares support for the `contains` operator between an optional `Array` property and user-supplied values.

## Declaration

```swift
init<Spec>(@ResolverSpecificationBuilder<PropertyType.UnwrappedType> withResolvers resolvers: @escaping () -> Spec, mappingTransform: @escaping (InputType) -> ComparatorMappingType) where PropertyType : ExpressibleByNilLiteral, InputType : Equatable, InputType == PropertyType.UnwrappedType.Element, Spec : ResolverSpecification, PropertyType.UnwrappedType : _SequenceIntentValue, PropertyType.UnwrappedType : Sequence
```

## Parameters

- `resolvers`: Set of `Resolver`s to apply when converting user input to the target `Value` type.
- `mappingTransform`: Closure that transforms the user-supplied value into the `ComparatorMappingType` output type.
