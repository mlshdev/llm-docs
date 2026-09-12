> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/init(contentsource:)](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/init(contentsource:))

# init(contentSource:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a Picture in Picture controller with a content source.

## Declaration

```swift
init(contentSource: AVPictureInPictureController.ContentSource)
```

## Parameters

- `contentSource`: The source of the content to show in a Picture in Picture window.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a controller that displays its content in a player layer or a sample buffer display layer.

> **Important**

>  Before attempting to create a controller, verify that the current device supports Picture in Picture by calling the [isPictureInPictureSupported()](ispictureinpicturesupported%28%29.md) class method. Attempting to create a Picture in Picture controller on an unsupported device returns `nil`.

## See Also

### Creating a Controller

- [init(playerLayer:)](init%28playerlayer_%29.md): Creates a Picture in Picture controller with a player layer.

# initWithContentSource: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a Picture in Picture controller with a content source.

## Declaration

```objectivec
- (instancetype) initWithContentSource:(AVPictureInPictureControllerContentSource *) contentSource;
```

## Parameters

- `contentSource`: The source of the content to show in a Picture in Picture window.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a controller that displays its content in a player layer or a sample buffer display layer.

> **Important**

>  Before attempting to create a controller, verify that the current device supports Picture in Picture by calling the [isPictureInPictureSupported](ispictureinpicturesupported%28%29.md) class method. Attempting to create a Picture in Picture controller on an unsupported device returns `nil`.

## See Also

### Creating a Controller

- [initWithPlayerLayer:](init%28playerlayer_%29.md): Creates a Picture in Picture controller with a player layer.
