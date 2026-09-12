> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/lockedcameracapture](https://developer.apple.com/documentation/lockedcameracapture)

# LockedCameraCapture (Swift)

**Framework:** LockedCameraCapture  
**Kind:** Framework  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Capture content with your app’s camera experience when the device is locked.

<a id="Overview"></a>

## Overview

Use the LockedCameraCapture framework to create an extension that allows people to launch your app’s camera experience and capture content quickly when the device is locked. This extension makes your camera experience accessible to people from Control Center, the Lock Screen, or the Action button.

![A conceptual image that shows a control with a camera icon on the Lock Screen on iPhone, in Control Center on iPhone, and being performed with the Action button on iPhone 15 Pro.](https://developer.apple.com/images/com.apple.LockedCameraCapture/locked-camera-capture-overview@2x.png)

## Topics

### Essentials

- [Creating a camera experience for the Lock Screen](lockedcameracapture/creating-a-camera-experience-for-the-lock-screen.md): Offer your app’s camera experience on locked devices from Control Center, the Lock Screen, and the Action button.

### Capture and launch

- [LockedCameraCaptureUIScene](lockedcameracapture/lockedcameracaptureuiscene.md): A structure that contains the session object and UI to display for the locked camera capture extension.
- [LockedCameraCaptureSession](lockedcameracapture/lockedcameracapturesession.md): An object that can request to open the extension’s containing app and receives session configuration updates.

### App integration

- [LockedCameraCaptureManager](lockedcameracapture/lockedcameracapturemanager.md): An object that provides handling of captured content and transitioning to the extension’s containing app.
- [NSUserActivityTypeLockedCameraCapture](lockedcameracapture/nsuseractivitytypelockedcameracapture.md): A type to use when opening your app from the capture extension.

### Extension

- [LockedCameraCaptureExtension](lockedcameracapture/lockedcameracaptureextension.md): A protocol that creates a locked camera capture extension.
- [LockedCameraCaptureExtensionScene](lockedcameracapture/lockedcameracaptureextensionscene.md): A protocol that provides the UI for the locked camera capture extension.

# LockedCameraCapture (Objective-C)

**Framework:** LockedCameraCapture  
**Kind:** Framework  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Capture content with your app’s camera experience when the device is locked.

<a id="Overview"></a>

## Overview

Use the LockedCameraCapture framework to create an extension that allows people to launch your app’s camera experience and capture content quickly when the device is locked. This extension makes your camera experience accessible to people from Control Center, the Lock Screen, or the Action button.

![A conceptual image that shows a control with a camera icon on the Lock Screen on iPhone, in Control Center on iPhone, and being performed with the Action button on iPhone 15 Pro.](https://developer.apple.com/images/com.apple.LockedCameraCapture/locked-camera-capture-overview@2x.png)

## Topics

### Essentials

- [Creating a camera experience for the Lock Screen](lockedcameracapture/creating-a-camera-experience-for-the-lock-screen.md): Offer your app’s camera experience on locked devices from Control Center, the Lock Screen, and the Action button.

### App integration

- [NSUserActivityTypeLockedCameraCapture](lockedcameracapture/nsuseractivitytypelockedcameracapture.md): A type to use when opening your app from the capture extension.

### Variables

- [LockedCameraCaptureVersionNumber](lockedcameracapture/lockedcameracaptureversionnumber.md): Project version number for LockedCameraCapture.
- [LockedCameraCaptureVersionString](lockedcameracapture/lockedcameracaptureversionstring.md): Project version string for LockedCameraCapture.
