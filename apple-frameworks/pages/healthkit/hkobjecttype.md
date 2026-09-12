> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype](https://developer.apple.com/documentation/healthkit/hkobjecttype)

# HKObjectType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.

## Declaration

```swift
class HKObjectType
```

## Mentioned In

- [Saving data to HealthKit](saving-data-to-healthkit.md)
- [About the HealthKit framework](about-the-healthkit-framework.md)

<a id="overview"></a>

## Overview

The `HKObjectType` class is an abstract class. Don’t instantiate an `HKObjectType` object directly. Instead, instantiate one of the following concrete subclasses:

- [HKActivitySummaryType](hkactivitysummarytype.md)
- [HKCategoryType](hkcategorytype.md)
- [HKCorrelationType](hkcorrelationtype.md)
- [HKCharacteristicType](hkcharacteristictype.md)
- [HKDocumentType](hkdocumenttype.md)
- [HKQuantityType](hkquantitytype.md)
- [HKSeriesType](hkseriestype.md)
- [HKWorkoutType](hkworkouttype.md)

The `HKObjectType` class provides a convenience method to create each of these subclasses.

<a id="Work-with-Object-Types"></a>

### Work with Object Types

Like many HealthKit classes, HealthKit object types aren’t extensible. Don’t subclass these classes.

Additionally, wherever possible, this class uses a single instance to represent all copies of the same type. For example, if you make two calls to the [quantityType(forIdentifier:)](hkobjecttype/quantitytype%28foridentifier_%29.md) method with the same identifier, the system returns the same instance. Reusing object types helps reduce HealthKit’s overall memory usage.

## Topics

### Creating quantity types

- [quantityType(forIdentifier:)](hkobjecttype/quantitytype%28foridentifier_%29.md): Deprecated. Returns the shared quantity type for the provided identifier.
- [HKQuantityTypeIdentifier](hkquantitytypeidentifier.md): The identifiers that create quantity type objects.

### Creating category types

- [categoryType(forIdentifier:)](hkobjecttype/categorytype%28foridentifier_%29.md): Deprecated. Returns the shared category type for the provided identifier.
- [HKCategoryTypeIdentifier](hkcategorytypeidentifier.md): Identifiers for creating category types.

### Creating characteristic types

- [characteristicType(forIdentifier:)](hkobjecttype/characteristictype%28foridentifier_%29.md): Deprecated. Returns the shared characteristic type for the provided identifier.
- [HKCharacteristicTypeIdentifier](hkcharacteristictypeidentifier.md): The identifiers that create characteristic type objects.

### Creating correlation types

- [correlationType(forIdentifier:)](hkobjecttype/correlationtype%28foridentifier_%29.md): Deprecated. Returns the shared correlation type for the provided identifier.
- [HKCorrelationTypeIdentifier](hkcorrelationtypeidentifier.md): The identifiers that create correlation type objects.

### Creating workout types

- [workoutType()](hkobjecttype/workouttype%28%29.md): Returns the shared [HKWorkoutType](hkworkouttype.md) object.

### Creating activity summary types

- [activitySummaryType()](hkobjecttype/activitysummarytype%28%29.md): Returns the shared activity summary type.

### Creating electrocardiogram types

- [electrocardiogramType()](hkobjecttype/electrocardiogramtype%28%29.md): Returns the shared electrocardiogram type.

### Creating audiogram sample types

- [audiogramSampleType()](hkobjecttype/audiogramsampletype%28%29.md): Returns an audiogram sample type.

### Creating vision prescription types

- [visionPrescriptionType()](hkobjecttype/visionprescriptiontype%28%29.md): Returns a shared vision prescription type object.

### Creating clinical record types

- [clinicalType(forIdentifier:)](hkobjecttype/clinicaltype%28foridentifier_%29.md): Deprecated. Returns the shared clinical type for the provided identifier.

### Creating series types

- [seriesType(forIdentifier:)](hkobjecttype/seriestype%28foridentifier_%29.md): Returns the shared series type for the provided identifier.

### Creating document types

- [documentType(forIdentifier:)](hkobjecttype/documenttype%28foridentifier_%29.md): Deprecated. Returns the shared document type for the provided identifier.
- [HKDocumentTypeIdentifier](hkdocumenttypeidentifier.md): The identifiers for documents.

### Getting property data

- [identifier](hkobjecttype/identifier.md): A unique string identifying the HealthKit object type.
- [requiresPerObjectAuthorization()](hkobjecttype/requiresperobjectauthorization%28%29.md): Returns a Boolean that indicates whether the data type requires per-object authorization.

### Initializers

- [init(coder:)](hkobjecttype/init%28coder_%29.md)

### Type Methods

- [medicationDoseEventType()](hkobjecttype/medicationdoseeventtype%28%29.md)
- [stateOfMindType()](hkobjecttype/stateofmindtype%28%29.md)
- [userAnnotatedMedicationType()](hkobjecttype/userannotatedmedicationtype%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKActivitySummaryType](hkactivitysummarytype.md)
- [HKCharacteristicType](hkcharacteristictype.md)
- [HKSampleType](hksampletype.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)

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

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

# HKObjectType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.

## Declaration

```objectivec
@interface HKObjectType : NSObject
```

## Mentioned In

- [Saving data to HealthKit](saving-data-to-healthkit.md)
- [About the HealthKit framework](about-the-healthkit-framework.md)

<a id="overview"></a>

## Overview

The `HKObjectType` class is an abstract class. Don’t instantiate an `HKObjectType` object directly. Instead, instantiate one of the following concrete subclasses:

- [HKActivitySummaryType](hkactivitysummarytype.md)
- [HKCategoryType](hkcategorytype.md)
- [HKCorrelationType](hkcorrelationtype.md)
- [HKCharacteristicType](hkcharacteristictype.md)
- [HKDocumentType](hkdocumenttype.md)
- [HKQuantityType](hkquantitytype.md)
- [HKSeriesType](hkseriestype.md)
- [HKWorkoutType](hkworkouttype.md)

The `HKObjectType` class provides a convenience method to create each of these subclasses.

<a id="Work-with-Object-Types"></a>

### Work with Object Types

Like many HealthKit classes, HealthKit object types aren’t extensible. Don’t subclass these classes.

Additionally, wherever possible, this class uses a single instance to represent all copies of the same type. For example, if you make two calls to the [quantityTypeForIdentifier:](hkobjecttype/quantitytype%28foridentifier_%29.md) method with the same identifier, the system returns the same instance. Reusing object types helps reduce HealthKit’s overall memory usage.

## Topics

### Creating quantity types

- [quantityTypeForIdentifier:](hkobjecttype/quantitytype%28foridentifier_%29.md): Deprecated. Returns the shared quantity type for the provided identifier.
- [HKQuantityTypeIdentifier](hkquantitytypeidentifier.md): The identifiers that create quantity type objects.

### Creating category types

- [categoryTypeForIdentifier:](hkobjecttype/categorytype%28foridentifier_%29.md): Deprecated. Returns the shared category type for the provided identifier.
- [HKCategoryTypeIdentifier](hkcategorytypeidentifier.md): Identifiers for creating category types.

### Creating characteristic types

- [characteristicTypeForIdentifier:](hkobjecttype/characteristictype%28foridentifier_%29.md): Deprecated. Returns the shared characteristic type for the provided identifier.
- [HKCharacteristicTypeIdentifier](hkcharacteristictypeidentifier.md): The identifiers that create characteristic type objects.

### Creating correlation types

- [correlationTypeForIdentifier:](hkobjecttype/correlationtype%28foridentifier_%29.md): Deprecated. Returns the shared correlation type for the provided identifier.
- [HKCorrelationTypeIdentifier](hkcorrelationtypeidentifier.md): The identifiers that create correlation type objects.

### Creating workout types

- [workoutType](hkobjecttype/workouttype%28%29.md): Returns the shared [HKWorkoutType](hkworkouttype.md) object.

### Creating activity summary types

- [activitySummaryType](hkobjecttype/activitysummarytype%28%29.md): Returns the shared activity summary type.

### Creating electrocardiogram types

- [electrocardiogramType](hkobjecttype/electrocardiogramtype%28%29.md): Returns the shared electrocardiogram type.

### Creating audiogram sample types

- [audiogramSampleType](hkobjecttype/audiogramsampletype%28%29.md): Returns an audiogram sample type.

### Creating vision prescription types

- [visionPrescriptionType](hkobjecttype/visionprescriptiontype%28%29.md): Returns a shared vision prescription type object.

### Creating clinical record types

- [clinicalTypeForIdentifier:](hkobjecttype/clinicaltype%28foridentifier_%29.md): Deprecated. Returns the shared clinical type for the provided identifier.

### Creating series types

- [seriesTypeForIdentifier:](hkobjecttype/seriestype%28foridentifier_%29.md): Returns the shared series type for the provided identifier.

### Creating document types

- [documentTypeForIdentifier:](hkobjecttype/documenttype%28foridentifier_%29.md): Deprecated. Returns the shared document type for the provided identifier.
- [HKDocumentTypeIdentifier](hkdocumenttypeidentifier.md): The identifiers for documents.

### Getting property data

- [identifier](hkobjecttype/identifier.md): A unique string identifying the HealthKit object type.
- [requiresPerObjectAuthorization](hkobjecttype/requiresperobjectauthorization%28%29.md): Returns a Boolean that indicates whether the data type requires per-object authorization.

### Type Methods

- [medicationDoseEventType](hkobjecttype/medicationdoseeventtype%28%29.md)
- [scoredAssessmentTypeForIdentifier:](hkobjecttype/scoredassessmenttypeforidentifier_.md)
- [stateOfMindType](hkobjecttype/stateofmindtype%28%29.md)
- [userAnnotatedMedicationType](hkobjecttype/userannotatedmedicationtype%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKActivitySummaryType](hkactivitysummarytype.md)
- [HKCharacteristicType](hkcharacteristictype.md)
- [HKSampleType](hksampletype.md)
- [HKUserAnnotatedMedicationType](hkuserannotatedmedicationtype.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.
