> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srreader/startrecording()](https://developer.apple.com/documentation/sensorkit/srreader/startrecording())

# startRecording()

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Starts recording sensor data.

## Declaration

```swift
final func startRecording() async throws
```

<a id="discussion"></a>

## Discussion

The reader must be authorized for the sensor for this to succeed. This starts recording on this device and any paired devices. If other readers have already started the sensor recording this reader’s interest in recording will be maintained. Other readers in other apps for the same sensor will not affect the recording status of this reader.

> **Throws**

> An error if recording cannot be started due to permissions, hardware limitations, or other system restrictions

<a id="Example"></a>

## Example

```swift
do {
    try await reader.startRecording()
} catch {
    print("Failed to start recording: \(error)")
}
```
