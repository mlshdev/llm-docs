> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-services](https://developer.apple.com/documentation/audiotoolbox/audio-services)

# Audio Services (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Play short sounds or trigger a vibration effect on iOS devices with the appropriate hardware.

<a id="overview"></a>

## Overview

System Sound Services provides a C interface for playing short sounds and for invoking vibration on iOS devices that support vibration.

You can use System Sound Services to play short (30 seconds or shorter) sounds. The interface does not provide level, positioning, looping, or timing control, and does not support simultaneous playback: You can play only one sound at a time. You can use System Sound Services to provide audible alerts. On some iOS devices, alerts can include vibration.

## Topics

### Creating and Disposing of System Sound Objects

- [AudioServicesCreateSystemSoundID(\_:\_:)](audioservicescreatesystemsoundid%28____%29.md): Creates a system sound object.
- [AudioServicesDisposeSystemSoundID(\_:)](audioservicesdisposesystemsoundid%28__%29.md): Disposes of a system sound object and associated resources.
- [SystemSoundID](systemsoundid.md): A system sound object, identified with a sound file you want to play.
- [System Sounds](1405222-system-sounds.md)
- [Alert Sound Identifiers](1618202-alert-sound-identifiers.md): Identifiers for alert sounds and alternatives to sounds, for use with the [AudioServicesPlayAlertSound(\_:)](audioservicesplayalertsound%28__%29.md) function.

### Playing Sounds

- [AudioServicesPlayAlertSoundWithCompletion(\_:\_:)](audioservicesplayalertsoundwithcompletion%28____%29.md)
- [AudioServicesPlaySystemSoundWithCompletion(\_:\_:)](audioservicesplaysystemsoundwithcompletion%28____%29.md)
- [AudioServicesPlayAlertSound(\_:)](audioservicesplayalertsound%28__%29.md): Plays a system sound as an alert.
- [AudioServicesPlaySystemSound(\_:)](audioservicesplaysystemsound%28__%29.md): Plays a system sound object.

### Adding and Removing System Sound Callbacks

- [AudioServicesAddSystemSoundCompletion(\_:\_:\_:\_:\_:)](audioservicesaddsystemsoundcompletion%28__________%29.md): Registers a callback function that is invoked when a specified system sound finishes playing.
- [AudioServicesRemoveSystemSoundCompletion(\_:)](audioservicesremovesystemsoundcompletion%28__%29.md): Unregisters any completion callback functions that were registered for a specified system sound.
- [AudioServicesSystemSoundCompletionProc](audioservicessystemsoundcompletionproc.md): A function the system invokes when a system sound finishes playing.

### Managing System Sound Services Properties

- [AudioServicesGetPropertyInfo(\_:\_:\_:\_:\_:)](audioservicesgetpropertyinfo%28__________%29.md): Gets information about a System Sound Services property.
- [AudioServicesGetProperty(\_:\_:\_:\_:\_:)](audioservicesgetproperty%28__________%29.md): Gets a specified System Sound Services property value.
- [AudioServicesSetProperty(\_:\_:\_:\_:\_:)](audioservicessetproperty%28__________%29.md): Sets the value for a specified System Sound Services property.
- [AudioServicesPropertyID](audioservicespropertyid.md): The data type for a system sound property identifier.
- [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md): Property identifiers used when playing alerts with System Sound Services.
- [Audio Hardware Services Properties](1405208-audio-hardware-services-properti.md): Property identifiers that apply to HAL audio objects only when accessed via the Audio Hardware Services.

### Getting Error Codes

This table lists the result codes defined for System Sound Services.

- [Audio Services Errors](1405232-audio-services-errors.md)
- [kAudioServicesNoError](kaudioservicesnoerror.md): No error has occurred.
- [kAudioServicesUnsupportedPropertyError](kaudioservicesunsupportedpropertyerror.md): The property is not supported.
- [kAudioServicesBadPropertySizeError](kaudioservicesbadpropertysizeerror.md): The size of the property data was not correct.
- [kAudioServicesBadSpecifierSizeError](kaudioservicesbadspecifiersizeerror.md): The size of the specifier data was not correct.
- [kAudioServicesSystemSoundUnspecifiedError](kaudioservicessystemsoundunspecifiederror.md): An unspecified error has occurred.
- [kAudioServicesSystemSoundClientTimedOutError](kaudioservicessystemsoundclienttimedouterror.md): System sound client message timed out.

## See Also

### Playback and Recording

- [Audio Queue Services](audio-queue-services.md): Connect to audio hardware and manage the recording or playback process.
- [Music Player](music-player.md): Create and play a sequence of tracks, and manage aspects of playback in response to standard events.
- [Anchoring sound to a window or volume](spatializing-sound-from-a-uiscene.md): Provide unique app experiences by attaching sounds to windows and volumes in 3D space.

# Audio Services (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Play short sounds or trigger a vibration effect on iOS devices with the appropriate hardware.

<a id="overview"></a>

## Overview

System Sound Services provides a C interface for playing short sounds and for invoking vibration on iOS devices that support vibration.

You can use System Sound Services to play short (30 seconds or shorter) sounds. The interface does not provide level, positioning, looping, or timing control, and does not support simultaneous playback: You can play only one sound at a time. You can use System Sound Services to provide audible alerts. On some iOS devices, alerts can include vibration.

## Topics

### Creating and Disposing of System Sound Objects

- [AudioServicesCreateSystemSoundID](audioservicescreatesystemsoundid%28____%29.md): Creates a system sound object.
- [AudioServicesDisposeSystemSoundID](audioservicesdisposesystemsoundid%28__%29.md): Disposes of a system sound object and associated resources.
- [SystemSoundID](systemsoundid.md): A system sound object, identified with a sound file you want to play.
- [System Sounds](1405222-system-sounds.md)
- [Alert Sound Identifiers](1618202-alert-sound-identifiers.md): Identifiers for alert sounds and alternatives to sounds, for use with the [AudioServicesPlayAlertSound](audioservicesplayalertsound%28__%29.md) function.

### Playing Sounds

- [AudioServicesPlayAlertSoundWithCompletion](audioservicesplayalertsoundwithcompletion%28____%29.md)
- [AudioServicesPlaySystemSoundWithCompletion](audioservicesplaysystemsoundwithcompletion%28____%29.md)
- [AudioServicesPlayAlertSound](audioservicesplayalertsound%28__%29.md): Plays a system sound as an alert.
- [AudioServicesPlaySystemSound](audioservicesplaysystemsound%28__%29.md): Plays a system sound object.

### Adding and Removing System Sound Callbacks

- [AudioServicesAddSystemSoundCompletion](audioservicesaddsystemsoundcompletion%28__________%29.md): Registers a callback function that is invoked when a specified system sound finishes playing.
- [AudioServicesRemoveSystemSoundCompletion](audioservicesremovesystemsoundcompletion%28__%29.md): Unregisters any completion callback functions that were registered for a specified system sound.
- [AudioServicesSystemSoundCompletionProc](audioservicessystemsoundcompletionproc.md): A function the system invokes when a system sound finishes playing.

### Managing System Sound Services Properties

- [AudioServicesGetPropertyInfo](audioservicesgetpropertyinfo%28__________%29.md): Gets information about a System Sound Services property.
- [AudioServicesGetProperty](audioservicesgetproperty%28__________%29.md): Gets a specified System Sound Services property value.
- [AudioServicesSetProperty](audioservicessetproperty%28__________%29.md): Sets the value for a specified System Sound Services property.
- [AudioServicesPropertyID](audioservicespropertyid.md): The data type for a system sound property identifier.
- [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md): Property identifiers used when playing alerts with System Sound Services.
- [Audio Hardware Services Properties](1405208-audio-hardware-services-properti.md): Property identifiers that apply to HAL audio objects only when accessed via the Audio Hardware Services.

### Getting Error Codes

This table lists the result codes defined for System Sound Services.

- [Audio Services Errors](1405232-audio-services-errors.md)
- [kAudioServicesNoError](kaudioservicesnoerror.md): No error has occurred.
- [kAudioServicesUnsupportedPropertyError](kaudioservicesunsupportedpropertyerror.md): The property is not supported.
- [kAudioServicesBadPropertySizeError](kaudioservicesbadpropertysizeerror.md): The size of the property data was not correct.
- [kAudioServicesBadSpecifierSizeError](kaudioservicesbadspecifiersizeerror.md): The size of the specifier data was not correct.
- [kAudioServicesSystemSoundUnspecifiedError](kaudioservicessystemsoundunspecifiederror.md): An unspecified error has occurred.
- [kAudioServicesSystemSoundClientTimedOutError](kaudioservicessystemsoundclienttimedouterror.md): System sound client message timed out.

## See Also

### Playback and Recording

- [Audio Queue Services](audio-queue-services.md): Connect to audio hardware and manage the recording or playback process.
- [Music Player](music-player.md): Create and play a sequence of tracks, and manage aspects of playback in response to standard events.
- [Anchoring sound to a window or volume](spatializing-sound-from-a-uiscene.md): Provide unique app experiences by attaching sounds to windows and volumes in 3D space.
