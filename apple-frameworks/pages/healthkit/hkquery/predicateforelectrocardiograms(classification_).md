> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforelectrocardiograms(classification:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforelectrocardiograms(classification:))

# predicateForElectrocardiograms(classification:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a predicate that matches electrocardiogram samples with the specified classification.

## Declaration

```swift
class func predicateForElectrocardiograms(classification: HKElectrocardiogram.Classification) -> NSPredicate
```

## Parameters

- `classification`: The target classification.

<a id="return-value"></a>

## Return Value

A predicate that matches electrocardiogram samples with the specified classification.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches electrocardiogram samples with the specified classification. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

```swift
let forClassification = HKQuery.predicateForElectrocardiograms(classification: .atrialFibrillation)

let classification = HKElectrocardiogram.Classification.atrialFibrillation.rawValue

let explicitForClassification = NSPredicate(format: "%K == %d", HKPredicateKeyPathECGClassification, classification)
```

## See Also

### Related Documentation

- [HKPredicateKeyPathECGClassification](../hkpredicatekeypathecgclassification.md): The key path for the sample’s classification.

### Creating electrocardiogram predicates

- [predicateForElectrocardiograms(symptomsStatus:)](predicateforelectrocardiograms%28symptomsstatus_%29.md): Returns a predicate that matches electrocardiogram samples with the specified symptom status.
- [predicateForObjectsAssociated(electrocardiogram:)](predicateforobjectsassociated%28electrocardiogram_%29.md): Returns a predicate that matches symptom samples associated with the specified electrocardiogram.

# predicateForElectrocardiogramsWithClassification: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a predicate that matches electrocardiogram samples with the specified classification.

## Declaration

```objectivec
+ (NSPredicate *) predicateForElectrocardiogramsWithClassification:(HKElectrocardiogramClassification) classification;
```

## Parameters

- `classification`: The target classification.

<a id="return-value"></a>

## Return Value

A predicate that matches electrocardiogram samples with the specified classification.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches electrocardiogram samples with the specified classification. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

```swift
let forClassification = HKQuery.predicateForElectrocardiograms(classification: .atrialFibrillation)

let classification = HKElectrocardiogram.Classification.atrialFibrillation.rawValue

let explicitForClassification = NSPredicate(format: "%K == %d", HKPredicateKeyPathECGClassification, classification)
```

## See Also

### Related Documentation

- [HKPredicateKeyPathECGClassification](../hkpredicatekeypathecgclassification.md): The key path for the sample’s classification.

### Creating electrocardiogram predicates

- [predicateForElectrocardiogramsWithSymptomsStatus:](predicateforelectrocardiograms%28symptomsstatus_%29.md): Returns a predicate that matches electrocardiogram samples with the specified symptom status.
- [predicateForObjectsAssociatedWithElectrocardiogram:](predicateforobjectsassociated%28electrocardiogram_%29.md): Returns a predicate that matches symptom samples associated with the specified electrocardiogram.
