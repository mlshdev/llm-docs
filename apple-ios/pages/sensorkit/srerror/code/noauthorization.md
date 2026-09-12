> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srerror/code/noauthorization](https://developer.apple.com/documentation/sensorkit/srerror/code/noauthorization)

# SRError.Code.noAuthorization (Swift)

**Framework:** SensorKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Occurs when the user declines sensor access in the Settings app.

## Declaration

```swift
case noAuthorization
```

<a id="Discussion"></a>

## Discussion

This error code indicates the user denied access for the sensor on the in-app prompt, or by switching off authorization for the sensor in Settings.

## See Also

### Errors

- [SRError.Code.promptDeclined](promptdeclined.md): Occurs when the user cancels the sensor approval workflow.
- [SRError.Code.dataInaccessible](datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [SRError.Code.fetchRequestInvalid](fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [SRError.Code.invalidEntitlement](invalidentitlement.md): Occurs when the app lacks the required entitlement.

# SRErrorNoAuthorization (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Occurs when the user declines sensor access in the Settings app.

## Declaration

```objectivec
SRErrorNoAuthorization
```

<a id="Discussion"></a>

## Discussion

This error code indicates the user denied access for the sensor on the in-app prompt, or by switching off authorization for the sensor in Settings.

## See Also

### Errors

- [SRErrorPromptDeclined](promptdeclined.md): Occurs when the user cancels the sensor approval workflow.
- [SRErrorDataInaccessible](datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [SRErrorFetchRequestInvalid](fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [SRErrorInvalidEntitlement](invalidentitlement.md): Occurs when the app lacks the required entitlement.
