> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461410-getvoiceinfo](https://developer.apple.com/documentation/applicationservices/1461410-getvoiceinfo)

# GetVoiceInfo(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.

## Declaration

```swift
func GetVoiceInfo(_ voice: UnsafePointer<VoiceSpec>?, _ selector: OSType, _ voiceInfo: UnsafeMutableRawPointer) -> OSErr
```

## Parameters

- `voice`: A pointer to the voice specification structure identifying the voice about which your application requires information, or `NULL` to obtain information on the system default voice.
- `selector`: A specification of the type of data being requested. For current versions of the Speech Synthesis Manager, you should set this field either to `soVoiceDescription`, if you would like to use the `GetVoiceInfo` function to mimic the `GetVoiceDescription` function, or to `soVoiceFile`, if you would like to obtain information about the location of a voice on disk.
- `voiceInfo`: A pointer to the appropriate data structure. If the selector is `soVoiceDescription`, then `voiceInfo` should be a pointer to a voice description structure, and the `length` field of the structure should be set to the length of the voice description structure. If the selector is `soVoiceFile`, then `voiceInfo` should be a pointer to a voice file information structure.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

This function is intended primarily for use by synthesizers,but an application can call it too. 

The `GetVoiceInfo` functionaccepts a selector in the `selector` parameterthat determines the type of information you wish to obtain aboutthe voice specified in the `voice` parameter. Thefunction then fills the fields of the data structure appropriateto the selector you specify in the `voiceInfo` parameter.

If the voice specification is invalid, `GetVoiceInfo` returnsa `voiceNotFound` error.If there is not enough memory to load the voice into memory to obtaininformation about it, `GetVoiceInfo` returnsthe result code `memFullErr`.

## See Also

### Getting Information About Voices

- [CountVoices(\_:)](1459947-countvoices.md): Deprecated. Determines how many voices are available.
- [GetIndVoice(\_:\_:)](1464595-getindvoice.md): Deprecated. Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.
- [GetVoiceDescription(\_:\_:\_:)](1463940-getvoicedescription.md): Deprecated. Gets a description of a voice by using the `GetVoiceDescription` function.
- [MakeVoiceSpec(\_:\_:\_:)](1461446-makevoicespec.md): Deprecated. Sets the fields of a voice specification structure.

# GetVoiceInfo (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.

## Declaration

```objectivec
OSErr GetVoiceInfo(const VoiceSpec *voice, OSType selector, void *voiceInfo);
```

## Parameters

- `voice`: A pointer to the voice specification structure identifying the voice about which your application requires information, or `NULL` to obtain information on the system default voice.
- `selector`: A specification of the type of data being requested. For current versions of the Speech Synthesis Manager, you should set this field either to `soVoiceDescription`, if you would like to use the `GetVoiceInfo` function to mimic the `GetVoiceDescription` function, or to `soVoiceFile`, if you would like to obtain information about the location of a voice on disk.
- `voiceInfo`: A pointer to the appropriate data structure. If the selector is `soVoiceDescription`, then `voiceInfo` should be a pointer to a voice description structure, and the `length` field of the structure should be set to the length of the voice description structure. If the selector is `soVoiceFile`, then `voiceInfo` should be a pointer to a voice file information structure.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

This function is intended primarily for use by synthesizers,but an application can call it too. 

The `GetVoiceInfo` functionaccepts a selector in the `selector` parameterthat determines the type of information you wish to obtain aboutthe voice specified in the `voice` parameter. Thefunction then fills the fields of the data structure appropriateto the selector you specify in the `voiceInfo` parameter.

If the voice specification is invalid, `GetVoiceInfo` returnsa `voiceNotFound` error.If there is not enough memory to load the voice into memory to obtaininformation about it, `GetVoiceInfo` returnsthe result code `memFullErr`.

## See Also

### Getting Information About Voices

- [CountVoices](1459947-countvoices.md): Deprecated. Determines how many voices are available.
- [GetIndVoice](1464595-getindvoice.md): Deprecated. Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.
- [GetVoiceDescription](1463940-getvoicedescription.md): Deprecated. Gets a description of a voice by using the `GetVoiceDescription` function.
- [MakeVoiceSpec](1461446-makevoicespec.md): Deprecated. Sets the fields of a voice specification structure.
