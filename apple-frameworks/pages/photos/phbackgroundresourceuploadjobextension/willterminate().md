> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phbackgroundresourceuploadjobextension/willterminate()

# willTerminate()

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Called by the host before suspending or terminating the extension process. Extension clients should use this to stop any in-progress work. When the extension is activated again, a new call will be made by the host.

## Declaration

```swift
func willTerminate() async
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)
