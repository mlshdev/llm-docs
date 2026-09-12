> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram)

# HKElectrocardiogram (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A sample for electrocardiogram data.

## Declaration

```swift
class HKElectrocardiogram
```

<a id="overview"></a>

## Overview

An [HKElectrocardiogram](hkelectrocardiogram.md) is a collection of voltage values representing waveforms from one or more leads. The [HKElectrocardiogram](hkelectrocardiogram.md) sample provides high-level details about the ECG reading, such as the sampling frequency or classification. HealthKit provides read-only access to electrocardiogram (ECG) data saved by Apple Watch.

You can query for [HKElectrocardiogram](hkelectrocardiogram.md) samples using an [HKSampleQuery](hksamplequery.md).

```swift
// Create the electrocardiogram sample type.
let ecgType = HKObjectType.electrocardiogramType()

// Query for electrocardiogram samples
let ecgQuery = HKSampleQuery(sampleType: ecgType,
                             predicate: nil,
                             limit: HKObjectQueryNoLimit,
                             sortDescriptors: nil) { (query, samples, error) in
    if let error = error {
        // Handle the error here.
        fatalError("*** An error occurred \(error.localizedDescription) ***")
    }
    
    guard let ecgSamples = samples as? [HKElectrocardiogram] else {
        fatalError("*** Unable to convert \(String(describing: samples)) to [HKElectrocardiogram] ***")
    }
    
    for sample in ecgSamples {
        // Handle the samples here.
        
    }
}

// Execute the query.
healthStore.execute(ecgQuery)
```

After retrieving an [HKElectrocardiogram](hkelectrocardiogram.md) sample, you can access the voltage measurements associated with the sample use an [HKElectrocardiogramQuery](hkelectrocardiogramquery.md) query.

```swift
// Create a query for the voltage measurements
let voltageQuery = HKElectrocardiogramQuery(ecgSample) { (query, result) in
    switch(result) {
    
    case .measurement(let measurement):
        if let voltageQuantity = measurement.quantity(for: .appleWatchSimilarToLeadI) {
            // Do something with the voltage quantity here.

        }
    
    case .done:
        // No more voltage measurements. Finish processing the existing measurements.

    case .error(let error):
        // Handle the error here.

    }
}

// Execute the query.
healthStore.execute(voltageQuery)
```

## Topics

### Accessing Overview Information

- [classification](hkelectrocardiogram/classification-swift.property.md): The ECG’s classification.
- [HKElectrocardiogram.Classification](hkelectrocardiogram/classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.
- [averageHeartRate](hkelectrocardiogram/averageheartrate.md): The user’s average heart rate during the ECG.
- [symptomsStatus](hkelectrocardiogram/symptomsstatus-swift.property.md): A value that indicates whether the user entered a symptom when they recorded the ECG.
- [HKElectrocardiogram.SymptomsStatus](hkelectrocardiogram/symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.

### Accessing Voltage Measurements

- [numberOfVoltageMeasurements](hkelectrocardiogram/numberofvoltagemeasurements.md): The number of voltage measurements associated with this sample.
- [samplingFrequency](hkelectrocardiogram/samplingfrequency.md): The frequency at which the Apple Watch sampled the voltage.
- [HKElectrocardiogram.VoltageMeasurement](hkelectrocardiogram/voltagemeasurement.md): The voltage for all leads at a single point in time.
- [HKElectrocardiogram.Lead](hkelectrocardiogram/lead.md): The lead used to record a voltage measurement.

### Specifying Metadata

- [HKMetadataKeyAppleECGAlgorithmVersion](hkmetadatakeyappleecgalgorithmversion.md): A key for metadata indicating the version number of the algorithm Apple Watch uses to generate an ECG reading.
- [HKAppleECGAlgorithmVersion](hkappleecgalgorithmversion.md): Version numbers for the algorithm Apple Watch uses to generate an ECG reading.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathECGClassification](hkpredicatekeypathecgclassification.md): The key path for the sample’s classification.
- [HKPredicateKeyPathECGSymptomsStatus](hkpredicatekeypathecgsymptomsstatus.md): The key path for the sample’s symptom status.
- [HKPredicateKeyPathAverageHeartRate](hkpredicatekeypathaverageheartrate.md): The key path for the sample’s average heart rate.

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Electrocardiograms

- [HKElectrocardiogram.VoltageMeasurement](hkelectrocardiogram/voltagemeasurement.md): The voltage for all leads at a single point in time.

# HKElectrocardiogram (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A sample for electrocardiogram data.

## Declaration

```objectivec
@interface HKElectrocardiogram : HKSample
```

<a id="overview"></a>

## Overview

An [HKElectrocardiogram](hkelectrocardiogram.md) is a collection of voltage values representing waveforms from one or more leads. The [HKElectrocardiogram](hkelectrocardiogram.md) sample provides high-level details about the ECG reading, such as the sampling frequency or classification. HealthKit provides read-only access to electrocardiogram (ECG) data saved by Apple Watch.

You can query for [HKElectrocardiogram](hkelectrocardiogram.md) samples using an [HKSampleQuery](hksamplequery.md).

```swift
// Create the electrocardiogram sample type.
let ecgType = HKObjectType.electrocardiogramType()

// Query for electrocardiogram samples
let ecgQuery = HKSampleQuery(sampleType: ecgType,
                             predicate: nil,
                             limit: HKObjectQueryNoLimit,
                             sortDescriptors: nil) { (query, samples, error) in
    if let error = error {
        // Handle the error here.
        fatalError("*** An error occurred \(error.localizedDescription) ***")
    }
    
    guard let ecgSamples = samples as? [HKElectrocardiogram] else {
        fatalError("*** Unable to convert \(String(describing: samples)) to [HKElectrocardiogram] ***")
    }
    
    for sample in ecgSamples {
        // Handle the samples here.
        
    }
}

// Execute the query.
healthStore.execute(ecgQuery)
```

After retrieving an [HKElectrocardiogram](hkelectrocardiogram.md) sample, you can access the voltage measurements associated with the sample use an [HKElectrocardiogramQuery](hkelectrocardiogramquery.md) query.

```swift
// Create a query for the voltage measurements
let voltageQuery = HKElectrocardiogramQuery(ecgSample) { (query, result) in
    switch(result) {
    
    case .measurement(let measurement):
        if let voltageQuantity = measurement.quantity(for: .appleWatchSimilarToLeadI) {
            // Do something with the voltage quantity here.

        }
    
    case .done:
        // No more voltage measurements. Finish processing the existing measurements.

    case .error(let error):
        // Handle the error here.

    }
}

// Execute the query.
healthStore.execute(voltageQuery)
```

## Topics

### Accessing Overview Information

- [classification](hkelectrocardiogram/classification-swift.property.md): The ECG’s classification.
- [HKElectrocardiogramClassification](hkelectrocardiogram/classification-swift.enum.md): Classifications returned by Apple Watch’s ECG algorithm.
- [averageHeartRate](hkelectrocardiogram/averageheartrate.md): The user’s average heart rate during the ECG.
- [symptomsStatus](hkelectrocardiogram/symptomsstatus-swift.property.md): A value that indicates whether the user entered a symptom when they recorded the ECG.
- [HKElectrocardiogramSymptomsStatus](hkelectrocardiogram/symptomsstatus-swift.enum.md): Values indicating whether the user entered a symptom when they recorded the ECG.

### Accessing Voltage Measurements

- [numberOfVoltageMeasurements](hkelectrocardiogram/numberofvoltagemeasurements.md): The number of voltage measurements associated with this sample.
- [samplingFrequency](hkelectrocardiogram/samplingfrequency.md): The frequency at which the Apple Watch sampled the voltage.
- [HKElectrocardiogramVoltageMeasurement](hkelectrocardiogram/voltagemeasurement.md): The voltage for all leads at a single point in time.
- [HKElectrocardiogramLead](hkelectrocardiogram/lead.md): The lead used to record a voltage measurement.

### Specifying Metadata

- [HKMetadataKeyAppleECGAlgorithmVersion](hkmetadatakeyappleecgalgorithmversion.md): A key for metadata indicating the version number of the algorithm Apple Watch uses to generate an ECG reading.
- [HKAppleECGAlgorithmVersion](hkappleecgalgorithmversion.md): Version numbers for the algorithm Apple Watch uses to generate an ECG reading.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathECGClassification](hkpredicatekeypathecgclassification.md): The key path for the sample’s classification.
- [HKPredicateKeyPathECGSymptomsStatus](hkpredicatekeypathecgsymptomsstatus.md): The key path for the sample’s symptom status.
- [HKPredicateKeyPathAverageHeartRate](hkpredicatekeypathaverageheartrate.md): The key path for the sample’s average heart rate.

## Relationships

### Inherits From

- [HKSample](hksample.md)

## See Also

### Electrocardiograms

- [HKElectrocardiogramVoltageMeasurement](hkelectrocardiogram/voltagemeasurement.md): The voltage for all leads at a single point in time.
