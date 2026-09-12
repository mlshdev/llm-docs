> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransition/zoomwithoptions:sourceviewprovider:](https://developer.apple.com/documentation/uikit/uiviewcontrollertransition/zoomwithoptions:sourceviewprovider:)

# zoomWithOptions:sourceViewProvider:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a zoom transition from the view specified by the source provider.

## Declaration

```objectivec
+ (instancetype) zoomWithOptions:(UIZoomTransitionOptions *) options sourceViewProvider:(UIView * (^)(UIZoomTransitionSourceViewProviderContext *)) sourceViewProvider;
```

## Parameters

- `options`: Additional options for the zoom transition.
- `sourceViewProvider`: A closure that returns the view, for example a thumbnail image, that the animation zooms out from and zooms back in to.

<a id="Discussion"></a>

## Discussion

The system calls the source view provider when it presents and when it dismisses the view controller. In the closure, return the [UIView](../uiview.md) that the animation should zoom in from or zoom back out to, respectively. For more information, see [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md).

## See Also

### Creating zoom transitions

- [UIZoomTransitionOptions](../uiviewcontroller/transition/zoomoptions.md): Options for a zoom transition.
- [UIZoomTransitionSourceViewProviderContext](../uiviewcontroller/transition/zoomsourceviewprovidercontext.md): A context object that contains references to the view controllers from a zoom transition.
