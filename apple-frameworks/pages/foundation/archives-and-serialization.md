> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/archives-and-serialization](https://developer.apple.com/documentation/foundation/archives-and-serialization)

# Archives and Serialization (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Convert objects and values to and from property list, JSON, and other flat binary representations.

<a id="overview"></a>

## Overview

Use these APIs to convert your app’s in-memory types to representations suitable for serialization over I/O and network interfaces or to long-term storage.

In Swift, the standard library defines the [Encodable](https://developer.apple.com/documentation/swift/encodable), [Decodable](https://developer.apple.com/documentation/swift/decodable), and [Codable](https://developer.apple.com/documentation/swift/codable) types, along with [Encoder](https://developer.apple.com/documentation/swift/encoder) and [Decoder](https://developer.apple.com/documentation/swift/decoder) APIs to perform encoding and decoding, as described in [Encoding, Decoding, and Serialization](https://developer.apple.com/documentation/swift/encoding-decoding-and-serialization). Foundation extends this with the [EncodableWithConfiguration](encodablewithconfiguration.md) and [DecodableWithConfiguration](decodablewithconfiguration.md) protocols, used for types that require additional static information to encode and decode, such as [AttributedString](attributedstring.md).

In Objective-C, [NSCoding](nscoding.md) defines a protocol for encoding and decoding objects. When adding serialization to your own types, you should also adopt [NSSecureCoding](nssecurecoding.md). This protocol adds protection against security vulnerabilities introduced by instantiating arbitrary objects as part of the decoding process.

Many system frameworks use these types. When working with external systems, such as URL endpoints, use the JSON and XML APIs to serialize your app’s types to standard formats.

## Topics

### Adopting Codability

- [Encoding and Decoding Custom Types](encoding-and-decoding-custom-types.md): Make your data types encodable and decodable for compatibility with external representations such as JSON.
- [Codable](https://developer.apple.com/documentation/swift/codable): A type that can convert itself into and out of an external representation.
- [NSCoding](nscoding.md): A protocol that enables an object to be encoded and decoded for archiving and distribution.
- [NSSecureCoding](nssecurecoding.md): A protocol that enables encoding and decoding in a manner that is robust against object substitution attacks.

### Serializing Arbitrary Payloads

- [CodableWithConfiguration](codablewithconfiguration.md): A type that can convert itself into and out of an external representation with the help of a configuration that handles encoding contained types.
- [CodableConfiguration](codableconfiguration.md): A property wrapper that makes a type codable, by supplying a configuration that provides additional information for serialization.
- [DecodableWithConfiguration](decodablewithconfiguration.md): A protocol for types that support decoding when supplied with an additional configuration type.
- [DecodingConfigurationProviding](decodingconfigurationproviding.md): A protocol whose conformers provide a configuration instance to help decode types that don’t support encoding by themselves.
- [EncodableWithConfiguration](encodablewithconfiguration.md): A protocol for types that support encoding when supplied with an additional configuration type.
- [EncodingConfigurationProviding](encodingconfigurationproviding.md): A protocol whose conformers provide a configuration instance to help encode types that don’t support encoding by themselves.

### JSON

- [Using JSON with custom types](using-json-with-custom-types.md): Encode and decode JSON data, regardless of its structure, using Swift’s JSON support.
- [JSONEncoder](jsonencoder.md): An object that encodes instances of a data type as JSON objects.
- [JSONDecoder](jsondecoder.md): An object that decodes instances of a data type from JSON objects.
- [JSONSerialization](jsonserialization.md): An object that converts between JSON and the equivalent Foundation objects.

### Property Lists

- [PropertyListEncoder](propertylistencoder.md): An object that encodes instances of data types to a property list.
- [PropertyListDecoder](propertylistdecoder.md): An object that decodes instances of data types from a property list.
- [PropertyListSerialization](propertylistserialization.md): An object that converts between a property list and one of several serialized representations.

### XML

- [XML Processing and Modeling](xml-processing-and-modeling.md): Parse XML documents.

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.

### Deprecated

- [NSArchiver](nsarchiver.md): Deprecated. A coder that stores an object’s data to an archive.
- [NSUnarchiver](nsunarchiver.md): Deprecated. A decoder that restores data from an archive.

## See Also

### Files and Data Persistence

- [File System](file-system.md): Create, read, write, and examine files and folders in the file system.
- [Settings](settings.md): Configure your app using data you store persistently on the local disk or in iCloud.
- [Spotlight](spotlight.md): Search for files and other items on the local device, and index your app’s content for searching.
- [iCloud](icloud.md): Manage files and key-value data that automatically synchronize among a user’s iCloud devices.
- [Optimizing Your App’s Data for iCloud Backup](optimizing-your-app-s-data-for-icloud-backup.md): Minimize the space and time that backups take to create by excluding purgeable and nonpurgeable data from backups.

# Archives and Serialization (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Convert objects and values to and from property list, JSON, and other flat binary representations.

<a id="overview"></a>

## Overview

Use these APIs to convert your app’s in-memory types to representations suitable for serialization over I/O and network interfaces or to long-term storage.

In Swift, the standard library defines the [Encodable](https://developer.apple.com/documentation/swift/encodable), [Decodable](https://developer.apple.com/documentation/swift/decodable), and [Codable](https://developer.apple.com/documentation/swift/codable) types, along with [Encoder](https://developer.apple.com/documentation/swift/encoder) and [Decoder](https://developer.apple.com/documentation/swift/decoder) APIs to perform encoding and decoding, as described in [Encoding, Decoding, and Serialization](https://developer.apple.com/documentation/swift/encoding-decoding-and-serialization). Foundation extends this with the [EncodableWithConfiguration](encodablewithconfiguration.md) and [DecodableWithConfiguration](decodablewithconfiguration.md) protocols, used for types that require additional static information to encode and decode, such as [AttributedString](attributedstring.md).

In Objective-C, [NSCoding](nscoding.md) defines a protocol for encoding and decoding objects. When adding serialization to your own types, you should also adopt [NSSecureCoding](nssecurecoding.md). This protocol adds protection against security vulnerabilities introduced by instantiating arbitrary objects as part of the decoding process.

Many system frameworks use these types. When working with external systems, such as URL endpoints, use the JSON and XML APIs to serialize your app’s types to standard formats.

## Topics

### Adopting Codability

- [Encoding and Decoding Custom Types](encoding-and-decoding-custom-types.md): Make your data types encodable and decodable for compatibility with external representations such as JSON.
- [NSCoding](nscoding.md): A protocol that enables an object to be encoded and decoded for archiving and distribution.
- [NSSecureCoding](nssecurecoding.md): A protocol that enables encoding and decoding in a manner that is robust against object substitution attacks.

### JSON

- [NSJSONSerialization](jsonserialization.md): An object that converts between JSON and the equivalent Foundation objects.

### Property Lists

- [NSPropertyListSerialization](propertylistserialization.md): An object that converts between a property list and one of several serialized representations.

### XML

- [XML Processing and Modeling](xml-processing-and-modeling.md): Parse XML documents.

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.

### Deprecated

- [NSArchiver](nsarchiver.md): Deprecated. A coder that stores an object’s data to an archive.
- [NSUnarchiver](nsunarchiver.md): Deprecated. A decoder that restores data from an archive.
- [NXReadNSObjectFromCoder](nxreadnsobjectfromcoder.md): Deprecated. Returns the next object from the coder.

## See Also

### Files and Data Persistence

- [File System](file-system.md): Create, read, write, and examine files and folders in the file system.
- [Settings](settings.md): Configure your app using data you store persistently on the local disk or in iCloud.
- [Spotlight](spotlight.md): Search for files and other items on the local device, and index your app’s content for searching.
- [iCloud](icloud.md): Manage files and key-value data that automatically synchronize among a user’s iCloud devices.
- [Optimizing Your App’s Data for iCloud Backup](optimizing-your-app-s-data-for-icloud-backup.md): Minimize the space and time that backups take to create by excluding purgeable and nonpurgeable data from backups.
