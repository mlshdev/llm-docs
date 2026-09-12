> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptions/issynchronous](https://developer.apple.com/documentation/photos/phimagerequestoptions/issynchronous)

# isSynchronous (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether Photos processes the image request synchronously.

## Declaration

```swift
var isSynchronous: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `false` (the default), the [requestImage(for:targetSize:contentMode:options:resultHandler:)](../phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method returns immediately. Depending on the [deliveryMode](deliverymode.md) property, Photos may call your `resultHandler` block before the method returns, at some later time, or both.

If `true`, the [requestImage(for:targetSize:contentMode:options:resultHandler:)](../phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method blocks the calling thread until image data is ready or an error occurs. Photos calls your result handler block exactly once.

> **Note**

>  Perform synchronous requests from a background thread only.

# synchronous (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether Photos processes the image request synchronously.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isSynchronous) BOOL synchronous;
```

<a id="Discussion"></a>

## Discussion

If `false` (the default), the [requestImageForAsset:targetSize:contentMode:options:resultHandler:](../phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method returns immediately. Depending on the [deliveryMode](deliverymode.md) property, Photos may call your `resultHandler` block before the method returns, at some later time, or both.

If `true`, the [requestImageForAsset:targetSize:contentMode:options:resultHandler:](../phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method blocks the calling thread until image data is ready or an error occurs. Photos calls your result handler block exactly once.

> **Note**

>  Perform synchronous requests from a background thread only.
