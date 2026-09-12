> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemvideooutput/pixelbufferanddisplaytime(foritemtime:)](https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/pixelbufferanddisplaytime(foritemtime:))

# pixelBufferAndDisplayTime(forItemTime:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Retrieves an image that is appropriate for display at the specified item time, and marks the image as acquired

## Declaration

```swift
func pixelBufferAndDisplayTime(forItemTime itemTime: CMTime) -> (pixelBuffer: CVReadOnlyPixelBuffer?, itemTimeForDisplay: CMTime)
```

<a id="return-value"></a>

## Return Value

A tuple containing the image to be displayed and a CMTime representing the true display deadline for the pixel buffer

<a id="discussion"></a>

## Discussion

- itemTime: A CMTime that expresses a desired item time

Typically you would call this method in response to a CADisplayLink delegate invocation and if hasNewPixelBuffer(forItemTime:) also returns true.

The buffer retrieved from pixelBufferAndDisplayTime(forItemTime:) may itself be nil. A nil pixel buffer communicates that nothing should be displayed for the supplied item time.

## See Also

### Getting pixel buffer data

- [hasNewPixelBuffer(forItemTime:)](hasnewpixelbuffer%28foritemtime_%29.md): Returns a Boolean value that indicates whether video output is available for the specified item time.
- [copyPixelBuffer(forItemTime:itemTimeForDisplay:)](copypixelbuffer%28foritemtime_itemtimefordisplay_%29.md): Deprecated. Retrieves an image that is appropriate for display at the specified item time, and marks the image as acquired.
