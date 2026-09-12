> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwwificlient/stopmonitoringallevents()](https://developer.apple.com/documentation/corewlan/cwwificlient/stopmonitoringallevents())

# stopMonitoringAllEvents() (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Unregister for all Wi-Fi event notifications.

## Declaration

```swift
func stopMonitoringAllEvents() throws
```

<a id="Discussion"></a>

## Discussion

Use this method when you no longer want to receive any Wi-Fi notifications from the client.

> **Note**

>  In order to monitor Wi-Fi events, you must specify the `com.apple.wifi.events` entitlement for your app.

## See Also

### Monitoring Events

- [startMonitoringEvent(with:)](startmonitoringevent%28with_%29.md): Register for specific Wi-Fi event notifications.
- [stopMonitoringEvent(with:)](stopmonitoringevent%28with_%29.md): Unregister for specific Wi-Fi event notifications.

# stopMonitoringAllEventsAndReturnError: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Unregister for all Wi-Fi event notifications.

## Declaration

```objectivec
- (BOOL) stopMonitoringAllEventsAndReturnError:(NSError **) error;
```

## Parameters

- `error`: A pointer to an error object. If an error occurs, the pointer is set to point at an error object that describes the error condition. Pass nil to ignore error details.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether or not an error occurred. A value of YES indicates that no error occurred.

<a id="Discussion"></a>

## Discussion

Use this method when you no longer want to receive any Wi-Fi notifications from the client.

> **Note**

>  In order to monitor Wi-Fi events, you must specify the `com.apple.wifi.events` entitlement for your app.

## See Also

### Monitoring Events

- [startMonitoringEventWithType:error:](startmonitoringevent%28with_%29.md): Register for specific Wi-Fi event notifications.
- [stopMonitoringEventWithType:error:](stopmonitoringevent%28with_%29.md): Unregister for specific Wi-Fi event notifications.
