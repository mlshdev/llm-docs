> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/messageport/error/messageinvalid](https://developer.apple.com/documentation/webkit/wkwebextension/messageport/error/messageinvalid)

# messageInvalid

**Framework:** WebKit  
**Kind:** Type Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates that the message is invalid.

## Declaration

```swift
static var messageInvalid: WKWebExtension.MessagePort.Error.Code { get }
```

<a id="discussion"></a>

## Discussion

The message must be an object that is JSON-serializable.
