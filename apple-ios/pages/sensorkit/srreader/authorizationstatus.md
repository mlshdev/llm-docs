> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srreader/authorizationstatus](https://developer.apple.com/documentation/sensorkit/srreader/authorizationstatus)

# authorizationStatus

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The current authorization status for accessing the sensor data.

## Declaration

```swift
final var authorizationStatus: SRAuthorizationStatus { get }
```

<a id="return-value"></a>

## Return Value

Current `SRAuthorizationStatus` indicating whether the app has permission to access the sensor data.

<a id="discussion"></a>

## Discussion

This observable property automatically updates when the user changes sensor permissions in system settings, allowing to react to authorization changes in real-time.
