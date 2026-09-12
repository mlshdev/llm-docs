> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsmaincamerausagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsmaincamerausagedescription)

# NSMainCameraUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** visionOS 26.0+

A message that tells people why the app is requesting access to the device’s main camera.

## Details

`NSMainCameraUsageDescription`

<a id="Discussion"></a>

## Discussion

The system uses this string to tell someone why your app requests permission to use the main camera. In visionOS 2-2.3, the system uses the value of [NSEnterpriseMCAMUsageDescription](nsenterprisemcamusagedescription.md) instead.

For information about using the main camera in your visionOS app, see [Accessing the main camera](../../visionos/accessing-the-main-camera.md).

> **Important**

>  This key is required if your app uses APIs that access the device’s main camera.

## See Also

### Camera and sound

- [Requesting authorization to capture and save media](../../avfoundation/requesting-authorization-to-capture-and-save-media.md): Prompt the user to authorize access to the camera, microphone, and photo library.
- [Requesting Authorization for Media Capture on macOS](../requesting-authorization-for-media-capture-on-macos.md): Prompt the user to authorize access to the camera and microphone.
- [NSAudioCaptureUsageDescription](nsaudiocaptureusagedescription.md): A message that tells people why your app is requesting access to capture system audio on macOS.
- [NSCameraUsageDescription](nscamerausagedescription.md): A message that tells people why the app is requesting access to the device’s camera.
- [NSMicrophoneUsageDescription](nsmicrophoneusagedescription.md): A message that tells people why the app is requesting access to the device’s microphone.
