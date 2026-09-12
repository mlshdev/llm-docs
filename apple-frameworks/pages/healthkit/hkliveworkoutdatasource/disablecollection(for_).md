> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutdatasource/disablecollection(for:)](https://developer.apple.com/documentation/healthkit/hkliveworkoutdatasource/disablecollection(for:))

# disableCollection(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

Stops automatically calculating statistics for the quantity type.

## Declaration

```swift
func disableCollection(for quantityType: HKQuantityType)
```

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

## See Also

### Calculating statistics

- [enableCollection(for:predicate:)](enablecollection%28for_predicate_%29.md): Begins automatically calculating statistics for samples that match the quantity type and predicate.

# disableCollectionForType: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

Stops automatically calculating statistics for the quantity type.

## Declaration

```objectivec
- (void) disableCollectionForType:(HKQuantityType *) quantityType;
```

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

## See Also

### Calculating statistics

- [enableCollectionForType:predicate:](enablecollection%28for_predicate_%29.md): Begins automatically calculating statistics for samples that match the quantity type and predicate.
