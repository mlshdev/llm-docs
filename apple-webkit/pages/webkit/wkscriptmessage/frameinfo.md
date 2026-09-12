> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkscriptmessage/frameinfo](https://developer.apple.com/documentation/webkit/wkscriptmessage/frameinfo)

# frameInfo (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The frame that sent the message.

## Declaration

```swift
@NSCopying var frameInfo: WKFrameInfo { get }
```

## See Also

### Getting Message-Related Information

- [webView](webview.md): The web view that sent the message.
- [world](world.md): The namespace in which the JavaScript code executes.

# frameInfo (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The frame that sent the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) WKFrameInfo * frameInfo;
```

## See Also

### Getting Message-Related Information

- [webView](webview.md): The web view that sent the message.
- [world](world.md): The namespace in which the JavaScript code executes.
