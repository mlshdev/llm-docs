> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/init(playerlayer:)](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/init(playerlayer:))

# init(playerLayer:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a Picture in Picture controller with a player layer.

## Declaration

```swift
convenience init?(playerLayer: AVPlayerLayer)
```

## Parameters

- `playerLayer`: The player layer from which to source the media content for the Picture in Picture controller.

<a id="Discussion"></a>

## Discussion

For Picture in Picture to work correctly, maintain a strong reference to this object whether your app is running in the foreground or background.

> **Important**

>  Before attempting to create a controller instance, verify that the current device supports Picture in Picture by calling the [isPictureInPictureSupported()](ispictureinpicturesupported%28%29.md) class method. Attempting to create a Picture in Picture controller on an unsupported device returns `nil`.

## See Also

### Creating a Controller

- [init(contentSource:)](init%28contentsource_%29.md): Creates a Picture in Picture controller with a content source.

# initWithPlayerLayer: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a Picture in Picture controller with a player layer.

## Declaration

```objectivec
- (instancetype) initWithPlayerLayer:(AVPlayerLayer *) playerLayer;
```

## Parameters

- `playerLayer`: The player layer from which to source the media content for the Picture in Picture controller.

<a id="Discussion"></a>

## Discussion

For Picture in Picture to work correctly, maintain a strong reference to this object whether your app is running in the foreground or background.

> **Important**

>  Before attempting to create a controller instance, verify that the current device supports Picture in Picture by calling the [isPictureInPictureSupported](ispictureinpicturesupported%28%29.md) class method. Attempting to create a Picture in Picture controller on an unsupported device returns `nil`.

## See Also

### Creating a Controller

- [initWithContentSource:](init%28contentsource_%29.md): Creates a Picture in Picture controller with a content source.
