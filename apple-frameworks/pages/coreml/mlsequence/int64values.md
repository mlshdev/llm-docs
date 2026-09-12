> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlsequence/int64values](https://developer.apple.com/documentation/coreml/mlsequence/int64values)

# int64Values (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An array of 64-bit integers in the sequence.

## Declaration

```swift
var int64Values: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

Only use this property when the sequence’s [type](type.md) is [MLFeatureType.int64](../mlfeaturetype/int64.md).

## See Also

### Retrieving the Sequence’s Values

- [stringValues](stringvalues.md): An array of strings in the sequence.

# int64Values (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An array of 64-bit integers in the sequence.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * int64Values;
```

<a id="Discussion"></a>

## Discussion

Only use this property when the sequence’s [type](type.md) is [MLFeatureTypeInt64](../mlfeaturetype/int64.md).

## See Also

### Retrieving the Sequence’s Values

- [stringValues](stringvalues.md): An array of strings in the sequence.
