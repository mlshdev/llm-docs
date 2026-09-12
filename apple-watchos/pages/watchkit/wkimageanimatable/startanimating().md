> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkimageanimatable/startanimating()](https://developer.apple.com/documentation/watchkit/wkimageanimatable/startanimating())

# startAnimating() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Begins animating the current sequence of images.

## Declaration

```swift
func startAnimating()
```

<a id="Discussion"></a>

## Discussion

If the image data contains multiple images, calling this method begins animating through those images, starting at the first image. The animation uses the duration value specified in your storyboard file.

If the current image contains only a single image, this method does nothing.

## See Also

### Animating an Image Sequence

- [startAnimatingWithImages(in:duration:repeatCount:)](startanimatingwithimages%28in_duration_repeatcount_%29.md): Animates the specified images with the given duration and repeat information.
- [stopAnimating()](stopanimating%28%29.md): Stops any in-progress animations.

# startAnimating (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Begins animating the current sequence of images.

## Declaration

```objectivec
- (void) startAnimating;
```

<a id="Discussion"></a>

## Discussion

If the image data contains multiple images, calling this method begins animating through those images, starting at the first image. The animation uses the duration value specified in your storyboard file.

If the current image contains only a single image, this method does nothing.

## See Also

### Animating an Image Sequence

- [startAnimatingWithImagesInRange:duration:repeatCount:](startanimatingwithimages%28in_duration_repeatcount_%29.md): Animates the specified images with the given duration and repeat information.
- [stopAnimating](stopanimating%28%29.md): Stops any in-progress animations.
