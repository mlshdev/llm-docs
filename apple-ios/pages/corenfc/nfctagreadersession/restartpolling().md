> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersession/restartpolling()](https://developer.apple.com/documentation/corenfc/nfctagreadersession/restartpolling())

# restartPolling() (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Restarts the polling sequence so the reader session can discover new tags.

## Declaration

```swift
func restartPolling()
```

<a id="Discussion"></a>

## Discussion

After restarting the polling sequence, the reader session sends newly detected tags to the session’s delegate method [tagReaderSession(\_:didDetect:)](../nfctagreadersessiondelegate-2joku/tagreadersession%28__diddetect_%29.md).

> **Note**

>  Tags detected before polling restarts are invalid. Your app should discard any references it has to the invalid tags to free system resources.

Calling [restartPolling()](restartpolling%28%29.md) on an invalidated session has no effect. If you need to restart the reader session, create a new [NFCTagReaderSession](../nfctagreadersession.md).

# restartPolling (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Restarts the polling sequence so the reader session can discover new tags.

## Declaration

```objectivec
- (void) restartPolling;
```

<a id="Discussion"></a>

## Discussion

After restarting the polling sequence, the reader session sends newly detected tags to the session’s delegate method [tagReaderSession(\_:didDetect:)](../nfctagreadersessiondelegate-2joku/tagreadersession%28__diddetect_%29.md).

> **Note**

>  Tags detected before polling restarts are invalid. Your app should discard any references it has to the invalid tags to free system resources.

Calling [restartPolling](restartpolling%28%29.md) on an invalidated session has no effect. If you need to restart the reader session, create a new [NFCTagReaderSession](../nfctagreadersession.md).
