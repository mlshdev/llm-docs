> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkwebextension/messageport/error/messageinvalid

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
