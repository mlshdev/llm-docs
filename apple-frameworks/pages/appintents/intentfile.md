> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentfile](https://developer.apple.com/documentation/appintents/intentfile)

# IntentFile

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface for providing an app entity that represents an on-disk file or file-based resource.

## Declaration

```swift
struct IntentFile
```

## Mentioned In

- [Adding parameters to an app intent](adding-parameters-to-an-app-intent.md)
- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

<a id="overview"></a>

## Overview

Provide an intent file entity implementation to describe data you store in a file on disk or in memory by providing its associated name and uniform type identifier.

## Topics

### Creating a file

- [init(data:filename:type:)](intentfile/init%28data_filename_type_%29.md)
- [init(fileURL:filename:type:)](intentfile/init%28fileurl_filename_type_%29.md)

### Getting the file information

- [filename](intentfile/filename.md): The human-readable name of the file, which will be displayed to the user.
- [fileURL](intentfile/fileurl.md): URL to the file on disk, if any. If the file isn’t stored on disk, access the contents using the `data` property.
- [type](intentfile/type.md): The uniform type identifier of the file. (i.e. “public.json”, “public.png”, or any custom type) More information about uniform type identifiers can be found in \<CoreServices/UTCoreTypes.h\>
- [data](intentfile/data.md): The contents of the file. If the file was created with a URL, accessing this property will memory map the file contents.
- [removedOnCompletion](intentfile/removedoncompletion.md): Indicates whether the file should be automatically deleted from disk when the Shortcut is done running. `false` by default.

### Instance Properties

- [availableContentTypes](intentfile/availablecontenttypes.md): Valid content types the `IntentFile` can possibly be converted to.

### Instance Methods

- [data(contentType:)](intentfile/data%28contenttype_%29.md): Requests an `IntentFile` representation as binary data of the requested content type if possible.
- [file(contentType:destinationDirectory:)](intentfile/file%28contenttype_destinationdirectory_%29.md): Requests an `IntentFile` representation as a file url.
- [withFile(contentType:allowOpenInPlace:fileHandler:)](intentfile/withfile%28contenttype_allowopeninplace_filehandler_%29.md): Requests an `IntentFile` representation as a file url.

### Type Aliases

- [IntentFile.Specification](intentfile/specification.md)
- [IntentFile.UnwrappedType](intentfile/unwrappedtype.md)
- [IntentFile.ValueType](intentfile/valuetype.md)

### Type Properties

- [defaultResolverSpecification](intentfile/defaultresolverspecification.md)

### Enumerations

- [IntentFile.IntentFileError](intentfile/intentfileerror.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DisplayRepresentable](displayrepresentable.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md)
- [IntentValueConvertible](intentvalueconvertible.md)
- [IntentValueExpressing](intentvalueexpressing.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)
