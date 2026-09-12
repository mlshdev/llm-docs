> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1463940-getvoicedescription](https://developer.apple.com/documentation/applicationservices/1463940-getvoicedescription)

# GetVoiceDescription(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Gets a description of a voice by using the `GetVoiceDescription` function.

## Declaration

```swift
func GetVoiceDescription(_ voice: UnsafePointer<VoiceSpec>?, _ info: UnsafeMutablePointer<VoiceDescription>?, _ infoLength: Int) -> OSErr
```

## Parameters

- `voice`: A pointer to the voice specification structure identifying the voice to be described, or `NULL` to obtain a description of the system default voice.
- `info`: A pointer to a voice description structure. If this parameter is `NULL`, the function does not fill in the fields of the voice description structure; instead, it simply determines whether the `voice` parameter specifies an available voice and, if not, returns a `voiceNotFound` error.
- `infoLength`: The length, in bytes, of the voice description structure. In the current version of the Speech Synthesis Manager, the voice description structure contains 362 bytes. However, you should always use the `SizeOf` function to determine the length of this structure.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `GetVoiceDescription` functionfills out the voice description structure pointed to by the `info` parameterwith the correct information for the voice specified by the `voice` parameter. Itfills in the `length` fieldof the voice description structure with the number of bytes actuallycopied. This value will always be less than or equal to the valuethat your application passes in `infoLength` beforecalling `GetVoiceDescription`.This scheme allows applications targeted for the current versionof the Speech Synthesis Manager to work on future versions thatmight have longer voice description structures; it also allows youto write code for future versions of the Speech Synthesis Managerthat will also run on computers that support only the current version.

If the voice specification structure does not identify anavailable voice, `GetVoiceDescription` returnsa `voiceNotFound` error.

## See Also

### Getting Information About Voices

- [CountVoices(\_:)](1459947-countvoices.md): Deprecated. Determines how many voices are available.
- [GetIndVoice(\_:\_:)](1464595-getindvoice.md): Deprecated. Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.
- [GetVoiceInfo(\_:\_:\_:)](1461410-getvoiceinfo.md): Deprecated. Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.
- [MakeVoiceSpec(\_:\_:\_:)](1461446-makevoicespec.md): Deprecated. Sets the fields of a voice specification structure.

# GetVoiceDescription (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Gets a description of a voice by using the `GetVoiceDescription` function.

## Declaration

```objectivec
OSErr GetVoiceDescription(const VoiceSpec *voice, VoiceDescription *info, long infoLength);
```

## Parameters

- `voice`: A pointer to the voice specification structure identifying the voice to be described, or `NULL` to obtain a description of the system default voice.
- `info`: A pointer to a voice description structure. If this parameter is `NULL`, the function does not fill in the fields of the voice description structure; instead, it simply determines whether the `voice` parameter specifies an available voice and, if not, returns a `voiceNotFound` error.
- `infoLength`: The length, in bytes, of the voice description structure. In the current version of the Speech Synthesis Manager, the voice description structure contains 362 bytes. However, you should always use the `SizeOf` function to determine the length of this structure.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `GetVoiceDescription` functionfills out the voice description structure pointed to by the `info` parameterwith the correct information for the voice specified by the `voice` parameter. Itfills in the `length` fieldof the voice description structure with the number of bytes actuallycopied. This value will always be less than or equal to the valuethat your application passes in `infoLength` beforecalling `GetVoiceDescription`.This scheme allows applications targeted for the current versionof the Speech Synthesis Manager to work on future versions thatmight have longer voice description structures; it also allows youto write code for future versions of the Speech Synthesis Managerthat will also run on computers that support only the current version.

If the voice specification structure does not identify anavailable voice, `GetVoiceDescription` returnsa `voiceNotFound` error.

## See Also

### Getting Information About Voices

- [CountVoices](1459947-countvoices.md): Deprecated. Determines how many voices are available.
- [GetIndVoice](1464595-getindvoice.md): Deprecated. Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.
- [GetVoiceInfo](1461410-getvoiceinfo.md): Deprecated. Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.
- [MakeVoiceSpec](1461446-makevoicespec.md): Deprecated. Sets the fields of a voice specification structure.
