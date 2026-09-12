> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceroutingmanager/receivedata(_:fromapplication:session:)](https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager/receivedata(_:fromapplication:session:))

# receiveData(\_:fromApplication:session:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Delivers data received from a remote application to the system for processing.

## Declaration

```swift
@MainActor final func receiveData(_ data: Data, fromApplication applicationIdentifier: String, session: MediaOutputSession)
```

## Parameters

- `data`: The data received from the remote application.
- `applicationIdentifier`: The identifier of the application that sent the data.
- `session`: The session associated with the received data.

<a id="discussion"></a>

## Discussion

Call this function when data has been received from a remote application.
