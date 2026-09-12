> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/configurationoption/cloudkitcontainer/automatic](https://developer.apple.com/documentation/tipkit/tips/configurationoption/cloudkitcontainer/automatic)

# automatic

**Framework:** TipKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Syncs the TipKit datastore using the first container in your app’s entitlements with a “.tips” suffix or, if none is available, the primary container is used.

## Declaration

```swift
static var automatic: Tips.ConfigurationOption.CloudKitContainer { get }
```
