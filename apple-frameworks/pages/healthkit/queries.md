> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/queries](https://developer.apple.com/documentation/healthkit/queries)

# Queries (Swift)

**Framework:** HealthKit  
**Kind:** API Collection

Query health and fitness data.

<a id="overview"></a>

## Overview

Use queries to read sample data from the HealthKit store. You can also use queries to list all the sources for a particular data type, or to perform statistical calculations for a data type. For example, statistical queries can calculate the minimum and maximum heart rate for a given week, or the total step count for a given day.

You run a query by calling the HealthKit store’s [execute(\_:)](hkhealthstore/execute%28__%29.md) method. HealthKit returns a snapshot of the current results to the query’s results handler. Long-running queries continue to monitor the HealthKit store, and return any relevant changes to the query’s update handler. To return sorted or filtered results, give the query a sort descriptor or predicate.

## Topics

### Essentials

- [Reading data from HealthKit](reading-data-from-healthkit.md): Use queries to request sample data from HealthKit.

### Swift concurrency support

- [Running Queries with Swift Concurrency](running-queries-with-swift-concurrency.md): Use Swift concurrency to manage one-shot and long-running queries.
- [HKAsyncQuery](hkasyncquery.md): A protocol that defines an asynchronous method for running queries.
- [HKAsyncSequenceQuery](hkasyncsequencequery.md): A protocol that defines a method for running queries that returns results using an asynchronous sequence.
- [HKSamplePredicate](hksamplepredicate.md): A predicate for queries that return a collection of matching sample objects.

### Basic queries

- [HKSampleQueryDescriptor](hksamplequerydescriptor.md): A query interface that reads samples using Swift concurrency.
- [HKSampleQuery](hksamplequery.md): A general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.
- [HKCorrelationQuery](hkcorrelationquery.md): A query that performs complex searches based on the correlation’s contents, and returns a snapshot of all matching samples.
- [HKQueryDescriptor](hkquerydescriptor.md): A descriptor that specifies a set of samples based on the data type and a predicate.
- [HKQuery](hkquery.md): An abstract class for all the query classes in HealthKit.

### Series queries

- [HKQuantitySeriesSampleQueryDescriptor](hkquantityseriessamplequerydescriptor.md): A query interface that reads the series data associated with quantity samples using Swift concurrency.
- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.
- [HKWorkoutRouteQueryDescriptor](hkworkoutroutequerydescriptor.md): A query interface that reads the location data stored in a workout route using Swift concurrency.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKHeartbeatSeriesQueryDescriptor](hkheartbeatseriesquerydescriptor.md): A query interface that reads the heartbeat series data stored in a heartbeat sample using Swift concurrency.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKElectrocardiogramQueryDescriptor](hkelectrocardiogramquerydescriptor.md): A query interface that reads the underlying voltage measurements for an electrocardiogram sample using Swift concurrency.
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md): A query that returns the underlying voltage measurements for an electrocardiogram sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)

### Long-running queries

- [HKActivitySummaryQueryDescriptor](hkactivitysummaryquerydescriptor.md): A query interface that reads activity summaries using Swift concurrency.
- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKAnchoredObjectQueryDescriptor](hkanchoredobjectquerydescriptor.md): A query interface that runs anchored object queries using Swift concurrency.
- [HKAnchoredObjectQuery](hkanchoredobjectquery.md): A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.
- [HKObserverQuery](hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.

### Sources and devices

- [HKSourceQueryDescriptor](hksourcequerydescriptor.md): A query interface that uses Swift concurrency to read the apps and devices that produced the matching samples.
- [HKSourceRevision](hksourcerevision.md): An object indicating the source of a HealthKit sample.
- [HKSource](hksource.md): An object indicating the app or device that created a HealthKit sample
- [HKDevice](hkdevice.md): A device that generates data for HealthKit.
- [HKSourceQuery](hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.

### Statistics

- [Executing Statistical Queries](executing-statistical-queries.md): Create and run statistical queries.
- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md): Calculate statistical data for graphs and charts.
- [HKStatisticsQueryDescriptor](hkstatisticsquerydescriptor.md): A query descriptor that calculates the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsQuery](hkstatisticsquery.md): A query that performs statistical calculations over a set of matching quantity samples, and returns the results.
- [HKStatisticsCollectionQueryDescriptor](hkstatisticscollectionquerydescriptor.md): A query descriptor that gathers a collection of statistics calculated over a series of fixed-length time intervals.
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md): A query that performs multiple statistics queries over a series of fixed-length time intervals.
- [HKStatistics](hkstatistics.md): An object that represents the result of calculating the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsCollection](hkstatisticscollection.md): An object that manages a collection of statistics, representing the results calculated over separate time intervals.
- [HKStatisticsOptions](hkstatisticsoptions.md): Options for specifying the statistic to calculate.

### Clinical record queries

- [HKVerifiableClinicalRecordQueryDescriptor](hkverifiableclinicalrecordquerydescriptor.md): A query interface that provides one-time access to a SMART Health Card or EU Digital COVID Certificate using Swift concurrency.
- [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md): A query for one-time access to a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSourceType](hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [HKVerifiableClinicalRecordCredentialType](hkverifiableclinicalrecordcredentialtype.md): The type of record returned by a verifiable clinical record query.
- [HKDocumentQuery](hkdocumentquery.md): A query that returns a snapshot of all matching documents currently saved in the HealthKit store.

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
- [HKMedicationGeneralForm](hkmedicationgeneralform.md): The manufactured form of a medication.
- [HKUserAnnotatedMedicationQueryDescriptor](hkuserannotatedmedicationquerydescriptor.md)

## See Also

### Health data

- [Saving data to HealthKit](saving-data-to-healthkit.md): Create and share HealthKit samples.
- [Reading data from HealthKit](reading-data-from-healthkit.md): Use queries to request sample data from HealthKit.
- [HKHealthStore](hkhealthstore.md): The access point for all data managed by HealthKit.
- [Creating a Mobility Health App](creating-a-mobility-health-app.md): Create a health app that allows a clinical care team to send and receive mobility data.
- [Data types](data-types.md): Specify the kind of data used in HealthKit.
- [Samples](samples.md): Create and save health and fitness samples.
- [Visualizing HealthKit State of Mind in visionOS](visualizing-healthkit-state-of-mind-in-visionos.md): Incorporate HealthKit State of Mind into your app and visualize the data in visionOS.
- [Logging symptoms associated with a medication](logging-symptoms-associated-with-a-medication.md): Fetch medications and dose events from the HealthKit store, and create symptom samples to associate with them.

# Queries (Objective-C)

**Framework:** HealthKit  
**Kind:** API Collection

Query health and fitness data.

<a id="overview"></a>

## Overview

Use queries to read sample data from the HealthKit store. You can also use queries to list all the sources for a particular data type, or to perform statistical calculations for a data type. For example, statistical queries can calculate the minimum and maximum heart rate for a given week, or the total step count for a given day.

You run a query by calling the HealthKit store’s [executeQuery:](hkhealthstore/execute%28__%29.md) method. HealthKit returns a snapshot of the current results to the query’s results handler. Long-running queries continue to monitor the HealthKit store, and return any relevant changes to the query’s update handler. To return sorted or filtered results, give the query a sort descriptor or predicate.

## Topics

### Essentials

- [Reading data from HealthKit](reading-data-from-healthkit.md): Use queries to request sample data from HealthKit.

### Swift concurrency support

- [Running Queries with Swift Concurrency](running-queries-with-swift-concurrency.md): Use Swift concurrency to manage one-shot and long-running queries.

### Basic queries

- [HKSampleQuery](hksamplequery.md): A general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.
- [HKCorrelationQuery](hkcorrelationquery.md): A query that performs complex searches based on the correlation’s contents, and returns a snapshot of all matching samples.
- [HKQueryDescriptor](hkquerydescriptor.md): A descriptor that specifies a set of samples based on the data type and a predicate.
- [HKQuery](hkquery.md): An abstract class for all the query classes in HealthKit.

### Series queries

- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.
- [HKHeartbeatSeriesQuery](hkheartbeatseriesquery.md): A query that returns the heartbeat data contained in a heartbeat series sample.
- [HKElectrocardiogramQuery](hkelectrocardiogramquery.md): A query that returns the underlying voltage measurements for an electrocardiogram sample.
- [HKWorkoutEffortRelationship](hkworkouteffortrelationship.md)
- [HKWorkoutEffortRelationshipQuery](hkworkouteffortrelationshipquery.md)

### Long-running queries

- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKAnchoredObjectQuery](hkanchoredobjectquery.md): A query that returns changes to the HealthKit store, including a snapshot of new changes and continuous monitoring as a long-running query.
- [HKObserverQuery](hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.

### Sources and devices

- [HKSourceRevision](hksourcerevision.md): An object indicating the source of a HealthKit sample.
- [HKSource](hksource.md): An object indicating the app or device that created a HealthKit sample
- [HKDevice](hkdevice.md): A device that generates data for HealthKit.
- [HKSourceQuery](hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.

### Statistics

- [Executing Statistical Queries](executing-statistical-queries.md): Create and run statistical queries.
- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md): Calculate statistical data for graphs and charts.
- [HKStatisticsQuery](hkstatisticsquery.md): A query that performs statistical calculations over a set of matching quantity samples, and returns the results.
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md): A query that performs multiple statistics queries over a series of fixed-length time intervals.
- [HKStatistics](hkstatistics.md): An object that represents the result of calculating the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsCollection](hkstatisticscollection.md): An object that manages a collection of statistics, representing the results calculated over separate time intervals.
- [HKStatisticsOptions](hkstatisticsoptions.md): Options for specifying the statistic to calculate.

### Clinical record queries

- [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md): A query for one-time access to a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSourceType](hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [HKVerifiableClinicalRecordCredentialType](hkverifiableclinicalrecordcredentialtype.md): The type of record returned by a verifiable clinical record query.
- [HKDocumentQuery](hkdocumentquery.md): A query that returns a snapshot of all matching documents currently saved in the HealthKit store.

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
- [HKMedicationGeneralForm](hkmedicationgeneralform.md): The manufactured form of a medication.

## See Also

### Health data

- [Saving data to HealthKit](saving-data-to-healthkit.md): Create and share HealthKit samples.
- [Reading data from HealthKit](reading-data-from-healthkit.md): Use queries to request sample data from HealthKit.
- [HKHealthStore](hkhealthstore.md): The access point for all data managed by HealthKit.
- [Data types](data-types.md): Specify the kind of data used in HealthKit.
- [Samples](samples.md): Create and save health and fitness samples.
- [Visualizing HealthKit State of Mind in visionOS](visualizing-healthkit-state-of-mind-in-visionos.md): Incorporate HealthKit State of Mind into your app and visualize the data in visionOS.
- [Logging symptoms associated with a medication](logging-symptoms-associated-with-a-medication.md): Fetch medications and dose events from the HealthKit store, and create symptom samples to associate with them.
