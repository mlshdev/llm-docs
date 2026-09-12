> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/isviable(for:)](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/isviable(for:))

# isViable(for:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Queries whether the device can perform MMS operations at this time.

## Declaration

```swift
final func isViable(for cellularServiceID: CellularServiceID) -> Bool
```

## Parameters

- `cellularServiceID`: The cellular service identifier for which to check MMS viability.

<a id="return-value"></a>

## Return Value

`true` if MMS is currently viable for the cellular service; `false`, otherwise.

## See Also

### Determining service viabililty

- [viabilityNotifications](viabilitynotifications.md): An asynchronous sequence of service viability notifications produced by the service.
- [MMSService.ViabilityNotification](viabilitynotification.md): A notification that indicates if MMS is viable for a given cellular service.
