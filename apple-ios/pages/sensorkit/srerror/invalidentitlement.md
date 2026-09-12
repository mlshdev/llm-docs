> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srerror/invalidentitlement](https://developer.apple.com/documentation/sensorkit/srerror/invalidentitlement)

# invalidEntitlement

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Occurs when the app lacks the required entitlement.

## Declaration

```swift
static var invalidEntitlement: SRError.Code { get }
```

<a id="Discussion"></a>

## Discussion

To allow the app to read sensor data, the system requires that the app’s code signature contain a special entitlement. For more information, see [Configuring your project for sensor reading](../configuring-your-project-for-sensor-reading.md).

## See Also

### Identifying an Error Cause

- [promptDeclined](promptdeclined.md): Occurs when the user cancels the sensor approval workflow.
- [dataInaccessible](datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [fetchRequestInvalid](fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [noAuthorization](noauthorization.md): Occurs when the user declines sensor access in the Settings app.
