> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/tecinfo](https://developer.apple.com/documentation/coreservices/tecinfo)

# TECInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Contains information about the Unicode Converter, the Text Encoding Converter, and Basic Text Types.

## Declaration

```objectivec
typedef struct TECInfo {
    ...
} TECInfo;
```

<a id="overview"></a>

## Overview

The converter information structure is used by the function [TECGetInfo](1400430-tecgetinfo.md) to hold returned information about the Unicode Converter, the Text Encoding Converter, and Basic Text Types.

## Topics

### Instance Properties

- [format](tecinfo/1399752-format.md): The current format of the returned structure. The format of the structure is indicated by the `kTECInfoCurrentFormat` constant. Any future changes to the format will always be backwardly compatible; any new fields will be added to the end of the structure.
- [tecExtensionFileName](tecinfo/1400210-tecextensionfilename.md): A Pascal string with the (possibly localized) name of the Text Encoding Conversion Manager extension file.
- [tecHighestTEFileVersion](tecinfo/1399847-techighesttefileversion.md)
- [tecLowestTEFileVersion](tecinfo/1399715-teclowesttefileversion.md)
- [tecTextCommonFeatures](tecinfo/1400184-tectextcommonfeatures.md): Bit flags indicating new features or bug fixes in Basic Text Types (the Text Common static library). No bits are currently defined.
- [tecTextConverterFeatures](tecinfo/1400170-tectextconverterfeatures.md): New features or bug fixes in the Text Encoding Converter. No bits are currently defined.
- [tecTextEncodingsFolderName](tecinfo/1399788-tectextencodingsfoldername.md): A Pascal string with the (possibly localized) name of the Text Encodings folder.
- [tecUnicodeConverterFeatures](tecinfo/1399691-tecunicodeconverterfeatures.md): Bit flags indicating new features or bug fixes in the Unicode Converter. See [Unicode Converter Flags](1400304-unicode_converter_flags.md) for the currently defined bit flags.
- [tecVersion](tecinfo/1400200-tecversion.md): The current version of the Text Encoding Conversion Manager extension in BCD (binary coded decimal), with the first byte indicating the major version; for example, 0x0121 for 1.2.1.
