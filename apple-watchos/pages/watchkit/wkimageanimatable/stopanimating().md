> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkimageanimatable/stopanimating()](https://developer.apple.com/documentation/watchkit/wkimageanimatable/stopanimating())

# stopAnimating() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Stops any in-progress animations.

## Declaration

```swift
func stopAnimating()
```

<a id="Discussion"></a>

## Discussion

If no animation is in progress, this method does nothing.

## See Also

### Animating an Image Sequence

- [startAnimating()](startanimating%28%29.md): Begins animating the current sequence of images.
- [startAnimatingWithImages(in:duration:repeatCount:)](startanimatingwithimages%28in_duration_repeatcount_%29.md): Animates the specified images with the given duration and repeat information.

# stopAnimating (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Stops any in-progress animations.

## Declaration

```objectivec
- (void) stopAnimating;
```

<a id="Discussion"></a>

## Discussion

If no animation is in progress, this method does nothing.

## See Also

### Animating an Image Sequence

- [startAnimating](startanimating%28%29.md): Begins animating the current sequence of images.
- [startAnimatingWithImagesInRange:duration:repeatCount:](startanimatingwithimages%28in_duration_repeatcount_%29.md): Animates the specified images with the given duration and repeat information.
