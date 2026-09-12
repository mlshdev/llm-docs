> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagecontentmode/aspectfill](https://developer.apple.com/documentation/photos/phimagecontentmode/aspectfill)

# PHImageContentMode.aspectFill (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Scales the image so that it completely fills the target size.

## Declaration

```swift
case aspectFill
```

<a id="Discussion"></a>

## Discussion

Use this option when you want the image to completely fill an area, such as when presenting it in a view with the [UIView.ContentMode.scaleAspectFill](../../uikit/uiview/contentmode-swift.enum/scaleaspectfill.md) content mode.

## See Also

### Constants

- [default](default.md): Fits the image to the requested size using the default option, [PHImageContentMode.aspectFit](aspectfit.md).
- [PHImageContentMode.aspectFit](aspectfit.md): Scales the image so that its larger dimension fits the target size.

# PHImageContentModeAspectFill (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Scales the image so that it completely fills the target size.

## Declaration

```objectivec
PHImageContentModeAspectFill
```

<a id="Discussion"></a>

## Discussion

Use this option when you want the image to completely fill an area, such as when presenting it in a view with the [UIViewContentModeScaleAspectFill](../../uikit/uiview/contentmode-swift.enum/scaleaspectfill.md) content mode.

## See Also

### Constants

- [PHImageContentModeDefault](default.md): Fits the image to the requested size using the default option, [PHImageContentModeAspectFit](aspectfit.md).
- [PHImageContentModeAspectFit](aspectfit.md): Scales the image so that its larger dimension fits the target size.
