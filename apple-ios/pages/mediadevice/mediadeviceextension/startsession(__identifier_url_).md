> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceextension/startsession(_:identifier:url:)](https://developer.apple.com/documentation/mediadevice/mediadeviceextension/startsession(_:identifier:url:))

# startSession(\_:identifier:url:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when media playback or a remote application should be started on a remote device.

## Declaration

```swift
@MainActor func startSession(_ session: MediaOutputSession, identifier: String?, url: URL)
```

## Parameters

- `session`: The session associated with the playback request.
- `identifier`: The application identifier for the remote application. If `nil`, the extension should provide a default media playback experience on the remote device.
- `url`: The URL identifying the media content or application specific URL for the remote application.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)
