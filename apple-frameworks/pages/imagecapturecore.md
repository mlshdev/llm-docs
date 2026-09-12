> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore](https://developer.apple.com/documentation/imagecapturecore)

# ImageCaptureCore (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · visionOS 1.0+

Browse for media devices and control them programmatically from your app.

<a id="overview"></a>

## Overview

Using ImageCaptureCore, your app can:

- Discover connected cameras and scanners
- View and modify the folders, files, and metadata on a connected camera
- Take photos directly on a connected camera using tethered capture
- Perform overview scans and scans on a connected scanner

![Diagram showing a macOS device connected by cables to a camera and a scanner, and an iPadOS device connected by cable to a camera.](https://developer.apple.com/images/com.apple.imagecapturecore/media-3501083@2x.png)

<a id="Configuring-tethered-capture-and-photo-import"></a>

### Configuring tethered capture and photo import

To import pictures and tether from a macOS app, you first need to enable the Hardened Runtime capability in Xcode, and then add the [Photos Library Entitlement](bundleresources/entitlements/com.apple.security.personal-information.photos-library.md).

Before you can tether from an iOS app, you need to tell the user why the app is requesting access to an external camera. Add the [NSCameraUsageDescription](bundleresources/information-property-list/nscamerausagedescription.md) key to your `Info.plist` file with a description of your intended use.

> **Important**

>  In macOS 14 and later, use the [com.apple.security.device.usb](bundleresources/entitlements/com.apple.security.device.usb.md) entitlement key to allow your sandboxed app to interact with USB devices.

## Topics

### Essentials

- [ICDeviceBrowser](imagecapturecore/icdevicebrowser.md): An object for finding digital cameras and scanners.
- [Photos Library Entitlement](bundleresources/entitlements/com.apple.security.personal-information.photos-library.md): A Boolean value that indicates whether the app has read-write access to the user’s Photos library.
- [NSCameraUsageDescription](bundleresources/information-property-list/nscamerausagedescription.md): A message that tells people why the app is requesting access to the device’s camera.

### Cameras

- [ICCameraDevice](imagecapturecore/iccameradevice.md): An object that represents a camera.
- [ICCameraDeviceDelegate](imagecapturecore/iccameradevicedelegate.md): Methods for detecting cameras, getting metadata and thumbnails, handling access and capability changes, and performing other actions on connected cameras.
- [ICCameraItem](imagecapturecore/iccameraitem.md): An abstract class that represents a camera item.
- [ICCameraFile](imagecapturecore/iccamerafile.md): An object that represents a file on a camera.
- [ICCameraFolder](imagecapturecore/iccamerafolder.md): An object that represents a folder on a camera.

### Scanners

- [ICScannerDevice](imagecapturecore/icscannerdevice.md): An object that represents a scanner.
- [ICScannerDeviceDelegate](imagecapturecore/icscannerdevicedelegate.md): Methods for determining availability, selecting a functional unit, and performing scans on connected scanners.
- [Scanner Configuration](imagecapturecore/scanner-configuration.md): Examine a scanner’s functional units and features.

### Errors

- [ICReturn](imagecapturecore/icreturn.md)
- [ICLegacyReturn](imagecapturecore/iclegacyreturn.md)
- [ICReturnConnectionError](imagecapturecore/icreturnconnectionerror.md): A connection error returned from ImageCaptureCore.
- [ICReturnDownloadError](imagecapturecore/icreturndownloaderror.md): A download error returned from ImageCaptureCore.
- [ICReturnMetadataError](imagecapturecore/icreturnmetadataerror.md): A metadata error returned from ImageCaptureCore.
- [ICReturnObjectError](imagecapturecore/icreturnobjecterror.md): An object error returned from ImageCaptureCore.
- [ICReturnPTPDeviceError](imagecapturecore/icreturnptpdeviceerror.md): A PTP device error returned from ImageCaptureCore.
- [ICReturnThumbnailError](imagecapturecore/icreturnthumbnailerror.md): A thumbnail error returned from ImageCaptureCore.

### Legacy Symbols

- [ICRunLoopMode](imagecapturecore/icrunloopmode.md): Deprecated.

### Articles

- [ImageCaptureCore Constants](imagecapturecore/imagecapturecore-constants.md)
- [ImageCaptureCore Data Types](imagecapturecore/imagecapturecore-data-types.md)
- [ImageCaptureCore Enumerations](imagecapturecore/imagecapturecore-enumerations.md)
- [ImageCaptureCore Macros](imagecapturecore/imagecapturecore-macros.md)

# ImageCaptureCore (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · visionOS 1.0+

Browse for media devices and control them programmatically from your app.

<a id="overview"></a>

## Overview

Using ImageCaptureCore, your app can:

- Discover connected cameras and scanners
- View and modify the folders, files, and metadata on a connected camera
- Take photos directly on a connected camera using tethered capture
- Perform overview scans and scans on a connected scanner

![Diagram showing a macOS device connected by cables to a camera and a scanner, and an iPadOS device connected by cable to a camera.](https://developer.apple.com/images/com.apple.imagecapturecore/media-3501083@2x.png)

<a id="Configuring-tethered-capture-and-photo-import"></a>

### Configuring tethered capture and photo import

To import pictures and tether from a macOS app, you first need to enable the Hardened Runtime capability in Xcode, and then add the [Photos Library Entitlement](bundleresources/entitlements/com.apple.security.personal-information.photos-library.md).

Before you can tether from an iOS app, you need to tell the user why the app is requesting access to an external camera. Add the [NSCameraUsageDescription](bundleresources/information-property-list/nscamerausagedescription.md) key to your `Info.plist` file with a description of your intended use.

> **Important**

>  In macOS 14 and later, use the [com.apple.security.device.usb](bundleresources/entitlements/com.apple.security.device.usb.md) entitlement key to allow your sandboxed app to interact with USB devices.

## Topics

### Essentials

- [ICDeviceBrowser](imagecapturecore/icdevicebrowser.md): An object for finding digital cameras and scanners.
- [Photos Library Entitlement](bundleresources/entitlements/com.apple.security.personal-information.photos-library.md): A Boolean value that indicates whether the app has read-write access to the user’s Photos library.
- [NSCameraUsageDescription](bundleresources/information-property-list/nscamerausagedescription.md): A message that tells people why the app is requesting access to the device’s camera.

### Cameras

- [ICCameraDevice](imagecapturecore/iccameradevice.md): An object that represents a camera.
- [ICCameraDeviceDelegate](imagecapturecore/iccameradevicedelegate.md): Methods for detecting cameras, getting metadata and thumbnails, handling access and capability changes, and performing other actions on connected cameras.
- [ICCameraItem](imagecapturecore/iccameraitem.md): An abstract class that represents a camera item.
- [ICCameraFile](imagecapturecore/iccamerafile.md): An object that represents a file on a camera.
- [ICCameraFolder](imagecapturecore/iccamerafolder.md): An object that represents a folder on a camera.

### Scanners

- [ICScannerDevice](imagecapturecore/icscannerdevice.md): An object that represents a scanner.
- [ICScannerDeviceDelegate](imagecapturecore/icscannerdevicedelegate.md): Methods for determining availability, selecting a functional unit, and performing scans on connected scanners.
- [Scanner Configuration](imagecapturecore/scanner-configuration.md): Examine a scanner’s functional units and features.

### Legacy Symbols

- [ICRunLoopMode](imagecapturecore/icrunloopmode.md): Deprecated.

### Articles

- [ImageCaptureCore Constants](imagecapturecore/imagecapturecore-constants.md)
- [ImageCaptureCore Data Types](imagecapturecore/imagecapturecore-data-types.md)
- [ImageCaptureCore Enumerations](imagecapturecore/imagecapturecore-enumerations.md)
- [ImageCaptureCore Macros](imagecapturecore/imagecapturecore-macros.md)
