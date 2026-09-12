> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceextension/senddata(_:toapplication:session:)](https://developer.apple.com/documentation/mediadevice/mediadeviceextension/senddata(_:toapplication:session:))

# sendData(\_:toApplication:session:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when an app sends data to a remote application.

## Declaration

```swift
@MainActor func sendData(_ data: Data, toApplication applicationIdentifier: String, session: MediaOutputSession)
```

## Parameters

- `data`: The data to send to the remote application.
- `applicationIdentifier`: The identifier of the target application.
- `session`: The session associated with the data transfer.

<a id="discussion"></a>

## Discussion

In the case of media-app to remote media-application communication, the media-application’s specific application identifier will be used.

In the case of media-app to media device extension communication, the following application identifier will be used: `com.apple.media-device-extension`.
