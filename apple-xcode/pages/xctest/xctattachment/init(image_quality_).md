> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(image:quality:)](https://developer.apple.com/documentation/xctest/xctattachment/init(image:quality:))

# init(image:quality:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment containing a representation of the provided image at the requested image quality.

## Declaration

```swift
convenience init(image: UIImage, quality: XCTAttachment.ImageQuality)
```

```swift
convenience init(image: NSImage, quality: XCTAttachment.ImageQuality)
```

## Parameters

- `image`: The image to wrap as an attachment.
- `quality`: The quality setting to use when storing the image in the attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of `"public.png"` when `quality` is [XCTAttachment.ImageQuality.original](imagequality/original.md), and a [uniformTypeIdentifier](uniformtypeidentifier.md) of `"public.jpeg"` when `quality` is [XCTAttachment.ImageQuality.medium](imagequality/medium.md) or [XCTAttachment.ImageQuality.low](imagequality/low.md).

## See Also

### Creating Attachments from Images and Screenshots

- [init(image:)](init%28image_%29.md): Creates an attachment containing a PNG representation of the provided image.
- [init(screenshot:)](init%28screenshot_%29.md): Creates an attachment containing a PNG representation of the provided screenshot.
- [init(screenshot:quality:)](init%28screenshot_quality_%29.md): Creates an attachment containing a representation of the provided screenshot at the requested image quality.
- [XCUIScreenshot](../../xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCTAttachment.ImageQuality](imagequality.md): Compression quality options for image-based attachments.

# attachmentWithImage:quality: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates an attachment containing a representation of the provided image at the requested image quality.

## Declaration

```objectivec
+ (instancetype) attachmentWithImage:(UIImage *) image quality:(XCTImageQuality) quality;
```

```objectivec
+ (instancetype) attachmentWithImage:(NSImage *) image quality:(XCTImageQuality) quality;
```

## Parameters

- `image`: The image to wrap as an attachment.
- `quality`: The quality setting to use when storing the image in the attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of `"public.png"` when `quality` is [XCTImageQualityOriginal](imagequality/original.md), and a [uniformTypeIdentifier](uniformtypeidentifier.md) of `"public.jpeg"` when `quality` is [XCTImageQualityMedium](imagequality/medium.md) or [XCTImageQualityLow](imagequality/low.md).

## See Also

### Creating Attachments from Images and Screenshots

- [attachmentWithImage:](init%28image_%29.md): Creates an attachment containing a PNG representation of the provided image.
- [attachmentWithScreenshot:](init%28screenshot_%29.md): Creates an attachment containing a PNG representation of the provided screenshot.
- [attachmentWithScreenshot:quality:](init%28screenshot_quality_%29.md): Creates an attachment containing a representation of the provided screenshot at the requested image quality.
- [XCUIScreenshot](../../xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCTImageQuality](imagequality.md): Compression quality options for image-based attachments.
