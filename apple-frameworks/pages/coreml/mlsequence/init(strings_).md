> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlsequence/init(strings:)](https://developer.apple.com/documentation/coreml/mlsequence/init(strings:))

# init(strings:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a sequence of strings from a string array.

## Declaration

```swift
convenience init(strings stringValues: [String])
```

## Parameters

- `stringValues`: The array of strings for the sequence.

## See Also

### Creating a sequence

- [init(int64s:)](init%28int64s_%29.md): Creates a sequence of integers from an array of numbers.
- [init(empty:)](init%28empty_%29.md): Creates an empty sequence of strings or integers.

# sequenceWithStringArray: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a sequence of strings from a string array.

## Declaration

```objectivec
+ (instancetype) sequenceWithStringArray:(NSArray<NSString *> *) stringValues;
```

## Parameters

- `stringValues`: The array of strings for the sequence.

## See Also

### Creating a sequence

- [sequenceWithInt64Array:](init%28int64s_%29.md): Creates a sequence of integers from an array of numbers.
- [emptySequenceWithType:](init%28empty_%29.md): Creates an empty sequence of strings or integers.
