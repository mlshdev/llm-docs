> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforelectrocardiograms(symptomsstatus:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforelectrocardiograms(symptomsstatus:))

# predicateForElectrocardiograms(symptomsStatus:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a predicate that matches electrocardiogram samples with the specified symptom status.

## Declaration

```swift
class func predicateForElectrocardiograms(symptomsStatus: HKElectrocardiogram.SymptomsStatus) -> NSPredicate
```

## Parameters

- `symptomsStatus`: The target symptom status.

<a id="return-value"></a>

## Return Value

A predicate that matches electrocardiogram samples with the specified symptom status.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches electrocardiogram samples with the specified symptom status. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

```swift
let forSymptomStatus = HKQuery.predicateForElectrocardiograms(symptomsStatus: .present)

let status = HKElectrocardiogram.SymptomsStatus.present.rawValue

let explicitForSymptomStatus = NSPredicate(format: "%K == %d", HKPredicateKeyPathECGSymptomsStatus, status)
```

## See Also

### Related Documentation

- [HKPredicateKeyPathECGSymptomsStatus](../hkpredicatekeypathecgsymptomsstatus.md): The key path for the sample’s symptom status.

### Creating electrocardiogram predicates

- [predicateForElectrocardiograms(classification:)](predicateforelectrocardiograms%28classification_%29.md): Returns a predicate that matches electrocardiogram samples with the specified classification.
- [predicateForObjectsAssociated(electrocardiogram:)](predicateforobjectsassociated%28electrocardiogram_%29.md): Returns a predicate that matches symptom samples associated with the specified electrocardiogram.

# predicateForElectrocardiogramsWithSymptomsStatus: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a predicate that matches electrocardiogram samples with the specified symptom status.

## Declaration

```objectivec
+ (NSPredicate *) predicateForElectrocardiogramsWithSymptomsStatus:(HKElectrocardiogramSymptomsStatus) symptomsStatus;
```

## Parameters

- `symptomsStatus`: The target symptom status.

<a id="return-value"></a>

## Return Value

A predicate that matches electrocardiogram samples with the specified symptom status.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches electrocardiogram samples with the specified symptom status. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

```swift
let forSymptomStatus = HKQuery.predicateForElectrocardiograms(symptomsStatus: .present)

let status = HKElectrocardiogram.SymptomsStatus.present.rawValue

let explicitForSymptomStatus = NSPredicate(format: "%K == %d", HKPredicateKeyPathECGSymptomsStatus, status)
```

## See Also

### Related Documentation

- [HKPredicateKeyPathECGSymptomsStatus](../hkpredicatekeypathecgsymptomsstatus.md): The key path for the sample’s symptom status.

### Creating electrocardiogram predicates

- [predicateForElectrocardiogramsWithClassification:](predicateforelectrocardiograms%28classification_%29.md): Returns a predicate that matches electrocardiogram samples with the specified classification.
- [predicateForObjectsAssociatedWithElectrocardiogram:](predicateforobjectsassociated%28electrocardiogram_%29.md): Returns a predicate that matches symptom samples associated with the specified electrocardiogram.
