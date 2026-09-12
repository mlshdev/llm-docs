> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/isbetweencomparator/init(mappingtransform:)](https://developer.apple.com/documentation/appintents/isbetweencomparator/init(mappingtransform:))

# init(mappingTransform:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Declares support for `Between` comparisons between a property and user-supplied values.

## Declaration

```swift
init(mappingTransform: @escaping (InputType, InputType) -> ComparatorMappingType)
```

## Parameters

- `mappingTransform`: Closure that transforms the user-supplied value into the `ComparatorMappingType` output type.
