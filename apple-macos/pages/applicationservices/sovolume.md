> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/sovolume](https://developer.apple.com/documentation/applicationservices/sovolume)

# soVolume

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soVolume: OSType { get }
```

<a id="discussion"></a>

## Discussion

Get or set the speech volume for a speech channel.The `speechInfo` parameteris a pointer to a variable of type `Fixed`.Volumes are expressed in fixed-point units ranging from 0.0 through1.0. A value of 0.0 corresponds to silence, and a value of 1.0 correspondsto the maximum possible volume. Volume units lie on a scale thatis linear with amplitude or voltage. A doubling of perceived loudnesscorresponds to a doubling of the volume.

This selector works with both the `GetSpeechInfo` and `SetSpeechInfo` functions.
