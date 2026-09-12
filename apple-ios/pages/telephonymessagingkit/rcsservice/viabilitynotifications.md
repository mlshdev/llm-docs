> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/viabilitynotifications](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/viabilitynotifications)

# viabilityNotifications

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

An asynchronous sequence of service viability notifications produced by the service.

## Declaration

```swift
final var viabilityNotifications: some AsyncSequence<RCSService.ViabilityNotification, Never> { get throws }
```

<a id="discussion"></a>

## Discussion

Use a `for`-`await`-`in` loop to receive [RCSService.ViabilityNotification](viabilitynotification.md) instances from this property.

## See Also

### Determining service viabililty

- [isViable(for:)](isviable%28for_%29.md): Queries whether the device can perform RCS operations at this time.
- [RCSService.ViabilityNotification](viabilitynotification.md): A notification that indicates whether RCS is viable for a given cellular service.
