> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/isinspectable](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/isinspectable)

# isInspectable (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Determines whether Web Inspector can inspect the [WKWebView](../wkwebview.md) instances for this context.

## Declaration

```swift
var isInspectable: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A context can control multiple [WKWebView](../wkwebview.md) instances, from the background content, to the popover.

You should set this to `YES` when needed for debugging purposes. The default value is `NO`.

# inspectable (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Determines whether Web Inspector can inspect the [WKWebView](../wkwebview.md) instances for this context.

## Declaration

```objectivec
@property (nonatomic, getter=isInspectable) BOOL inspectable;
```

<a id="discussion"></a>

## Discussion

A context can control multiple [WKWebView](../wkwebview.md) instances, from the background content, to the popover.

You should set this to `YES` when needed for debugging purposes. The default value is `NO`.
