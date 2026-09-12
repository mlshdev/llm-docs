> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-wpei](https://developer.apple.com/documentation/appintents/containscomparator/init(withresolvers:mappingtransform:)-wpei)

# init(withResolvers:mappingTransform:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Declares support for the `contains` operator between a `AttributedString?` property and user-supplied values.

## Declaration

```swift
init<Spec>(@ResolverSpecificationBuilder<AttributedString> withResolvers resolvers: @escaping () -> Spec, mappingTransform: @escaping (InputType) -> ComparatorMappingType) where PropertyType : ExpressibleByNilLiteral, InputType == AttributedString, Spec : ResolverSpecification, PropertyType.UnwrappedType == AttributedString
```

## Parameters

- `resolvers`: Set of `Resolver`s to apply when converting user input to the target `Value` type.
- `mappingTransform`: Closure that transforms the user-supplied value into the `ComparatorMappingType` output type.
