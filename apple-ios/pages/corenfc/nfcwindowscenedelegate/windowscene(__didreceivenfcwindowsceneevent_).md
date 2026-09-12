> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcwindowscenedelegate/windowscene(_:didreceivenfcwindowsceneevent:)](https://developer.apple.com/documentation/corenfc/nfcwindowscenedelegate/windowscene(_:didreceivenfcwindowsceneevent:))

# windowScene(\_:didReceiveNFCWindowSceneEvent:)

**Framework:** CoreNFC  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Informs your app that the system has received an NFC-related event.

## Declaration

```swift
func windowScene(_ windowScene: UIWindowScene, didReceiveNFCWindowSceneEvent event: NFCWindowSceneEvent)
```

## Parameters

- `windowScene`: A scene in your app that handles the event.
- `event`: The NFC-related event that triggered the delegate callback.

## See Also

### Handling events

- [NFCWindowSceneEvent](../nfcwindowsceneevent.md): An NFC-related event that your app uses to update its user interface.
