> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery](https://developer.apple.com/documentation/healthkit/hkquery)

# HKQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class for all the query classes in HealthKit.

## Declaration

```swift
class HKQuery
```

## Mentioned In

- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md)

<a id="overview"></a>

## Overview

The [HKQuery](hkquery.md) class is the basis for all the query objects that retrieve data from the HealthKit store. The [HKQuery](hkquery.md) class is an abstract class. You should never instantiate it directly. Instead, you always work with one of its concrete subclasses.

<a id="Filter-queries-using-predicates"></a>

### Filter queries using predicates

All the concrete `HKQuery` subclasses take a predicate. You can use this predicate to filter the samples returned by the query. When HealthKit runs a query, it converts the predicate to SQL and executes the SQL on the underlying store. This has two important side effects.

- Predicates improve the performance of your query, both in terms of speed and memory usage. Because the store executes the predicate, it restricts the number of HealthKit objects that it instantiates and returns.
- Since the store executes these predicates, it limits the type of predicates that you can use. Specifically, HealthKit provides several predicate key paths (for example, [HKPredicateKeyPathUUID](hkpredicatekeypathuuid.md) and [HKPredicateKeyPathMetadata](hkpredicatekeypathmetadata.md)). You can create predicates using only these key paths.

## Topics

### Accessing properties

- [predicate](hkquery/predicate.md): A predicate used to filter the objects returned from the HealthKit store.
- [objectType](hkquery/objecttype.md): The type of objects being queried.
- [sampleType](hkquery/sampletype.md): Deprecated. The type of objects being queried.

### Creating object predicates

- [predicateForObject(with:)](hkquery/predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjects(with:)](hkquery/predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjects(from:)](hkquery/predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjects(from:)](hkquery/predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjects(from:)](hkquery/predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjects(withDeviceProperty:allowedValues:)](hkquery/predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjects(from:)](hkquery/predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjects(withMetadataKey:)](hkquery/predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjects(withMetadataKey:allowedValues:)](hkquery/predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjects(withMetadataKey:operatorType:value:)](hkquery/predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation()](hkquery/predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.

### Creating sample predicates

- [predicateForSamples(withStart:end:options:)](hkquery/predicateforsamples%28withstart_end_options_%29.md): Returns a predicate for samples whose start and end dates fall within the specified time interval.
- [HKQueryOptions](hkqueryoptions.md): Constants that describe how a sample’s time period overlaps with the target time period.

### Creating quantity sample predicates

- [predicateForQuantitySamples(with:quantity:)](hkquery/predicateforquantitysamples%28with_quantity_%29.md): Returns a predicate that matches samples based on the target quantity.

### Creating category sample predicates

- [predicateForCategorySamples(with:value:)](hkquery/predicateforcategorysamples%28with_value_%29.md): Deprecated. Returns a predicate that checks a category sample’s value.
- [HKCategoryValuePredicateProviding](hkcategoryvaluepredicateproviding.md): A protocol for objects that produce predicates that match category value samples.

### Creating clinical record predicates

- [predicateForClinicalRecords(from:fhirResourceType:identifier:)](hkquery/predicateforclinicalrecords%28from_fhirresourcetype_identifier_%29.md): Returns a predicate for a specific FHIR resource.
- [predicateForClinicalRecords(withFHIRResourceType:)](hkquery/predicateforclinicalrecords%28withfhirresourcetype_%29.md): Returns a predicate for a specific FHIR type.
- [predicateForVerifiableClinicalRecords(withRelevantDateWithin:)](hkquery/predicateforverifiableclinicalrecords%28withrelevantdatewithin_%29.md): Returns a predicate that finds verifiable health records with a relevant date within the specified range.

### Creating workout predicates

- [predicateForObjects(from:)](hkquery/predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkouts(with:)](hkquery/predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkouts(activityPredicate:)](hkquery/predicateforworkouts%28activitypredicate_%29.md): Returns a predicate for matching workouts based on the associated workout activities.
- [predicateForWorkouts(with:duration:)](hkquery/predicateforworkouts%28with_duration_%29.md): Returns a predicate for matching workouts based on their duration.
- [predicateForWorkouts(operatorType:quantityType:averageQuantity:)](hkquery/predicateforworkouts%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workouts based the average value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:maximumQuantity:)](hkquery/predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:minimumQuantity:)](hkquery/predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:sumQuantity:)](hkquery/predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkouts(with:totalDistance:)](hkquery/predicateforworkouts%28with_totaldistance_%29.md): Deprecated. Returns a predicate for matching workouts based on the total distance traveled.
- [predicateForWorkouts(with:totalEnergyBurned:)](hkquery/predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkouts(with:totalFlightsClimbed:)](hkquery/predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkouts(with:totalSwimmingStrokeCount:)](hkquery/predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.

### Creating workout activity predicates

- [predicateForWorkoutActivities(workoutActivityType:)](hkquery/predicateforworkoutactivities%28workoutactivitytype_%29.md): Returns a predicate for workout activities based on the type of activity performed.
- [predicateForWorkoutActivities(operatorType:duration:)](hkquery/predicateforworkoutactivities%28operatortype_duration_%29.md): Returns a predicate for matching workout activities based on their duration.
- [predicateForWorkoutActivities(start:end:options:)](hkquery/predicateforworkoutactivities%28start_end_options_%29.md): Returns a predicate for workout activities that occur between the start and end date.
- [predicateForWorkoutActivities(operatorType:quantityType:averageQuantity:)](hkquery/predicateforworkoutactivities%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workout activities based the average value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:maximumQuantity:)](hkquery/predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:minimumQuantity:)](hkquery/predicateforworkoutactivities%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:sumQuantity:)](hkquery/predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.

### Creating activity summary predicates

- [predicateForActivitySummary(with:)](hkquery/predicateforactivitysummary%28with_%29.md): Returns a predicate that matches the activity summary for the specified day.
- [predicate(forActivitySummariesBetweenStart:end:)](hkquery/predicate%28foractivitysummariesbetweenstart_end_%29.md): Returns a predicate for matching all the activity summaries that fall between the days identified by the start and end date components.

### Creating electrocardiogram predicates

- [predicateForElectrocardiograms(classification:)](hkquery/predicateforelectrocardiograms%28classification_%29.md): Returns a predicate that matches electrocardiogram samples with the specified classification.
- [predicateForElectrocardiograms(symptomsStatus:)](hkquery/predicateforelectrocardiograms%28symptomsstatus_%29.md): Returns a predicate that matches electrocardiogram samples with the specified symptom status.
- [predicateForObjectsAssociated(electrocardiogram:)](hkquery/predicateforobjectsassociated%28electrocardiogram_%29.md): Returns a predicate that matches symptom samples associated with the specified electrocardiogram.

### Creating predicate format strings

Use these keys when creating a predicate format string.

- [Predicate format strings](predicate-format-strings.md): Formatting strings for creating predicates.

### Creating sort descriptors

- [HealthKit sort descriptors](healthkit-sort-descriptors.md): Identifiers for sorting results.

### Type Methods

- [predicateForMedicationDoseEvent(medicationConceptIdentifier:)](hkquery/predicateformedicationdoseevent%28medicationconceptidentifier_%29.md)
- [predicateForMedicationDoseEvent(medicationConceptIdentifiers:)](hkquery/predicateformedicationdoseevent%28medicationconceptidentifiers_%29.md)
- [predicateForMedicationDoseEvent(scheduledDate:)](hkquery/predicateformedicationdoseevent%28scheduleddate_%29.md)
- [predicateForMedicationDoseEvent(scheduledDates:)](hkquery/predicateformedicationdoseevent%28scheduleddates_%29.md)
- [predicateForMedicationDoseEvent(scheduledStart:end:)](hkquery/predicateformedicationdoseevent%28scheduledstart_end_%29.md)
- [predicateForMedicationDoseEvent(status:)](hkquery/predicateformedicationdoseevent%28status_%29.md)
- [predicateForMedicationDoseEvent(statuses:)](hkquery/predicateformedicationdoseevent%28statuses_%29.md)
- [predicateForStatesOfMind(with:)](hkquery/predicateforstatesofmind%28with_%29-3iyym.md)
- [predicateForStatesOfMind(with:)](hkquery/predicateforstatesofmind%28with_%29-6obe4.md)
- [predicateForStatesOfMind(with:)](hkquery/predicateforstatesofmind%28with_%29-9fny6.md)
- [predicateForStatesOfMind(withValence:operatorType:)](hkquery/predicateforstatesofmind%28withvalence_operatortype_%29.md)
- [predicateForUserAnnotatedMedications(hasSchedule:)](hkquery/predicateforuserannotatedmedications%28hasschedule_%29.md)
- [predicateForUserAnnotatedMedications(isArchived:)](hkquery/predicateforuserannotatedmedications%28isarchived_%29.md)
- [predicateForWorkoutEffortSamplesRelated(workout:activity:)](hkquery/predicateforworkouteffortsamplesrelated%28workout_activity_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKActivitySummaryQuery](hkactivitysummaryquery.md)
- [HKAnchoredObjectQuery](hkanchoredobjectquery.md)
- [HKCorrelationQuery](hkcorrelationquery.md)
- [HKDocumentQuery](hkdocumentquery.md)
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md)
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md)
- [HKObserverQuery](hkobserverquery.md)
- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md)
- [HKSampleQuery](hksamplequery.md)
- [HKSourceQuery](hksourcequery.md)
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md)
- [HKStatisticsQuery](hkstatisticsquery.md)
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)
- [HKWorkoutRouteQuery](hkworkoutroutequery.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKAnchoredObjectQuery](hkanchoredobjectquery.md): A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.
- [HKDocumentQuery](hkdocumentquery.md): A query that returns a snapshot of all matching documents currently saved in the HealthKit store.
- [HKObserverQuery](hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.
- [HKSourceQuery](hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.
- [HKStatisticsQuery](hkstatisticsquery.md): A query that performs statistical calculations over a set of matching quantity samples, and returns the results.
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md): A query that performs multiple statistics queries over a series of fixed-length time intervals.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.

### Basic queries

- [HKSampleQueryDescriptor](hksamplequerydescriptor.md): A query interface that reads samples using Swift concurrency.
- [HKSampleQuery](hksamplequery.md): A general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.
- [HKCorrelationQuery](hkcorrelationquery.md): A query that performs complex searches based on the correlation’s contents, and returns a snapshot of all matching samples.
- [HKQueryDescriptor](hkquerydescriptor.md): A descriptor that specifies a set of samples based on the data type and a predicate.

# HKQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class for all the query classes in HealthKit.

## Declaration

```objectivec
@interface HKQuery : NSObject
```

## Mentioned In

- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md)

<a id="overview"></a>

## Overview

The [HKQuery](hkquery.md) class is the basis for all the query objects that retrieve data from the HealthKit store. The [HKQuery](hkquery.md) class is an abstract class. You should never instantiate it directly. Instead, you always work with one of its concrete subclasses.

<a id="Filter-queries-using-predicates"></a>

### Filter queries using predicates

All the concrete `HKQuery` subclasses take a predicate. You can use this predicate to filter the samples returned by the query. When HealthKit runs a query, it converts the predicate to SQL and executes the SQL on the underlying store. This has two important side effects.

- Predicates improve the performance of your query, both in terms of speed and memory usage. Because the store executes the predicate, it restricts the number of HealthKit objects that it instantiates and returns.
- Since the store executes these predicates, it limits the type of predicates that you can use. Specifically, HealthKit provides several predicate key paths (for example, [HKPredicateKeyPathUUID](hkpredicatekeypathuuid.md) and [HKPredicateKeyPathMetadata](hkpredicatekeypathmetadata.md)). You can create predicates using only these key paths.

## Topics

### Accessing properties

- [predicate](hkquery/predicate.md): A predicate used to filter the objects returned from the HealthKit store.
- [objectType](hkquery/objecttype.md): The type of objects being queried.
- [sampleType](hkquery/sampletype.md): Deprecated. The type of objects being queried.

### Creating object predicates

- [predicateForObjectWithUUID:](hkquery/predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjectsWithUUIDs:](hkquery/predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjectsFromSource:](hkquery/predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjectsFromSources:](hkquery/predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjectsFromDevices:](hkquery/predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjectsWithDeviceProperty:allowedValues:](hkquery/predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjectsFromSourceRevisions:](hkquery/predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjectsWithMetadataKey:](hkquery/predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjectsWithMetadataKey:allowedValues:](hkquery/predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjectsWithMetadataKey:operatorType:value:](hkquery/predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation](hkquery/predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.

### Creating sample predicates

- [predicateForSamplesWithStartDate:endDate:options:](hkquery/predicateforsamples%28withstart_end_options_%29.md): Returns a predicate for samples whose start and end dates fall within the specified time interval.
- [HKQueryOptions](hkqueryoptions.md): Constants that describe how a sample’s time period overlaps with the target time period.

### Creating quantity sample predicates

- [predicateForQuantitySamplesWithOperatorType:quantity:](hkquery/predicateforquantitysamples%28with_quantity_%29.md): Returns a predicate that matches samples based on the target quantity.

### Creating category sample predicates

- [predicateForCategorySamplesWithOperatorType:value:](hkquery/predicateforcategorysamples%28with_value_%29.md): Deprecated. Returns a predicate that checks a category sample’s value.
- [predicateForCategorySamplesEqualToValues:](hkquery/predicateforcategorysamplesequaltovalues_.md): A predicate that returns category samples with a matching value.

### Creating clinical record predicates

- [predicateForClinicalRecordsFromSource:FHIRResourceType:identifier:](hkquery/predicateforclinicalrecords%28from_fhirresourcetype_identifier_%29.md): Returns a predicate for a specific FHIR resource.
- [predicateForClinicalRecordsWithFHIRResourceType:](hkquery/predicateforclinicalrecords%28withfhirresourcetype_%29.md): Returns a predicate for a specific FHIR type.
- [predicateForVerifiableClinicalRecordsWithRelevantDateWithinDateInterval:](hkquery/predicateforverifiableclinicalrecords%28withrelevantdatewithin_%29.md): Returns a predicate that finds verifiable health records with a relevant date within the specified range.

### Creating workout predicates

- [predicateForObjectsFromWorkout:](hkquery/predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkoutsWithWorkoutActivityType:](hkquery/predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkoutsWithActivityPredicate:](hkquery/predicateforworkouts%28activitypredicate_%29.md): Returns a predicate for matching workouts based on the associated workout activities.
- [predicateForWorkoutsWithOperatorType:duration:](hkquery/predicateforworkouts%28with_duration_%29.md): Returns a predicate for matching workouts based on their duration.
- [predicateForWorkoutsWithOperatorType:quantityType:averageQuantity:](hkquery/predicateforworkouts%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workouts based the average value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:maximumQuantity:](hkquery/predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:minimumQuantity:](hkquery/predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:sumQuantity:](hkquery/predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:totalDistance:](hkquery/predicateforworkouts%28with_totaldistance_%29.md): Deprecated. Returns a predicate for matching workouts based on the total distance traveled.
- [predicateForWorkoutsWithOperatorType:totalEnergyBurned:](hkquery/predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkoutsWithOperatorType:totalFlightsClimbed:](hkquery/predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkoutsWithOperatorType:totalSwimmingStrokeCount:](hkquery/predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.

### Creating workout activity predicates

- [predicateForWorkoutActivitiesWithWorkoutActivityType:](hkquery/predicateforworkoutactivities%28workoutactivitytype_%29.md): Returns a predicate for workout activities based on the type of activity performed.
- [predicateForWorkoutActivitiesWithOperatorType:duration:](hkquery/predicateforworkoutactivities%28operatortype_duration_%29.md): Returns a predicate for matching workout activities based on their duration.
- [predicateForWorkoutActivitiesWithStartDate:endDate:options:](hkquery/predicateforworkoutactivities%28start_end_options_%29.md): Returns a predicate for workout activities that occur between the start and end date.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:averageQuantity:](hkquery/predicateforworkoutactivities%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workout activities based the average value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:maximumQuantity:](hkquery/predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:minimumQuantity:](hkquery/predicateforworkoutactivities%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:sumQuantity:](hkquery/predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.

### Creating activity summary predicates

- [predicateForActivitySummaryWithDateComponents:](hkquery/predicateforactivitysummary%28with_%29.md): Returns a predicate that matches the activity summary for the specified day.
- [predicateForActivitySummariesBetweenStartDateComponents:endDateComponents:](hkquery/predicate%28foractivitysummariesbetweenstart_end_%29.md): Returns a predicate for matching all the activity summaries that fall between the days identified by the start and end date components.

### Creating electrocardiogram predicates

- [predicateForElectrocardiogramsWithClassification:](hkquery/predicateforelectrocardiograms%28classification_%29.md): Returns a predicate that matches electrocardiogram samples with the specified classification.
- [predicateForElectrocardiogramsWithSymptomsStatus:](hkquery/predicateforelectrocardiograms%28symptomsstatus_%29.md): Returns a predicate that matches electrocardiogram samples with the specified symptom status.
- [predicateForObjectsAssociatedWithElectrocardiogram:](hkquery/predicateforobjectsassociated%28electrocardiogram_%29.md): Returns a predicate that matches symptom samples associated with the specified electrocardiogram.

### Creating predicate format strings

Use these keys when creating a predicate format string.

- [Predicate format strings](predicate-format-strings.md): Formatting strings for creating predicates.

### Creating sort descriptors

- [HealthKit sort descriptors](healthkit-sort-descriptors.md): Identifiers for sorting results.

### Type Methods

- [predicateForMedicationDoseEventWithMedicationConceptIdentifier:](hkquery/predicateformedicationdoseevent%28medicationconceptidentifier_%29.md)
- [predicateForMedicationDoseEventWithMedicationConceptIdentifiers:](hkquery/predicateformedicationdoseevent%28medicationconceptidentifiers_%29.md)
- [predicateForMedicationDoseEventWithScheduledDate:](hkquery/predicateformedicationdoseevent%28scheduleddate_%29.md)
- [predicateForMedicationDoseEventWithScheduledDates:](hkquery/predicateformedicationdoseevent%28scheduleddates_%29.md)
- [predicateForMedicationDoseEventWithScheduledStartDate:endDate:](hkquery/predicateformedicationdoseevent%28scheduledstart_end_%29.md)
- [predicateForMedicationDoseEventWithStatus:](hkquery/predicateformedicationdoseevent%28status_%29.md)
- [predicateForMedicationDoseEventWithStatuses:](hkquery/predicateformedicationdoseevent%28statuses_%29.md)
- [predicateForStatesOfMindWithLabel:](hkquery/predicateforstatesofmind%28with_%29-3iyym.md)
- [predicateForStatesOfMindWithKind:](hkquery/predicateforstatesofmind%28with_%29-6obe4.md)
- [predicateForStatesOfMindWithAssociation:](hkquery/predicateforstatesofmind%28with_%29-9fny6.md)
- [predicateForStatesOfMindWithValence:operatorType:](hkquery/predicateforstatesofmind%28withvalence_operatortype_%29.md)
- [predicateForUserAnnotatedMedicationsWithHasSchedule:](hkquery/predicateforuserannotatedmedications%28hasschedule_%29.md)
- [predicateForUserAnnotatedMedicationsWithIsArchived:](hkquery/predicateforuserannotatedmedications%28isarchived_%29.md)
- [predicateForWorkoutEffortSamplesRelatedToWorkout:activity:](hkquery/predicateforworkouteffortsamplesrelated%28workout_activity_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKActivitySummaryQuery](hkactivitysummaryquery.md)
- [HKAnchoredObjectQuery](hkanchoredobjectquery.md)
- [HKCorrelationQuery](hkcorrelationquery.md)
- [HKDocumentQuery](hkdocumentquery.md)
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md)
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md)
- [HKObserverQuery](hkobserverquery.md)
- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md)
- [HKSampleQuery](hksamplequery.md)
- [HKSourceQuery](hksourcequery.md)
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md)
- [HKStatisticsQuery](hkstatisticsquery.md)
- [HKUserAnnotatedMedicationQuery](hkuserannotatedmedicationquery.md)
- [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)
- [HKWorkoutRouteQuery](hkworkoutroutequery.md)

## See Also

### Related Documentation

- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKAnchoredObjectQuery](hkanchoredobjectquery.md): A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.
- [HKDocumentQuery](hkdocumentquery.md): A query that returns a snapshot of all matching documents currently saved in the HealthKit store.
- [HKObserverQuery](hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.
- [HKSourceQuery](hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.
- [HKStatisticsQuery](hkstatisticsquery.md): A query that performs statistical calculations over a set of matching quantity samples, and returns the results.
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md): A query that performs multiple statistics queries over a series of fixed-length time intervals.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.

### Basic queries

- [HKSampleQuery](hksamplequery.md): A general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.
- [HKCorrelationQuery](hkcorrelationquery.md): A query that performs complex searches based on the correlation’s contents, and returns a snapshot of all matching samples.
- [HKQueryDescriptor](hkquerydescriptor.md): A descriptor that specifies a set of samples based on the data type and a predicate.
