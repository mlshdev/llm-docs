> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsignature](https://developer.apple.com/documentation/shazamkit/shsignature)

# SHSignature (Swift)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains the opaque data and other information for a signature.

## Declaration

```swift
class SHSignature
```

<a id="overview"></a>

## Overview

You can save signatures to files and share them with others. Use saved signatures to populate a custom catalog.

Check whether your captured query signature is long enough to search for a match by comparing [duration](shsignature/duration.md) to the [minimumQuerySignatureDuration](shcatalog/minimumquerysignatureduration.md) and [maximumQuerySignatureDuration](shcatalog/maximumquerysignatureduration.md) of a catalog.

For signatures longer than [maximumQuerySignatureDuration](shcatalog/maximumquerysignatureduration.md), use [slices(from:duration:stride:)](shsignature/slices%28from_duration_stride_%29.md) to create multiple segments that meet the duration requirement.

## Topics

### Creating a signature object

- [init(dataRepresentation:)](shsignature/init%28datarepresentation_%29.md): Creates a signature object from raw data.

### Reading signature information

- [dataRepresentation](shsignature/datarepresentation.md): The raw data for the signature.
- [duration](shsignature/duration.md): The duration of the audio you use to generate the signature.

### Slicing signature segments

- [slices(from:duration:stride:)](shsignature/slices%28from_duration_stride_%29.md): Returns a sequence of signatures of the specified duration from a starting value, stepping by the stride.
- [SHSignature.Slices](shsignature/slices.md): A sequence of signature segments.

### Getting the content type

- [shazamSignature](../uniformtypeidentifiers/uttype-swift.struct/shazamsignature.md): A type that represents a signature.

### Initializers

- [init(coder:)](shsignature/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Create a signature from audio

- [SHSignatureGenerator](shsignaturegenerator.md): An object for converting audio data into a signature.

# SHSignature (Objective-C)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains the opaque data and other information for a signature.

## Declaration

```objectivec
@interface SHSignature : NSObject
```

<a id="overview"></a>

## Overview

You can save signatures to files and share them with others. Use saved signatures to populate a custom catalog.

Check whether your captured query signature is long enough to search for a match by comparing [duration](shsignature/duration.md) to the [minimumQuerySignatureDuration](shcatalog/minimumquerysignatureduration.md) and [maximumQuerySignatureDuration](shcatalog/maximumquerysignatureduration.md) of a catalog.

For signatures longer than [maximumQuerySignatureDuration](shcatalog/maximumquerysignatureduration.md), use [slices(from:duration:stride:)](shsignature/slices%28from_duration_stride_%29.md) to create multiple segments that meet the duration requirement.

## Topics

### Creating a signature object

- [signatureWithDataRepresentation:error:](shsignature/signaturewithdatarepresentation_error_.md): Creates a signature object from raw data.
- [initWithDataRepresentation:error:](shsignature/init%28datarepresentation_%29.md): Creates a signature object from raw data.

### Reading signature information

- [dataRepresentation](shsignature/datarepresentation.md): The raw data for the signature.
- [duration](shsignature/duration.md): The duration of the audio you use to generate the signature.

### Getting the content type

- [SHSignatureContentType](../uniformtypeidentifiers/uttype-c.class/shsignaturecontenttype.md): A type representing the @c SHSignature file format with the .shazamsignature extension

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Create a signature from audio

- [SHSignatureGenerator](shsignaturegenerator.md): An object for converting audio data into a signature.
