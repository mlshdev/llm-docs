> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeatureprovider/featurevalue(for:)](https://developer.apple.com/documentation/coreml/mlfeatureprovider/featurevalue(for:))

# featureValue(for:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Accesses the feature value given the feature’s name.

## Declaration

```swift
func featureValue(for featureName: String) -> MLFeatureValue?
```

## Parameters

- `featureName`: The name of the feature of the desired value.

<a id="return-value"></a>

## Return Value

The value of the feature, or nil if no value exists for that name.

## See Also

### Accessing values

- [featureNames](featurenames.md): The set of valid feature names.

# featureValueForName: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Accesses the feature value given the feature’s name.

## Declaration

```objectivec
- (MLFeatureValue *) featureValueForName:(NSString *) featureName;
```

## Parameters

- `featureName`: The name of the feature of the desired value.

<a id="return-value"></a>

## Return Value

The value of the feature, or nil if no value exists for that name.

## See Also

### Accessing values

- [featureNames](featurenames.md): The set of valid feature names.
