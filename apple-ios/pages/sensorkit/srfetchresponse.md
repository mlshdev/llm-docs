> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srfetchresponse](https://developer.apple.com/documentation/sensorkit/srfetchresponse)

# SRFetchResponse

**Framework:** SensorKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A generic container that holds sensor data samples retrieved from SensorKit data streams.

## Declaration

```swift
struct SRFetchResponse<Sample>
```

<a id="overview"></a>

## Overview

`SRFetchResponse` is a type-safe container that wraps individual sensor data samples. It serves as the primary data delivery mechanism for sensor information retrieved through `SRReader.fetch(_:)` operations.

<a id="Usage-Example"></a>

## Usage Example

```swift
let request = SRFetchRequest()
for try await response in reader.fetch(request) {
    // Extract the sensor sample
    switch response.sample {
    case .success(let sample):
        print("Sample data: \(sample)")
    case .failure(let error):
        print("Failed to decode sample: \(error)")
    }

    // Get the timestamp when data was recorded
    let timestamp = response.timestamp()
    print("Recorded at: \(Date(timeIntervalSinceReferenceDate: timestamp))")
}
```

## Topics

### Instance Properties

- [sample](srfetchresponse/sample.md): Retrieves the sensor-specific data sample contained in this response.
- [sourceDevice](srfetchresponse/sourcedevice.md): The source of the sample data.
- [timestamp](srfetchresponse/timestamp.md): Retrieves the timestamp when the sensor sample was written to the data store.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
