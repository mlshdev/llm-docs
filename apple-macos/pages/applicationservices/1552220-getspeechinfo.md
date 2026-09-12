> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552220-getspeechinfo](https://developer.apple.com/documentation/applicationservices/1552220-getspeechinfo)

# GetSpeechInfo

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Gets information about a designated speech channel.

## Declaration

```objectivec
OSErr GetSpeechInfo(SpeechChannel chan, OSType selector, void *speechInfo);
```

## Parameters

- `chan`: The speech channel about which information is being requested.
- `selector`: A speech information selector that indicates the type of information being requested.

  For a complete list of speech information selectors, see [Speech-Channel Information Constants](1552228-speech-channel_information_constants.md). This list indicates how your application should set the `speechInfo` parameter for each selector.
- `speechInfo`: A pointer whose meaning depends on the speech information selector specified in the `selector` parameter.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `GetSpeechInfo` functionreturns, in the data structure pointed to by the `speechInfo` parameter,the type of information requested by the `selector` parameteras it applies to the speech channel specified in the `chan` parameter.

The format of the data structure specified by the `speechInfo` parameterdepends on the selector you choose. For example, a selector mightrequire that your application allocate a block of memory of a certainsize and pass a pointer to that block. Another selector might requirethat `speechInfo` be setto the address of a handle variable. In this case, the `GetSpeechInfo` functionwould allocate a relocatable block of memory and change the handlevariable specified to reference the block.

## See Also

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechPitch](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [GetSpeechRate](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusy](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechBusySystemWide](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
- [SpeechManagerVersion](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.
