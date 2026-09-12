> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1463688-usespeechdictionary](https://developer.apple.com/documentation/applicationservices/1463688-usespeechdictionary)

# UseSpeechDictionary(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 13.0)

Registers a speech dictionary with a speech channel.

## Declaration

```swift
func UseSpeechDictionary(_ chan: SpeechChannel, _ speechDictionary: CFDictionary) -> OSErr
```

## Parameters

- `chan`: The speech channel with which the specified speech dictionary is to be registered.
- `speechDictionary`: A speech dictionary to be registered with the specified speech channel, represented as a `CFDictionary` object. See [Speech Dictionary Keys](speech_synthesis_manager/speech_dictionary_keys.md) for the keys you can use in the dictionary.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The UseSpeechDictionary function is the Core Foundation-based equivalent of the [UseDictionary](1552255-usedictionary.md) function.

The `UseSpeechDictionary` function registers the `CFDictionary` object referenced by the `speechDictionary` parameter with the speech channel referenced by the `chan` parameter. Speech dictionaries allow your application to override a synthesizer's default pronunciations of individual words, such as names with unusual spellings. A synthesizer will use whatever elements of the dictionary it considers useful in the speech conversion process. Some speech synthesizers might ignore certain types of dictionary entries.

Multiple dictionaries can be registered with a synthesizer. If the same word appears in multiple dictionaries, the synthesizer will use the one from the dictionary with the most recent date.

Note that because a speech dictionary is a `CFDictionary` object, it can be loaded from an XML-based property list file. An example of such a file is shown below:

<a id="2557289"></a>

**Listing 1**

```occ
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>LocaleIdentifier</key>
    <string>en_US</string>
    <key>ModificationDate</key>
    <string>2006-12-21 11:59:25 -0800</string>
    <key>Pronunciations</key>
    <array>
        <dict>
            <key>Phonemes</key>
            <string>_hEY_yUW</string>
            <key>Spelling</key>
            <string>Hello</string>
        </dict>
    </array>
    <key>Abbreviations</key>
    <array>
        <dict>
            <key>Phonemes</key>
            <string>_OW_sAEkz</string>
            <key>Spelling</key>
            <string>OSAX</string>
        </dict>
    </array>
</dict>
</plist>
```

After the `UseSpeechDictionary` function returns, your application is free to release the `CFDictionary` object referenced by the `speechDictionary` parameter.

# UseSpeechDictionary (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 13.0)

Registers a speech dictionary with a speech channel.

## Declaration

```objectivec
OSErr UseSpeechDictionary(SpeechChannel chan, CFDictionaryRef speechDictionary);
```

## Parameters

- `chan`: The speech channel with which the specified speech dictionary is to be registered.
- `speechDictionary`: A speech dictionary to be registered with the specified speech channel, represented as a `CFDictionary` object. See [Speech Dictionary Keys](speech_synthesis_manager/speech_dictionary_keys.md) for the keys you can use in the dictionary.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The UseSpeechDictionary function is the Core Foundation-based equivalent of the [UseDictionary](1552255-usedictionary.md) function.

The `UseSpeechDictionary` function registers the `CFDictionary` object referenced by the `speechDictionary` parameter with the speech channel referenced by the `chan` parameter. Speech dictionaries allow your application to override a synthesizer's default pronunciations of individual words, such as names with unusual spellings. A synthesizer will use whatever elements of the dictionary it considers useful in the speech conversion process. Some speech synthesizers might ignore certain types of dictionary entries.

Multiple dictionaries can be registered with a synthesizer. If the same word appears in multiple dictionaries, the synthesizer will use the one from the dictionary with the most recent date.

Note that because a speech dictionary is a `CFDictionary` object, it can be loaded from an XML-based property list file. An example of such a file is shown below:

<a id="2557289"></a>

**Listing 1**

```occ
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>LocaleIdentifier</key>
    <string>en_US</string>
    <key>ModificationDate</key>
    <string>2006-12-21 11:59:25 -0800</string>
    <key>Pronunciations</key>
    <array>
        <dict>
            <key>Phonemes</key>
            <string>_hEY_yUW</string>
            <key>Spelling</key>
            <string>Hello</string>
        </dict>
    </array>
    <key>Abbreviations</key>
    <array>
        <dict>
            <key>Phonemes</key>
            <string>_OW_sAEkz</string>
            <key>Spelling</key>
            <string>OSAX</string>
        </dict>
    </array>
</dict>
</plist>
```

After the `UseSpeechDictionary` function returns, your application is free to release the `CFDictionary` object referenced by the `speechDictionary` parameter.

## See Also

### Installing a Pronunciation Dictionary

- [UseDictionary](1552255-usedictionary.md): Deprecated. Installs the designated dictionary into a speech channel.
