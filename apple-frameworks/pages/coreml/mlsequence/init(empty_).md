> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlsequence/init(empty:)](https://developer.apple.com/documentation/coreml/mlsequence/init(empty:))

# init(empty:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an empty sequence of strings or integers.

## Declaration

```swift
convenience init(empty type: MLFeatureType)
```

## Parameters

- `type`: An [MLFeatureType](../mlfeaturetype.md) instance that determines the sequence’s element type, which must be either [MLFeatureType.string](../mlfeaturetype/string.md) or [MLFeatureType.int64](../mlfeaturetype/int64.md).

## See Also

### Creating a sequence

- [init(strings:)](init%28strings_%29.md): Creates a sequence of strings from a string array.
- [init(int64s:)](init%28int64s_%29.md): Creates a sequence of integers from an array of numbers.

# emptySequenceWithType: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an empty sequence of strings or integers.

## Declaration

```objectivec
+ (instancetype) emptySequenceWithType:(MLFeatureType) type;
```

## Parameters

- `type`: An [MLFeatureType](../mlfeaturetype.md) instance that determines the sequence’s element type, which must be either [MLFeatureTypeString](../mlfeaturetype/string.md) or [MLFeatureTypeInt64](../mlfeaturetype/int64.md).

## See Also

### Creating a sequence

- [sequenceWithStringArray:](init%28strings_%29.md): Creates a sequence of strings from a string array.
- [sequenceWithInt64Array:](init%28int64s_%29.md): Creates a sequence of integers from an array of numbers.
