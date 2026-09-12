> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/sorate](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sorate)

# soRate

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soRate = 'rate'
```

<a id="discussion"></a>

## Discussion

Get or set a speech channel’s speech rate.The `speechInfo` parameteris a pointer to a variable of type `Fixed`.The possible range of speech rates is from 0.000 to 65535.65535.The range of supported rates is not predefined by the Speech SynthesisManager; each speech synthesizer provides its own range of speechrates. Average human speech occurs at a rate of 180 to 220 words perminute. 

This selector works with both the `GetSpeechInfo` and `SetSpeechInfo` functions.
