> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforobjectsassociated(electrocardiogram:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforobjectsassociated(electrocardiogram:))

# predicateForObjectsAssociated(electrocardiogram:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+ · watchOS 7.0+

Returns a predicate that matches symptom samples associated with the specified electrocardiogram.

## Declaration

```swift
class func predicateForObjectsAssociated(electrocardiogram: HKElectrocardiogram) -> NSPredicate
```

## Parameters

- `electrocardiogram`: The target electrocardiogram.

<a id="return-value"></a>

## Return Value

A predicate that matches symptom samples associated with the specified electrocardiogram.

<a id="Discussion"></a>

## Discussion

If the [HKElectrocardiogram](../hkelectrocardiogram.md) sample’s [symptomsStatus](../hkelectrocardiogram/symptomsstatus-swift.property.md) property is [HKElectrocardiogram.SymptomsStatus.present](../hkelectrocardiogram/symptomsstatus-swift.enum/present.md), you can query for symptom samples associated with the electrocardiogram. See [Symptom Type Identifiers](../symptom-type-identifiers.md) for a complete list of symptom types.

## See Also

### Creating electrocardiogram predicates

- [predicateForElectrocardiograms(classification:)](predicateforelectrocardiograms%28classification_%29.md): Returns a predicate that matches electrocardiogram samples with the specified classification.
- [predicateForElectrocardiograms(symptomsStatus:)](predicateforelectrocardiograms%28symptomsstatus_%29.md): Returns a predicate that matches electrocardiogram samples with the specified symptom status.

# predicateForObjectsAssociatedWithElectrocardiogram: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+ · watchOS 7.0+

Returns a predicate that matches symptom samples associated with the specified electrocardiogram.

## Declaration

```objectivec
+ (NSPredicate *) predicateForObjectsAssociatedWithElectrocardiogram:(HKElectrocardiogram *) electrocardiogram;
```

## Parameters

- `electrocardiogram`: The target electrocardiogram.

<a id="return-value"></a>

## Return Value

A predicate that matches symptom samples associated with the specified electrocardiogram.

<a id="Discussion"></a>

## Discussion

If the [HKElectrocardiogram](../hkelectrocardiogram.md) sample’s [symptomsStatus](../hkelectrocardiogram/symptomsstatus-swift.property.md) property is [HKElectrocardiogramSymptomsStatusPresent](../hkelectrocardiogram/symptomsstatus-swift.enum/present.md), you can query for symptom samples associated with the electrocardiogram. See [Symptom Type Identifiers](../symptom-type-identifiers.md) for a complete list of symptom types.

## See Also

### Creating electrocardiogram predicates

- [predicateForElectrocardiogramsWithClassification:](predicateforelectrocardiograms%28classification_%29.md): Returns a predicate that matches electrocardiogram samples with the specified classification.
- [predicateForElectrocardiogramsWithSymptomsStatus:](predicateforelectrocardiograms%28symptomsstatus_%29.md): Returns a predicate that matches electrocardiogram samples with the specified symptom status.
