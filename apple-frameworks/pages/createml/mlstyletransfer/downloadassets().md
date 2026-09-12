> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/downloadassets()](https://developer.apple.com/documentation/createml/mlstyletransfer/downloadassets())

# downloadAssets()

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Initiates a download of the mlmodel assets required for Style Transfer training. This will be performed automatically if needed at training time, but can be run independently prior to training.

## Declaration

```swift
static func downloadAssets() throws
```
