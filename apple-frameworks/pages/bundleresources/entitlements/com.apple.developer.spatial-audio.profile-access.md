> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.spatial-audio.profile-access](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.spatial-audio.profile-access)

# com.apple.developer.spatial-audio.profile-access

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An entitlement that enables your app to use the personalized spatial audio profile.

## Details

`com.apple.developer.spatial-audio.profile-access`

<a id="Discussion"></a>

## Discussion

This entitlement applies the personalized spatial audio profile someone makes in Settings to your app’s audio output for the following APIs:

- [AVAudioEngine](../../avfaudio/avaudioengine.md)
- AUSpatialMixer in [Audio Toolbox](../../audiotoolbox.md) (see [AUSpatialMixer Parameters](../../audiotoolbox/1390073-auspatialmixer-parameters.md))
- [PHASE](../../phase.md)

Add this entitlement to your app by enabling the Spatial Audio Profile capability in Xcode.

> **Note**

>  In iOS 18 and tvOS 18 and later, the system automatically adds spatial audio to the output for games. To opt out of automatic spatial  audio and support just your preferred spatial audio setup, add the [AVGameBypassSystemSpatialAudio](../information-property-list/avgamebypasssystemspatialaudio.md) key to your app’s `Info.plist`.

## See Also

### Media

- [com.apple.developer.media-device-extension](com.apple.developer.media-device-extension.md): An array of media sharing protocol identifiers that an extension supports.
- [com.apple.developer.coremotion.head-pose](com.apple.developer.coremotion.head-pose.md): An entitlement that enables someone’s head movement to determine the orientation of spatialized sound output.
- [com.apple.developer.avfoundation.multitasking-camera-access](com.apple.developer.avfoundation.multitasking-camera-access.md): Deprecated. A Boolean value that indicates whether an app may continue using the camera at the same time as another foreground app.
- [Media Device Discovery Extension](com.apple.developer.media-device-discovery-extension.md): Deprecated. An entitlement for an app extension that adds a specific third-party media receiver to a system device-picker UI.
