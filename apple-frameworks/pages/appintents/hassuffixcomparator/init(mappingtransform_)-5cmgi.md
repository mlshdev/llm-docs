> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/hassuffixcomparator/init(mappingtransform:)-5cmgi](https://developer.apple.com/documentation/appintents/hassuffixcomparator/init(mappingtransform:)-5cmgi)

# init(mappingTransform:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Declares support for the `hasSuffix` operator between a `String?` property and user-supplied values.

## Declaration

```swift
init(mappingTransform: @escaping (InputType) -> ComparatorMappingType) where PropertyType : ExpressibleByNilLiteral, InputType == String, PropertyType.UnwrappedType == String
```

## Parameters

- `mappingTransform`: Closure that transforms the user-supplied value into the `ComparatorMappingType` output type.

## See Also

### Creating a comparator

- [init(mappingTransform:)](init%28mappingtransform_%29-4dp26.md): Declares support for the `hasSuffix` operator between a `String` property and user-supplied values.
- [init(withResolvers:mappingTransform:)](init%28withresolvers_mappingtransform_%29-5rtmw.md): Declares support for the `hasSuffix` operator between a `String?` property and user-supplied values.
- [init(withResolvers:mappingTransform:)](init%28withresolvers_mappingtransform_%29-7tdan.md): Declares support for the `hasSuffix` operator between a `String` property and user-supplied values.
