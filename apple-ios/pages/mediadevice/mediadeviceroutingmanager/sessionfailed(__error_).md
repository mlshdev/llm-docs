> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceroutingmanager/sessionfailed(_:error:)](https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager/sessionfailed(_:error:))

# sessionFailed(\_:error:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Reports an unrecoverable session error to the system so it can end the session and inform the user.

## Declaration

```swift
@MainActor final func sessionFailed(_ session: MediaOutputSession, error: MediaDeviceError)
```

## Parameters

- `session`: The session associated with the failure.
- `error`: The error that occurred during the session.

<a id="discussion"></a>

## Discussion

Call this function when an unrecoverable error is encountered during the session.
