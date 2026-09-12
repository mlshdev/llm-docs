> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/sooutputtoaudiodevice](https://developer.apple.com/documentation/applicationservices/sooutputtoaudiodevice)

# soOutputToAudioDevice

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

## Declaration

```swift
var soOutputToAudioDevice: OSType { get }
```

<a id="discussion"></a>

## Discussion

Pass a pointer to an [AudioDeviceID](https://developer.apple.com/documentation/coreaudio/audiodeviceid) in the `speechInfo` parameter to play to this file, or `0` to play through the default audio output device.

This selector works with the `SetSpeechInfo` function.
