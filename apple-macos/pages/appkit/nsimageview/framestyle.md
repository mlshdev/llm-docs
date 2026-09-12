> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimageview/framestyle](https://developer.apple.com/documentation/appkit/nsimageview/framestyle)

# NSImageView.FrameStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that allow you to specify the kind of frame bordering the image.

## Declaration

```swift
enum FrameStyle
```

<a id="overview"></a>

## Overview

These constants are used by [imageFrameStyle](../nsimagecell/imageframestyle.md). Note that some of these constants are stylistically obsolete and should be considered deprecated.

## Topics

### Constants

- [NSImageView.FrameStyle.none](framestyle/none.md): An invisible frame
- [NSImageView.FrameStyle.photo](framestyle/photo.md): Deprecated. A thin black outline and a dropped shadow.
- [NSImageView.FrameStyle.grayBezel](framestyle/graybezel.md): A gray, concave bezel that makes the image look sunken.
- [NSImageView.FrameStyle.groove](framestyle/groove.md): Deprecated. A thin groove that looks etched around the image.
- [NSImageView.FrameStyle.button](framestyle/button.md): Deprecated. A convex bezel that makes the image stand out in relief, like a button.

### Initializers

- [init(rawValue:)](framestyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSImageAlignment](../nsimagealignment.md): Constants used by [imageAlignment](../nsimagecell/imagealignment.md) that allow you to specify the location of the image in the frame.

# NSImageFrameStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that allow you to specify the kind of frame bordering the image.

## Declaration

```objectivec
enum NSImageFrameStyle : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by [imageFrameStyle](../nsimagecell/imageframestyle.md). Note that some of these constants are stylistically obsolete and should be considered deprecated.

## Topics

### Constants

- [NSImageFrameNone](framestyle/none.md): An invisible frame
- [NSImageFramePhoto](framestyle/photo.md): Deprecated. A thin black outline and a dropped shadow.
- [NSImageFrameGrayBezel](framestyle/graybezel.md): A gray, concave bezel that makes the image look sunken.
- [NSImageFrameGroove](framestyle/groove.md): Deprecated. A thin groove that looks etched around the image.
- [NSImageFrameButton](framestyle/button.md): Deprecated. A convex bezel that makes the image stand out in relief, like a button.

## See Also

### Constants

- [NSImageAlignment](../nsimagealignment.md): Constants used by [imageAlignment](../nsimagecell/imagealignment.md) that allow you to specify the location of the image in the frame.
