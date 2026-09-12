> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagecontentmode/aspectfit](https://developer.apple.com/documentation/photos/phimagecontentmode/aspectfit)

# PHImageContentMode.aspectFit (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Scales the image so that its larger dimension fits the target size.

## Declaration

```swift
case aspectFit
```

<a id="Discussion"></a>

## Discussion

Use this option when you want the entire image to be visible, such as when presenting it in a view with the [UIView.ContentMode.scaleAspectFit](../../uikit/uiview/contentmode-swift.enum/scaleaspectfit.md) content mode.

## See Also

### Constants

- [default](default.md): Fits the image to the requested size using the default option, [PHImageContentMode.aspectFit](aspectfit.md).
- [PHImageContentMode.aspectFill](aspectfill.md): Scales the image so that it completely fills the target size.

# PHImageContentModeAspectFit (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Scales the image so that its larger dimension fits the target size.

## Declaration

```objectivec
PHImageContentModeAspectFit
```

<a id="Discussion"></a>

## Discussion

Use this option when you want the entire image to be visible, such as when presenting it in a view with the [UIViewContentModeScaleAspectFit](../../uikit/uiview/contentmode-swift.enum/scaleaspectfit.md) content mode.

## See Also

### Constants

- [PHImageContentModeDefault](default.md): Fits the image to the requested size using the default option, [PHImageContentModeAspectFit](aspectfit.md).
- [PHImageContentModeAspectFill](aspectfill.md): Scales the image so that it completely fills the target size.
