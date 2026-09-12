> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phbackgroundresourceuploadextension/notifytermination()](https://developer.apple.com/documentation/photos/phbackgroundresourceuploadextension/notifytermination())

# notifyTermination()

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ (deprecated in 27.0) · iPadOS 26.1+ (deprecated in 27.0)

This notification will be called if the host is going to suspend/terminate the current execution. Extension clients should use this to stop the current execution. When the extension is activated, a new call will be presented by the host.

> Adopt PHBackgroundResourceUploadJobExtension instead

## Declaration

```swift
func notifyTermination()
```
