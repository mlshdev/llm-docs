> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srerror/code/promptdeclined](https://developer.apple.com/documentation/sensorkit/srerror/code/promptdeclined)

# SRError.Code.promptDeclined (Swift)

**Framework:** SensorKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Occurs when the user cancels the sensor approval workflow.

## Declaration

```swift
case promptDeclined
```

<a id="Discussion"></a>

## Discussion

The [requestAuthorization(sensors:completion:)](../../srsensorreader/requestauthorization%28sensors_completion_%29.md) passes this error into the completion closure if the user declines the prompt by pressing Cancel. The framework also cancels the prompt if you call this function after the user had already responded to the prompt either by approving or denying access to the argument sensors.

## See Also

### Errors

- [SRError.Code.dataInaccessible](datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [SRError.Code.fetchRequestInvalid](fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [SRError.Code.invalidEntitlement](invalidentitlement.md): Occurs when the app lacks the required entitlement.
- [SRError.Code.noAuthorization](noauthorization.md): Occurs when the user declines sensor access in the Settings app.

# SRErrorPromptDeclined (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Occurs when the user cancels the sensor approval workflow.

## Declaration

```objectivec
SRErrorPromptDeclined
```

<a id="Discussion"></a>

## Discussion

The [requestAuthorizationForSensors:completion:](../../srsensorreader/requestauthorization%28sensors_completion_%29.md) passes this error into the completion closure if the user declines the prompt by pressing Cancel. The framework also cancels the prompt if you call this function after the user had already responded to the prompt either by approving or denying access to the argument sensors.

## See Also

### Errors

- [SRErrorDataInaccessible](datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [SRErrorFetchRequestInvalid](fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [SRErrorInvalidEntitlement](invalidentitlement.md): Occurs when the app lacks the required entitlement.
- [SRErrorNoAuthorization](noauthorization.md): Occurs when the user declines sensor access in the Settings app.
