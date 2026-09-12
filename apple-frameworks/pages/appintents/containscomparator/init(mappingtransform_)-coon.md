> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/containscomparator/init(mappingtransform:)-coon](https://developer.apple.com/documentation/appintents/containscomparator/init(mappingtransform:)-coon)

# init(mappingTransform:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Declares support for the `contains` operator between an `Array` property and user-supplied values.

## Declaration

```swift
init(mappingTransform: @escaping (InputType) -> ComparatorMappingType) where PropertyType : _SequenceIntentValue, PropertyType : Sequence, InputType : Equatable, InputType == PropertyType.Element
```

## Parameters

- `mappingTransform`: Closure that transforms the user-supplied value into the `ComparatorMappingType` output type.
