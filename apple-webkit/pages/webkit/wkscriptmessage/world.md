> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkscriptmessage/world](https://developer.apple.com/documentation/webkit/wkscriptmessage/world)

# world (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The namespace in which the JavaScript code executes.

## Declaration

```swift
var world: WKContentWorld { get }
```

<a id="Discussion"></a>

## Discussion

For more information about content worlds, see [WKContentWorld](../wkcontentworld.md).

## See Also

### Getting Message-Related Information

- [frameInfo](frameinfo.md): The frame that sent the message.
- [webView](webview.md): The web view that sent the message.

# world (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The namespace in which the JavaScript code executes.

## Declaration

```objectivec
@property (nonatomic, readonly) WKContentWorld * world;
```

<a id="Discussion"></a>

## Discussion

For more information about content worlds, see [WKContentWorld](../wkcontentworld.md).

## See Also

### Getting Message-Related Information

- [frameInfo](frameinfo.md): The frame that sent the message.
- [webView](webview.md): The web view that sent the message.
