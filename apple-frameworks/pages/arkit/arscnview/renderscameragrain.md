> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnview/renderscameragrain](https://developer.apple.com/documentation/arkit/arscnview/renderscameragrain)

# rendersCameraGrain (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that determines whether SceneKit applies image noise characteristics to your app’s virtual content.

## Declaration

```swift
var rendersCameraGrain: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Enabled by default. When set, SceneKit adds a camera grain effect to your app’s virtual content that matches the image noise characteristics ARKit observes in the camera feed.

![Screenshot showing the before and after cases of applying image noise to an app’s virtual content.](https://developer.apple.com/images/com.apple.arkit/media-3281981@2x.png)

## See Also

### Managing Rendering Effects

- [rendersMotionBlur](rendersmotionblur.md): Determines whether the view renders motion blur.

# rendersCameraGrain (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that determines whether SceneKit applies image noise characteristics to your app’s virtual content.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL rendersCameraGrain;
```

<a id="Discussion"></a>

## Discussion

Enabled by default. When set, SceneKit adds a camera grain effect to your app’s virtual content that matches the image noise characteristics ARKit observes in the camera feed.

![Screenshot showing the before and after cases of applying image noise to an app’s virtual content.](https://developer.apple.com/images/com.apple.arkit/media-3281981@2x.png)

## See Also

### Managing Rendering Effects

- [rendersMotionBlur](rendersmotionblur.md): Determines whether the view renders motion blur.
