> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers](https://developer.apple.com/documentation/uniformtypeidentifiers)

# Uniform Type Identifiers (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Provide uniform type identifiers that describe file types for storage or transfer.

<a id="overview"></a>

## Overview

The [Uniform Type Identifiers](uniformtypeidentifiers.md) framework provides a collection of common types that map to MIME and file types. Use these types in your project to describe the file types in your app. These descriptions help the system properly handle file storage formats or in-memory data for transfer — for example, transferring data to or from the pasteboard. The identifier types can also identify other resources, such as directories, volumes, or packages.

Explicitly specify relationships between types by marking them as subtypes of other types. For example, the type [UTTypePNG](uniformtypeidentifiers/uttypepng.md) has the identifier `public.png` and is a subtype of [UTTypeImage](uniformtypeidentifiers/uttypeimage.md) (`public.image`). [UTTypeImage](uniformtypeidentifiers/uttypeimage.md) is in turn a subtype of both of the following:

- [UTTypeContent](uniformtypeidentifiers/uttypecontent.md) (`public.content`), which implies the type can be a document
- [UTTypeData](uniformtypeidentifiers/uttypedata.md) (`public.data`), which implies the type is representable as a byte stream

> **Note**

>  [UTTypeData](uniformtypeidentifiers/uttypedata.md) also conforms to [UTTypeItem](uniformtypeidentifiers/uttypeitem.md) (`public.item`), which is a generic base type for most items in a file system, such as files or directories.

## Topics

### Essentials

- [Defining file and data types for your app](uniformtypeidentifiers/defining-file-and-data-types-for-your-app.md): Declare uniform type identifiers to support your app’s proprietary data formats.
- [System-declared uniform type identifiers](uniformtypeidentifiers/system-declared-uniform-type-identifiers.md): Common types that the system declares.

### Uniform type identifiers

- [UTType](uniformtypeidentifiers/uttype-swift.struct.md): A structure that represents a type of data to load, send, or receive.
- [UTTagClass](uniformtypeidentifiers/uttagclass.md): A type that represents tag classes.
- [UTTypeReference](uniformtypeidentifiers/uttypereference.md): An object that represents a type of data to load, send, or receive.

### Reference

- [UniformTypeIdentifiers Constants](uniformtypeidentifiers/uniformtypeidentifiers-constants.md)

# Uniform Type Identifiers (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Provide uniform type identifiers that describe file types for storage or transfer.

<a id="overview"></a>

## Overview

The [Uniform Type Identifiers](uniformtypeidentifiers.md) framework provides a collection of common types that map to MIME and file types. Use these types in your project to describe the file types in your app. These descriptions help the system properly handle file storage formats or in-memory data for transfer — for example, transferring data to or from the pasteboard. The identifier types can also identify other resources, such as directories, volumes, or packages.

Explicitly specify relationships between types by marking them as subtypes of other types. For example, the type [UTTypePNG](uniformtypeidentifiers/uttypepng.md) has the identifier `public.png` and is a subtype of [UTTypeImage](uniformtypeidentifiers/uttypeimage.md) (`public.image`). [UTTypeImage](uniformtypeidentifiers/uttypeimage.md) is in turn a subtype of both of the following:

- [UTTypeContent](uniformtypeidentifiers/uttypecontent.md) (`public.content`), which implies the type can be a document
- [UTTypeData](uniformtypeidentifiers/uttypedata.md) (`public.data`), which implies the type is representable as a byte stream

> **Note**

>  [UTTypeData](uniformtypeidentifiers/uttypedata.md) also conforms to [UTTypeItem](uniformtypeidentifiers/uttypeitem.md) (`public.item`), which is a generic base type for most items in a file system, such as files or directories.

## Topics

### Essentials

- [Defining file and data types for your app](uniformtypeidentifiers/defining-file-and-data-types-for-your-app.md): Declare uniform type identifiers to support your app’s proprietary data formats.
- [System-declared uniform type identifiers](uniformtypeidentifiers/system-declared-uniform-type-identifiers.md): Common types that the system declares.

### Uniform type identifiers

- [UTType](uniformtypeidentifiers/uttypereference.md): An object that represents a type of data to load, send, or receive.

### Reference

- [UniformTypeIdentifiers Constants](uniformtypeidentifiers/uniformtypeidentifiers-constants.md)

### Variables

- [UTTypeCSS](uniformtypeidentifiers/uttypecss.md)
- [UTTypeDNG](uniformtypeidentifiers/uttypedng.md)
- [UTTypeEXR](uniformtypeidentifiers/uttypeexr.md)
- [UTTypeGeoJSON](uniformtypeidentifiers/uttypegeojson.md)
- [UTTypeHEICS](uniformtypeidentifiers/uttypeheics.md)
- [UTTypeJPEGXL](uniformtypeidentifiers/uttypejpegxl.md)
- [UTTypeLinkPresentationMetadata](uniformtypeidentifiers/uttypelinkpresentationmetadata.md)
- [UTTypeTarArchive](uniformtypeidentifiers/uttypetararchive.md)
