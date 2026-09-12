> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwwificlient/stopmonitoringevent(with:)](https://developer.apple.com/documentation/corewlan/cwwificlient/stopmonitoringevent(with:))

# stopMonitoringEvent(with:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Unregister for specific Wi-Fi event notifications.

## Declaration

```swift
func stopMonitoringEvent(with type: CWEventType) throws
```

## Parameters

- `type`: The type of event notifications to unregister for. See [CWEventType](../cweventtype.md) for a list of possible values.

<a id="Discussion"></a>

## Discussion

Use this method to indicate that the client should no longer send notifications for the given event type.

> **Note**

>  In order to monitor Wi-Fi events, you must specify the `com.apple.wifi.events` entitlement for your app.

## See Also

### Monitoring Events

- [startMonitoringEvent(with:)](startmonitoringevent%28with_%29.md): Register for specific Wi-Fi event notifications.
- [stopMonitoringAllEvents()](stopmonitoringallevents%28%29.md): Unregister for all Wi-Fi event notifications.

# stopMonitoringEventWithType:error: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Unregister for specific Wi-Fi event notifications.

## Declaration

```objectivec
- (BOOL) stopMonitoringEventWithType:(CWEventType) type error:(NSError **) error;
```

## Parameters

- `type`: The type of event notifications to unregister for. See [CWEventType](../cweventtype.md) for a list of possible values.
- `error`: A pointer to an error object. If an error occurs, the pointer is set to point at an error object that describes the error condition. Pass nil to ignore error details.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether or not an error occurred. A value of YES indicates that no error occurred.

<a id="Discussion"></a>

## Discussion

Use this method to indicate that the client should no longer send notifications for the given event type.

> **Note**

>  In order to monitor Wi-Fi events, you must specify the `com.apple.wifi.events` entitlement for your app.

## See Also

### Monitoring Events

- [startMonitoringEventWithType:error:](startmonitoringevent%28with_%29.md): Register for specific Wi-Fi event notifications.
- [stopMonitoringAllEventsAndReturnError:](stopmonitoringallevents%28%29.md): Unregister for all Wi-Fi event notifications.
