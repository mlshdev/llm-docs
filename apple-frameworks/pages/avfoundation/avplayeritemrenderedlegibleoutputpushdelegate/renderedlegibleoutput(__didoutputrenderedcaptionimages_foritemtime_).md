> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutputpushdelegate/renderedlegibleoutput(_:didoutputrenderedcaptionimages:foritemtime:)

# renderedLegibleOutput(\_:didOutputRenderedCaptionImages:forItemTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Tells the delegate that new rendered caption images are available.

## Declaration

```swift
optional func renderedLegibleOutput(_ output: AVPlayerItemRenderedLegibleOutput, didOutputRenderedCaptionImages captionImages: [AVRenderedCaptionImage], forItemTime itemTime: CMTime)
```

## Parameters

- `output`: The rendered legible output object.
- `captionImages`: An array of [AVRenderedCaptionImage](../avrenderedcaptionimage.md) objects. A caption object consists of a [CVPixelBuffer](../../corevideo/cvpixelbuffer-q2e.md) and its associated position, in pixels, relative to the video frame.
- `itemTime`: The item time at which to present the caption images.

# renderedLegibleOutput:didOutputRenderedCaptionImages:forItemTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Tells the delegate that new rendered caption images are available.

## Declaration

```objectivec
- (void) renderedLegibleOutput:(AVPlayerItemRenderedLegibleOutput *) output didOutputRenderedCaptionImages:(NSArray<AVRenderedCaptionImage *> *) captionImages forItemTime:(CMTime) itemTime;
```

## Parameters

- `output`: The rendered legible output object.
- `captionImages`: An array of [AVRenderedCaptionImage](../avrenderedcaptionimage.md) objects. A caption object consists of a [CVPixelBuffer](../../corevideo/cvpixelbuffer-q2e.md) and its associated position, in pixels, relative to the video frame.
- `itemTime`: The item time at which to present the caption images.
