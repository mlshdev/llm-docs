> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552223-setspeechinfo](https://developer.apple.com/documentation/applicationservices/1552223-setspeechinfo)

# SetSpeechInfo

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Changes a setting of a particular speech channel.

## Declaration

```objectivec
OSErr SetSpeechInfo(SpeechChannel chan, OSType selector, const void *speechInfo);
```

## Parameters

- `chan`: The speech channel for which your application wishes to change a setting.
- `selector`: A speech information selector that indicates the type of information being changed.

  For a complete list of speech information selectors, see [Speech-Channel Information Constants](1552228-speech-channel_information_constants.md). This list indicates how your application should set the `speechInfo` parameter for each selector.
- `speechInfo`: A pointer whose meaning depends on the speech information selector specified in the `selector` parameter.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SetSpeechInfo` functionchanges the type of setting indicated by the `selector` parameterin the speech channel specified by the `chan` parameter,based on the data your application provides via the `speechInfo` parameter.

The format of the data structure specified by the `speechInfo` parameterdepends on the selector you choose. Ordinarily, a selector requiresthat `speechInfo` be apointer to a data structure that specifies a new setting for thespeech channel.

## See Also

### Changing Speech Attributes

- [SetSpeechProperty](1459256-setspeechproperty.md): Deprecated. Sets the value of the specified speech-channel property.
- [SetSpeechPitch](1462674-setspeechpitch.md): Deprecated. Sets the speech pitch on a designated speech channel.
- [SetSpeechRate](1459896-setspeechrate.md): Deprecated. Sets the speech rate of a designated speech channel.
