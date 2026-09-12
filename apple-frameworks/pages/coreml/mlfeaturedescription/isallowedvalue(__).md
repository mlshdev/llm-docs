> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturedescription/isallowedvalue(_:)](https://developer.apple.com/documentation/coreml/mlfeaturedescription/isallowedvalue(_:))

# isAllowedValue(\_:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Checks whether the model will accept an input feature value.

## Declaration

```swift
func isAllowedValue(_ value: MLFeatureValue) -> Bool
```

## Parameters

- `value`: Given the `MLFeatureValue`, is it compatible with the `MLFeatureType` of this `MLFeatureDescription`.

<a id="return-value"></a>

## Return Value

`True` if the given `MLFeatureValue` is acceptable to the model’s input feature, `false` otherwise.

# isAllowedValue: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Checks whether the model will accept an input feature value.

## Declaration

```objectivec
- (BOOL) isAllowedValue:(MLFeatureValue *) value;
```

## Parameters

- `value`: Given the `MLFeatureValue`, is it compatible with the `MLFeatureType` of this `MLFeatureDescription`.

<a id="return-value"></a>

## Return Value

`True` if the given `MLFeatureValue` is acceptable to the model’s input feature, `false` otherwise.
