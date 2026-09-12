> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(int64:)](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(int64:))

# init(int64:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a feature value that contains an integer.

## Declaration

```swift
convenience init(int64 value: Int64)
```

## Parameters

- `value`: A 64-bit integer value.

## See Also

### Creating numeric feature values

- [init(double:)](init%28double_%29.md): Creates a feature value that contains a double.

# featureValueWithInt64: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a feature value that contains an integer.

## Declaration

```objectivec
+ (instancetype) featureValueWithInt64:(int64_t) value;
```

## Parameters

- `value`: A 64-bit integer value.

## See Also

### Creating numeric feature values

- [featureValueWithDouble:](init%28double_%29.md): Creates a feature value that contains a double.
