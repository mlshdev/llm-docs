> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedapplibrary/availableapps](https://developer.apple.com/documentation/managedappdistribution/managedapplibrary/availableapps)

# availableApps

**Framework:** ManagedAppDistribution  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 2.4+

The current managed apps available to this device.

## Declaration

```swift
final var availableApps: ManagedAppLibrary.ManagedApps { get }
```

<a id="discussion"></a>

## Discussion

The current managed apps are of type `Result<[ManagedApp], ManagedAppDistributionError>`. Use an asynchronous `for` loop to update your views when the current managed apps change. If the device can’t retrieve the metadata for the apps, fetching the list of managed apps fails with `ManagedAppDistributionError.networkError`. An example of this failure is if the device is offline.

> **Note**

> The async sequence returns an error and the sequence ends when running as an iOS app on macOS.

## See Also

### Obtaining library information

- [ManagedAppLibrary.ManagedApps](managedapps.md): An array of managed apps that updates as apps become available or unavailable.
- [currentDistributor](currentdistributor.md): The library provider for managed apps on this device.
