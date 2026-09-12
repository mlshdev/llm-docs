> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srreader/deletionrecords(matching:)](https://developer.apple.com/documentation/sensorkit/srreader/deletionrecords(matching:))

# deletionRecords(matching:)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Fetches sensor data based on the provided request parameters. The reader must be authorized for the sensor for this to succeed.

## Declaration

```swift
final func deletionRecords(matching request: SRFetchRequest) -> some AsyncSequence<SRFetchResponse<SRDeletionRecord>, any Error>

```

## Parameters

- `request`: An `SRFetchRequest` specifying the data range, filters, and other fetch parameters

<a id="return-value"></a>

## Return Value

An `AsyncSequence` that yields `SRFetchResponse<SRDeletionRecord>` objects.

<a id="discussion"></a>

## Discussion

Creates an asynchronous stream of deletion records. The stream continues to yield data until the fetch request is complete, an error occurs, or the stream is cancelled.

<a id="Example"></a>

## Example

```swift
let fetchRequest = SRFetchRequest()
for try await response in visitsReader.deletionRecords(matching: fetchRequest) {
    switch response.sample {
    case .success(let sample):
        print("Start Time:\(sample.startTime)")
        print("Reason \(sample.reason)")
    case .failure(let error):
        print("Error decoding sample: \(error)")
    }
}
```

<a id="Cancellation"></a>

## Cancellation

The stream can be cancelled by breaking out of the iteration loop or by the system when the reader is deallocated. Cancellation stops the fetch operation gracefully.
