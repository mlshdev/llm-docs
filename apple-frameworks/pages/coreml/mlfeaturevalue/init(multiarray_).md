> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(multiarray:)](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(multiarray:))

# init(multiArray:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a feature value that contains a multidimensional array.

## Declaration

```swift
convenience init(multiArray value: MLMultiArray)
```

## Parameters

- `value`: An [MLMultiArray](../mlmultiarray.md) instance.

## See Also

### Creating multidimensional feature values

- [init(shapedArray:)](init%28shapedarray_%29.md): Creates a feature value that contains a shaped array.

# featureValueWithMultiArray: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a feature value that contains a multidimensional array.

## Declaration

```objectivec
+ (instancetype) featureValueWithMultiArray:(MLMultiArray *) value;
```

## Parameters

- `value`: An [MLMultiArray](../mlmultiarray.md) instance.
