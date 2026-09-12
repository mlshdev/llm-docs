> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srreader/init(sensor:)](https://developer.apple.com/documentation/sensorkit/srreader/init(sensor:))

# init(sensor:)

**Framework:** SensorKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a new sensor reader for the specified sensor type.

## Declaration

```swift
init(sensor: Sensor) throws
```

## Parameters

- `sensor`: The sensor type to create a reader for (e.g., `.wristTemperature`, `.heartRate`)

<a id="return-value"></a>

## Return Value

A new `SRReader` instance

<a id="discussion"></a>

## Discussion

This initializer attempts to create a reader for the given sensor.

> **Throws**

> An error if cannot create reader due to hardware limitations or internal error

<a id="Example"></a>

## Example

```swift
do {
    let reader = try SRReader(sensor: .wristTemperature)
} catch {
    NSLog("Failed to create reader: \(error)")
    return
}
```
