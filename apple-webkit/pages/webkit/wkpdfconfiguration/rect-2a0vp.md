> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpdfconfiguration/rect-2a0vp](https://developer.apple.com/documentation/webkit/wkpdfconfiguration/rect-2a0vp)

# rect

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS

The portion of your web view to capture, specified as a rectangle in the view’s coordinate system.

## Declaration

```swift
@MainActor @preconcurrency var rect: CGRect? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [CGRectNull](https://developer.apple.com/documentation/coregraphics/cgrectnull), which captures everything in the view’s bounds rectangle. If you specify a custom rectangle, it must lie within the bounds rectangle of the [WKWebView](../wkwebview.md) object.
