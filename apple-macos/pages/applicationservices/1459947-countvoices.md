> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459947-countvoices](https://developer.apple.com/documentation/applicationservices/1459947-countvoices)

# CountVoices(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Determines how many voices are available.

## Declaration

```swift
func CountVoices(_ numVoices: UnsafeMutablePointer<Int16>) -> OSErr
```

## Parameters

- `numVoices`: On exit, a pointer to the number of voices that the application can use.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `CountVoices` functionreturns, in the `numVoices` parameter,the number of voices available. The application can then use thisinformation to call the `GetIndVoice` functionto obtain voice specification structures for one or more of thevoices.

Each time `CountVoices` iscalled, the Speech Synthesis Manager searches for new voices.

## See Also

### Getting Information About Voices

- [GetIndVoice(\_:\_:)](1464595-getindvoice.md): Deprecated. Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.
- [GetVoiceDescription(\_:\_:\_:)](1463940-getvoicedescription.md): Deprecated. Gets a description of a voice by using the `GetVoiceDescription` function.
- [GetVoiceInfo(\_:\_:\_:)](1461410-getvoiceinfo.md): Deprecated. Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.
- [MakeVoiceSpec(\_:\_:\_:)](1461446-makevoicespec.md): Deprecated. Sets the fields of a voice specification structure.

# CountVoices (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Determines how many voices are available.

## Declaration

```objectivec
OSErr CountVoices(SInt16 *numVoices);
```

## Parameters

- `numVoices`: On exit, a pointer to the number of voices that the application can use.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `CountVoices` functionreturns, in the `numVoices` parameter,the number of voices available. The application can then use thisinformation to call the `GetIndVoice` functionto obtain voice specification structures for one or more of thevoices.

Each time `CountVoices` iscalled, the Speech Synthesis Manager searches for new voices.

## See Also

### Getting Information About Voices

- [GetIndVoice](1464595-getindvoice.md): Deprecated. Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.
- [GetVoiceDescription](1463940-getvoicedescription.md): Deprecated. Gets a description of a voice by using the `GetVoiceDescription` function.
- [GetVoiceInfo](1461410-getvoiceinfo.md): Deprecated. Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.
- [MakeVoiceSpec](1461446-makevoicespec.md): Deprecated. Sets the fields of a voice specification structure.
