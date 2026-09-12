> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.coremotion.head-pose](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.coremotion.head-pose)

# com.apple.developer.coremotion.head-pose (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · macOS 15.0+ · tvOS 18.0+

An entitlement that enables someone’s head movement to determine the orientation of spatialized sound output.

## Details

`com.apple.developer.coremotion.head-pose`

<a id="Discussion"></a>

## Discussion

This entitlement changes the orientation of spatial audio output to match the person’s head pose via compatible AirPods for the following APIs:

- [AVAudioEnvironmentNode](../../avfaudio/avaudioenvironmentnode.md), when you set the [isListenerHeadTrackingEnabled](../../avfaudio/avaudioenvironmentnode/islistenerheadtrackingenabled.md) property to `true`
- [Audio Toolbox](../../audiotoolbox.md) (see [AUSpatialMixer Parameters](../../audiotoolbox/1390073-auspatialmixer-parameters.md)), when you set the [kAudioUnitProperty_SpatialMixerEnableHeadTracking](../../audiotoolbox/kaudiounitproperty_spatialmixerenableheadtracking.md) property to `true`
- [PHASEListener](../../phase/phaselistener.md), when you set the new [automaticHeadTrackingFlags](../../phase/phaselistener/automaticheadtrackingflags.md) property to orientation

Add this entitlement to your app by enabling the Head Pose capability in Xcode.

## See Also

### Media

- [com.apple.developer.media-device-extension](com.apple.developer.media-device-extension.md): An array of media sharing protocol identifiers that an extension supports.
- [com.apple.developer.spatial-audio.profile-access](com.apple.developer.spatial-audio.profile-access.md): An entitlement that enables your app to use the personalized spatial audio profile.
- [com.apple.developer.avfoundation.multitasking-camera-access](com.apple.developer.avfoundation.multitasking-camera-access.md): Deprecated. A Boolean value that indicates whether an app may continue using the camera at the same time as another foreground app.
- [Media Device Discovery Extension](com.apple.developer.media-device-discovery-extension.md): Deprecated. An entitlement for an app extension that adds a specific third-party media receiver to a system device-picker UI.

# com.apple.developer.coremotion.head-pose (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · macOS 15.0+ · tvOS 18.0+

An entitlement that enables someone’s head movement to determine the orientation of spatialized sound output.

## Details

`com.apple.developer.coremotion.head-pose`

<a id="Discussion"></a>

## Discussion

This entitlement changes the orientation of spatial audio output to match the person’s head pose via compatible AirPods for the following APIs:

- [AVAudioEnvironmentNode](../../avfaudio/avaudioenvironmentnode.md), when you set the [listenerHeadTrackingEnabled](../../avfaudio/avaudioenvironmentnode/islistenerheadtrackingenabled.md) property to `true`
- [Audio Toolbox](../../audiotoolbox.md) (see [AUSpatialMixer Parameters](../../audiotoolbox/1390073-auspatialmixer-parameters.md)), when you set the [kAudioUnitProperty_SpatialMixerEnableHeadTracking](../../audiotoolbox/kaudiounitproperty_spatialmixerenableheadtracking.md) property to `true`
- [PHASEListener](../../phase/phaselistener.md), when you set the new [automaticHeadTrackingFlags](../../phase/phaselistener/automaticheadtrackingflags.md) property to orientation

Add this entitlement to your app by enabling the Head Pose capability in Xcode.

## See Also

### Media

- [com.apple.developer.media-device-extension](com.apple.developer.media-device-extension.md): An array of media sharing protocol identifiers that an extension supports.
- [com.apple.developer.spatial-audio.profile-access](com.apple.developer.spatial-audio.profile-access.md): An entitlement that enables your app to use the personalized spatial audio profile.
- [com.apple.developer.avfoundation.multitasking-camera-access](com.apple.developer.avfoundation.multitasking-camera-access.md): Deprecated. A Boolean value that indicates whether an app may continue using the camera at the same time as another foreground app.
- [Media Device Discovery Extension](com.apple.developer.media-device-discovery-extension.md): Deprecated. An entitlement for an app extension that adds a specific third-party media receiver to a system device-picker UI.
