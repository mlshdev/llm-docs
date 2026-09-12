> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srerror/fetchrequestinvalid](https://developer.apple.com/documentation/sensorkit/srerror/fetchrequestinvalid)

# fetchRequestInvalid

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Occurs when the app misconfigures a fetch request.

## Declaration

```swift
static var fetchRequestInvalid: SRError.Code { get }
```

## See Also

### Identifying an Error Cause

- [promptDeclined](promptdeclined.md): Occurs when the user cancels the sensor approval workflow.
- [dataInaccessible](datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [invalidEntitlement](invalidentitlement.md): Occurs when the app lacks the required entitlement.
- [noAuthorization](noauthorization.md): Occurs when the user declines sensor access in the Settings app.
