> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/isviable(for:)

# isViable(for:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Queries whether the device can perform RCS operations at this time.

## Declaration

```swift
final func isViable(for cellularServiceID: CellularServiceID) -> Bool
```

## Parameters

- `cellularServiceID`: The cellular service identifier for which to check RCS viability.

<a id="return-value"></a>

## Return Value

`true` if RCS is currently viable for the cellular service; `false`, otherwise.

## See Also

### Determining service viabililty

- [viabilityNotifications](viabilitynotifications.md): An asynchronous sequence of service viability notifications produced by the service.
- [RCSService.ViabilityNotification](viabilitynotification.md): A notification that indicates whether RCS is viable for a given cellular service.
