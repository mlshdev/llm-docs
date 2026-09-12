> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpdfconfiguration/rect-3xww9](https://developer.apple.com/documentation/webkit/wkpdfconfiguration/rect-3xww9)

# rect

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

The portion of your web view to capture, specified as a rectangle in the view’s coordinate system.

## Declaration

```objectivec
@property (nonatomic) CGRect rect;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [CGRectNull](https://developer.apple.com/documentation/coregraphics/cgrectnull), which captures everything in the view’s bounds rectangle. If you specify a custom rectangle, it must lie within the bounds rectangle of the [WKWebView](../wkwebview.md) object.
