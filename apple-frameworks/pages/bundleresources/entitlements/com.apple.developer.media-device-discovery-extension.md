> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.media-device-discovery-extension](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.media-device-discovery-extension)

# Media Device Discovery Extension

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An entitlement for an app extension that adds a specific third-party media receiver to a system device-picker UI.

> This entitlement is deprecated. For Media Sharing Extensions, use [com.apple.developer.media-device-extension](com.apple.developer.media-device-extension.md) instead.

## Details

`com.apple.developer.media-device-discovery-extension`

<a id="Discussion"></a>

## Discussion

To add this entitlement to your app extension, enable the Media Device Discovery capability in Xcode. For more information, see [Configuring media device discovery](https://developer.apple.com/documentation/xcode/configuring-media-device-discovery).

## See Also

### Media

- [com.apple.developer.media-device-extension](com.apple.developer.media-device-extension.md): An array of media sharing protocol identifiers that an extension supports.
- [com.apple.developer.coremotion.head-pose](com.apple.developer.coremotion.head-pose.md): An entitlement that enables someone’s head movement to determine the orientation of spatialized sound output.
- [com.apple.developer.spatial-audio.profile-access](com.apple.developer.spatial-audio.profile-access.md): An entitlement that enables your app to use the personalized spatial audio profile.
- [com.apple.developer.avfoundation.multitasking-camera-access](com.apple.developer.avfoundation.multitasking-camera-access.md): Deprecated. A Boolean value that indicates whether an app may continue using the camera at the same time as another foreground app.
