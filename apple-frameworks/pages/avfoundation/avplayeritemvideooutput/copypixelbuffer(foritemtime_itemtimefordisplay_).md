> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemvideooutput/copypixelbuffer(foritemtime:itemtimefordisplay:)](https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/copypixelbuffer(foritemtime:itemtimefordisplay:))

# copyPixelBuffer(forItemTime:itemTimeForDisplay:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Retrieves an image that is appropriate for display at the specified item time, and marks the image as acquired.

> Use pixelBufferAndDisplayTime(forItemTime:) instead

## Declaration

```swift
func copyPixelBuffer(forItemTime itemTime: CMTime, itemTimeForDisplay outItemTimeForDisplay: UnsafeMutablePointer<CMTime>?) -> CVPixelBuffer?
```

## Parameters

- `itemTime`: The time at which you want to retrieve the image from the item.
- `outItemTimeForDisplay`: The time by which you intend to use the returned pixel buffer. You may specify `nil` for this parameter if you do not have a specific deadline.

<a id="return-value"></a>

## Return Value

A pixel buffer containing the image data to display or `nil` if nothing should be displayed at the specified time. The caller is responsible for calling [CVBufferRelease](../../corevideo/cvbufferrelease.md) on the returned data when it is no longer needed.

<a id="Discussion"></a>

## Discussion

Typically, you call this method in response to a CVDisplayLink callback or a [CADisplayLink](../../quartzcore/cadisplaylink.md) delegate method call when the [hasNewPixelBuffer(forItemTime:)](hasnewpixelbuffer%28foritemtime_%29.md) method also returns [true](https://developer.apple.com/documentation/swift/true).

After calling this method, the video output object marks the pixel buffer data as having been acquired. This causes the [hasNewPixelBuffer(forItemTime:)](hasnewpixelbuffer%28foritemtime_%29.md) method to return [false](https://developer.apple.com/documentation/swift/false) unless newer data becomes available.

## See Also

### Getting pixel buffer data

- [hasNewPixelBuffer(forItemTime:)](hasnewpixelbuffer%28foritemtime_%29.md): Returns a Boolean value that indicates whether video output is available for the specified item time.
- [pixelBufferAndDisplayTime(forItemTime:)](pixelbufferanddisplaytime%28foritemtime_%29.md): Retrieves an image that is appropriate for display at the specified item time, and marks the image as acquired

# copyPixelBufferForItemTime:itemTimeForDisplay: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Retrieves an image that is appropriate for display at the specified item time, and marks the image as acquired.

## Declaration

```objectivec
- (CVPixelBufferRef) copyPixelBufferForItemTime:(CMTime) itemTime itemTimeForDisplay:(CMTime *) outItemTimeForDisplay;
```

## Parameters

- `itemTime`: The time at which you want to retrieve the image from the item.
- `outItemTimeForDisplay`: The time by which you intend to use the returned pixel buffer. You may specify `nil` for this parameter if you do not have a specific deadline.

<a id="return-value"></a>

## Return Value

A pixel buffer containing the image data to display or `nil` if nothing should be displayed at the specified time. The caller is responsible for calling [CVBufferRelease](../../corevideo/cvbufferrelease.md) on the returned data when it is no longer needed.

<a id="Discussion"></a>

## Discussion

Typically, you call this method in response to a CVDisplayLink callback or a [CADisplayLink](../../quartzcore/cadisplaylink.md) delegate method call when the [hasNewPixelBufferForItemTime:](hasnewpixelbuffer%28foritemtime_%29.md) method also returns [true](https://developer.apple.com/documentation/swift/true).

After calling this method, the video output object marks the pixel buffer data as having been acquired. This causes the [hasNewPixelBufferForItemTime:](hasnewpixelbuffer%28foritemtime_%29.md) method to return [false](https://developer.apple.com/documentation/swift/false) unless newer data becomes available.

## See Also

### Getting pixel buffer data

- [hasNewPixelBufferForItemTime:](hasnewpixelbuffer%28foritemtime_%29.md): Returns a Boolean value that indicates whether video output is available for the specified item time.
