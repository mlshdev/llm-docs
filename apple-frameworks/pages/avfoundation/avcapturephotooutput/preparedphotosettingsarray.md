> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/preparedphotosettingsarray](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/preparedphotosettingsarray)

# preparedPhotoSettingsArray (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of photo settings for which the photo output has prepared capture resources.

## Declaration

```swift
var preparedPhotoSettingsArray: [AVCapturePhotoSettings] { get }
```

<a id="Discussion"></a>

## Discussion

Some types of photo capture, such as bracketed captures and RAW captures, require the photo output to allocate additional buffers or prepare other resources. To prevent photo capture requests from executing slowly due to lazy resource allocation, you may call the [setPreparedPhotoSettingsArray(\_:completionHandler:)](setpreparedphotosettingsarray%28__completionhandler_%29.md) method with an array of settings objects representative of the types of capture you will be performing (such as settings for a bracketed capture, RAW capture, or capture with still image stabilization).

By default, the photo output prepares sufficient resources to capture photos with default settings (as defined by the [AVCapturePhotoSettings](../avcapturephotosettings.md) default initializer).

## See Also

### Preparing for resource-intensive captures

- [setPreparedPhotoSettingsArray(\_:completionHandler:)](setpreparedphotosettingsarray%28__completionhandler_%29.md): Tells the photo capture output to prepare resources for future capture requests with the specified settings.

# preparedPhotoSettingsArray (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of photo settings for which the photo output has prepared capture resources.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCapturePhotoSettings *> * preparedPhotoSettingsArray;
```

<a id="Discussion"></a>

## Discussion

Some types of photo capture, such as bracketed captures and RAW captures, require the photo output to allocate additional buffers or prepare other resources. To prevent photo capture requests from executing slowly due to lazy resource allocation, you may call the [setPreparedPhotoSettingsArray:completionHandler:](setpreparedphotosettingsarray%28__completionhandler_%29.md) method with an array of settings objects representative of the types of capture you will be performing (such as settings for a bracketed capture, RAW capture, or capture with still image stabilization).

By default, the photo output prepares sufficient resources to capture photos with default settings (as defined by the [AVCapturePhotoSettings](../avcapturephotosettings.md) default initializer).

## See Also

### Preparing for resource-intensive captures

- [setPreparedPhotoSettingsArray:completionHandler:](setpreparedphotosettingsarray%28__completionhandler_%29.md): Tells the photo capture output to prepare resources for future capture requests with the specified settings.
