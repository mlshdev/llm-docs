> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srreader/stoprecording()](https://developer.apple.com/documentation/sensorkit/srreader/stoprecording())

# stopRecording()

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Stops recording sensor data.

## Declaration

```swift
final func stopRecording() async throws
```

<a id="discussion"></a>

## Discussion

The reader must be authorized for the sensor for this to succeed. This stops recording on this device and any paired devices. Sensor recording will continue until the last interested reader has stopped recording.

> **Throws**

> An error if the stop operation fails

<a id="Example"></a>

## Example

```swift
do {
    try await reader.stopRecording()
} catch {
    print("Failed to stop recording: \(error)")
}
```
