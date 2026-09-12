> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srreader/samples(matching:)](https://developer.apple.com/documentation/sensorkit/srreader/samples(matching:))

# samples(matching:)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Fetches sensor data based on the provided request parameters. The reader must be authorized for the sensor for this to succeed.

## Declaration

```swift
final func samples(matching request: SRFetchRequest) -> some AsyncSequence<SRFetchResponse<Sensor.Sample>, any Error>

```

## Parameters

- `request`: An `SRFetchRequest` specifying the data range, filters, and other fetch parameters

<a id="return-value"></a>

## Return Value

An `AsyncSequence` that yields `SRFetchResponse<Sensor.Sample>` objects containing the sensor-specific data

<a id="discussion"></a>

## Discussion

Creates an asynchronous stream of sensor data responses. The stream continues to yield data until the fetch request is complete, an error occurs, or the stream is cancelled.

<a id="Example"></a>

## Example

```swift
for try await response in reader.samples(matching: request) {
    // Process each data sample
    switch response.sample {
    case .success(let sample):
        print("Sample data: \(sample)")
    case .failure(let error):
        print("Failed to decode sample: \(error)")
    }

    print("Timestamp: \(response.timestamp)")
}
```

<a id="Cancellation"></a>

## Cancellation

The stream can be cancelled by breaking out of the iteration loop or by the system when the reader is deallocated. Cancellation stops the fetch operation gracefully.
