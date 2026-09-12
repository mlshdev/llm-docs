> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(screenshot:)](https://developer.apple.com/documentation/xctest/xctattachment/init(screenshot:))

# init(screenshot:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment containing a PNG representation of the provided screenshot.

## Declaration

```swift
convenience init(screenshot: XCUIScreenshot)
```

## Parameters

- `screenshot`: The screenshot to wrap as an attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of `"public.png"`. Equivalent to calling [init(screenshot:quality:)](init%28screenshot_quality_%29.md) with a `quality` value of [XCTAttachment.ImageQuality.original](imagequality/original.md).

## See Also

### Creating Attachments from Images and Screenshots

- [init(image:)](init%28image_%29.md): Creates an attachment containing a PNG representation of the provided image.
- [init(image:quality:)](init%28image_quality_%29.md): Creates an attachment containing a representation of the provided image at the requested image quality.
- [init(screenshot:quality:)](init%28screenshot_quality_%29.md): Creates an attachment containing a representation of the provided screenshot at the requested image quality.
- [XCUIScreenshot](../../xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCTAttachment.ImageQuality](imagequality.md): Compression quality options for image-based attachments.

# attachmentWithScreenshot: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates an attachment containing a PNG representation of the provided screenshot.

## Declaration

```objectivec
+ (instancetype) attachmentWithScreenshot:(XCUIScreenshot *) screenshot;
```

## Parameters

- `screenshot`: The screenshot to wrap as an attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of `"public.png"`. Equivalent to calling [attachmentWithScreenshot:quality:](init%28screenshot_quality_%29.md) with a `quality` value of [XCTImageQualityOriginal](imagequality/original.md).

## See Also

### Creating Attachments from Images and Screenshots

- [attachmentWithImage:](init%28image_%29.md): Creates an attachment containing a PNG representation of the provided image.
- [attachmentWithImage:quality:](init%28image_quality_%29.md): Creates an attachment containing a representation of the provided image at the requested image quality.
- [attachmentWithScreenshot:quality:](init%28screenshot_quality_%29.md): Creates an attachment containing a representation of the provided screenshot at the requested image quality.
- [XCUIScreenshot](../../xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCTImageQuality](imagequality.md): Compression quality options for image-based attachments.
