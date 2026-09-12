> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/notequaltocomparator/init(mappingtransform:)](https://developer.apple.com/documentation/appintents/notequaltocomparator/init(mappingtransform:))

# init(mappingTransform:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Declares support for `Equatable` `!=` comparisons between a property and user-supplied values.

## Declaration

```swift
init(mappingTransform: @escaping (PropertyType) -> ComparatorMappingType)
```

## Parameters

- `mappingTransform`: Closure that transforms the user-supplied value into the `ComparatorMappingType` output type.

## See Also

### Creating a comparator

- [init(withResolvers:mappingTransform:)](init%28withresolvers_mappingtransform_%29.md): Declares support for `Equatable` `!=` comparisons between a property and user-supplied values.
- [init(withResolvers:mappingTransform:)](init%28withresolvers_mappingtransform_%29.md): Declares support for `Equatable` `!=` comparisons between a property and user-supplied values.
