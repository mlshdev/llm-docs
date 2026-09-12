> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinstallationrequest/downloadandinstall()](https://developer.apple.com/documentation/speech/assetinstallationrequest/downloadandinstall())

# downloadAndInstall()

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Downloads and installs assets not already on the device.

## Declaration

```swift
final func downloadAndInstall() async throws
```

<a id="discussion"></a>

## Discussion

If the system is unable to immediately download assets because of a connectivity issue or other error, the system will automatically attempt to download the assets later. This method will return when the initial download and installation attempt has succeeded or failed; use [status(forModules:)](../assetinventory/status%28formodules_%29.md) or another installation request to monitor the success or progress of later attempts.

The system consolidates download and installation requests; you may call this method several times without causing redundant downloads.
