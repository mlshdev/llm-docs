> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/audio-hardware](https://developer.apple.com/documentation/avfaudio/audio-hardware)

# Audio hardware (Swift)

**Framework:** AVFAudio  
**Kind:** API Collection

Inspect and configure audio device settings including input gain, sample rate, and channel counts.

## Topics

### Configuring sample rate

- [sampleRate](avaudiosession/samplerate.md): The current audio sample rate, in hertz.
- [preferredSampleRate](avaudiosession/preferredsamplerate.md): The preferred sample rate, in hertz.
- [setPreferredSampleRate(\_:)](avaudiosession/setpreferredsamplerate%28__%29.md): Sets the preferred sample rate for audio input and output.

### Setting input gain

- [inputGain](avaudiosession/inputgain.md): The gain applied to inputs associated with the session.
- [isInputGainSettable](avaudiosession/isinputgainsettable.md): A Boolean value that indicates whether you can set the input gain.
- [setInputGain(\_:)](avaudiosession/setinputgain%28__%29.md): Changes the input gain to the specified value.

### Configuring I/O buffer duration

- [ioBufferDuration](avaudiosession/iobufferduration.md): The current I/O buffer duration, in seconds.
- [preferredIOBufferDuration](avaudiosession/preferrediobufferduration.md): The preferred I/O buffer duration, in seconds.
- [setPreferredIOBufferDuration(\_:)](avaudiosession/setpreferrediobufferduration%28__%29.md): Sets the preferred audio I/O buffer duration.

### Inspecting latency

- [inputLatency](avaudiosession/inputlatency.md): The latency for audio input, in seconds.
- [outputLatency](avaudiosession/outputlatency.md): The latency for audio output, in seconds.

### Inspecting output volume

- [outputVolume](avaudiosession/outputvolume.md): The systemwide output volume set by the user.

### Setting the number of input channels

- [preferredInputNumberOfChannels](avaudiosession/preferredinputnumberofchannels.md): The preferred number of input channels for the current route.
- [setPreferredInputNumberOfChannels(\_:)](avaudiosession/setpreferredinputnumberofchannels%28__%29.md): Sets the preferred number of input channels for the current route.
- [inputNumberOfChannels](avaudiosession/inputnumberofchannels.md): The number of audio input channels for the current route.
- [maximumInputNumberOfChannels](avaudiosession/maximuminputnumberofchannels.md): The maximum number of input channels available for the current audio route.

### Setting the number of output channels

- [preferredOutputNumberOfChannels](avaudiosession/preferredoutputnumberofchannels.md): The preferred number of output channels for the current route.
- [setPreferredOutputNumberOfChannels(\_:)](avaudiosession/setpreferredoutputnumberofchannels%28__%29.md): Sets the preferred number of output channels for the current route.
- [outputNumberOfChannels](avaudiosession/outputnumberofchannels.md): The number of audio output channels.
- [maximumOutputNumberOfChannels](avaudiosession/maximumoutputnumberofchannels.md): The maximum number of output channels available for the current audio route.

### Configuring multichannel support

- [supportsMultichannelContent](avaudiosession/supportsmultichannelcontent.md): A Boolean value that indicates whether your app supplies multichannel audio content.
- [setSupportsMultichannelContent(\_:)](avaudiosession/setsupportsmultichannelcontent%28__%29.md): Sets whether your app supplies multichannel audio content.

# Audio hardware (Objective-C)

**Framework:** AVFAudio  
**Kind:** API Collection

Inspect and configure audio device settings including input gain, sample rate, and channel counts.

## Topics

### Configuring sample rate

- [sampleRate](avaudiosession/samplerate.md): The current audio sample rate, in hertz.
- [preferredSampleRate](avaudiosession/preferredsamplerate.md): The preferred sample rate, in hertz.
- [setPreferredSampleRate:error:](avaudiosession/setpreferredsamplerate%28__%29.md): Sets the preferred sample rate for audio input and output.

### Setting input gain

- [inputGain](avaudiosession/inputgain.md): The gain applied to inputs associated with the session.
- [inputGainSettable](avaudiosession/isinputgainsettable.md): A Boolean value that indicates whether you can set the input gain.
- [setInputGain:error:](avaudiosession/setinputgain%28__%29.md): Changes the input gain to the specified value.

### Configuring I/O buffer duration

- [IOBufferDuration](avaudiosession/iobufferduration.md): The current I/O buffer duration, in seconds.
- [preferredIOBufferDuration](avaudiosession/preferrediobufferduration.md): The preferred I/O buffer duration, in seconds.
- [setPreferredIOBufferDuration:error:](avaudiosession/setpreferrediobufferduration%28__%29.md): Sets the preferred audio I/O buffer duration.

### Inspecting latency

- [inputLatency](avaudiosession/inputlatency.md): The latency for audio input, in seconds.
- [outputLatency](avaudiosession/outputlatency.md): The latency for audio output, in seconds.

### Inspecting output volume

- [outputVolume](avaudiosession/outputvolume.md): The systemwide output volume set by the user.

### Setting the number of input channels

- [preferredInputNumberOfChannels](avaudiosession/preferredinputnumberofchannels.md): The preferred number of input channels for the current route.
- [setPreferredInputNumberOfChannels:error:](avaudiosession/setpreferredinputnumberofchannels%28__%29.md): Sets the preferred number of input channels for the current route.
- [inputNumberOfChannels](avaudiosession/inputnumberofchannels.md): The number of audio input channels for the current route.
- [maximumInputNumberOfChannels](avaudiosession/maximuminputnumberofchannels.md): The maximum number of input channels available for the current audio route.

### Setting the number of output channels

- [preferredOutputNumberOfChannels](avaudiosession/preferredoutputnumberofchannels.md): The preferred number of output channels for the current route.
- [setPreferredOutputNumberOfChannels:error:](avaudiosession/setpreferredoutputnumberofchannels%28__%29.md): Sets the preferred number of output channels for the current route.
- [outputNumberOfChannels](avaudiosession/outputnumberofchannels.md): The number of audio output channels.
- [maximumOutputNumberOfChannels](avaudiosession/maximumoutputnumberofchannels.md): The maximum number of output channels available for the current audio route.

### Configuring multichannel support

- [supportsMultichannelContent](avaudiosession/supportsmultichannelcontent.md): A Boolean value that indicates whether your app supplies multichannel audio content.
- [setSupportsMultichannelContent:error:](avaudiosession/setsupportsmultichannelcontent%28__%29.md): Sets whether your app supplies multichannel audio content.
