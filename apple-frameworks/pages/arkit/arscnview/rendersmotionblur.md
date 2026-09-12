> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnview/rendersmotionblur](https://developer.apple.com/documentation/arkit/arscnview/rendersmotionblur)

# rendersMotionBlur (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Determines whether the view renders motion blur.

## Declaration

```swift
var rendersMotionBlur: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property is enabled by default. When set, the view automatically adds motion blur to rendered content which matches the visual characteristics of the motion blur ARKit observes in the camera feed.

![Screenshot showing the before and after case of virtual content rendering with motion blur.](https://developer.apple.com/images/com.apple.arkit/media-3231009@2x.png)

The value of this property overwrites the [motionBlurIntensity](../../scenekit/scncamera/motionblurintensity.md) of [SCNCamera](../../scenekit/scncamera.md).

## See Also

### Managing Rendering Effects

- [rendersCameraGrain](renderscameragrain.md): A flag that determines whether SceneKit applies image noise characteristics to your app’s virtual content.

# rendersMotionBlur (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Determines whether the view renders motion blur.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL rendersMotionBlur;
```

<a id="Discussion"></a>

## Discussion

This property is enabled by default. When set, the view automatically adds motion blur to rendered content which matches the visual characteristics of the motion blur ARKit observes in the camera feed.

![Screenshot showing the before and after case of virtual content rendering with motion blur.](https://developer.apple.com/images/com.apple.arkit/media-3231009@2x.png)

The value of this property overwrites the [motionBlurIntensity](../../scenekit/scncamera/motionblurintensity.md) of [SCNCamera](../../scenekit/scncamera.md).

## See Also

### Managing Rendering Effects

- [rendersCameraGrain](renderscameragrain.md): A flag that determines whether SceneKit applies image noise characteristics to your app’s virtual content.
