> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlsequence/type](https://developer.apple.com/documentation/coreml/mlsequence/type)

# type (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The underlying type of the sequence’s elements.

## Declaration

```swift
var type: MLFeatureType { get }
```

<a id="Discussion"></a>

## Discussion

The sequence’s underlying element type can only be either [MLFeatureType.string](../mlfeaturetype/string.md) or [MLFeatureType.int64](../mlfeaturetype/int64.md). Use this value to determine whether to access [stringValues](stringvalues.md) or [int64Values](int64values.md) at runtime.

# type (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The underlying type of the sequence’s elements.

## Declaration

```objectivec
@property (nonatomic, readonly) MLFeatureType type;
```

<a id="Discussion"></a>

## Discussion

The sequence’s underlying element type can only be either [MLFeatureTypeString](../mlfeaturetype/string.md) or [MLFeatureTypeInt64](../mlfeaturetype/int64.md). Use this value to determine whether to access [stringValues](stringvalues.md) or [int64Values](int64values.md) at runtime.
