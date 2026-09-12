> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlsequence/init(int64s:)](https://developer.apple.com/documentation/coreml/mlsequence/init(int64s:))

# init(int64s:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a sequence of integers from an array of numbers.

## Declaration

```swift
convenience init(int64s int64Values: [NSNumber])
```

## Parameters

- `int64Values`: An array of integer values represented as [NSNumber](../../foundation/nsnumber.md) instances.

## See Also

### Creating a sequence

- [init(strings:)](init%28strings_%29.md): Creates a sequence of strings from a string array.
- [init(empty:)](init%28empty_%29.md): Creates an empty sequence of strings or integers.

# sequenceWithInt64Array: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a sequence of integers from an array of numbers.

## Declaration

```objectivec
+ (instancetype) sequenceWithInt64Array:(NSArray<NSNumber *> *) int64Values;
```

## Parameters

- `int64Values`: An array of integer values represented as [NSNumber](../../foundation/nsnumber.md) instances.

## See Also

### Creating a sequence

- [sequenceWithStringArray:](init%28strings_%29.md): Creates a sequence of strings from a string array.
- [emptySequenceWithType:](init%28empty_%29.md): Creates an empty sequence of strings or integers.
