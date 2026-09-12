> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioengine](https://developer.apple.com/documentation/kernel/ioaudioengine)

# IOAudioEngine

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.1+

Abstract base class for a single audio audio / I/O engine.

## Declaration

```objectivec
class IOAudioEngine : IOService
```

<a id="overview"></a>

## Overview

An IOAudioEngine is defined by a single I/O engine to transfer data to or from one or more sample buffers. Each sample buffer is represented by a single IOAudioStream instance. A single IOAudioEngine must contain at least one IOAudioStream, but has no upper limit on the number of IOAudioStreams it may contain. An IOAudioEngine instance may contain both input and output IOAudioStreams.

An audio driver must subclass IOAudioEngine in order to provide certain services. An IOAudioEngine subclass must start and stop the I/O engine when requested. The I/O engine should be continuously running and loop around from end to beginning. While the audio engine is running, it must take a timestamp as the sample buffer(s) wrap around and start at the beginning. The CoreAudio.framework uses the timestamp to calculate the exact position of the audio engine. An IOAudioEngine subclass must implement getCurrentSampleFrame() to provide a sample position on demand. Finally, an IOAudioEngine subclass must provide clipping and format conversion routines to go to/from the CoreAudio.framework's native float format.

If multiple stream formats or sample rates are allowed, the IOAudioEngine subclass must provide support for changing the hardware when a format or sample rate is changed.

There are several attributes associated with a single IOAudioEngine:

The IOAudioEngine superclass provides a shared status buffer that contains all of the dynamic pieces of information about the audio engine (type IOAudioEngineStatus). It runs an erase process on all of the output streams. The erase head is used to zero out the mix and sample buffers after the samples have been played. Additionally, the IOAudioEngine superclass handles the communication with the CoreAudio.framework and makes the decision to start and stop the audio engine when it detects it is in use.

In order for an audio device to play back or record sound, an IOAudioEngine subclass must be created. The subclass must initialize all of the necessary hardware resources to prepare for starting the audio I/O engine. It typically will perform these tasks in the initHardware() method. A subclass may also implement a stop() method which is called as the driver is being torn down. This is typically called in preparation of removing the device from the system for removable devices.

In addition to initializing the necessary hardware, there are a number of other tasks an IOAudioEngine must do during initHardware(). It must create the necessary IOAudioStream objects to match the device capabilities. Each IOAudioStream must be added using addAudioStream(). It also should create the IOAudioControls needed to control the various attributes of the audio engine: output volume, mute, input gain, input selection, analog passthru. To do that, addDefaultAudioControl() should be called with each IOAudioControl to be attached to the IOAudioEngine. In order to provide for proper synchronization, the latency of the audio engine should be specified with setSampleLatency(). This value represents the latency between the timestamp taken at the beginning of the buffer and when the audio is actually played (or recorded) by the device. If a device is block based or if there is a need to keep the CoreAudio.framework a certain number of samples ahead of (or behind for input) the I/O head, that value should be specified using setSampleOffset(). If this is not specified the CoreAudio.framework may attempt to get as close to the I/O head as possible.

The following fields in the shared IOAudioEngineStatus struct must be maintained by the subclass implementation:

<a id="2556494"></a>

**Listing 1**

```occ
 
  <t>  fCurrentLoopCount - the number of times the sample buffer has wrapped around to the beginning
  <t>  fLastLoopTime - timestamp of the most recent time that the I/O engine looped back to the
  beginning of the sample buffer
 
```

It is critically important that the fLastLoopTime field be as accurate as possible. It is the basis for the entire timer and synchronization mechanism used by the audio system.

At init time, the IOAudioEngine subclass must call setNumSampleFramesPerBuffer() to indicate how large each of the sample buffers are (measured in sample frames). Within a single IOAudioEngine, all sample buffers must be the same size and be running at the same sample rate. If different buffers/streams can be run at different rates, separate IOAudioEngines should be used. The IOAudioEngine subclass must also call setSampleRate() at init time to indicate the starting sample rate of the device.

## Topics

### Miscellaneous

- [addAudioStream](ioaudioengine/1812081-addaudiostream.md): Adds an IOAudioStream to the audio engine.
- [addTimer](ioaudioengine/1812084-addtimer.md): Enables the timer event for the audio engine.
- [clearAllSampleBuffers](ioaudioengine/1812089-clearallsamplebuffers.md): Zeros out all of the sample and mix buffers associated with the IOAudioEngine
- [clientClosed](ioaudioengine/1812093-clientclosed.md): Called automatically when a user client closes its connection to the audio engine.
- [convertInputSamplesVBR](ioaudioengine/1812098-convertinputsamplesvbr.md): Override this method if you want to return a different number of sample frames than was requested.
- [createDictionaryFromSampleRate](ioaudioengine/1812105-createdictionaryfromsamplerate.md): Generates a dictionary matching the given sample rate.
- [createSampleRateFromDictionary](ioaudioengine/1812109-createsampleratefromdictionary.md): Generates a sample rate from an OSDictionary.
- [eraseOutputSamples](ioaudioengine/1812115-eraseoutputsamples.md): This function allows for the actual erasing of the mix and sample buffer to be overridden by a child class.
- [free](ioaudioengine/1812122-free.md): Frees all of the resources allocated by the IOAudioEngine.
- [getAttributeForConnection](ioaudioengine/1812127-getattributeforconnection.md): Generic method to retrieve some attribute of the audio engine, specific to one connection.
- [getCommandGate](ioaudioengine/1812131-getcommandgate.md): Returns the IOCommandGate for this IOAudioEngine.
- [getCurrentSampleFrame](ioaudioengine/1812136-getcurrentsampleframe.md): Gets the current sample frame from the IOAudioEngine subclass.
- [getRunEraseHead](ioaudioengine/1812140-getrunerasehead.md): Returns true if the audio engine will run the erase head when the audio engine is running.
- [getSampleRate](ioaudioengine/1812148-getsamplerate.md): Returns the sample rate of the IOAudioEngine in samples per second.
- [getState](ioaudioengine/1812155-getstate.md): Returns the current state of the IOAudioEngine.
- [getStatus](ioaudioengine/1812164-getstatus.md): Returns a pointer to the shared status buffer.
- [getTimerInterval](ioaudioengine/1812174-gettimerinterval.md): Gets the timer interval for use by the timer event.
- [getWorkLoop](ioaudioengine/1812185-getworkloop.md): Returns the IOWorkLoop for the driver.
- [init](ioaudioengine/1812194-init.md): Performs initialization of a newly allocated IOAudioEngine.
- [initHardware](ioaudioengine/1812206-inithardware.md): This function is called by start() to provide a convenient place for the subclass to perform its hardware initialization.
- [initKeys](ioaudioengine/1812218-initkeys.md): Generates the OSSymbols with the keys.
- [newUserClient](ioaudioengine/1812227-newuserclient.md): Requests a new user client object for this service.
- [performAudioEngineStart](ioaudioengine/1812238-performaudioenginestart.md): Called to start the audio I/O engine
- [performAudioEngineStop](ioaudioengine/1812251-performaudioenginestop.md): Called to stop the audio I/O engine
- [performErase](ioaudioengine/1812263-performerase.md): Performs erase head processing.
- [performFlush](ioaudioengine/1812272-performflush.md): Performs the flush operation.
- [registerService](ioaudioengine/1812282-registerservice.md): Called when this audio engine is ready to begin vending services.
- [removeTimer](ioaudioengine/1812286-removetimer.md): Disables the timer event for the audio engine.
- [resetStatusBuffer](ioaudioengine/1812290-resetstatusbuffer.md): Resets the status buffer to its default values.
- [setAttributeForConnection](ioaudioengine/1812296-setattributeforconnection.md): Generic method to set some attribute of the audio engine, specific to one connection.
- [setClockDomain](ioaudioengine/1812301-setclockdomain.md): Sets a property that CoreAudio uses to determine how devices are synchronized. If an audio device can tell that it is synchronized to another engine, it should set this value to that engine's clock domain. If an audio device can be a primary clock, it may publish its own clock domain for other devices to use.
- [setClockIsStable](ioaudioengine/1812306-setclockisstable.md): This function sets a flag that CoreAudio uses to select its sample rate tracking algorithm. Set this to TRUE unless that results in dropped audio. If the driver is experiencing unexplained dropouts setting this FALSE might help.
- [setInputSampleOffset](ioaudioengine/1812309-setinputsampleoffset.md): set the offset CoreAudio will read from off the current read pointer
- [setMixClipOverhead](ioaudioengine/1812312-setmixclipoverhead.md): Used to tell IOAudioFamily when the watchdog timer must fire by.
- [setOutputSampleOffset](ioaudioengine/1812315-setoutputsampleoffset.md): set the offset CoreAudio will write at off the current write pointer
- [setRunEraseHead](ioaudioengine/1812317-setrunerasehead.md): Tells the audio engine whether or not to run the erase head.
- [setSampleLatency](ioaudioengine/1812320-setsamplelatency.md): Sets the sample latency for the audio engine.
- [setSampleRate](ioaudioengine/1812325-setsamplerate.md): Records the sample rate of the audio engine.
- [setState](ioaudioengine/1812329-setstate.md): Indicates that the audio engine is in the specified state.
- [start(IOService \*)](ioaudioengine/1812338-start.md): A simple cover function for start(IOService \*, IOAudioDevice \*) that assumes the provider is the IOAudioDevice.
- [start(IOService \*, IOAudioDevice \*)](ioaudioengine/1812342-start.md): Standard IOKit start() routine called to start an IOService.
- [startAudioEngine](ioaudioengine/1812346-startaudioengine.md): Starts the audio I/O engine.
- [stop](ioaudioengine/1812350-stop.md): Stops the service and prepares for the driver to be terminated.
- [stopAudioEngine](ioaudioengine/1812359-stopaudioengine.md): Stops the audio I/O engine.
- [timerCallback](ioaudioengine/1812365-timercallback.md): A static method used as a callback for the IOAudioDevice timer services.
- [timerFired](ioaudioengine/1812371-timerfired.md): Indicates the timer has fired.

### Constants

- [gSampleRateWholeNumberKey](ioaudioengine/gsampleratewholenumberkey.md)
- [gSampleRateFractionKey](ioaudioengine/gsampleratefractionkey.md)

### Instance Variables

- [workLoop](ioaudioengine/workloop.md)
- [userClients](ioaudioengine/userclients.md)
- [status](ioaudioengine/status.md)
- [state](ioaudioengine/state.md)
- [sampleRate](ioaudioengine/samplerate.md)
- [runEraseHead](ioaudioengine/runerasehead.md)
- [outputStreams](ioaudioengine/outputstreams.md)
- [numSampleFramesPerBuffer](ioaudioengine/numsampleframesperbuffer.md)
- [numErasesPerBuffer](ioaudioengine/numerasesperbuffer.md)
- [numActiveUserClients](ioaudioengine/numactiveuserclients.md)
- [isRegistered](ioaudioengine/isregistered.md)
- [inputStreams](ioaudioengine/inputstreams.md)
- [deviceStartedAudioEngine](ioaudioengine/devicestartedaudioengine.md)
- [defaultAudioControls](ioaudioengine/defaultaudiocontrols.md)
- [configurationChangeInProgress](ioaudioengine/configurationchangeinprogress.md)
- [commandGate](ioaudioengine/commandgate.md)
- [audioEngineStopPosition](ioaudioengine/audioenginestopposition.md)
- [audioDevice](ioaudioengine/audiodevice.md)

### Instance Methods

- [addAudioStream](ioaudioengine/1561604-addaudiostream.md): Deprecated.
- [addDefaultAudioControl](ioaudioengine/1561639-adddefaultaudiocontrol.md): Deprecated.
- [addTimer](ioaudioengine/1561573-addtimer.md): Deprecated.
- [addUserClient](ioaudioengine/1561618-adduserclient.md): Deprecated.
- [beginConfigurationChange](ioaudioengine/1561614-beginconfigurationchange.md): Deprecated.
- [calculateSampleTimeout](ioaudioengine/1561552-calculatesampletimeout.md): Deprecated.
- [calculateSampleTimeoutHiRes](ioaudioengine/3593108-calculatesampletimeouthires.md)
- [cancelConfigurationChange](ioaudioengine/1561568-cancelconfigurationchange.md): Deprecated.
- [clearAllSampleBuffers](ioaudioengine/1561620-clearallsamplebuffers.md): Deprecated.
- [clientClosed](ioaudioengine/1561641-clientclosed.md): Deprecated.
- [clipOutputSamples](ioaudioengine/1561556-clipoutputsamples.md): Deprecated.
- [completeConfigurationChange](ioaudioengine/1561553-completeconfigurationchange.md): Deprecated.
- [convertInputSamples](ioaudioengine/1561631-convertinputsamples.md): Deprecated.
- [convertInputSamplesVBR](ioaudioengine/1561551-convertinputsamplesvbr.md): Deprecated.
- [createUserClient](ioaudioengine/1561622-createuserclient.md): Deprecated.
- [createUserClient](ioaudioengine/3516522-createuserclient.md): Deprecated.
- [decrementActiveUserClients](ioaudioengine/1561611-decrementactiveuserclients.md): Deprecated.
- [detachAudioStreams](ioaudioengine/1561554-detachaudiostreams.md): Deprecated.
- [detachUserClients](ioaudioengine/1561605-detachuserclients.md): Deprecated.
- [driverDesiresHiResSampleIntervals](ioaudioengine/3608701-driverdesireshiressampleinterval.md)
- [eraseOutputSamples](ioaudioengine/1561630-eraseoutputsamples.md): Deprecated.
- [free](ioaudioengine/1561575-free.md): Deprecated.
- [getAttributeForConnection](ioaudioengine/1561623-getattributeforconnection.md): Deprecated.
- [getAudioStream](ioaudioengine/1561548-getaudiostream.md): Deprecated.
- [getBytesInInputBufferArrayDescriptor](ioaudioengine/1561626-getbytesininputbufferarraydescri.md): Deprecated.
- [getBytesInOutputBufferArrayDescriptor](ioaudioengine/1561560-getbytesinoutputbufferarraydescr.md): Deprecated.
- [getCommandGate](ioaudioengine/1561646-getcommandgate.md)
- [getCurrentSampleFrame](ioaudioengine/1561636-getcurrentsampleframe.md)
- [getGlobalUniqueID](ioaudioengine/1561594-getglobaluniqueid.md): Deprecated.
- [getLocalUniqueID](ioaudioengine/1561588-getlocaluniqueid.md): Deprecated.
- [getLoopCountAndTimeStamp](ioaudioengine/1561592-getloopcountandtimestamp.md): Deprecated.
- [getMetaClass](ioaudioengine/1561593-getmetaclass.md)
- [getNearestStartTime](ioaudioengine/1561621-getneareststarttime.md): Deprecated.
- [getNextStreamID](ioaudioengine/1561564-getnextstreamid.md): Deprecated.
- [getNumSampleFramesPerBuffer](ioaudioengine/1561546-getnumsampleframesperbuffer.md): Deprecated.
- [getRunEraseHead](ioaudioengine/1561571-getrunerasehead.md): Deprecated.
- [getSampleRate](ioaudioengine/1561644-getsamplerate.md): Deprecated.
- [getState](ioaudioengine/1561574-getstate.md): Deprecated.
- [getStatus](ioaudioengine/1561549-getstatus.md): Deprecated.
- [getStatusDescriptor](ioaudioengine/1561627-getstatusdescriptor.md): Deprecated.
- [getStreamForID](ioaudioengine/1561581-getstreamforid.md): Deprecated.
- [getTimerInterval](ioaudioengine/1561634-gettimerinterval.md): Deprecated.
- [getWorkLoop](ioaudioengine/1561635-getworkloop.md)
- [hardwareSampleRateChanged](ioaudioengine/1561637-hardwaresampleratechanged.md): Deprecated.
- [incrementActiveUserClients](ioaudioengine/1561606-incrementactiveuserclients.md): Deprecated.
- [init](ioaudioengine/1561651-init.md): Deprecated.
- [initHardware](ioaudioengine/1561610-inithardware.md): Deprecated.
- [lockAllStreams](ioaudioengine/1561580-lockallstreams.md): Deprecated.
- [mixOutputSamples](ioaudioengine/1561609-mixoutputsamples.md): Deprecated.
- [newUserClient](ioaudioengine/1561570-newuserclient.md): Deprecated.
- [newUserClient](ioaudioengine/3516523-newuserclient.md): Deprecated.
- [pauseAudioEngine](ioaudioengine/1561597-pauseaudioengine.md): Deprecated.
- [performAudioEngineStart](ioaudioengine/1561628-performaudioenginestart.md): Deprecated.
- [performAudioEngineStop](ioaudioengine/1561589-performaudioenginestop.md): Deprecated.
- [performErase](ioaudioengine/1561557-performerase.md): Deprecated.
- [performFlush](ioaudioengine/1561558-performflush.md): Deprecated.
- [performFormatChange](ioaudioengine/1561599-performformatchange.md): Deprecated.
- [performFormatChange](ioaudioengine/3516524-performformatchange.md): Deprecated.
- [registerService](ioaudioengine/1561638-registerservice.md): Deprecated.
- [removeAllDefaultAudioControls](ioaudioengine/1561555-removealldefaultaudiocontrols.md): Deprecated.
- [removeDefaultAudioControl](ioaudioengine/1561648-removedefaultaudiocontrol.md): Deprecated.
- [removeTimer](ioaudioengine/1561585-removetimer.md): Deprecated.
- [removeUserClient](ioaudioengine/1561598-removeuserclient.md): Deprecated.
- [resetClipPosition](ioaudioengine/1561578-resetclipposition.md): Deprecated.
- [resetStatusBuffer](ioaudioengine/1561569-resetstatusbuffer.md): Deprecated.
- [resumeAudioEngine](ioaudioengine/1561596-resumeaudioengine.md): Deprecated.
- [sendFormatChangeNotification](ioaudioengine/1561619-sendformatchangenotification.md): Deprecated.
- [sendNotification](ioaudioengine/1561550-sendnotification.md): Deprecated.
- [setAttributeForConnection](ioaudioengine/1561601-setattributeforconnection.md): Deprecated.
- [setAudioDevice](ioaudioengine/1561587-setaudiodevice.md): Deprecated.
- [setClockDomain](ioaudioengine/1561613-setclockdomain.md): Deprecated.
- [setClockIsStable](ioaudioengine/1561545-setclockisstable.md): Deprecated.
- [setDescription](ioaudioengine/1561591-setdescription.md): Deprecated.
- [setIndex](ioaudioengine/1561584-setindex.md): Deprecated.
- [setInputSampleLatency](ioaudioengine/1561640-setinputsamplelatency.md): Deprecated.
- [setInputSampleOffset](ioaudioengine/1561603-setinputsampleoffset.md): Deprecated.
- [setMixClipOverhead](ioaudioengine/1561577-setmixclipoverhead.md): Deprecated.
- [setNumSampleFramesPerBuffer](ioaudioengine/1561579-setnumsampleframesperbuffer.md): Deprecated.
- [setOutputSampleLatency](ioaudioengine/1561544-setoutputsamplelatency.md): Deprecated.
- [setOutputSampleOffset](ioaudioengine/1561617-setoutputsampleoffset.md): Deprecated.
- [setRunEraseHead](ioaudioengine/1561625-setrunerasehead.md): Deprecated.
- [setSampleLatency](ioaudioengine/1561600-setsamplelatency.md): Deprecated.
- [setSampleOffset](ioaudioengine/1561616-setsampleoffset.md): Deprecated.
- [setSampleRate](ioaudioengine/1561649-setsamplerate.md): Deprecated.
- [setState](ioaudioengine/1561576-setstate.md): Deprecated.
- [setWorkLoopOnAllAudioControls](ioaudioengine/1561643-setworklooponallaudiocontrols.md): Deprecated.
- [start](ioaudioengine/1561582-start.md): Deprecated.
- [start](ioaudioengine/3516525-start.md): Deprecated.
- [startAudioEngine](ioaudioengine/1561547-startaudioengine.md): Deprecated.
- [startClient](ioaudioengine/1561612-startclient.md): Deprecated.
- [stop](ioaudioengine/1561583-stop.md): Deprecated.
- [stopAudioEngine](ioaudioengine/1561633-stopaudioengine.md): Deprecated.
- [stopClient](ioaudioengine/1561563-stopclient.md): Deprecated.
- [stopEngineAtPosition](ioaudioengine/1561595-stopengineatposition.md): Deprecated.
- [takeTimeStamp](ioaudioengine/1561629-taketimestamp.md): Deprecated.
- [timerFired](ioaudioengine/1561652-timerfired.md): Deprecated.
- [unlockAllStreams](ioaudioengine/1561561-unlockallstreams.md): Deprecated.
- [updateChannelNumbers](ioaudioengine/1561615-updatechannelnumbers.md): Deprecated.
- [useHiResSampleInterval](ioaudioengine/3593109-usehiressampleinterval.md)
- [waitForEngineResume](ioaudioengine/1561642-waitforengineresume.md)

### Type Methods

- [addUserClientAction](ioaudioengine/1561566-adduserclientaction.md): Deprecated.
- [createDictionaryFromSampleRate](ioaudioengine/1561602-createdictionaryfromsamplerate.md): Deprecated.
- [createSampleRateFromDictionary](ioaudioengine/1561647-createsampleratefromdictionary.md): Deprecated.
- [detachUserClientsAction](ioaudioengine/1561567-detachuserclientsaction.md): Deprecated.
- [initKeys](ioaudioengine/1561586-initkeys.md): Deprecated.
- [lockStreamForIO](ioaudioengine/1561632-lockstreamforio.md): Deprecated.
- [removeUserClientAction](ioaudioengine/1561565-removeuserclientaction.md): Deprecated.
- [setCommandGateUsage](ioaudioengine/1561608-setcommandgateusage.md): Deprecated.
- [timerCallback](ioaudioengine/1561624-timercallback.md): Deprecated.
- [unlockStreamForIO](ioaudioengine/1561572-unlockstreamforio.md): Deprecated.

## Relationships

### Inherits From

- [IOService](ioservice.md)

## See Also

### Interfaces

- [IOAudioLevelControl](ioaudiolevelcontrol.md)
- [IOAudioSelectorControl](ioaudioselectorcontrol.md)
- [IOAudioToggleControl](ioaudiotogglecontrol.md)
- [IOAudioControl](ioaudiocontrol.md): Represents any controllable attribute of an IOAudioDevice.
- [IOAudioStream](ioaudiostream.md): This class wraps a single sample buffer in an audio driver.
- [IOAudioPort](ioaudioport.md): Represents a logical or physical port or functional unit in an audio device.
