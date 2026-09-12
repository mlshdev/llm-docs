> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpthumbnailimage/maximumimagesize(foraspectratio:)](https://developer.apple.com/documentation/carplay/cpthumbnailimage/maximumimagesize(foraspectratio:))

# maximumImageSize(forAspectRatio:) (Swift)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Returns the recommended maximum image size for a @c CPThumbnailImage with the given aspect ratio.

## Declaration

```swift
class func maximumImageSize(forAspectRatio aspectRatio: CGFloat) -> CGSize
```

## Parameters

- `aspectRatio`: The width-to-height ratio of the image.

<a id="return-value"></a>

## Return Value

The recommended @c CGSize at which to size the image.

<a id="discussion"></a>

## Discussion

Use this method to determine the correct size for images before providing them to

oversized images being held in the thumbnail pipeline.

# maximumImageSizeForAspectRatio: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Returns the recommended maximum image size for a @c CPThumbnailImage with the given aspect ratio.

## Declaration

```objectivec
+ (CGSize) maximumImageSizeForAspectRatio:(CGFloat) aspectRatio;
```

## Parameters

- `aspectRatio`: The width-to-height ratio of the image.

<a id="return-value"></a>

## Return Value

The recommended @c CGSize at which to size the image.

<a id="discussion"></a>

## Discussion

Use this method to determine the correct size for images before providing them to

oversized images being held in the thumbnail pipeline.
