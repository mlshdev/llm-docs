> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icexiforientationtype](https://developer.apple.com/documentation/imagecapturecore/icexiforientationtype)

# ICEXIFOrientationType (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The file’s orientation type.

## Declaration

```swift
enum ICEXIFOrientationType
```

<a id="overview"></a>

## Overview

The meaning of this value is defined by the `EXIF` specification. Here is what the letter *F* would look like if it were tagged correctly and displayed by a program that ignores the orientation tag (thus showing the stored image):

```swift
               1             2             3             4

            8888888       8888888            88       88
            88                 88            88       88
            8888             8888          8888       8888
            88                 88            88       88
            88                 88       8888888       8888888

               5             6             7             8

            8888888888    88                    88    8888888888
            88  88        88  88            88  88        88  88
            88            8888888888    8888888888            88
```

## Topics

### Constants

- [ICEXIFOrientationType.orientation1](icexiforientationtype/orientation1.md): Normal
- [ICEXIFOrientationType.orientation2](icexiforientationtype/orientation2.md): Flipped horizontally
- [ICEXIFOrientationType.orientation3](icexiforientationtype/orientation3.md): Rotated 180°
- [ICEXIFOrientationType.orientation4](icexiforientationtype/orientation4.md): Flipped vertically
- [ICEXIFOrientationType.orientation5](icexiforientationtype/orientation5.md): Rotated 90° CCW and flipped vertically
- [ICEXIFOrientationType.orientation6](icexiforientationtype/orientation6.md): Rotated 90° CCW
- [ICEXIFOrientationType.orientation7](icexiforientationtype/orientation7.md): Rotated 90° CW and flipped vertically
- [ICEXIFOrientationType.orientation8](icexiforientationtype/orientation8.md): Rotated 90° CW

### Initializers

- [init(rawValue:)](icexiforientationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a File’s EXIF Data

- [orientation](iccamerafile/orientation.md): The orientation to use when downloading the image.
- [exifCreationDate](iccamerafile/exifcreationdate.md): The `EXIF` creation date of the file.
- [exifModificationDate](iccamerafile/exifmodificationdate.md): The `EXIF` modification date of the file.

# ICEXIFOrientationType (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The file’s orientation type.

## Declaration

```objectivec
enum ICEXIFOrientationType : NSUInteger;
```

<a id="overview"></a>

## Overview

The meaning of this value is defined by the `EXIF` specification. Here is what the letter *F* would look like if it were tagged correctly and displayed by a program that ignores the orientation tag (thus showing the stored image):

```swift
               1             2             3             4

            8888888       8888888            88       88
            88                 88            88       88
            8888             8888          8888       8888
            88                 88            88       88
            88                 88       8888888       8888888

               5             6             7             8

            8888888888    88                    88    8888888888
            88  88        88  88            88  88        88  88
            88            8888888888    8888888888            88
```

## Topics

### Constants

- [ICEXIFOrientation1](icexiforientationtype/orientation1.md): Normal
- [ICEXIFOrientation2](icexiforientationtype/orientation2.md): Flipped horizontally
- [ICEXIFOrientation3](icexiforientationtype/orientation3.md): Rotated 180°
- [ICEXIFOrientation4](icexiforientationtype/orientation4.md): Flipped vertically
- [ICEXIFOrientation5](icexiforientationtype/orientation5.md): Rotated 90° CCW and flipped vertically
- [ICEXIFOrientation6](icexiforientationtype/orientation6.md): Rotated 90° CCW
- [ICEXIFOrientation7](icexiforientationtype/orientation7.md): Rotated 90° CW and flipped vertically
- [ICEXIFOrientation8](icexiforientationtype/orientation8.md): Rotated 90° CW

## See Also

### Inspecting a File’s EXIF Data

- [orientation](iccamerafile/orientation.md): The orientation to use when downloading the image.
- [exifCreationDate](iccamerafile/exifcreationdate.md): The `EXIF` creation date of the file.
- [exifModificationDate](iccamerafile/exifmodificationdate.md): The `EXIF` modification date of the file.
