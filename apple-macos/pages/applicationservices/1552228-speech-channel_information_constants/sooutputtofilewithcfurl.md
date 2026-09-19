> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sooutputtofilewithcfurl

# soOutputToFileWithCFURL

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+

Pass a `CFURLRef` in the `speechInfo` parameter to write to this file, or `NULL` to generate sound.

## Declaration

```objectivec
soOutputToFileWithCFURL = 'opaf'
```

<a id="discussion"></a>

## Discussion

This selector works with the `SetSpeechInfo` function.
