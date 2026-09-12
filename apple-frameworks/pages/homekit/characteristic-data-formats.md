> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/characteristic-data-formats](https://developer.apple.com/documentation/homekit/characteristic-data-formats)

# Characteristic Data Formats

**Interface languages:** Swift, Objective-C

**Framework:** HomeKit  
**Kind:** API Collection

Constants for identifying the data format of characteristic values.

<a id="overview"></a>

## Overview

Expect to find one of these values in the [format](hmcharacteristicmetadata/format.md) property of a characteristic’s metadata.

## Topics

### Booleans

- [HMCharacteristicMetadataFormatBool](hmcharacteristicmetadataformatbool.md): Indicates that the characteristic has Boolean values.

### Strings

- [HMCharacteristicMetadataFormatString](hmcharacteristicmetadataformatstring.md): Indicates that the characteristic has string values.

### Signed Values

- [HMCharacteristicMetadataFormatInt](hmcharacteristicmetadataformatint.md): Indicates that the characteristic has `int` values.
- [HMCharacteristicMetadataFormatFloat](hmcharacteristicmetadataformatfloat.md): Indicates that the characteristic has `float` values.

### Unsigned Integers

- [HMCharacteristicMetadataFormatUInt8](hmcharacteristicmetadataformatuint8.md): Indicates that the characteristic has unsigned 8-bit integer values.
- [HMCharacteristicMetadataFormatUInt16](hmcharacteristicmetadataformatuint16.md): Indicates that the characteristic has unsigned 16-bit integer values.
- [HMCharacteristicMetadataFormatUInt32](hmcharacteristicmetadataformatuint32.md): Indicates that the characteristic has unsigned 32-bit integer values.
- [HMCharacteristicMetadataFormatUInt64](hmcharacteristicmetadataformatuint64.md): Indicates that the characteristic has unsigned 64-bit integer values.

### Data

- [HMCharacteristicMetadataFormatData](hmcharacteristicmetadataformatdata.md): Indicates that the characteristic has data blob values.
- [HMCharacteristicMetadataFormatTLV8](hmcharacteristicmetadataformattlv8.md): Indicates that the characteristic has TLV8 values.

### Collections

- [HMCharacteristicMetadataFormatArray](hmcharacteristicmetadataformatarray.md): Indicates that the characteristic has array values.
- [HMCharacteristicMetadataFormatDictionary](hmcharacteristicmetadataformatdictionary.md): Indicates that the characteristic has dictionary values.

## See Also

### Formatting the value

- [format](hmcharacteristicmetadata/format.md): The format of the values for the characteristic.
