> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/soreset](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/soreset)

# soReset

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soReset = 'rset'
```

<a id="discussion"></a>

## Discussion

Set a speech channel back to its default state.For example, speech pitch and speech rate are set to default values.The `speechInfo` parametershould be set to `NULL`.

This selector works with the `SetSpeechInfo` function.
