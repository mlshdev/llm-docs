> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcwindowscenedelegate](https://developer.apple.com/documentation/corenfc/nfcwindowscenedelegate)

# NFCWindowSceneDelegate

**Framework:** CoreNFC  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A protocol to notify your app’s user interface about NFC-related events.

## Declaration

```swift
protocol NFCWindowSceneDelegate
```

<a id="overview"></a>

## Overview

When the device is eligible to receive NFC-related events, use this protocol to update your user interface. The received [NFCWindowSceneEvent](nfcwindowsceneevent.md) indicates whether the event represents the presence of a card reader or a gesture to initiate a contactless transaction by the person using the app.

You typically add conformance to this protocol in your app’s main scene delegate, where you already conform to [UIWindowSceneDelegate](https://developer.apple.com/documentation/uikit/uiwindowscenedelegate).

## Topics

### Handling events

- [windowScene(\_:didReceiveNFCWindowSceneEvent:)](nfcwindowscenedelegate/windowscene%28__didreceivenfcwindowsceneevent_%29.md): Informs your app that the system has received an NFC-related event.
- [NFCWindowSceneEvent](nfcwindowsceneevent.md): An NFC-related event that your app uses to update its user interface.

## See Also

### NFC window scenes

- [NFCWindowSceneEvent](nfcwindowsceneevent.md): An NFC-related event that your app uses to update its user interface.
