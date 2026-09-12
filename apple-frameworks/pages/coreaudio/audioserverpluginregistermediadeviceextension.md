> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverpluginregistermediadeviceextension](https://developer.apple.com/documentation/coreaudio/audioserverpluginregistermediadeviceextension)

# AudioServerPlugInRegisterMediaDeviceExtension

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
extern OSStatus AudioServerPlugInRegisterMediaDeviceExtension(AudioServerPlugInDriverRef inPlugIn, void (^interruptionHandler)());
```

## Parameters

- `inPlugIn`: The plug-in interface that will be called by the system.
- `interruptionHandler`: The handler that will be called when the connection to the audio server is interrupted

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

This is used to register an AudioServerPlugin interface to host a driver for a remote media device to be used in conjunction with [Creating a media device extension](https://developer.apple.com/documentation/mediadevice/creating-a-media-device-extension).

AudioServerPlugIns that are registered this way are restricted to presenting a single output audio device, which must have a transport type of [kAudioDeviceTransportTypeRemoteScreen](kaudiodevicetransporttyperemotescreen.md) or [kAudioDeviceTransportTypeRemoteStreaming](kaudiodevicetransporttyperemotestreaming.md). If these conditions are not met, the registration will fail with a result of [kAudioHardwareIllegalOperationError](kaudiohardwareillegaloperationerror.md). It is also expected that the device UID ([kAudioDevicePropertyDeviceUID](kaudiodevicepropertydeviceuid.md)) matches the [MediaOutputDevice](https://developer.apple.com/documentation/mediadevice/mediaoutputdevice)’s [id](https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/id).
