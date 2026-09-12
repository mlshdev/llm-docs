> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srerror/noauthorization](https://developer.apple.com/documentation/sensorkit/srerror/noauthorization)

# noAuthorization

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Occurs when the user declines sensor access in the Settings app.

## Declaration

```swift
static var noAuthorization: SRError.Code { get }
```

## See Also

### Identifying an Error Cause

- [promptDeclined](promptdeclined.md): Occurs when the user cancels the sensor approval workflow.
- [dataInaccessible](datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [fetchRequestInvalid](fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [invalidEntitlement](invalidentitlement.md): Occurs when the app lacks the required entitlement.
