> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/cameragraintexture](https://developer.apple.com/documentation/arkit/arframe/cameragraintexture)

# cameraGrainTexture (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.

## Declaration

```swift
var cameraGrainTexture: (any MTLTexture)? { get }
```

<a id="Discussion"></a>

## Discussion

Camera grain enhances the visual cohesion of the real and augmented aspects of your user experience by enabling your app’s virtual content to take on similar image noise characteristics that naturally occur in the camera feed.

![Screenshot showing the before and after cases of applying image noise to an app’s virtual content.](https://developer.apple.com/images/com.apple.arkit/media-3261294@2x.png)

If [ARSCNView](../arscnview.md) is your renderer, SceneKit applies camera grain to your app’s virtual content by default. For more information, see [rendersCameraGrain](../arscnview/renderscameragrain.md).

<a id="Enable-Image-Noise-on-a-Custom-Renderer"></a>

### Enable Image Noise on a Custom Renderer

For apps that display an AR experience using a custom Metal renderer, ARKit provides you with an [cameraGrainTexture](cameragraintexture.md) that matches the noise it detects in the current video stream. Set the noise texture onto your renderer to apply its characteristics to your virtual content.

The depth dimension of the image noise texture contains variations that you select at runtime based on the [cameraGrainIntensity](cameragrainintensity.md) of the current frame.

## See Also

### Accessing camera data

- [camera](camera.md): Information about the camera position, orientation, and imaging parameters used to capture the frame.
- [capturedImage](capturedimage.md): A pixel buffer containing the image captured by the camera.
- [timestamp](timestamp.md): The time at which the frame was captured.
- [cameraGrainIntensity](cameragrainintensity.md): A value that specifies the amount of grain present in the camera grain texture.
- [exifData](exifdata.md): Auxiliary data for the captured image.

# cameraGrainTexture (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTLTexture> cameraGrainTexture;
```

<a id="Discussion"></a>

## Discussion

Camera grain enhances the visual cohesion of the real and augmented aspects of your user experience by enabling your app’s virtual content to take on similar image noise characteristics that naturally occur in the camera feed.

![Screenshot showing the before and after cases of applying image noise to an app’s virtual content.](https://developer.apple.com/images/com.apple.arkit/media-3261294@2x.png)

If [ARSCNView](../arscnview.md) is your renderer, SceneKit applies camera grain to your app’s virtual content by default. For more information, see [rendersCameraGrain](../arscnview/renderscameragrain.md).

<a id="Enable-Image-Noise-on-a-Custom-Renderer"></a>

### Enable Image Noise on a Custom Renderer

For apps that display an AR experience using a custom Metal renderer, ARKit provides you with an [cameraGrainTexture](cameragraintexture.md) that matches the noise it detects in the current video stream. Set the noise texture onto your renderer to apply its characteristics to your virtual content.

The depth dimension of the image noise texture contains variations that you select at runtime based on the [cameraGrainIntensity](cameragrainintensity.md) of the current frame.

## See Also

### Accessing camera data

- [camera](camera.md): Information about the camera position, orientation, and imaging parameters used to capture the frame.
- [capturedImage](capturedimage.md): A pixel buffer containing the image captured by the camera.
- [timestamp](timestamp.md): The time at which the frame was captured.
- [cameraGrainIntensity](cameragrainintensity.md): A value that specifies the amount of grain present in the camera grain texture.
- [exifData](exifdata.md): Auxiliary data for the captured image.
