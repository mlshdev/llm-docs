> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/containscomparator/init(mappingtransform:)-3xuvt](https://developer.apple.com/documentation/appintents/containscomparator/init(mappingtransform:)-3xuvt)

# init(mappingTransform:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Declares support for the `contains` operator between a `String` property and user-supplied values.

## Declaration

```swift
init(mappingTransform: @escaping (InputType) -> ComparatorMappingType) where Property : EntityProperty<String>, PropertyType == String, InputType == String
```

## Parameters

- `mappingTransform`: Closure that transforms the user-supplied value into the `ComparatorMappingType` output type.

## See Also

### Creating a comparator

- [init(mappingTransform:)](init%28mappingtransform_%29-xvws.md): Declares support for the `contains` operator between a `AttributedString` property and user-supplied values.
- [init(mappingTransform:)](init%28mappingtransform_%29-7rx55.md): Declares support for the `contains` operator between an optional `Array` property and user-supplied values.
- [init(withResolvers:mappingTransform:)](init%28withresolvers_mappingtransform_%29-4482k.md): Declares support for the `contains` operator between an `Array` property and user-supplied values.
