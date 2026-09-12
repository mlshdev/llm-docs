> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/system-video-effects-and-microphone-modes](https://developer.apple.com/documentation/avfoundation/system-video-effects-and-microphone-modes)

# System video effects and microphone modes (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure the state of system video effects like Center Stage, and inspect enhancements the system applies to microphone audio.

## Topics

### Performing reaction effects

- [reactionEffectsEnabled](avcapturedevice/reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](avcapturedevice/canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](avcapturedevice/availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](avcapturedevice/reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffect(for:)](avcapturedevice/performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](avcapturedevice/reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.

### Configuring Center Stage

- [isCenterStageActive](avcapturedevice/iscenterstageactive.md): A Boolean value that indicates whether Center Stage is active on a device.
- [isCenterStageEnabled](avcapturedevice/iscenterstageenabled.md): A Boolean value that indicates whether a user or an app enabled Center Stage on a device.
- [centerStageRectOfInterest](avcapturedevice/centerstagerectofinterest.md): The effective region within the output pixel buffer to perform Center Stage framing.
- [centerStageControlMode](avcapturedevice/centerstagecontrolmode-swift.type.property.md): A value that indicates the current mode of Center Stage control.
- [AVCaptureDevice.CenterStageControlMode](avcapturedevice/centerstagecontrolmode-swift.enum.md): Constants that indicate the current Center Stage control mode.

### Configuring Studio Light

- [isStudioLightActive](avcapturedevice/isstudiolightactive.md): A Boolean value that indicates whether Studio Light is active on a device.
- [isStudioLightEnabled](avcapturedevice/isstudiolightenabled.md): A Boolean value that indicates whether a user enabled Studio Light on a device.

### Inspecting the Portrait Effect settings

- [isPortraitEffectActive](avcapturedevice/isportraiteffectactive.md): A Boolean value that indicates whether the Portrait video effect is active on a device.
- [isPortraitEffectEnabled](avcapturedevice/isportraiteffectenabled.md): A Boolean value that indicates whether the user enabled the Portrait video effect in Control Center.

### Inspecting the microphone mode

- [activeMicrophoneMode](avcapturedevice/activemicrophonemode.md): The device’s active microphone mode.
- [preferredMicrophoneMode](avcapturedevice/preferredmicrophonemode.md): The microphone mode that the user selects in Control Center.
- [AVCaptureDevice.MicrophoneMode](avcapturedevice/microphonemode.md): Constants that define the available microphone modes.

### Presenting the configuration user interface

- [showSystemUserInterface(\_:)](avcapturedevice/showsystemuserinterface%28__%29.md): Displays the system’s user interface to configure video effects or microphone modes.
- [AVCaptureDevice.SystemUserInterface](avcapturedevice/systemuserinterface.md): Constants that describe the capture device configuration user interfaces.

### Configuring background replacement

- [isBackgroundReplacementActive](avcapturedevice/isbackgroundreplacementactive.md): A Boolean value that indicates whether Background Replacement is currently active on a capture device.
- [isBackgroundReplacementEnabled](avcapturedevice/isbackgroundreplacementenabled.md): A class property that indicates whether a person enables the Background Replacement feature for this app.

# System video effects and microphone modes (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Configure the state of system video effects like Center Stage, and inspect enhancements the system applies to microphone audio.

## Topics

### Performing reaction effects

- [reactionEffectsEnabled](avcapturedevice/reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](avcapturedevice/canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](avcapturedevice/availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](avcapturedevice/reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffectForReaction:](avcapturedevice/performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](avcapturedevice/reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.

### Configuring Center Stage

- [centerStageActive](avcapturedevice/iscenterstageactive.md): A Boolean value that indicates whether Center Stage is active on a device.
- [centerStageEnabled](avcapturedevice/iscenterstageenabled.md): A Boolean value that indicates whether a user or an app enabled Center Stage on a device.
- [centerStageRectOfInterest](avcapturedevice/centerstagerectofinterest.md): The effective region within the output pixel buffer to perform Center Stage framing.
- [centerStageRectOfInterestSupported](avcapturedevice/centerstagerectofinterestsupported.md)
- [centerStageControlMode](avcapturedevice/centerstagecontrolmode-swift.type.property.md): A value that indicates the current mode of Center Stage control.
- [AVCaptureCenterStageControlMode](avcapturedevice/centerstagecontrolmode-swift.enum.md): Constants that indicate the current Center Stage control mode.

### Configuring Studio Light

- [studioLightActive](avcapturedevice/isstudiolightactive.md): A Boolean value that indicates whether Studio Light is active on a device.
- [studioLightEnabled](avcapturedevice/isstudiolightenabled.md): A Boolean value that indicates whether a user enabled Studio Light on a device.

### Inspecting the Portrait Effect settings

- [portraitEffectActive](avcapturedevice/isportraiteffectactive.md): A Boolean value that indicates whether the Portrait video effect is active on a device.
- [portraitEffectEnabled](avcapturedevice/isportraiteffectenabled.md): A Boolean value that indicates whether the user enabled the Portrait video effect in Control Center.

### Inspecting the microphone mode

- [activeMicrophoneMode](avcapturedevice/activemicrophonemode.md): The device’s active microphone mode.
- [preferredMicrophoneMode](avcapturedevice/preferredmicrophonemode.md): The microphone mode that the user selects in Control Center.
- [AVCaptureMicrophoneMode](avcapturedevice/microphonemode.md): Constants that define the available microphone modes.

### Presenting the configuration user interface

- [showSystemUserInterface:](avcapturedevice/showsystemuserinterface%28__%29.md): Displays the system’s user interface to configure video effects or microphone modes.
- [AVCaptureSystemUserInterface](avcapturedevice/systemuserinterface.md): Constants that describe the capture device configuration user interfaces.

### Configuring background replacement

- [backgroundReplacementActive](avcapturedevice/isbackgroundreplacementactive.md): A Boolean value that indicates whether Background Replacement is currently active on a capture device.
- [backgroundReplacementEnabled](avcapturedevice/isbackgroundreplacementenabled.md): A class property that indicates whether a person enables the Background Replacement feature for this app.
