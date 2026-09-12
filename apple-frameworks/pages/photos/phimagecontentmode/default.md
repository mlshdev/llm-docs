> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagecontentmode/default](https://developer.apple.com/documentation/photos/phimagecontentmode/default)

# default (Swift)

**Framework:** Photos  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Fits the image to the requested size using the default option, [PHImageContentMode.aspectFit](aspectfit.md).

## Declaration

```swift
static var `default`: PHImageContentMode { get }
```

<a id="Discussion"></a>

## Discussion

Use this content mode when requesting a full-sized image using the [PHImageManagerMaximumSize](../phimagemanagermaximumsize.md) value for the target size. In this case, the image manager does not scale or crop the image.

## See Also

### Constants

- [PHImageContentMode.aspectFit](aspectfit.md): Scales the image so that its larger dimension fits the target size.
- [PHImageContentMode.aspectFill](aspectfill.md): Scales the image so that it completely fills the target size.

# PHImageContentModeDefault (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Fits the image to the requested size using the default option, [PHImageContentModeAspectFit](aspectfit.md).

## Declaration

```objectivec
PHImageContentModeDefault
```

<a id="Discussion"></a>

## Discussion

Use this content mode when requesting a full-sized image using the [PHImageManagerMaximumSize](../phimagemanagermaximumsize.md) value for the target size. In this case, the image manager does not scale or crop the image.

## See Also

### Constants

- [PHImageContentModeAspectFit](aspectfit.md): Scales the image so that its larger dimension fits the target size.
- [PHImageContentModeAspectFill](aspectfill.md): Scales the image so that it completely fills the target size.
