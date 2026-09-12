> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/capturephoto(with:delegate:)](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/capturephoto(with:delegate:))

# capturePhoto(with:delegate:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Initiates a photo capture using the specified settings.

## Declaration

```swift
func capturePhoto(with settings: AVCapturePhotoSettings, delegate: any AVCapturePhotoCaptureDelegate)
```

## Parameters

- `settings`: The settings for the photo capture, such as the output pixel format and flash mode. This method copies the provided [AVCapturePhotoSettings](../avcapturephotosettings.md) object, so future changes to that object do not affect the capture in progress.

  > **Important**

  >  It is illegal to reuse a [AVCapturePhotoSettings](../avcapturephotosettings.md) instance for multiple captures. Calling this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) if the `settings` object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value matches that of any previously used settings object.
- `delegate`: A delegate object to receive messages about capture progress and results. The photo output calls your delegate methods as the photo advances from capture to processing to delivery of finished images.

## Mentioned In

- [Capturing a bracketed photo sequence](../capturing-a-bracketed-photo-sequence.md)
- [Capturing and saving Live Photos](../capturing-and-saving-live-photos.md)
- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Capturing photos with depth](../capturing-photos-with-depth.md)
- [Setting up a capture session](../setting-up-a-capture-session.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

Use this method for all variations of still photography, including single photo capture,  RAW format capture (with or without a secondary format such as JPEG), bracketed capture of multiple images, and Live Photo capture.

When you call this method, the photo output validates the properties of your `settings` object to ensure deterministic behavior. For example, the [flashMode](../avcapturephotosettings/flashmode.md) setting must specify a value that is present in the photo output’s [supportedFlashModes](supportedflashmodes-4u69s.md) array. See each property’s description in the [AVCapturePhotoSettings](../avcapturephotosettings.md) class reference for detailed validation rules.

# capturePhotoWithSettings:delegate: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Initiates a photo capture using the specified settings.

## Declaration

```objectivec
- (void) capturePhotoWithSettings:(AVCapturePhotoSettings *) settings delegate:(id<AVCapturePhotoCaptureDelegate>) delegate;
```

## Parameters

- `settings`: The settings for the photo capture, such as the output pixel format and flash mode. This method copies the provided [AVCapturePhotoSettings](../avcapturephotosettings.md) object, so future changes to that object do not affect the capture in progress.

  > **Important**

  >  It is illegal to reuse a [AVCapturePhotoSettings](../avcapturephotosettings.md) instance for multiple captures. Calling this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) if the `settings` object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value matches that of any previously used settings object.
- `delegate`: A delegate object to receive messages about capture progress and results. The photo output calls your delegate methods as the photo advances from capture to processing to delivery of finished images.

## Mentioned In

- [Capturing a bracketed photo sequence](../capturing-a-bracketed-photo-sequence.md)
- [Capturing and saving Live Photos](../capturing-and-saving-live-photos.md)
- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Capturing photos with depth](../capturing-photos-with-depth.md)
- [Setting up a capture session](../setting-up-a-capture-session.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

Use this method for all variations of still photography, including single photo capture,  RAW format capture (with or without a secondary format such as JPEG), bracketed capture of multiple images, and Live Photo capture.

When you call this method, the photo output validates the properties of your `settings` object to ensure deterministic behavior. For example, the [flashMode](../avcapturephotosettings/flashmode.md) setting must specify a value that is present in the photo output’s [supportedFlashModes](supportedflashmodes-4u69s.md) array. See each property’s description in the [AVCapturePhotoSettings](../avcapturephotosettings.md) class reference for detailed validation rules.
