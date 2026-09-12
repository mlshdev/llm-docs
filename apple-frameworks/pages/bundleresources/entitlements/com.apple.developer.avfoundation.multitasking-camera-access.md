> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.avfoundation.multitasking-camera-access](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.avfoundation.multitasking-camera-access)

# com.apple.developer.avfoundation.multitasking-camera-access (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.5+ (deprecated in 18.0) · iPadOS 13.5+ (deprecated in 18.0)

A Boolean value that indicates whether an app may continue using the camera at the same time as another foreground app.

> In iOS 18, the use of this entitlement is no longer required. Use [isMultitaskingCameraAccessSupported](../../avfoundation/avcapturesession/ismultitaskingcameraaccesssupported.md) instead.

## Details

`com.apple.developer.avfoundation.multitasking-camera-access`

<a id="Discussion"></a>

## Discussion

When your app enters a multitasking mode, this entitlement allows it to continue using the camera. Multitasking modes include Slide Over, Split View, and Picture in Picture (PiP). For information about Picture in Picture, see [Adopting Picture in Picture for video calls](../../avkit/adopting-picture-in-picture-for-video-calls.md).

> **Important**

> Your app needs to run on iOS 13.5 or later to use this entitlement. Usage of this entitlement is restricted to apps that use `voip` as one of their [UIBackgroundModes](../information-property-list/uibackgroundmodes.md).

## See Also

### Media

- [com.apple.developer.media-device-extension](com.apple.developer.media-device-extension.md): An array of media sharing protocol identifiers that an extension supports.
- [com.apple.developer.coremotion.head-pose](com.apple.developer.coremotion.head-pose.md): An entitlement that enables someone’s head movement to determine the orientation of spatialized sound output.
- [com.apple.developer.spatial-audio.profile-access](com.apple.developer.spatial-audio.profile-access.md): An entitlement that enables your app to use the personalized spatial audio profile.
- [Media Device Discovery Extension](com.apple.developer.media-device-discovery-extension.md): Deprecated. An entitlement for an app extension that adds a specific third-party media receiver to a system device-picker UI.

# com.apple.developer.avfoundation.multitasking-camera-access (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.5+ (deprecated in 18.0) · iPadOS 13.5+ (deprecated in 18.0)

A Boolean value that indicates whether an app may continue using the camera at the same time as another foreground app.

> In iOS 18, the use of this entitlement is no longer required. Use [multitaskingCameraAccessSupported](../../avfoundation/avcapturesession/ismultitaskingcameraaccesssupported.md) instead.

## Details

`com.apple.developer.avfoundation.multitasking-camera-access`

<a id="Discussion"></a>

## Discussion

When your app enters a multitasking mode, this entitlement allows it to continue using the camera. Multitasking modes include Slide Over, Split View, and Picture in Picture (PiP). For information about Picture in Picture, see [Adopting Picture in Picture for video calls](../../avkit/adopting-picture-in-picture-for-video-calls.md).

> **Important**

> Your app needs to run on iOS 13.5 or later to use this entitlement. Usage of this entitlement is restricted to apps that use `voip` as one of their [UIBackgroundModes](../information-property-list/uibackgroundmodes.md).

## See Also

### Media

- [com.apple.developer.media-device-extension](com.apple.developer.media-device-extension.md): An array of media sharing protocol identifiers that an extension supports.
- [com.apple.developer.coremotion.head-pose](com.apple.developer.coremotion.head-pose.md): An entitlement that enables someone’s head movement to determine the orientation of spatialized sound output.
- [com.apple.developer.spatial-audio.profile-access](com.apple.developer.spatial-audio.profile-access.md): An entitlement that enables your app to use the personalized spatial audio profile.
- [Media Device Discovery Extension](com.apple.developer.media-device-discovery-extension.md): Deprecated. An entitlement for an app extension that adds a specific third-party media receiver to a system device-picker UI.
