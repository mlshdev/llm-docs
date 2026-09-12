> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkimageanimatable/startanimatingwithimages(in:duration:repeatcount:)](https://developer.apple.com/documentation/watchkit/wkimageanimatable/startanimatingwithimages(in:duration:repeatcount:))

# startAnimatingWithImages(in:duration:repeatCount:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Animates the specified images with the given duration and repeat information.

## Declaration

```swift
func startAnimatingWithImages(in imageRange: NSRange, duration: TimeInterval, repeatCount: Int)
```

## Parameters

- `imageRange`: The range of images to be animated. The value `0` indicates the first image in the sequence, the value `1` the second image, and so on.
- `duration`: The time (in seconds) over which to animate a single loop of the images. Positive values cause the animation to start at the first frame in the sequence and end on the last frame. Negative values causes the animation to play in reverse order and end on the first frame in the sequence.
- `repeatCount`: The number of times to repeat the animation loop. Specify `0` to animate the images indefinitely.

<a id="Discussion"></a>

## Discussion

This method animates a subset of the images associated with the current image interface object. This method starts the animation from the first image in the specified range.

## See Also

### Animating an Image Sequence

- [startAnimating()](startanimating%28%29.md): Begins animating the current sequence of images.
- [stopAnimating()](stopanimating%28%29.md): Stops any in-progress animations.

# startAnimatingWithImagesInRange:duration:repeatCount: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Animates the specified images with the given duration and repeat information.

## Declaration

```objectivec
- (void) startAnimatingWithImagesInRange:(NSRange) imageRange duration:(NSTimeInterval) duration repeatCount:(NSInteger) repeatCount;
```

## Parameters

- `imageRange`: The range of images to be animated. The value `0` indicates the first image in the sequence, the value `1` the second image, and so on.
- `duration`: The time (in seconds) over which to animate a single loop of the images. Positive values cause the animation to start at the first frame in the sequence and end on the last frame. Negative values causes the animation to play in reverse order and end on the first frame in the sequence.
- `repeatCount`: The number of times to repeat the animation loop. Specify `0` to animate the images indefinitely.

<a id="Discussion"></a>

## Discussion

This method animates a subset of the images associated with the current image interface object. This method starts the animation from the first image in the specified range.

## See Also

### Animating an Image Sequence

- [startAnimating](startanimating%28%29.md): Begins animating the current sequence of images.
- [stopAnimating](stopanimating%28%29.md): Stops any in-progress animations.
