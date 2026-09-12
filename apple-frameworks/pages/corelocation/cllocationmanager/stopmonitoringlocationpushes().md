> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/stopmonitoringlocationpushes()](https://developer.apple.com/documentation/corelocation/cllocationmanager/stopmonitoringlocationpushes())

# stopMonitoringLocationPushes() (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Stops monitoring for Apple Push Notification service (APNs) location pushes.

## Declaration

```swift
func stopMonitoringLocationPushes()
```

<a id="Discussion"></a>

## Discussion

Call this method to stop the device from monitoring for APNs location pushes. If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Monitoring location push notifications

- [startMonitoringLocationPushes(completion:)](startmonitoringlocationpushes%28completion_%29.md): Starts monitoring for the delivery of Apple Push Notification service (APNs) location pushes, and provides a device-specific token for sending pushes.

# stopMonitoringLocationPushes (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+

Stops monitoring for Apple Push Notification service (APNs) location pushes.

## Declaration

```objectivec
- (void) stopMonitoringLocationPushes;
```

<a id="Discussion"></a>

## Discussion

Call this method to stop the device from monitoring for APNs location pushes. If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Monitoring location push notifications

- [startMonitoringLocationPushesWithCompletion:](startmonitoringlocationpushes%28completion_%29.md): Starts monitoring for the delivery of Apple Push Notification service (APNs) location pushes, and provides a device-specific token for sending pushes.
