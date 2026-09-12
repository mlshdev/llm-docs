> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcachingimagemanager/allowscachinghighqualityimages](https://developer.apple.com/documentation/photos/phcachingimagemanager/allowscachinghighqualityimages)

# allowsCachingHighQualityImages (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.15+ (deprecated in 26.0) · tvOS 10.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A Boolean value that determines whether the image manager prepares high-quality images.

> This property is unused and will be removed in a future release

## Declaration

```swift
var allowsCachingHighQualityImages: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `true` (the default), the image manager prepares images at high quality. This option produces better images, at a high performance cost.

For faster performance when preparing large numbers of images—such as while the user is scrolling quickly through a collection of thumbnails—set this property to `false`.

# allowsCachingHighQualityImages (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.15+ (deprecated in 26.0) · tvOS 10.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A Boolean value that determines whether the image manager prepares high-quality images.

> This property is unused and will be removed in a future release

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsCachingHighQualityImages;
```

<a id="Discussion"></a>

## Discussion

If `true` (the default), the image manager prepares images at high quality. This option produces better images, at a high performance cost.

For faster performance when preparing large numbers of images—such as while the user is scrolling quickly through a collection of thumbnails—set this property to `false`.
