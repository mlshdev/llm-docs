> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(double:)](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(double:))

# init(double:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a feature value that contains a double.

## Declaration

```swift
convenience init(double value: Double)
```

## Parameters

- `value`: A double precision floating point value.

## See Also

### Creating numeric feature values

- [init(int64:)](init%28int64_%29.md): Creates a feature value that contains an integer.

# featureValueWithDouble: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a feature value that contains a double.

## Declaration

```objectivec
+ (instancetype) featureValueWithDouble:(double) value;
```

## Parameters

- `value`: A double precision floating point value.

## See Also

### Creating numeric feature values

- [featureValueWithInt64:](init%28int64_%29.md): Creates a feature value that contains an integer.
