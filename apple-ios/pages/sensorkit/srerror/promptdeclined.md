> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srerror/promptdeclined](https://developer.apple.com/documentation/sensorkit/srerror/promptdeclined)

# promptDeclined

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Occurs when the user cancels the sensor approval workflow.

## Declaration

```swift
static var promptDeclined: SRError.Code { get }
```

<a id="Discussion"></a>

## Discussion

The [requestAuthorization(sensors:completion:)](../srsensorreader/requestauthorization%28sensors_completion_%29.md) passes this error into the completion closure if the user declines the prompt by pressing Cancel. The framework also cancels the prompt if you call this function after the user had already responded to the prompt either by approving or denying access to the argument sensors.

## See Also

### Identifying an Error Cause

- [dataInaccessible](datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [fetchRequestInvalid](fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [invalidEntitlement](invalidentitlement.md): Occurs when the app lacks the required entitlement.
- [noAuthorization](noauthorization.md): Occurs when the user declines sensor access in the Settings app.
