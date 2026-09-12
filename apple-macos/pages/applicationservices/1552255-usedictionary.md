> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552255-usedictionary](https://developer.apple.com/documentation/applicationservices/1552255-usedictionary)

# UseDictionary

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Installs the designated dictionary into a speech channel.

## Declaration

```objectivec
OSErr UseDictionary(SpeechChannel chan, Handle dictionary);
```

## Parameters

- `chan`: The speech channel into which a dictionary is to be installed.
- `dictionary`: A handle to the dictionary data. This is often a handle to a resource of type `'dict'`.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `UseDictionary` functionattempts to install the dictionary data referenced by the `dictionary` parameterinto the speech channel referenced by the `chan` parameter.The synthesizer will use whatever elements of the dictionary resourceit considers useful to the speech conversion process. Some speechsynthesizers might ignore certain types of dictionary entries.

After the `UseDictionary` functionreturns, your application is free to release any storage allocatedfor the dictionary handle. The search order for application-provideddictionaries is last-in, first-searched.

All details of how an application-provided dictionary is representedwithin the speech synthesizer are dependent on the specific synthesizerimplementation and are private to the synthesizer.

Pronunciation dictionaries allow your application to overridethe default Speech Synthesis Manager pronunciations of individualwords, such as names with unusual spellings.

## See Also

### Installing a Pronunciation Dictionary

- [UseSpeechDictionary](1463688-usespeechdictionary.md): Deprecated. Registers a speech dictionary with a speech channel.
