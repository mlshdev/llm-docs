> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice](https://developer.apple.com/documentation/avfoundation/avcapturedevice)

# AVCaptureDevice (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An object that represents a hardware or virtual capture device like a camera or microphone.

## Declaration

```swift
class AVCaptureDevice
```

## Mentioned In

- [Choosing a capture device](choosing-a-capture-device.md)
- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)
- [Requesting authorization to capture and save media](requesting-authorization-to-capture-and-save-media.md)
- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

Capture devices provide media data to capture session inputs that you connect to an [AVCaptureSession](avcapturesession.md). An individual device can provide one or more streams of media of a particular type.

You don’t create capture device instances directly. Instead, retrieve them using an instance of [AVCaptureDevice.DiscoverySession](avcapturedevice/discoverysession.md), or by calling the [default(\_:for:position:)](avcapturedevice/default%28__for_position_%29.md) method.

A capture device provides several configuration options. Before attempting to configure device properties, such as its focus mode, exposure mode, and so on, you must first acquire a lock on the device by calling the [lockForConfiguration()](avcapturedevice/lockforconfiguration%28%29.md) method. You should also query the device’s capabilities to ensure that the new modes you intend to set are valid for the device. You can then set the properties and release the lock using the [unlockForConfiguration()](avcapturedevice/unlockforconfiguration%28%29.md) method. You may hold the lock if you want all settable device properties to remain unchanged. However, holding the device lock unnecessarily may degrade capture quality in other apps sharing the device and isn’t recommended.

## Topics

### Finding and monitoring devices

- [AVCaptureDevice.DiscoverySession](avcapturedevice/discoverysession.md): An object that finds capture devices that match specific search criteria.
- [default(\_:for:position:)](avcapturedevice/default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [default(for:)](avcapturedevice/default%28for_%29.md): Returns the default device that captures the specified media type.
- [init(uniqueID:)](avcapturedevice/init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [wasConnectedNotification](avcapturedevice/wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [wasDisconnectedNotification](avcapturedevice/wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devices(for:)](avcapturedevice/devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices()](avcapturedevice/devices%28%29.md): Deprecated. Returns all available capture devices on the system.

### Authorizing device access

- [requestAccess(for:completionHandler:)](avcapturedevice/requestaccess%28for_completionhandler_%29.md): Requests the user’s permission to allow the app to capture media of a particular type.
- [authorizationStatus(for:)](avcapturedevice/authorizationstatus%28for_%29.md): Returns an authorization status that indicates whether the user grants the app permission to capture media of a particular type.
- [AVAuthorizationStatus](avauthorizationstatus.md): Constants that indicate the status of an app’s authorization to capture media.

### Identifying a device

- [uniqueID](avcapturedevice/uniqueid.md): An identifier that uniquely identifies the device.
- [modelID](avcapturedevice/modelid.md): A model identifier for the device.
- [localizedName](avcapturedevice/localizedname.md): A localized device name for display in the user interface.
- [manufacturer](avcapturedevice/manufacturer.md): A human-readable string for the manufacturer of the device.
- [deviceType](avcapturedevice/devicetype-swift.property.md): The type of device, such as a built-in microphone or wide-angle camera.
- [AVCaptureDevice.DeviceType](avcapturedevice/devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [position](avcapturedevice/position-swift.property.md): The physical position of the capture device hardware.
- [AVCaptureDevice.Position](avcapturedevice/position-swift.enum.md): Constants that indicate the physical position of a capture device.

### Accessing device state

- [isConnected](avcapturedevice/isconnected.md): A Boolean value that indicates whether a device is currently connected to the system and available for use.
- [isSuspended](avcapturedevice/issuspended.md): A Boolean value that indicates whether the device is in a suspended state.
- [isInUseByAnotherApplication](avcapturedevice/isinusebyanotherapplication.md): A Boolean value that indicates whether another app is using the device.

### Inspecting device characteristics

- [isVirtualDevice](avcapturedevice/isvirtualdevice.md): A Boolean value that indicates whether the device consists of two or more physical devices.
- [constituentDevices](avcapturedevice/constituentdevices.md): An array of physical devices that make up a virtual device.
- [hasMediaType(\_:)](avcapturedevice/hasmediatype%28__%29.md): Returns a Boolean value that indicates whether the device captures media of a particular type.
- [transportType](avcapturedevice/transporttype.md): The transport type of the device.
- [supportsSessionPreset(\_:)](avcapturedevice/supportssessionpreset%28__%29.md): Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.

### Monitoring device rotation

- [AVCaptureDevice.RotationCoordinator](avcapturedevice/rotationcoordinator.md): A class that monitors the physical orientation of a capture device and provides adjustment angles to keep images level, relative to gravity.

### Configuring camera hardware

- [lockForConfiguration()](avcapturedevice/lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration()](avcapturedevice/unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [isSubjectAreaChangeMonitoringEnabled](avcapturedevice/issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [subjectAreaDidChangeNotification](avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.

### Configuring Cinematic video

- [setCinematicVideoFixedFocus(at:focusMode:)](avcapturedevice/setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocus(at:focusMode:)](avcapturedevice/setcinematicvideotrackingfocus%28at_focusmode_%29.md): Focus on and start tracking an object if it can be detected at the region specified by the point.
- [setCinematicVideoTrackingFocus(detectedObjectID:focusMode:)](avcapturedevice/setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureDevice.CinematicVideoFocusMode](avcapturedevice/cinematicvideofocusmode.md): Constants indicating the focus behavior when recording a Cinematic Video.
- [AVCaptureSceneMonitoringStatus](avcapturescenemonitoringstatus.md): An informative status about the scene observed by the device.
- [notEnoughLight](avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.
- [cinematicVideoCaptureSceneMonitoringStatuses](avcapturedevice/cinematicvideocapturescenemonitoringstatuses.md): The current scene monitoring statuses related to Cinematic Video capture.

### Configuring smart framing

- [smartFramingMonitor](avcapturedevice/smartframingmonitor.md): A monitor owned by the device that recommends an optimal framing based on the content in the scene.
- [AVCaptureSmartFramingMonitor](avcapturesmartframingmonitor.md): An object associated with a capture device that monitors the scene and suggests an optimal framing.
- [AVCaptureFraming](avcaptureframing.md): A framing, consisting of an aspect ratio and a zoom factor.

### Configuring dynamic aspect ratio

- [setDynamicAspectRatio(\_:completionHandler:)](avcapturedevice/setdynamicaspectratio%28__completionhandler_%29.md): Updates the dynamic aspect ratio of the device.
- [AVCaptureDevice.AspectRatio](avcapturedevice/aspectratio.md): String constants describing the different video aspect ratios you can configure for a particular device.
- [dynamicAspectRatio](avcapturedevice/dynamicaspectratio.md): A key-value observable property indicating the current aspect ratio for a device.
- [dynamicDimensions](avcapturedevice/dynamicdimensions.md): A key-value observable property describing the output dimensions of the video buffer based on the device’s dynamic aspect ratio.

### Enabling automatic frame rate

- [isAutoVideoFrameRateEnabled](avcapturedevice/isautovideoframerateenabled.md): A Boolean value that indicates whether the capture device performs automatic video frame rate adjustments.

### Supporting spatial capture

- [spatialCaptureDiscomfortReasons](avcapturedevice/spatialcapturediscomfortreasons.md): Reasons why current environmental conditions aren’t suitable to capturing spatial videos that are comfortable to view.
- [AVSpatialCaptureDiscomfortReason](avspatialcapturediscomfortreason.md): Constants that indicate the suitability of the current scene to create a comfortable viewing experience.

### Supporting Continuity Camera

- [systemPreferredCamera](avcapturedevice/systempreferredcamera.md): A camera the system prefers to use for video and photo capture.
- [userPreferredCamera](avcapturedevice/userpreferredcamera.md): A camera the user prefers to use for video and photo capture.
- [isContinuityCamera](avcapturedevice/iscontinuitycamera.md): A Boolean value that indicates whether the device is a Continuity Camera.
- [companionDeskViewCamera](avcapturedevice/companiondeskviewcamera.md): A Desk View camera associated with a device.

### Supporting system features

- [System video effects and microphone modes](system-video-effects-and-microphone-modes.md): Configure the state of system video effects like Center Stage, and inspect enhancements the system applies to microphone audio.

### Monitoring system pressure

- [systemPressureState](avcapturedevice/systempressurestate-swift.property.md): A value that indicates the capture device’s current system pressure state.
- [AVCaptureDevice.SystemPressureState](avcapturedevice/systempressurestate-swift.class.md): An object that provides information about OS and hardware status affecting capture system performance and availability.
- [AVCaptureSessionInterruptionSystemPressureStateKey](avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.

### Restricting camera switching

- [setPrimaryConstituentDeviceSwitchingBehavior(\_:restrictedSwitchingBehaviorConditions:)](avcapturedevice/setprimaryconstituentdeviceswitchingbehavior%28__restrictedswitchingbehaviorconditions_%29.md): Sets the switching behavior of the primary constituent device.
- [primaryConstituentDeviceSwitchingBehavior](avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.property.md): The switching behavior for the primary constituent device.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditions](avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md): The conditions that restrict the primary constituent device’s switching behavior.
- [activePrimaryConstituentDeviceSwitchingBehavior](avcapturedevice/activeprimaryconstituentdeviceswitchingbehavior.md): The switching behavior of the active constituent device.
- [activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](avcapturedevice/activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions.md): The conditions that restrict camera switching behavior for the active primary constituent device.
- [activePrimaryConstituent](avcapturedevice/activeprimaryconstituent.md): A virtual device’s active primary constituent device.
- [AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior](avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum.md): Constants that control when to allow a virtual device to switch its active primary constituent device.
- [AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct.md): A structure that defines the conditions in which to restrict camera switching.
- [supportedFallbackPrimaryConstituentDevices](avcapturedevice/supportedfallbackprimaryconstituentdevices.md): The constituent devices available to select as a fallback for a longer focal length primary constituent device.
- [fallbackPrimaryConstituentDevices](avcapturedevice/fallbackprimaryconstituentdevices.md): The fallback devices to use when a constituent device with a longer focal length becomes limited by its light sensitivity or minimum focus distance.

### Configuring macOS features

- [macOS capture features](macos-capture-features.md): Control the transport behavior and input sources of capture hardware in macOS.

### Accessing camera extrinsics

- [extrinsicMatrix(from:to:)](avcapturedevice/extrinsicmatrix%28from_to_%29.md): Returns the relative extrinsic matrix from one capture device to another.

### Accessing the focal length

- [nominalFocalLengthIn35mmFilm](avcapturedevice/nominalfocallengthin35mmfilm.md): The nominal 35mm equivalent focal length of the capture device’s lens.

### Determining lens stabilization

- [AVCaptureDevice.LensStabilizationStatus](avcapturedevice/lensstabilizationstatus.md): Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.

### Configuring lens smudge detection

- [isCameraLensSmudgeDetectionEnabled](avcapturedevice/iscameralenssmudgedetectionenabled.md): Whether camera lens smudge detection is enabled.
- [setCameraLensSmudgeDetectionEnabled(\_:detectionInterval:)](avcapturedevice/setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md): Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.
- [cameraLensSmudgeDetectionInterval](avcapturedevice/cameralenssmudgedetectioninterval.md): The camera lens smudge detection interval.
- [cameraLensSmudgeDetectionStatus](avcapturedevice/cameralenssmudgedetectionstatus.md): A value specifying the status of camera lens smudge detection.
- [AVCaptureCameraLensSmudgeDetectionStatus](avcapturecameralenssmudgedetectionstatus.md): Constants indicating the current camera lens smudge detection status.

### Synchronizing with external devices

- [isFollowingExternalSyncDevice](avcapturedevice/isfollowingexternalsyncdevice.md): Whether the device is following an external sync device.
- [minSupportedExternalSyncFrameDuration](avcapturedevice/minsupportedexternalsyncframeduration.md): The minimum frame duration that can be passed as the `videoFrameDuration` when directing your device input to follow an external sync device.
- [isVideoFrameDurationLocked](avcapturedevice/isvideoframedurationlocked.md): Whether the device’s video frame rate (expressed as a duration) is currently locked.
- [minSupportedLockedVideoFrameDuration](avcapturedevice/minsupportedlockedvideoframeduration.md): The maximum frame rate (expressed as a minimum duration) that can be set on an input associated with this device.

### Instance Properties

- [continuousAutoFocusTrackingLensPositionBias](avcapturedevice/continuousautofocustrackinglenspositionbias.md): Bias applied to the lens position during continuous autofocus tracking, normalized between -1 and 1.
- [isAdjustingSignalCompensationDelayWhileRunningSupported](avcapturedevice/isadjustingsignalcompensationdelaywhilerunningsupported.md): Whether adjusting the signal compensation delay property of an external sync device is supported while the session is running.
- [isContinuousAutoFocusTrackingEnabled](avcapturedevice/iscontinuousautofocustrackingenabled.md): Indicates whether the device should use continuous autofocus tracking.
- [isContinuousAutoFocusTrackingSubjectAcquired](avcapturedevice/iscontinuousautofocustrackingsubjectacquired.md): Indicates whether the device is actively tracking a subject in the scene to maintain focus.
- [isPrimaryConstituentDeviceSwitchingBehaviorLockedWithDeviceSupported](avcapturedevice/isprimaryconstituentdeviceswitchingbehaviorlockedwithdevicesupported.md): Whether locking to a particular primary constituent device is supported.

### Instance Methods

- [setPrimaryConstituentDeviceSwitchingBehaviorLockedWith(\_:)](avcapturedevice/setprimaryconstituentdeviceswitchingbehaviorlockedwith%28__%29.md): Sets the switching behavior of the primary constituent device to locked with the specified device.

### Type Properties

- [isEdgeLightActive](avcapturedevice/isedgelightactive.md): A class property indicating whether the edge light UI is actively being shown on a screen.
- [isEdgeLightEnabled](avcapturedevice/isedgelightenabled.md): A class property indicating whether the Edge Light feature is currently enabled in Control Center.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Capture devices

- [Choosing a capture device](choosing-a-capture-device.md): Select the front or back camera, or use advanced features like the TrueDepth camera or dual camera.
- [Adopting smart framing in your camera app](adopting-smart-framing-in-your-camera-app.md): Capture the optimal shot by providing automatic framing recommendations.
- [AVCaptureDeviceInput](avcapturedeviceinput.md): An object that provides media input from a capture device to a capture session.
- [AVContinuityDevice](avcontinuitydevice.md): A class that represents a physical iOS device that’s nearby and can provide access to its cameras and microphones.
- [AVExternalStorageDevice](avexternalstoragedevice.md): Represents a physical external storage device that stores media assets.
- [AVExternalStorageDeviceDiscoverySession](avexternalstoragedevicediscoverysession.md): Informs your app when the external storage devices connect to and disconnect from the system.

# AVCaptureDevice (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An object that represents a hardware or virtual capture device like a camera or microphone.

## Declaration

```objectivec
@interface AVCaptureDevice : NSObject
```

## Mentioned In

- [Choosing a capture device](choosing-a-capture-device.md)
- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)
- [Requesting authorization to capture and save media](requesting-authorization-to-capture-and-save-media.md)
- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

Capture devices provide media data to capture session inputs that you connect to an [AVCaptureSession](avcapturesession.md). An individual device can provide one or more streams of media of a particular type.

You don’t create capture device instances directly. Instead, retrieve them using an instance of [AVCaptureDeviceDiscoverySession](avcapturedevice/discoverysession.md), or by calling the [defaultDeviceWithDeviceType:mediaType:position:](avcapturedevice/default%28__for_position_%29.md) method.

A capture device provides several configuration options. Before attempting to configure device properties, such as its focus mode, exposure mode, and so on, you must first acquire a lock on the device by calling the [lockForConfiguration:](avcapturedevice/lockforconfiguration%28%29.md) method. You should also query the device’s capabilities to ensure that the new modes you intend to set are valid for the device. You can then set the properties and release the lock using the [unlockForConfiguration](avcapturedevice/unlockforconfiguration%28%29.md) method. You may hold the lock if you want all settable device properties to remain unchanged. However, holding the device lock unnecessarily may degrade capture quality in other apps sharing the device and isn’t recommended.

## Topics

### Finding and monitoring devices

- [AVCaptureDeviceDiscoverySession](avcapturedevice/discoverysession.md): An object that finds capture devices that match specific search criteria.
- [defaultDeviceWithDeviceType:mediaType:position:](avcapturedevice/default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [defaultDeviceWithMediaType:](avcapturedevice/default%28for_%29.md): Returns the default device that captures the specified media type.
- [deviceWithUniqueID:](avcapturedevice/init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [AVCaptureDeviceWasConnectedNotification](avcapturedevice/wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [AVCaptureDeviceWasDisconnectedNotification](avcapturedevice/wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devicesWithMediaType:](avcapturedevice/devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices](avcapturedevice/devices%28%29.md): Deprecated. Returns all available capture devices on the system.

### Authorizing device access

- [requestAccessForMediaType:completionHandler:](avcapturedevice/requestaccess%28for_completionhandler_%29.md): Requests the user’s permission to allow the app to capture media of a particular type.
- [authorizationStatusForMediaType:](avcapturedevice/authorizationstatus%28for_%29.md): Returns an authorization status that indicates whether the user grants the app permission to capture media of a particular type.
- [AVAuthorizationStatus](avauthorizationstatus.md): Constants that indicate the status of an app’s authorization to capture media.

### Identifying a device

- [uniqueID](avcapturedevice/uniqueid.md): An identifier that uniquely identifies the device.
- [modelID](avcapturedevice/modelid.md): A model identifier for the device.
- [localizedName](avcapturedevice/localizedname.md): A localized device name for display in the user interface.
- [manufacturer](avcapturedevice/manufacturer.md): A human-readable string for the manufacturer of the device.
- [deviceType](avcapturedevice/devicetype-swift.property.md): The type of device, such as a built-in microphone or wide-angle camera.
- [AVCaptureDeviceType](avcapturedevice/devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [position](avcapturedevice/position-swift.property.md): The physical position of the capture device hardware.
- [AVCaptureDevicePosition](avcapturedevice/position-swift.enum.md): Constants that indicate the physical position of a capture device.

### Accessing device state

- [connected](avcapturedevice/isconnected.md): A Boolean value that indicates whether a device is currently connected to the system and available for use.
- [suspended](avcapturedevice/issuspended.md): A Boolean value that indicates whether the device is in a suspended state.
- [inUseByAnotherApplication](avcapturedevice/isinusebyanotherapplication.md): A Boolean value that indicates whether another app is using the device.

### Inspecting device characteristics

- [virtualDevice](avcapturedevice/isvirtualdevice.md): A Boolean value that indicates whether the device consists of two or more physical devices.
- [constituentDevices](avcapturedevice/constituentdevices.md): An array of physical devices that make up a virtual device.
- [hasMediaType:](avcapturedevice/hasmediatype%28__%29.md): Returns a Boolean value that indicates whether the device captures media of a particular type.
- [transportType](avcapturedevice/transporttype.md): The transport type of the device.
- [supportsAVCaptureSessionPreset:](avcapturedevice/supportssessionpreset%28__%29.md): Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.

### Monitoring device rotation

- [AVCaptureDeviceRotationCoordinator](avcapturedevice/rotationcoordinator.md): A class that monitors the physical orientation of a capture device and provides adjustment angles to keep images level, relative to gravity.

### Configuring camera hardware

- [lockForConfiguration:](avcapturedevice/lockforconfiguration%28%29.md): Requests exclusive access to configure device hardware properties.
- [unlockForConfiguration](avcapturedevice/unlockforconfiguration%28%29.md): Releases exclusive control over device hardware properties.
- [subjectAreaChangeMonitoringEnabled](avcapturedevice/issubjectareachangemonitoringenabled.md): A Boolean value that indicates whether the device monitors the subject area for changes.
- [AVCaptureDeviceSubjectAreaDidChangeNotification](avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [Formats](capture-device-formats.md): Configure capture formats and camera frame rates.
- [Focus](capture-device-focus.md): Configure the automatic focus behavior of a camera, or manually set its lens position.
- [Exposure](capture-device-exposure.md): Configure the automatic exposure behavior of a camera, or manually control its exposure settings.
- [White balance](capture-device-white-balance.md): Configure the automatic white balance behavior of a camera, or manually control white balance settings.
- [Lighting](capture-device-lighting.md): Configure the device flash, torch, and low light settings.
- [Color](capture-device-color.md): Manage HDR and color space settings for a device.
- [Zoom](capture-device-zoom.md): Configure device zooming behavior and inspect hardware capabilities.

### Configuring Cinematic video

- [setCinematicVideoFixedFocusAtPoint:focusMode:](avcapturedevice/setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocusAtPoint:focusMode:](avcapturedevice/setcinematicvideotrackingfocus%28at_focusmode_%29.md): Focus on and start tracking an object if it can be detected at the region specified by the point.
- [setCinematicVideoTrackingFocusWithDetectedObjectID:focusMode:](avcapturedevice/setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureCinematicVideoFocusMode](avcapturedevice/cinematicvideofocusmode.md): Constants indicating the focus behavior when recording a Cinematic Video.
- [AVCaptureSceneMonitoringStatus](avcapturescenemonitoringstatus.md): An informative status about the scene observed by the device.
- [AVCaptureSceneMonitoringStatusNotEnoughLight](avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.
- [cinematicVideoCaptureSceneMonitoringStatuses](avcapturedevice/cinematicvideocapturescenemonitoringstatuses.md): The current scene monitoring statuses related to Cinematic Video capture.

### Configuring smart framing

- [smartFramingMonitor](avcapturedevice/smartframingmonitor.md): A monitor owned by the device that recommends an optimal framing based on the content in the scene.
- [AVCaptureSmartFramingMonitor](avcapturesmartframingmonitor.md): An object associated with a capture device that monitors the scene and suggests an optimal framing.
- [AVCaptureFraming](avcaptureframing.md): A framing, consisting of an aspect ratio and a zoom factor.

### Configuring dynamic aspect ratio

- [setDynamicAspectRatio:completionHandler:](avcapturedevice/setdynamicaspectratio%28__completionhandler_%29.md): Updates the dynamic aspect ratio of the device.
- [AVCaptureAspectRatio](avcapturedevice/aspectratio.md): String constants describing the different video aspect ratios you can configure for a particular device.
- [dynamicAspectRatio](avcapturedevice/dynamicaspectratio.md): A key-value observable property indicating the current aspect ratio for a device.
- [dynamicDimensions](avcapturedevice/dynamicdimensions.md): A key-value observable property describing the output dimensions of the video buffer based on the device’s dynamic aspect ratio.

### Enabling automatic frame rate

- [autoVideoFrameRateEnabled](avcapturedevice/isautovideoframerateenabled.md): A Boolean value that indicates whether the capture device performs automatic video frame rate adjustments.

### Supporting spatial capture

- [spatialCaptureDiscomfortReasons](avcapturedevice/spatialcapturediscomfortreasons.md): Reasons why current environmental conditions aren’t suitable to capturing spatial videos that are comfortable to view.
- [AVSpatialCaptureDiscomfortReason](avspatialcapturediscomfortreason.md): Constants that indicate the suitability of the current scene to create a comfortable viewing experience.

### Supporting Continuity Camera

- [systemPreferredCamera](avcapturedevice/systempreferredcamera.md): A camera the system prefers to use for video and photo capture.
- [userPreferredCamera](avcapturedevice/userpreferredcamera.md): A camera the user prefers to use for video and photo capture.
- [continuityCamera](avcapturedevice/iscontinuitycamera.md): A Boolean value that indicates whether the device is a Continuity Camera.
- [companionDeskViewCamera](avcapturedevice/companiondeskviewcamera.md): A Desk View camera associated with a device.

### Supporting system features

- [System video effects and microphone modes](system-video-effects-and-microphone-modes.md): Configure the state of system video effects like Center Stage, and inspect enhancements the system applies to microphone audio.

### Monitoring system pressure

- [systemPressureState](avcapturedevice/systempressurestate-swift.property.md): A value that indicates the capture device’s current system pressure state.
- [AVCaptureSystemPressureState](avcapturedevice/systempressurestate-swift.class.md): An object that provides information about OS and hardware status affecting capture system performance and availability.
- [AVCaptureSessionInterruptionSystemPressureStateKey](avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.

### Restricting camera switching

- [setPrimaryConstituentDeviceSwitchingBehavior:restrictedSwitchingBehaviorConditions:](avcapturedevice/setprimaryconstituentdeviceswitchingbehavior%28__restrictedswitchingbehaviorconditions_%29.md): Sets the switching behavior of the primary constituent device.
- [primaryConstituentDeviceSwitchingBehavior](avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.property.md): The switching behavior for the primary constituent device.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditions](avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md): The conditions that restrict the primary constituent device’s switching behavior.
- [activePrimaryConstituentDeviceSwitchingBehavior](avcapturedevice/activeprimaryconstituentdeviceswitchingbehavior.md): The switching behavior of the active constituent device.
- [activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](avcapturedevice/activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions.md): The conditions that restrict camera switching behavior for the active primary constituent device.
- [activePrimaryConstituentDevice](avcapturedevice/activeprimaryconstituent.md): A virtual device’s active primary constituent device.
- [AVCapturePrimaryConstituentDeviceSwitchingBehavior](avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum.md): Constants that control when to allow a virtual device to switch its active primary constituent device.
- [AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions](avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct.md): A structure that defines the conditions in which to restrict camera switching.
- [supportedFallbackPrimaryConstituentDevices](avcapturedevice/supportedfallbackprimaryconstituentdevices.md): The constituent devices available to select as a fallback for a longer focal length primary constituent device.
- [fallbackPrimaryConstituentDevices](avcapturedevice/fallbackprimaryconstituentdevices.md): The fallback devices to use when a constituent device with a longer focal length becomes limited by its light sensitivity or minimum focus distance.

### Configuring macOS features

- [macOS capture features](macos-capture-features.md): Control the transport behavior and input sources of capture hardware in macOS.

### Accessing camera extrinsics

- [extrinsicMatrixFromDevice:toDevice:](avcapturedevice/extrinsicmatrix%28from_to_%29.md): Returns the relative extrinsic matrix from one capture device to another.

### Accessing the focal length

- [nominalFocalLengthIn35mmFilm](avcapturedevice/nominalfocallengthin35mmfilm.md): The nominal 35mm equivalent focal length of the capture device’s lens.

### Determining lens stabilization

- [AVCaptureLensStabilizationStatus](avcapturedevice/lensstabilizationstatus.md): Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.

### Configuring lens smudge detection

- [cameraLensSmudgeDetectionEnabled](avcapturedevice/iscameralenssmudgedetectionenabled.md): Whether camera lens smudge detection is enabled.
- [setCameraLensSmudgeDetectionEnabled:detectionInterval:](avcapturedevice/setcameralenssmudgedetectionenabled%28__detectioninterval_%29.md): Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.
- [cameraLensSmudgeDetectionInterval](avcapturedevice/cameralenssmudgedetectioninterval.md): The camera lens smudge detection interval.
- [cameraLensSmudgeDetectionStatus](avcapturedevice/cameralenssmudgedetectionstatus.md): A value specifying the status of camera lens smudge detection.
- [AVCaptureCameraLensSmudgeDetectionStatus](avcapturecameralenssmudgedetectionstatus.md): Constants indicating the current camera lens smudge detection status.

### Synchronizing with external devices

- [followingExternalSyncDevice](avcapturedevice/isfollowingexternalsyncdevice.md): Whether the device is following an external sync device.
- [minSupportedExternalSyncFrameDuration](avcapturedevice/minsupportedexternalsyncframeduration.md): The minimum frame duration that can be passed as the `videoFrameDuration` when directing your device input to follow an external sync device.
- [videoFrameDurationLocked](avcapturedevice/isvideoframedurationlocked.md): Whether the device’s video frame rate (expressed as a duration) is currently locked.
- [minSupportedLockedVideoFrameDuration](avcapturedevice/minsupportedlockedvideoframeduration.md): The maximum frame rate (expressed as a minimum duration) that can be set on an input associated with this device.

### Instance Properties

- [continuousAutoFocusTrackingLensPositionBias](avcapturedevice/continuousautofocustrackinglenspositionbias.md): Bias applied to the lens position during continuous autofocus tracking, normalized between -1 and 1.
- [adjustingSignalCompensationDelayWhileRunningSupported](avcapturedevice/isadjustingsignalcompensationdelaywhilerunningsupported.md): Whether adjusting the signal compensation delay property of an external sync device is supported while the session is running.
- [continuousAutoFocusTrackingEnabled](avcapturedevice/iscontinuousautofocustrackingenabled.md): Indicates whether the device should use continuous autofocus tracking.
- [continuousAutoFocusTrackingSubjectAcquired](avcapturedevice/iscontinuousautofocustrackingsubjectacquired.md): Indicates whether the device is actively tracking a subject in the scene to maintain focus.
- [primaryConstituentDeviceSwitchingBehaviorLockedWithDeviceSupported](avcapturedevice/isprimaryconstituentdeviceswitchingbehaviorlockedwithdevicesupported.md): Whether locking to a particular primary constituent device is supported.

### Instance Methods

- [setPrimaryConstituentDeviceSwitchingBehaviorLockedWithDevice:](avcapturedevice/setprimaryconstituentdeviceswitchingbehaviorlockedwith%28__%29.md): Sets the switching behavior of the primary constituent device to locked with the specified device.

### Type Properties

- [edgeLightActive](avcapturedevice/isedgelightactive.md): A class property indicating whether the edge light UI is actively being shown on a screen.
- [edgeLightEnabled](avcapturedevice/isedgelightenabled.md): A class property indicating whether the Edge Light feature is currently enabled in Control Center.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Capture devices

- [Choosing a capture device](choosing-a-capture-device.md): Select the front or back camera, or use advanced features like the TrueDepth camera or dual camera.
- [Adopting smart framing in your camera app](adopting-smart-framing-in-your-camera-app.md): Capture the optimal shot by providing automatic framing recommendations.
- [AVCaptureDeviceInput](avcapturedeviceinput.md): An object that provides media input from a capture device to a capture session.
- [AVContinuityDevice](avcontinuitydevice.md): A class that represents a physical iOS device that’s nearby and can provide access to its cameras and microphones.
- [AVExternalStorageDevice](avexternalstoragedevice.md): Represents a physical external storage device that stores media assets.
- [AVExternalStorageDeviceDiscoverySession](avexternalstoragedevicediscoverysession.md): Informs your app when the external storage devices connect to and disconnect from the system.
