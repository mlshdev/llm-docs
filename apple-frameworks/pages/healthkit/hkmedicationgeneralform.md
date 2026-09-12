> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmedicationgeneralform](https://developer.apple.com/documentation/healthkit/hkmedicationgeneralform)

# HKMedicationGeneralForm (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The manufactured form of a medication.

## Declaration

```swift
struct HKMedicationGeneralForm
```

## Topics

### Initializers

- [init(rawValue:)](hkmedicationgeneralform/init%28rawvalue_%29.md)

### Type Properties

- [capsule](hkmedicationgeneralform/capsule.md): The medication comes in capsule form, such as a hard-shell capsule or softgel.
- [cream](hkmedicationgeneralform/cream.md): The medication is applied as a cream.
- [device](hkmedicationgeneralform/device.md): The medication is administered through a device, such as an infusion pump for controlled fluid delivery.
- [drops](hkmedicationgeneralform/drops.md): The medication is taken as drops, for example eye drops or ear drops.
- [foam](hkmedicationgeneralform/foam.md): The medication is applied as a foam.
- [gel](hkmedicationgeneralform/gel.md): The medication is applied as a gel.
- [inhaler](hkmedicationgeneralform/inhaler.md): The medication is delivered through an inhaler.
- [injection](hkmedicationgeneralform/injection.md): The medication is given as an injection.
- [liquid](hkmedicationgeneralform/liquid.md): The medication is taken as a liquid, such as a syrup.
- [lotion](hkmedicationgeneralform/lotion.md): The medication is applied as a lotion.
- [ointment](hkmedicationgeneralform/ointment.md): The medication is applied as an ointment.
- [patch](hkmedicationgeneralform/patch.md): The medication is applied as a patch worn on the skin.
- [powder](hkmedicationgeneralform/powder.md): The medication is taken as a powder.
- [spray](hkmedicationgeneralform/spray.md): The medication is delivered as a spray, for example a nasal spray or throat spray.
- [suppository](hkmedicationgeneralform/suppository.md): The medication is delivered as a suppository.
- [tablet](hkmedicationgeneralform/tablet.md): The medication comes in tablet form, such as a pill or caplet.
- [topical](hkmedicationgeneralform/topical.md): The medication is applied topically in a form that wasn’t specified.
- [unknown](hkmedicationgeneralform/unknown.md): The system doesn’t know the general form of the medication.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Medication queries

- [HKClinicalCoding](hkclinicalcoding.md): A clinical coding that represents a medical concept using a standardized coding system.
- [HKHealthConceptIdentifier](hkhealthconceptidentifier.md): A unique identifier for a specific health concept within a domain.
- [HKMedicationConcept](hkmedicationconcept.md): An object that describes a specific medication concept.
- [HKMedicationDoseEvent](hkmedicationdoseevent.md)
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKUserAnnotatedMedication](hkuserannotatedmedication.md): A reference to the tracked medication and the details a person can customize.
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)
- [HKHealthConceptDomain](hkhealthconceptdomain.md): A domain that represents a health concept.
- [HKUserAnnotatedMedicationQueryDescriptor](hkuserannotatedmedicationquerydescriptor.md)

# HKMedicationGeneralForm (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The manufactured form of a medication.

## Declaration

```objectivec
typedef NSString * HKMedicationGeneralForm;
```

## See Also

### Medication queries

- [HKClinicalCoding](hkclinicalcoding.md): A clinical coding that represents a medical concept using a standardized coding system.
- [HKHealthConceptIdentifier](hkhealthconceptidentifier.md): A unique identifier for a specific health concept within a domain.
- [HKMedicationConcept](hkmedicationconcept.md): An object that describes a specific medication concept.
- [HKMedicationDoseEvent](hkmedicationdoseevent.md)
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKUserAnnotatedMedication](hkuserannotatedmedication.md): A reference to the tracked medication and the details a person can customize.
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)
- [HKHealthConceptDomain](hkhealthconceptdomain.md): A domain that represents a health concept.
