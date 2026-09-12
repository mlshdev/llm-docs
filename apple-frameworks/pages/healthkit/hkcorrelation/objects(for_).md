> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcorrelation/objects(for:)](https://developer.apple.com/documentation/healthkit/hkcorrelation/objects(for:))

# objects(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a set containing all the objects of the specified type in the correlation.

## Declaration

```swift
func objects(for objectType: HKObjectType) -> Set<HKSample>
```

## Parameters

- `objectType`: The quantity or category type for the data stored inside the correlation. For example, to get all the samples measuring calories from inside a correlation, use an [HKSampleType](../hksampletype.md) object created with the [dietaryEnergyConsumed](../hkquantitytypeidentifier/dietaryenergyconsumed.md) identifier.

<a id="return-value"></a>

## Return Value

A set containing all the objects of the specified type in the correlation.

## See Also

### Getting Correlation Data

- [correlationType](correlationtype.md): The type for this correlation.
- [objects](objects.md): The set of sample objects that make up the correlation.

# objectsForType: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a set containing all the objects of the specified type in the correlation.

## Declaration

```objectivec
- (NSSet<__kindof HKSample *> *) objectsForType:(HKObjectType *) objectType;
```

## Parameters

- `objectType`: The quantity or category type for the data stored inside the correlation. For example, to get all the samples measuring calories from inside a correlation, use an [HKSampleType](../hksampletype.md) object created with the [HKQuantityTypeIdentifierDietaryEnergyConsumed](../hkquantitytypeidentifier/dietaryenergyconsumed.md) identifier.

<a id="return-value"></a>

## Return Value

A set containing all the objects of the specified type in the correlation.

## See Also

### Getting Correlation Data

- [correlationType](correlationtype.md): The type for this correlation.
- [objects](objects.md): The set of sample objects that make up the correlation.
