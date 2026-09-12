> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/sophonemeoptions](https://developer.apple.com/documentation/applicationservices/sophonemeoptions)

# soPhonemeOptions

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Get or set options for the generation of phonetic output. See [Phoneme Generation Options](speech_synthesis_manager/1552233-phoneme_generation_options.md) for a complete list of options.

## Declaration

```swift
var soPhonemeOptions: OSType { get }
```

<a id="discussion"></a>

## Discussion

The `speechInfo` parameter is a pointer to a long value that represents the phoneme generation value.

This selector works with both the `GetSpeechInfo` and `SetSpeechInfo` functions.
