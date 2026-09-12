> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/imagequality](https://developer.apple.com/documentation/xctest/xctattachment/imagequality)

# XCTAttachment.ImageQuality (Swift)

**Framework:** XCTest  
**Kind:** Enumeration

Compression quality options for image-based attachments.

## Declaration

```swift
enum ImageQuality
```

## Topics

### Quality Settings

- [XCTAttachment.ImageQuality.original](imagequality/original.md): Original image quality, represented as a lossless PNG image.
- [XCTAttachment.ImageQuality.medium](imagequality/medium.md): Medium image quality, represented as a high quality lossy JPEG image.
- [XCTAttachment.ImageQuality.low](imagequality/low.md): Low image quality, represented as a highly compressed lossy JPEG image.

### Initializers

- [init(rawValue:)](imagequality/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Attachments from Images and Screenshots

- [init(image:)](init%28image_%29.md): Creates an attachment containing a PNG representation of the provided image.
- [init(image:quality:)](init%28image_quality_%29.md): Creates an attachment containing a representation of the provided image at the requested image quality.
- [init(screenshot:)](init%28screenshot_%29.md): Creates an attachment containing a PNG representation of the provided screenshot.
- [init(screenshot:quality:)](init%28screenshot_quality_%29.md): Creates an attachment containing a representation of the provided screenshot at the requested image quality.
- [XCUIScreenshot](../../xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.

# XCTImageQuality (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration

Compression quality options for image-based attachments.

## Declaration

```objectivec
enum XCTImageQuality : NSInteger;
```

## Topics

### Quality Settings

- [XCTImageQualityOriginal](imagequality/original.md): Original image quality, represented as a lossless PNG image.
- [XCTImageQualityMedium](imagequality/medium.md): Medium image quality, represented as a high quality lossy JPEG image.
- [XCTImageQualityLow](imagequality/low.md): Low image quality, represented as a highly compressed lossy JPEG image.

## See Also

### Creating Attachments from Images and Screenshots

- [attachmentWithImage:](init%28image_%29.md): Creates an attachment containing a PNG representation of the provided image.
- [attachmentWithImage:quality:](init%28image_quality_%29.md): Creates an attachment containing a representation of the provided image at the requested image quality.
- [attachmentWithScreenshot:](init%28screenshot_%29.md): Creates an attachment containing a PNG representation of the provided screenshot.
- [attachmentWithScreenshot:quality:](init%28screenshot_quality_%29.md): Creates an attachment containing a representation of the provided screenshot at the requested image quality.
- [XCUIScreenshot](../../xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
