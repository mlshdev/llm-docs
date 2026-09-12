> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransition/zoomwithoptions:sourcebarbuttonitemprovider:](https://developer.apple.com/documentation/uikit/uiviewcontrollertransition/zoomwithoptions:sourcebarbuttonitemprovider:)

# zoomWithOptions:sourceBarButtonItemProvider:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Zoom from the `UIBarButtonItem` provided by the `sourceBarButtonItemProvider` to the presented or pushed view controller’s view.

## Declaration

```objectivec
+ (instancetype) zoomWithOptions:(UIZoomTransitionOptions *) options sourceBarButtonItemProvider:(UIBarButtonItem * (^)(UIZoomTransitionSourceViewProviderContext *)) sourceBarButtonItemProvider;
```
