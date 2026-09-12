> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/sophonemeoptions](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sophonemeoptions)

# soPhonemeOptions

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

Get or set options for the generation of phonetic output. See [Phoneme Generation Options](../1552233-phoneme_generation_options.md) for a complete list of options.

## Declaration

```objectivec
soPhonemeOptions = 'popt'
```

<a id="discussion"></a>

## Discussion

The `speechInfo` parameter is a pointer to a long value that represents the phoneme generation value.

This selector works with both the `GetSpeechInfo` and `SetSpeechInfo` functions.
