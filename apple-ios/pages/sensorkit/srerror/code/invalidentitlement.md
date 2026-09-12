> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srerror/code/invalidentitlement](https://developer.apple.com/documentation/sensorkit/srerror/code/invalidentitlement)

# SRError.Code.invalidEntitlement (Swift)

**Framework:** SensorKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Occurs when the app lacks the required entitlement.

## Declaration

```swift
case invalidEntitlement
```

<a id="Discussion"></a>

## Discussion

To allow the app to read sensor data, the system requires that the app’s code signature contain a special entitlement. For more information, see [Configuring your project for sensor reading](../../configuring-your-project-for-sensor-reading.md).

## See Also

### Errors

- [SRError.Code.promptDeclined](promptdeclined.md): Occurs when the user cancels the sensor approval workflow.
- [SRError.Code.dataInaccessible](datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [SRError.Code.fetchRequestInvalid](fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [SRError.Code.noAuthorization](noauthorization.md): Occurs when the user declines sensor access in the Settings app.

# SRErrorInvalidEntitlement (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Occurs when the app lacks the required entitlement.

## Declaration

```objectivec
SRErrorInvalidEntitlement
```

<a id="Discussion"></a>

## Discussion

To allow the app to read sensor data, the system requires that the app’s code signature contain a special entitlement. For more information, see [Configuring your project for sensor reading](../../configuring-your-project-for-sensor-reading.md).

## See Also

### Errors

- [SRErrorPromptDeclined](promptdeclined.md): Occurs when the user cancels the sensor approval workflow.
- [SRErrorDataInaccessible](datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [SRErrorFetchRequestInvalid](fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [SRErrorNoAuthorization](noauthorization.md): Occurs when the user declines sensor access in the Settings app.
