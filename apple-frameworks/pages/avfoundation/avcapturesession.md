> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession](https://developer.apple.com/documentation/avfoundation/avcapturesession)

# AVCaptureSession (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An object that configures capture behavior and coordinates the flow of data from input devices to capture outputs.

## Declaration

```swift
class AVCaptureSession
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)
- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

To perform real-time capture, you instantiate a capture session and add appropriate inputs and outputs. The following code fragment illustrates how to configure a capture device to record audio.

```swift
// Create the capture session.
let captureSession = AVCaptureSession()

// Find the default audio device.
guard let audioDevice = AVCaptureDevice.default(for: .audio) else { return }

do {
    // Wrap the audio device in a capture device input.
    let audioInput = try AVCaptureDeviceInput(device: audioDevice)
    // If the input can be added, add it to the session.
    if captureSession.canAddInput(audioInput) {
        captureSession.addInput(audioInput)
    }
} catch {
    // Configuration failed. Handle error.
}
```

Call the [startRunning()](avcapturesession/startrunning%28%29.md) method to start the flow of data from the inputs to the outputs, and call the [stopRunning()](avcapturesession/stoprunning%28%29.md) method to stop the flow.

> **Important**

>  The [startRunning()](avcapturesession/startrunning%28%29.md) method is a blocking call which can take some time, therefore start the session on a serial dispatch queue so that you don’t block the main queue (which keeps the UI responsive). See [AVCam: Building a camera app](avcam-building-a-camera-app.md) for an implementation example.

You use the [sessionPreset](avcapturesession/sessionpreset.md) property to customize the quality level, bitrate, or other settings for the output. Most common capture configurations are available through session presets; however, some specialized options (such as high frame rate) require directly setting a capture format on an [AVCaptureDevice](avcapturedevice.md) instance.

## Topics

### Configuring a session

- [beginConfiguration()](avcapturesession/beginconfiguration%28%29.md): Marks the beginning of changes to a running capture session’s configuration to perform in a single atomic update.
- [commitConfiguration()](avcapturesession/commitconfiguration%28%29.md): Commits one or more changes to a running capture session’s configuration in a single atomic update.

### Setting a session preset

- [AVCaptureSession.Preset](avcapturesession/preset.md): Presets that define standard configurations for a capture session.
- [canSetSessionPreset(\_:)](avcapturesession/cansetsessionpreset%28__%29.md): Determines whether you can configure a capture session with the specified preset.
- [sessionPreset](avcapturesession/sessionpreset.md): A preset value that indicates the quality level or bit rate of the output.

### Configuring inputs

- [inputs](avcapturesession/inputs.md): The inputs that provide media data to a capture session.
- [canAddInput(\_:)](avcapturesession/canaddinput%28__%29.md): Determines whether you can add an input to a session.
- [addInput(\_:)](avcapturesession/addinput%28__%29.md): Adds a capture input to the session.
- [removeInput(\_:)](avcapturesession/removeinput%28__%29.md): Removes an input from the session.

### Configuring outputs

- [outputs](avcapturesession/outputs.md): The output destinations to which a captures session sends its data.
- [canAddOutput(\_:)](avcapturesession/canaddoutput%28__%29.md): Determines whether you can add an output to a session.
- [addOutput(\_:)](avcapturesession/addoutput%28__%29.md): Adds an output to the capture session.
- [removeOutput(\_:)](avcapturesession/removeoutput%28__%29.md): Removes an output from a capture session.

### Connecting inputs and outputs

- [connections](avcapturesession/connections.md): The connections between inputs and outputs that a capture session contains.
- [addConnection(\_:)](avcapturesession/addconnection%28__%29.md): Adds a connection to the capture session.
- [canAddConnection(\_:)](avcapturesession/canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addInputWithNoConnections(\_:)](avcapturesession/addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections(\_:)](avcapturesession/addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection(\_:)](avcapturesession/removeconnection%28__%29.md): Removes a capture connection from the session.
- [AVCaptureAudioChannel](avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.

### Configuring deferred start

- [isManualDeferredStartSupported](avcapturesession/ismanualdeferredstartsupported.md): A `BOOL` value that indicates whether the session supports manually running deferred start.
- [automaticallyRunsDeferredStart](avcapturesession/automaticallyrunsdeferredstart.md): A Boolean value that indicates whether deferred start runs automatically.
- [runDeferredStartWhenNeeded()](avcapturesession/rundeferredstartwhenneeded%28%29.md): Tells the session to run deferred start when appropriate.
- [deferredStartDelegate](avcapturesession/deferredstartdelegate.md): A delegate object that observes events about deferred start.
- [deferredStartDelegateCallbackQueue](avcapturesession/deferredstartdelegatecallbackqueue.md): The dispatch queue on which the session calls deferred start delegate methods.
- [setDeferredStartDelegate(\_:deferredStartDelegateCallbackQueue:)](avcapturesession/setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md): Sets a delegate object for the session to call when performing deferred start.
- [AVCaptureSessionDeferredStartDelegate](avcapturesessiondeferredstartdelegate.md): A protocol that defines the interface to respond to events about a capture session’s deferred start.

### Configuring capture controls

- [supportsControls](avcapturesession/supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [maxControlsCount](avcapturesession/maxcontrolscount.md): The maximum number of controls a capture session supports.
- [controls](avcapturesession/controls.md): The controls that allow configuring the camera system from device hardware.
- [canAddControl(\_:)](avcapturesession/canaddcontrol%28__%29.md): Returns a Boolean value that indicates whether a capture session add the specified control.
- [addControl(\_:)](avcapturesession/addcontrol%28__%29.md): Adds a control to a capture session.
- [removeControl(\_:)](avcapturesession/removecontrol%28__%29.md): Removes a control from a capture session.
- [setControlsDelegate(\_:queue:)](avcapturesession/setcontrolsdelegate%28__queue_%29.md): Sets a delegate object for the system to call when it activates and presents controls.
- [AVCaptureSessionControlsDelegate](avcapturesessioncontrolsdelegate.md): A protocol that defines the interface to respond to capture control activation and presentation events.
- [controlsDelegate](avcapturesession/controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](avcapturesession/controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.

### Managing the session life cycle

- [startRunning()](avcapturesession/startrunning%28%29.md): Starts the flow of data through the capture pipeline.
- [stopRunning()](avcapturesession/stoprunning%28%29.md): Stops the flow of data through the capture pipeline.

### Observing session state

- [isRunning](avcapturesession/isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [isInterrupted](avcapturesession/isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [didStartRunningNotification](avcapturesession/didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [didStopRunningNotification](avcapturesession/didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [wasInterruptedNotification](avcapturesession/wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [interruptionEndedNotification](avcapturesession/interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [runtimeErrorNotification](avcapturesession/runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.

### Configuring multitasking

- [isMultitaskingCameraAccessSupported](avcapturesession/ismultitaskingcameraaccesssupported.md): A Boolean value that indicates whether the capture session supports using the camera while multitasking.
- [isMultitaskingCameraAccessEnabled](avcapturesession/ismultitaskingcameraaccessenabled.md): A Boolean value that indicates whether the capture session enables access to the camera while multitasking.

### Monitoring performance

- [hardwareCost](avcapturesession/hardwarecost.md): A value that indicates the percentage of the session’s available hardware budget in use.

### Configuring the app’s audio session

- [usesApplicationAudioSession](avcapturesession/usesapplicationaudiosession.md): A Boolean value that indicates whether the capture session uses the app’s shared audio session.
- [automaticallyConfiguresApplicationAudioSession](avcapturesession/automaticallyconfiguresapplicationaudiosession.md): A Boolean value that indicates whether the capture session automatically changes settings in the app’s shared audio session.
- [configuresApplicationAudioSessionToMixWithOthers](avcapturesession/configuresapplicationaudiosessiontomixwithothers.md): A Boolean value that Indicates whether the capture session configures the app’s audio session to mix with others.
- [configuresApplicationAudioSessionForBluetoothHighQualityRecording](avcapturesession/configuresapplicationaudiosessionforbluetoothhighqualityrecording.md): A Boolean value that indicates whether the capture session configures the app’s audio session for bluetooth high-quality recording.

### Managing color spaces

- [automaticallyConfiguresCaptureDeviceForWideColor](avcapturesession/automaticallyconfigurescapturedeviceforwidecolor.md): A Boolean value that specifies whether the session should automatically use wide-gamut color where available.

### Synchronizing output

- [synchronizationClock](avcapturesession/synchronizationclock.md): A clock to use for output synchronization.
- [masterClock](avcapturesession/masterclock.md): Deprecated. A clock object used for output synchronization.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCaptureMultiCamSession](avcapturemulticamsession.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Capture sessions

- [Setting up a capture session](setting-up-a-capture-session.md): Configure input devices, output media, preview views, and basic settings before capturing photos or video.
- [Accessing the camera while multitasking on iPad](../avkit/accessing-the-camera-while-multitasking-on-ipad.md): Operate the camera in Split View, Slide Over, Picture in Picture, and Stage Manager modes.
- [AVCam: Building a camera app](avcam-building-a-camera-app.md): Capture photos and record video using the front and rear iPhone and iPad cameras.
- [Building a responsive camera app that launches quickly](building-a-responsive-camera-app-that-launches-quickly.md): Show a camera preview sooner by deferring capture output setup and postponing noncritical interface elements.
- [Capturing Cinematic video](capturing-cinematic-video.md): Capture video with an adjustable depth of field and focus points.
- [Supporting Center Stage front camera in your iOS app](supporting-center-stage-front-camera-in-your-ios-app.md): Enable Center Stage for photos and videos on the iPhone front camera.
- [AVMultiCamPiP: Capturing from Multiple Cameras](avmulticampip-capturing-from-multiple-cameras.md): Simultaneously record the output from the front and back cameras into a single movie file by using a multi-camera capture session.
- [AVCamBarcode: detecting barcodes and faces](avcambarcode-detecting-barcodes-and-faces.md): Identify machine readable codes or faces by using the camera.
- [AVCaptureMultiCamSession](avcapturemulticamsession.md): A capture session that supports simultaneous capture from multiple inputs of the same media type.
- [AVCaptureInput](avcaptureinput.md): An abstract superclass for objects that provide input data to a capture session.
- [AVCaptureOutput](avcaptureoutput.md): An abstract superclass for objects that provide media output destinations for a capture session.
- [AVCaptureConnection](avcaptureconnection.md): An object that represents a connection from a capture input to a capture output.

# AVCaptureSession (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An object that configures capture behavior and coordinates the flow of data from input devices to capture outputs.

## Declaration

```objectivec
@interface AVCaptureSession : NSObject
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)
- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

To perform real-time capture, you instantiate a capture session and add appropriate inputs and outputs. The following code fragment illustrates how to configure a capture device to record audio.

```swift
// Create the capture session.
let captureSession = AVCaptureSession()

// Find the default audio device.
guard let audioDevice = AVCaptureDevice.default(for: .audio) else { return }

do {
    // Wrap the audio device in a capture device input.
    let audioInput = try AVCaptureDeviceInput(device: audioDevice)
    // If the input can be added, add it to the session.
    if captureSession.canAddInput(audioInput) {
        captureSession.addInput(audioInput)
    }
} catch {
    // Configuration failed. Handle error.
}
```

Call the [startRunning](avcapturesession/startrunning%28%29.md) method to start the flow of data from the inputs to the outputs, and call the [stopRunning](avcapturesession/stoprunning%28%29.md) method to stop the flow.

> **Important**

>  The [startRunning](avcapturesession/startrunning%28%29.md) method is a blocking call which can take some time, therefore start the session on a serial dispatch queue so that you don’t block the main queue (which keeps the UI responsive). See [AVCam: Building a camera app](avcam-building-a-camera-app.md) for an implementation example.

You use the [sessionPreset](avcapturesession/sessionpreset.md) property to customize the quality level, bitrate, or other settings for the output. Most common capture configurations are available through session presets; however, some specialized options (such as high frame rate) require directly setting a capture format on an [AVCaptureDevice](avcapturedevice.md) instance.

## Topics

### Configuring a session

- [beginConfiguration](avcapturesession/beginconfiguration%28%29.md): Marks the beginning of changes to a running capture session’s configuration to perform in a single atomic update.
- [commitConfiguration](avcapturesession/commitconfiguration%28%29.md): Commits one or more changes to a running capture session’s configuration in a single atomic update.

### Setting a session preset

- [AVCaptureSessionPreset](avcapturesession/preset.md): Presets that define standard configurations for a capture session.
- [canSetSessionPreset:](avcapturesession/cansetsessionpreset%28__%29.md): Determines whether you can configure a capture session with the specified preset.
- [sessionPreset](avcapturesession/sessionpreset.md): A preset value that indicates the quality level or bit rate of the output.

### Configuring inputs

- [inputs](avcapturesession/inputs.md): The inputs that provide media data to a capture session.
- [canAddInput:](avcapturesession/canaddinput%28__%29.md): Determines whether you can add an input to a session.
- [addInput:](avcapturesession/addinput%28__%29.md): Adds a capture input to the session.
- [removeInput:](avcapturesession/removeinput%28__%29.md): Removes an input from the session.

### Configuring outputs

- [outputs](avcapturesession/outputs.md): The output destinations to which a captures session sends its data.
- [canAddOutput:](avcapturesession/canaddoutput%28__%29.md): Determines whether you can add an output to a session.
- [addOutput:](avcapturesession/addoutput%28__%29.md): Adds an output to the capture session.
- [removeOutput:](avcapturesession/removeoutput%28__%29.md): Removes an output from a capture session.

### Connecting inputs and outputs

- [connections](avcapturesession/connections.md): The connections between inputs and outputs that a capture session contains.
- [addConnection:](avcapturesession/addconnection%28__%29.md): Adds a connection to the capture session.
- [canAddConnection:](avcapturesession/canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addInputWithNoConnections:](avcapturesession/addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections:](avcapturesession/addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection:](avcapturesession/removeconnection%28__%29.md): Removes a capture connection from the session.
- [AVCaptureAudioChannel](avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.

### Configuring deferred start

- [manualDeferredStartSupported](avcapturesession/ismanualdeferredstartsupported.md): A `BOOL` value that indicates whether the session supports manually running deferred start.
- [automaticallyRunsDeferredStart](avcapturesession/automaticallyrunsdeferredstart.md): A Boolean value that indicates whether deferred start runs automatically.
- [runDeferredStartWhenNeeded](avcapturesession/rundeferredstartwhenneeded%28%29.md): Tells the session to run deferred start when appropriate.
- [deferredStartDelegate](avcapturesession/deferredstartdelegate.md): A delegate object that observes events about deferred start.
- [deferredStartDelegateCallbackQueue](avcapturesession/deferredstartdelegatecallbackqueue.md): The dispatch queue on which the session calls deferred start delegate methods.
- [setDeferredStartDelegate:deferredStartDelegateCallbackQueue:](avcapturesession/setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md): Sets a delegate object for the session to call when performing deferred start.
- [AVCaptureSessionDeferredStartDelegate](avcapturesessiondeferredstartdelegate.md): A protocol that defines the interface to respond to events about a capture session’s deferred start.

### Configuring capture controls

- [supportsControls](avcapturesession/supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [maxControlsCount](avcapturesession/maxcontrolscount.md): The maximum number of controls a capture session supports.
- [controls](avcapturesession/controls.md): The controls that allow configuring the camera system from device hardware.
- [canAddControl:](avcapturesession/canaddcontrol%28__%29.md): Returns a Boolean value that indicates whether a capture session add the specified control.
- [addControl:](avcapturesession/addcontrol%28__%29.md): Adds a control to a capture session.
- [removeControl:](avcapturesession/removecontrol%28__%29.md): Removes a control from a capture session.
- [setControlsDelegate:queue:](avcapturesession/setcontrolsdelegate%28__queue_%29.md): Sets a delegate object for the system to call when it activates and presents controls.
- [AVCaptureSessionControlsDelegate](avcapturesessioncontrolsdelegate.md): A protocol that defines the interface to respond to capture control activation and presentation events.
- [controlsDelegate](avcapturesession/controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](avcapturesession/controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.

### Managing the session life cycle

- [startRunning](avcapturesession/startrunning%28%29.md): Starts the flow of data through the capture pipeline.
- [stopRunning](avcapturesession/stoprunning%28%29.md): Stops the flow of data through the capture pipeline.

### Observing session state

- [running](avcapturesession/isrunning.md): A Boolean value that indicates whether the capture session is in a running state.
- [interrupted](avcapturesession/isinterrupted.md): A Boolean value that indicates whether the capture session is in an interrupted state.
- [AVCaptureSessionDidStartRunningNotification](avcapturesession/didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [AVCaptureSessionDidStopRunningNotification](avcapturesession/didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [AVCaptureSessionWasInterruptedNotification](avcapturesession/wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [AVCaptureSessionInterruptionEndedNotification](avcapturesession/interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [AVCaptureSessionRuntimeErrorNotification](avcapturesession/runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.

### Configuring multitasking

- [multitaskingCameraAccessSupported](avcapturesession/ismultitaskingcameraaccesssupported.md): A Boolean value that indicates whether the capture session supports using the camera while multitasking.
- [multitaskingCameraAccessEnabled](avcapturesession/ismultitaskingcameraaccessenabled.md): A Boolean value that indicates whether the capture session enables access to the camera while multitasking.

### Monitoring performance

- [hardwareCost](avcapturesession/hardwarecost.md): A value that indicates the percentage of the session’s available hardware budget in use.

### Configuring the app’s audio session

- [usesApplicationAudioSession](avcapturesession/usesapplicationaudiosession.md): A Boolean value that indicates whether the capture session uses the app’s shared audio session.
- [automaticallyConfiguresApplicationAudioSession](avcapturesession/automaticallyconfiguresapplicationaudiosession.md): A Boolean value that indicates whether the capture session automatically changes settings in the app’s shared audio session.
- [configuresApplicationAudioSessionToMixWithOthers](avcapturesession/configuresapplicationaudiosessiontomixwithothers.md): A Boolean value that Indicates whether the capture session configures the app’s audio session to mix with others.
- [configuresApplicationAudioSessionForBluetoothHighQualityRecording](avcapturesession/configuresapplicationaudiosessionforbluetoothhighqualityrecording.md): A Boolean value that indicates whether the capture session configures the app’s audio session for bluetooth high-quality recording.

### Managing color spaces

- [automaticallyConfiguresCaptureDeviceForWideColor](avcapturesession/automaticallyconfigurescapturedeviceforwidecolor.md): A Boolean value that specifies whether the session should automatically use wide-gamut color where available.

### Synchronizing output

- [synchronizationClock](avcapturesession/synchronizationclock.md): A clock to use for output synchronization.
- [masterClock](avcapturesession/masterclock.md): Deprecated. A clock object used for output synchronization.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCaptureMultiCamSession](avcapturemulticamsession.md)

## See Also

### Capture sessions

- [Setting up a capture session](setting-up-a-capture-session.md): Configure input devices, output media, preview views, and basic settings before capturing photos or video.
- [Accessing the camera while multitasking on iPad](../avkit/accessing-the-camera-while-multitasking-on-ipad.md): Operate the camera in Split View, Slide Over, Picture in Picture, and Stage Manager modes.
- [AVCam: Building a camera app](avcam-building-a-camera-app.md): Capture photos and record video using the front and rear iPhone and iPad cameras.
- [Capturing Cinematic video](capturing-cinematic-video.md): Capture video with an adjustable depth of field and focus points.
- [AVMultiCamPiP: Capturing from Multiple Cameras](avmulticampip-capturing-from-multiple-cameras.md): Simultaneously record the output from the front and back cameras into a single movie file by using a multi-camera capture session.
- [AVCamBarcode: detecting barcodes and faces](avcambarcode-detecting-barcodes-and-faces.md): Identify machine readable codes or faces by using the camera.
- [AVCaptureMultiCamSession](avcapturemulticamsession.md): A capture session that supports simultaneous capture from multiple inputs of the same media type.
- [AVCaptureInput](avcaptureinput.md): An abstract superclass for objects that provide input data to a capture session.
- [AVCaptureOutput](avcaptureoutput.md): An abstract superclass for objects that provide media output destinations for a capture session.
- [AVCaptureConnection](avcaptureconnection.md): An object that represents a connection from a capture input to a capture output.
