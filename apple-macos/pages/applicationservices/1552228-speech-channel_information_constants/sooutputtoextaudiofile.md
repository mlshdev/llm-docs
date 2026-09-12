> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/sooutputtoextaudiofile](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sooutputtoextaudiofile)

# soOutputToExtAudioFile

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

Pass an [ExtAudioFileRef](https://developer.apple.com/documentation/audiotoolbox/extaudiofileref) in the `speechInfo` parameter to write to this file, or `NULL` to generate sound.

## Declaration

```objectivec
soOutputToExtAudioFile = 'opax'
```

<a id="discussion"></a>

## Discussion

Note that the Speech Synthesis Manager may alter the [kExtAudioFileProperty_ClientDataFormat](https://developer.apple.com/documentation/audiotoolbox/kextaudiofileproperty_clientdataformat) and [kExtAudioFileProperty_ClientChannelLayout](https://developer.apple.com/documentation/audiotoolbox/kextaudiofileproperty_clientchannellayout) properties of the extended audio file object. The caller is responsible for closing the extended audio file object after the Speech Synthesis Manager is finished with it.

This selector works with the `SetSpeechInfo` function.
