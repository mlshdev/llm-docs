> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmedicationdoseevent](https://developer.apple.com/documentation/healthkit/hkmedicationdoseevent)

# HKMedicationDoseEvent (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
class HKMedicationDoseEvent
```

## Topics

### Instance Properties

- [doseQuantity](hkmedicationdoseevent/dosequantity-4cb5m.md): The quantity of the medication taken.
- [logStatus](hkmedicationdoseevent/logstatus-swift.property.md): The log status the system assigns to this dose event.
- [medicationConceptIdentifier](hkmedicationdoseevent/medicationconceptidentifier.md): The identifier of the medication concept the system associates with this dose event.
- [medicationDoseEventType](hkmedicationdoseevent/medicationdoseeventtype.md): The data type that identified the samples that store medication dose event data.
- [scheduleType](hkmedicationdoseevent/scheduletype-swift.property.md): The scheduling context for this logged dose event.
- [scheduledDate](hkmedicationdoseevent/scheduleddate.md): The date and time the person takes the medication, if scheduled.
- [scheduledDoseQuantity](hkmedicationdoseevent/scheduleddosequantity-477ge.md): The quantity of the medication scheduled to be taken.
- [unit](hkmedicationdoseevent/unit.md): The unit that the system associates with the medication when the person logs the dose.

### Enumerations

- [HKMedicationDoseEvent.LogStatus](hkmedicationdoseevent/logstatus-swift.enum.md): The statuses the system assigns to a logged medication dose event.
- [HKMedicationDoseEvent.ScheduleType](hkmedicationdoseevent/scheduletype-swift.enum.md): The kind of schedule the system associates with a logged medication dose event.

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Medication queries

- [HKClinicalCoding](hkclinicalcoding.md): A clinical coding that represents a medical concept using a standardized coding system.
- [HKHealthConceptIdentifier](hkhealthconceptidentifier.md): A unique identifier for a specific health concept within a domain.
- [HKMedicationConcept](hkmedicationconcept.md): An object that describes a specific medication concept.
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKUserAnnotatedMedication](hkuserannotatedmedication.md): A reference to the tracked medication and the details a person can customize.
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)
- [HKHealthConceptDomain](hkhealthconceptdomain.md): A domain that represents a health concept.
- [HKMedicationGeneralForm](hkmedicationgeneralform.md): The manufactured form of a medication.
- [HKUserAnnotatedMedicationQueryDescriptor](hkuserannotatedmedicationquerydescriptor.md)

# HKMedicationDoseEvent (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
@interface HKMedicationDoseEvent : HKSample
```

## Topics

### Instance Properties

- [doseQuantity](hkmedicationdoseevent/dosequantity-52hxr.md): The dose quantity the person reports as taken.
- [logStatus](hkmedicationdoseevent/logstatus-swift.property.md): The log status the system assigns to this dose event.
- [medicationConceptIdentifier](hkmedicationdoseevent/medicationconceptidentifier.md): The identifier of the medication concept the system associates with this dose event.
- [medicationDoseEventType](hkmedicationdoseevent/medicationdoseeventtype.md): The data type that identified the samples that store medication dose event data.
- [scheduleType](hkmedicationdoseevent/scheduletype-swift.property.md): The scheduling context for this logged dose event.
- [scheduledDate](hkmedicationdoseevent/scheduleddate.md): The date and time the person takes the medication, if scheduled.
- [scheduledDoseQuantity](hkmedicationdoseevent/scheduleddosequantity-7ffhr.md): The dose quantity a person is expected to take based on their medication schedule.
- [unit](hkmedicationdoseevent/unit.md): The unit that the system associates with the medication when the person logs the dose.

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Medication queries

- [HKClinicalCoding](hkclinicalcoding.md): A clinical coding that represents a medical concept using a standardized coding system.
- [HKHealthConceptIdentifier](hkhealthconceptidentifier.md): A unique identifier for a specific health concept within a domain.
- [HKMedicationConcept](hkmedicationconcept.md): An object that describes a specific medication concept.
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKUserAnnotatedMedication](hkuserannotatedmedication.md): A reference to the tracked medication and the details a person can customize.
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)
- [HKHealthConceptDomain](hkhealthconceptdomain.md): A domain that represents a health concept.
- [HKMedicationGeneralForm](hkmedicationgeneralform.md): The manufactured form of a medication.
