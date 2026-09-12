> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464595-getindvoice](https://developer.apple.com/documentation/applicationservices/1464595-getindvoice)

# GetIndVoice(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.

## Declaration

```swift
func GetIndVoice(_ index: Int16, _ voice: UnsafeMutablePointer<VoiceSpec>) -> OSErr
```

## Parameters

- `index`: The index of the voice for which to obtain a voice specification structure. This number must range from `1` to the total number of voices, as returned by the `CountVoices` function.
- `voice`: A pointer to the voice specification structure whose fields are to be filled in.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `GetIndVoice` functionreturns, in the voice specification structure pointed to by the `voice` parameter,a specification of the voice whose index is provided in the `index` parameter.Your application should make no assumptions about the order in whichvoices are indexed.

Your application should not add, remove, or modify a voiceand then call the `GetIndVoice` functionwith an index value other than `1`. To allow the Speech SynthesisManager to update its information about voices, your applicationshould always either call the `CountVoices` functionor call the `GetIndVoice` functionwith an index value of `1` after adding, removing, or modifying avoice or after a time at which the user might have done so.

If you specify an index value beyond the number of availablevoices, the `GetIndVoice` functionreturns a `voiceNotFound` error.

## See Also

### Getting Information About Voices

- [CountVoices(\_:)](1459947-countvoices.md): Deprecated. Determines how many voices are available.
- [GetVoiceDescription(\_:\_:\_:)](1463940-getvoicedescription.md): Deprecated. Gets a description of a voice by using the `GetVoiceDescription` function.
- [GetVoiceInfo(\_:\_:\_:)](1461410-getvoiceinfo.md): Deprecated. Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.
- [MakeVoiceSpec(\_:\_:\_:)](1461446-makevoicespec.md): Deprecated. Sets the fields of a voice specification structure.

# GetIndVoice (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.

## Declaration

```objectivec
OSErr GetIndVoice(SInt16 index, VoiceSpec *voice);
```

## Parameters

- `index`: The index of the voice for which to obtain a voice specification structure. This number must range from `1` to the total number of voices, as returned by the `CountVoices` function.
- `voice`: A pointer to the voice specification structure whose fields are to be filled in.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `GetIndVoice` functionreturns, in the voice specification structure pointed to by the `voice` parameter,a specification of the voice whose index is provided in the `index` parameter.Your application should make no assumptions about the order in whichvoices are indexed.

Your application should not add, remove, or modify a voiceand then call the `GetIndVoice` functionwith an index value other than `1`. To allow the Speech SynthesisManager to update its information about voices, your applicationshould always either call the `CountVoices` functionor call the `GetIndVoice` functionwith an index value of `1` after adding, removing, or modifying avoice or after a time at which the user might have done so.

If you specify an index value beyond the number of availablevoices, the `GetIndVoice` functionreturns a `voiceNotFound` error.

## See Also

### Getting Information About Voices

- [CountVoices](1459947-countvoices.md): Deprecated. Determines how many voices are available.
- [GetVoiceDescription](1463940-getvoicedescription.md): Deprecated. Gets a description of a voice by using the `GetVoiceDescription` function.
- [GetVoiceInfo](1461410-getvoiceinfo.md): Deprecated. Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.
- [MakeVoiceSpec](1461446-makevoicespec.md): Deprecated. Sets the fields of a voice specification structure.
