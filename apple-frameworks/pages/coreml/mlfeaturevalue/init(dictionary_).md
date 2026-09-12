> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(dictionary:)](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(dictionary:))

# init(dictionary:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a feature value that contains a dictionary of numbers.

## Declaration

```swift
convenience init(dictionary value: [AnyHashable : NSNumber]) throws
```

## Parameters

- `value`: A dictionary of numbers.

## See Also

### Creating collection feature values

- [init(sequence:)](init%28sequence_%29.md): Creates a feature value that contains a sequence.

# featureValueWithDictionary:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a feature value that contains a dictionary of numbers.

## Declaration

```objectivec
+ (instancetype) featureValueWithDictionary:(NSDictionary<id,NSNumber *> *) value error:(NSError **) error;
```

## Parameters

- `value`: A dictionary of numbers.
- `error`: On return in Objective-C, if an error occurs, a pointer to an error information instance; otherwise `nil`.

## See Also

### Creating collection feature values

- [featureValueWithSequence:](init%28sequence_%29.md): Creates a feature value that contains a sequence.
