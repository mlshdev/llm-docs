> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sooutputtoaudiodevice

# soOutputToAudioDevice

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

## Declaration

```objectivec
soOutputToAudioDevice = 'opad'
```

<a id="discussion"></a>

## Discussion

Pass a pointer to an [AudioDeviceID](https://developer.apple.com/documentation/coreaudio/audiodeviceid) in the `speechInfo` parameter to play to this file, or `0` to play through the default audio output device.

This selector works with the `SetSpeechInfo` function.
