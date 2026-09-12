> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/viabilitynotifications](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/viabilitynotifications)

# viabilityNotifications

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

An asynchronous sequence of service viability notifications produced by the service.

## Declaration

```swift
final var viabilityNotifications: some AsyncSequence<MMSService.ViabilityNotification, Never> { get throws }
```

<a id="discussion"></a>

## Discussion

Use a `for`-`await`-`in` loop to receive [MMSService.ViabilityNotification](viabilitynotification.md) instances from this property.

## See Also

### Determining service viabililty

- [isViable(for:)](isviable%28for_%29.md): Queries whether the device can perform MMS operations at this time.
- [MMSService.ViabilityNotification](viabilitynotification.md): A notification that indicates if MMS is viable for a given cellular service.
