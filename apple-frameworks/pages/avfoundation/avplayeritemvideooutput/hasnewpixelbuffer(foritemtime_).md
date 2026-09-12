> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemvideooutput/hasnewpixelbuffer(foritemtime:)](https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/hasnewpixelbuffer(foritemtime:))

# hasNewPixelBuffer(forItemTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether video output is available for the specified item time.

## Declaration

```swift
func hasNewPixelBuffer(forItemTime itemTime: CMTime) -> Bool
```

## Parameters

- `itemTime`: The item time to query. The time value is relative to the [AVPlayerItem](../avplayeritem.md) object with which the receiver is associated.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if there is available video output that has not been previously acquired or [false](https://developer.apple.com/documentation/swift/false) if there is not.

<a id="Discussion"></a>

## Discussion

This method returns [true](https://developer.apple.com/documentation/swift/true) if the video data at the specified time has not yet been acquired or is different from the video that was acquired previously. If you require multiple objects to acquire video output from the same [AVPlayerItem](../avplayeritem.md) object, you should create separate `AVPlayerItemVideoOutput` objects for each.

## See Also

### Getting pixel buffer data

- [copyPixelBuffer(forItemTime:itemTimeForDisplay:)](copypixelbuffer%28foritemtime_itemtimefordisplay_%29.md): Deprecated. Retrieves an image that is appropriate for display at the specified item time, and marks the image as acquired.
- [pixelBufferAndDisplayTime(forItemTime:)](pixelbufferanddisplaytime%28foritemtime_%29.md): Retrieves an image that is appropriate for display at the specified item time, and marks the image as acquired

# hasNewPixelBufferForItemTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether video output is available for the specified item time.

## Declaration

```objectivec
- (BOOL) hasNewPixelBufferForItemTime:(CMTime) itemTime;
```

## Parameters

- `itemTime`: The item time to query. The time value is relative to the [AVPlayerItem](../avplayeritem.md) object with which the receiver is associated.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if there is available video output that has not been previously acquired or [false](https://developer.apple.com/documentation/swift/false) if there is not.

<a id="Discussion"></a>

## Discussion

This method returns [true](https://developer.apple.com/documentation/swift/true) if the video data at the specified time has not yet been acquired or is different from the video that was acquired previously. If you require multiple objects to acquire video output from the same [AVPlayerItem](../avplayeritem.md) object, you should create separate `AVPlayerItemVideoOutput` objects for each.

## See Also

### Getting pixel buffer data

- [copyPixelBufferForItemTime:itemTimeForDisplay:](copypixelbuffer%28foritemtime_itemtimefordisplay_%29.md): Deprecated. Retrieves an image that is appropriate for display at the specified item time, and marks the image as acquired.
