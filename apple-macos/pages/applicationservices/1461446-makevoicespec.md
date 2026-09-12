> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461446-makevoicespec](https://developer.apple.com/documentation/applicationservices/1461446-makevoicespec)

# MakeVoiceSpec(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Sets the fields of a voice specification structure.

## Declaration

```swift
func MakeVoiceSpec(_ creator: OSType, _ id: OSType, _ voice: UnsafeMutablePointer<VoiceSpec>) -> OSErr
```

## Parameters

- `creator`: The ID of the synthesizer that your application requires.
- `id`: The ID of the voice on the synthesizer specified by the `creator` parameter.
- `voice`: A pointer to the voice specification structure whose fields are to be filled in.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

A voice specification structure is a unique voice ID usedby the Speech Synthesis Manager. Most voice management functionsexpect to be passed a pointer to a voice specification structure.When you already know the creator and ID for a voice, you shoulduse the `MakeVoiceSpec` functionto create such a structure rather than filling in the fields ofone directly. On exit, the voice specification structure pointedto by the `voice` parameter containsthe appropriate values. You should never set the fields of sucha structure directly.

## See Also

### Getting Information About Voices

- [CountVoices(\_:)](1459947-countvoices.md): Deprecated. Determines how many voices are available.
- [GetIndVoice(\_:\_:)](1464595-getindvoice.md): Deprecated. Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.
- [GetVoiceDescription(\_:\_:\_:)](1463940-getvoicedescription.md): Deprecated. Gets a description of a voice by using the `GetVoiceDescription` function.
- [GetVoiceInfo(\_:\_:\_:)](1461410-getvoiceinfo.md): Deprecated. Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.

# MakeVoiceSpec (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Sets the fields of a voice specification structure.

## Declaration

```objectivec
OSErr MakeVoiceSpec(OSType creator, OSType id, VoiceSpec *voice);
```

## Parameters

- `creator`: The ID of the synthesizer that your application requires.
- `id`: The ID of the voice on the synthesizer specified by the `creator` parameter.
- `voice`: A pointer to the voice specification structure whose fields are to be filled in.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

A voice specification structure is a unique voice ID usedby the Speech Synthesis Manager. Most voice management functionsexpect to be passed a pointer to a voice specification structure.When you already know the creator and ID for a voice, you shoulduse the `MakeVoiceSpec` functionto create such a structure rather than filling in the fields ofone directly. On exit, the voice specification structure pointedto by the `voice` parameter containsthe appropriate values. You should never set the fields of sucha structure directly.

## See Also

### Getting Information About Voices

- [CountVoices](1459947-countvoices.md): Deprecated. Determines how many voices are available.
- [GetIndVoice](1464595-getindvoice.md): Deprecated. Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.
- [GetVoiceDescription](1463940-getvoicedescription.md): Deprecated. Gets a description of a voice by using the `GetVoiceDescription` function.
- [GetVoiceInfo](1461410-getvoiceinfo.md): Deprecated. Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.
