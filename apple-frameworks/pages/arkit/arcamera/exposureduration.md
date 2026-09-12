> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/exposureduration](https://developer.apple.com/documentation/arkit/arcamera/exposureduration)

# exposureDuration (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A value you use to effect motion blur when rendering your app’s virtual content.

## Declaration

```swift
var exposureDuration: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

If you display an AR experience using a custom Metal renderer, use this value to determine how much motion blur to apply to your virtual content.

If [ARSCNView](../arscnview.md) is your renderer, SceneKit automatically applies motion blur to your virtual content. For more information, see [rendersMotionBlur](../arscnview/rendersmotionblur.md).

![Screenshot showing the before and after case of virtual content rendering with motion blur.](https://developer.apple.com/images/com.apple.arkit/media-3231008@2x.png)

# exposureDuration (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A value you use to effect motion blur when rendering your app’s virtual content.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval exposureDuration;
```

<a id="Discussion"></a>

## Discussion

If you display an AR experience using a custom Metal renderer, use this value to determine how much motion blur to apply to your virtual content.

If [ARSCNView](../arscnview.md) is your renderer, SceneKit automatically applies motion blur to your virtual content. For more information, see [rendersMotionBlur](../arscnview/rendersmotionblur.md).

![Screenshot showing the before and after case of virtual content rendering with motion blur.](https://developer.apple.com/images/com.apple.arkit/media-3231008@2x.png)
