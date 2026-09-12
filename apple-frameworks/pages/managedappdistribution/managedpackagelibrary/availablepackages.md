> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedpackagelibrary/availablepackages](https://developer.apple.com/documentation/managedappdistribution/managedpackagelibrary/availablepackages)

# availablePackages

**Framework:** ManagedAppDistribution  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.4+ · macOS 26.4+

The current managed apps available to this device.

## Declaration

```swift
final var availablePackages: ManagedPackageLibrary.ManagedPackages { get }
```

<a id="discussion"></a>

## Discussion

The current managed packages are of type `Result<[ManagedPackage], ManagedAppDistributionError>`. Use an asynchronous `for` loop to update your views when the current managed packages change. If the device can’t retrieve the metadata for the packages, fetching the list of managed packages fails with `ManagedAppDistributionError.networkError`. An example of this failure is if the device is offline.

> **Note**

> The async sequence returns an error and the sequence ends.
