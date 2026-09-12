> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationaction/mainframenavigation](https://developer.apple.com/documentation/webkit/wknavigationaction/mainframenavigation)

# mainFrameNavigation (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
var mainFrameNavigation: WKNavigation? { get }
```

<a id="discussion"></a>

## Discussion

The most recent main frame navigation that took place that encompasses this navigation action.

If this WKNavigationAction represents a request to open a new WKWebView or it represents a frame load that is not in the main frame of an existing WKWebView, then mainFrameNavigation will be nil.

# mainFrameNavigation (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) WKNavigation * mainFrameNavigation;
```

<a id="discussion"></a>

## Discussion

The most recent main frame navigation that took place that encompasses this navigation action.

If this WKNavigationAction represents a request to open a new WKWebView or it represents a frame load that is not in the main frame of an existing WKWebView, then mainFrameNavigation will be nil.
