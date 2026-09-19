> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkliveworkoutdatasource/enablecollection(for:predicate:)

# enableCollection(for:predicate:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

Begins automatically calculating statistics for samples that match the quantity type and predicate.

## Declaration

```swift
func enableCollection(for quantityType: HKQuantityType, predicate: NSPredicate?)
```

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

## See Also

### Calculating statistics

- [disableCollection(for:)](disablecollection%28for_%29.md): Stops automatically calculating statistics for the quantity type.

# enableCollectionForType:predicate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

Begins automatically calculating statistics for samples that match the quantity type and predicate.

## Declaration

```objectivec
- (void) enableCollectionForType:(HKQuantityType *) quantityType predicate:(NSPredicate *) predicate;
```

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

## See Also

### Calculating statistics

- [disableCollectionForType:](disablecollection%28for_%29.md): Stops automatically calculating statistics for the quantity type.
