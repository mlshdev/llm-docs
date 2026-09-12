> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(image:)](https://developer.apple.com/documentation/xctest/xctattachment/init(image:))

# init(image:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment containing a PNG representation of the provided image.

## Declaration

```swift
convenience init(image: UIImage)
```

```swift
convenience init(image: NSImage)
```

## Parameters

- `image`: The image to wrap as an attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of `"public.png"`. Equivalent to calling [init(image:quality:)](init%28image_quality_%29.md) with a `quality` value of [XCTAttachment.ImageQuality.original](imagequality/original.md).

## See Also

### Creating Attachments from Images and Screenshots

- [init(image:quality:)](init%28image_quality_%29.md): Creates an attachment containing a representation of the provided image at the requested image quality.
- [init(screenshot:)](init%28screenshot_%29.md): Creates an attachment containing a PNG representation of the provided screenshot.
- [init(screenshot:quality:)](init%28screenshot_quality_%29.md): Creates an attachment containing a representation of the provided screenshot at the requested image quality.
- [XCUIScreenshot](../../xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCTAttachment.ImageQuality](imagequality.md): Compression quality options for image-based attachments.

# attachmentWithImage: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates an attachment containing a PNG representation of the provided image.

## Declaration

```objectivec
+ (instancetype) attachmentWithImage:(UIImage *) image;
```

```objectivec
+ (instancetype) attachmentWithImage:(NSImage *) image;
```

## Parameters

- `image`: The image to wrap as an attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of `"public.png"`. Equivalent to calling [attachmentWithImage:quality:](init%28image_quality_%29.md) with a `quality` value of [XCTImageQualityOriginal](imagequality/original.md).

## See Also

### Creating Attachments from Images and Screenshots

- [attachmentWithImage:quality:](init%28image_quality_%29.md): Creates an attachment containing a representation of the provided image at the requested image quality.
- [attachmentWithScreenshot:](init%28screenshot_%29.md): Creates an attachment containing a PNG representation of the provided screenshot.
- [attachmentWithScreenshot:quality:](init%28screenshot_quality_%29.md): Creates an attachment containing a representation of the provided screenshot at the requested image quality.
- [XCUIScreenshot](../../xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCTImageQuality](imagequality.md): Compression quality options for image-based attachments.
