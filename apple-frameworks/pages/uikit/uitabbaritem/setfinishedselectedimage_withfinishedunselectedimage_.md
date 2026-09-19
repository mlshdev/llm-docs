> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitabbaritem/setfinishedselectedimage:withfinishedunselectedimage:

# setFinishedSelectedImage:withFinishedUnselectedImage:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sets the finished selected and unselected images.

> Use [image](../uibaritem/image.md) and [selectedImage](selectedimage.md) with [UIImageRenderingModeAlwaysOriginal](../uiimage/renderingmode-swift.enum/alwaysoriginal.md) instead.

## Declaration

```objectivec
- (void) setFinishedSelectedImage:(UIImage *) selectedImage withFinishedUnselectedImage:(UIImage *) unselectedImage;
```

## Parameters

- `selectedImage`: The finished selected image.
- `unselectedImage`: The finished unselected image.

## See Also

### Deprecated

- [finishedSelectedImage](finishedselectedimage.md): Deprecated. Returns the finished selected image.
- [finishedUnselectedImage](finishedunselectedimage.md): Deprecated. Returns the finished unselected image.
