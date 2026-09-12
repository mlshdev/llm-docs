> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlsequence/stringvalues](https://developer.apple.com/documentation/coreml/mlsequence/stringvalues)

# stringValues (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An array of strings in the sequence.

## Declaration

```swift
var stringValues: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Only use this property when the sequence’s [type](type.md) is [MLFeatureType.string](../mlfeaturetype/string.md).

## See Also

### Retrieving the Sequence’s Values

- [int64Values](int64values.md): An array of 64-bit integers in the sequence.

# stringValues (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An array of strings in the sequence.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * stringValues;
```

<a id="Discussion"></a>

## Discussion

Only use this property when the sequence’s [type](type.md) is [MLFeatureTypeString](../mlfeaturetype/string.md).

## See Also

### Retrieving the Sequence’s Values

- [int64Values](int64values.md): An array of 64-bit integers in the sequence.
