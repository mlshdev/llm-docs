> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sosoundoutput

# soSoundOutput

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

Get or set the speech channel’s current outputchannel.

> Use [soOutputToFileWithCFURL](sooutputtofilewithcfurl.md) instead.

## Declaration

```objectivec
soSoundOutput = 'sndo'
```

<a id="discussion"></a>

## Discussion

This selector works with both the `GetSpeechInfo` and `SetSpeechInfo` functions.
