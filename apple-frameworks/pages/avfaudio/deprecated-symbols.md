> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/deprecated-symbols](https://developer.apple.com/documentation/avfaudio/deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** AVFAudio  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Activating an audio session

- [setActive(\_:withFlags:)](avaudiosession/setactive%28__withflags_%29.md): Deprecated. Activates or deactivates your app’s audio session; provides flags for use by other audio sessions.

### Requesting permission to record

- [recordPermission](avaudiosession/recordpermission-swift.property.md): Deprecated. The current recording permission status.
- [requestRecordPermission(\_:)](avaudiosession/requestrecordpermission%28__%29.md): Deprecated. Requests the user’s permission to record audio.

### Inspecting audio hardware

- [currentHardwareInputNumberOfChannels](avaudiosession/currenthardwareinputnumberofchannels.md): Deprecated. The number of audio hardware input channels.
- [currentHardwareOutputNumberOfChannels](avaudiosession/currenthardwareoutputnumberofchannels.md): Deprecated. The number of audio hardware output channels.
- [currentHardwareSampleRate](avaudiosession/currenthardwaresamplerate.md): Deprecated. The audio hardware sample rate, in hertz.
- [inputIsAvailable](avaudiosession/inputisavailable.md): Deprecated. A Boolean value that indicates whether a hardware audio input path is available.
- [preferredHardwareSampleRate](avaudiosession/preferredhardwaresamplerate.md): Deprecated. The preferred hardware sample rate, in hertz.
- [setPreferredHardwareSampleRate(\_:)](avaudiosession/setpreferredhardwaresamplerate%28__%29.md): Deprecated. Sets the preferred hardware sample rate for input and output.

### Responding to audio session changes

- [delegate](avaudiosession/delegate.md): Deprecated. The delegate object for the audio session.
- [AVAudioSessionDelegate](avaudiosessiondelegate.md): Deprecated. A protocol that defines responses to changes in state for the audio session.

### Handling audio session interruptions

- [AVAudioSessionInterruptionFlags_ShouldResume](avaudiosessioninterruptionflags_shouldresume.md): Deprecated. Indicates that your audio session is active and ready for use.

# Deprecated Symbols (Objective-C)

**Framework:** AVFAudio  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Activating an audio session

- [setActive:withFlags:error:](avaudiosession/setactive%28__withflags_%29.md): Deprecated. Activates or deactivates your app’s audio session; provides flags for use by other audio sessions.

### Requesting permission to record

- [recordPermission](avaudiosession/recordpermission-swift.property.md): Deprecated. The current recording permission status.
- [requestRecordPermission:](avaudiosession/requestrecordpermission%28__%29.md): Deprecated. Requests the user’s permission to record audio.

### Inspecting audio hardware

- [currentHardwareInputNumberOfChannels](avaudiosession/currenthardwareinputnumberofchannels.md): Deprecated. The number of audio hardware input channels.
- [currentHardwareOutputNumberOfChannels](avaudiosession/currenthardwareoutputnumberofchannels.md): Deprecated. The number of audio hardware output channels.
- [currentHardwareSampleRate](avaudiosession/currenthardwaresamplerate.md): Deprecated. The audio hardware sample rate, in hertz.
- [inputIsAvailable](avaudiosession/inputisavailable.md): Deprecated. A Boolean value that indicates whether a hardware audio input path is available.
- [preferredHardwareSampleRate](avaudiosession/preferredhardwaresamplerate.md): Deprecated. The preferred hardware sample rate, in hertz.
- [setPreferredHardwareSampleRate:error:](avaudiosession/setpreferredhardwaresamplerate%28__%29.md): Deprecated. Sets the preferred hardware sample rate for input and output.

### Responding to audio session changes

- [delegate](avaudiosession/delegate.md): Deprecated. The delegate object for the audio session.
- [AVAudioSessionDelegate](avaudiosessiondelegate.md): Deprecated. A protocol that defines responses to changes in state for the audio session.

### Handling audio session interruptions

- [AVAudioSessionInterruptionFlags_ShouldResume](avaudiosessioninterruptionflags_shouldresume.md): Deprecated. Indicates that your audio session is active and ready for use.

### Initializers

- [init](avaudiosession/init.md): Deprecated. Gets a reference to the singleton audio session.
