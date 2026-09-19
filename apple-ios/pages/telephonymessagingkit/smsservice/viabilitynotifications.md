> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/smsservice/viabilitynotifications

# viabilityNotifications

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

An asynchronous sequence of service viability notifications produced by this service.

## Declaration

```swift
final var viabilityNotifications: some AsyncSequence<SMSService.ViabilityNotification, Never> { get throws }
```

<a id="discussion"></a>

## Discussion

Use a `for`-`await`-`in` loop to receive [SMSService.ViabilityNotification](viabilitynotification.md) instances from this property.

## See Also

### Determining service viabililty

- [isViable(for:)](isviable%28for_%29.md): Queries whether the device can perform SMS operations at this time.
- [SMSService.ViabilityNotification](viabilitynotification.md): A notification that indicates whether SMS is viable for a given cellular service.
