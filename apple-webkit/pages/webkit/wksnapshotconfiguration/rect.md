> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wksnapshotconfiguration/rect](https://developer.apple.com/documentation/webkit/wksnapshotconfiguration/rect)

# rect (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The portion of your web view to capture, specified as a rectangle in the view’s coordinate system.

## Declaration

```swift
var rect: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [CGRectNull](https://developer.apple.com/documentation/coregraphics/cgrectnull), which captures everything in the view’s bounds rectangle. If you specify a custom rectangle, it must lie within the bounds rectangle of the [WKWebView](../wkwebview.md) object.

## See Also

### Specifying the snapshot dimensions

- [snapshotWidth](snapshotwidth.md): The width of the captured image, in points.

# rect (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The portion of your web view to capture, specified as a rectangle in the view’s coordinate system.

## Declaration

```objectivec
@property (nonatomic) CGRect rect;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [CGRectNull](https://developer.apple.com/documentation/coregraphics/cgrectnull), which captures everything in the view’s bounds rectangle. If you specify a custom rectangle, it must lie within the bounds rectangle of the [WKWebView](../wkwebview.md) object.

## See Also

### Specifying the snapshot dimensions

- [snapshotWidth](snapshotwidth.md): The width of the captured image, in points.
