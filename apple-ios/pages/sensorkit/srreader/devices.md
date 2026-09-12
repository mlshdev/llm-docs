> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srreader/devices](https://developer.apple.com/documentation/sensorkit/srreader/devices)

# devices

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Returns device information for all devices that have stored data for the given sensor in SensorKit

## Declaration

```swift
final var devices: [SRDevice] { get async throws }
```

<a id="return-value"></a>

## Return Value

An array of `SRDevice` objects representing available sensor devices

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the request failed

<a id="Example"></a>

## Example

```swift
do {
    let devices = try await reader.devices
    for device in devices {
        print("Device: \(device.name), Model: \(device.model)")
    }
} catch {
    print("Failed to fetch devices: \(error)")
}
```
