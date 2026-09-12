> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/sovolume](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sovolume)

# soVolume

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soVolume = 'volm'
```

<a id="discussion"></a>

## Discussion

Get or set the speech volume for a speech channel.The `speechInfo` parameteris a pointer to a variable of type `Fixed`.Volumes are expressed in fixed-point units ranging from 0.0 through1.0. A value of 0.0 corresponds to silence, and a value of 1.0 correspondsto the maximum possible volume. Volume units lie on a scale thatis linear with amplitude or voltage. A doubling of perceived loudnesscorresponds to a doubling of the volume.

This selector works with both the `GetSpeechInfo` and `SetSpeechInfo` functions.
