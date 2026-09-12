> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwwificlient/startmonitoringevent(with:)](https://developer.apple.com/documentation/corewlan/cwwificlient/startmonitoringevent(with:))

# startMonitoringEvent(with:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Register for specific Wi-Fi event notifications.

## Declaration

```swift
func startMonitoringEvent(with type: CWEventType) throws
```

## Parameters

- `type`: The type of event notifications to register for. See [CWEventType](../cweventtype.md) for a list of possible values.

<a id="Discussion"></a>

## Discussion

After registering for notifications, when an event of the given type happens, the client sends an appropriate message to its delegate. See the [CWEventDelegate](../cweventdelegate.md) protocol for the complete list of possible messages.

Use the [stopMonitoringEvent(with:)](stopmonitoringevent%28with_%29.md) method when you want to stop receiving notifications of the given event type. Use [stopMonitoringAllEvents()](stopmonitoringallevents%28%29.md) to stop receiving all notifications from a client.

> **Note**

>  In order to monitor Wi-Fi events, you must specify the `com.apple.wifi.events` entitlement for your app.

## See Also

### Monitoring Events

- [stopMonitoringAllEvents()](stopmonitoringallevents%28%29.md): Unregister for all Wi-Fi event notifications.
- [stopMonitoringEvent(with:)](stopmonitoringevent%28with_%29.md): Unregister for specific Wi-Fi event notifications.

# startMonitoringEventWithType:error: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Register for specific Wi-Fi event notifications.

## Declaration

```objectivec
- (BOOL) startMonitoringEventWithType:(CWEventType) type error:(NSError **) error;
```

## Parameters

- `type`: The type of event notifications to register for. See [CWEventType](../cweventtype.md) for a list of possible values.
- `error`: A pointer to an error object. If an error occurs, the pointer is set to point at an error object that describes the error condition. Pass `nil` to ignore error details.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether or not an error occurred. A value of `YES` indicates that no error occurred.

<a id="Discussion"></a>

## Discussion

After registering for notifications, when an event of the given type happens, the client sends an appropriate message to its delegate. See the [CWEventDelegate](../cweventdelegate.md) protocol for the complete list of possible messages.

Use the [stopMonitoringEventWithType:error:](stopmonitoringevent%28with_%29.md) method when you want to stop receiving notifications of the given event type. Use [stopMonitoringAllEventsAndReturnError:](stopmonitoringallevents%28%29.md) to stop receiving all notifications from a client.

> **Note**

>  In order to monitor Wi-Fi events, you must specify the `com.apple.wifi.events` entitlement for your app.

## See Also

### Monitoring Events

- [stopMonitoringAllEventsAndReturnError:](stopmonitoringallevents%28%29.md): Unregister for all Wi-Fi event notifications.
- [stopMonitoringEventWithType:error:](stopmonitoringevent%28with_%29.md): Unregister for specific Wi-Fi event notifications.
