> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsignaturegenerator](https://developer.apple.com/documentation/shazamkit/shsignaturegenerator)

# SHSignatureGenerator (Swift)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object for converting audio data into a signature.

## Declaration

```swift
class SHSignatureGenerator
```

## Mentioned In

- [Generating a signature from an audio buffer](generating-a-signature-from-an-audio-buffer.md)

<a id="overview"></a>

## Overview

Create both reference and query signatures using this class.

## Topics

### Generating a signature from audio

- [append(\_:at:)](shsignaturegenerator/append%28__at_%29.md): Adds audio to the generator.
- [signature()](shsignaturegenerator/signature%28%29.md): Converts the audio buffer into a signature.
- [Generating a signature from an audio buffer](generating-a-signature-from-an-audio-buffer.md): Create a signature from an audio file or the microphone for a reference track in a custom catalog, or for matching tracks in a catalog.

### Generate a signature from assets

- [generateSignature(from:completionHandler:)](shsignaturegenerator/generatesignature%28from_completionhandler_%29.md): Creates a signature with the asset you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Create a signature from audio

- [SHSignature](shsignature.md): An object that contains the opaque data and other information for a signature.

# SHSignatureGenerator (Objective-C)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object for converting audio data into a signature.

## Declaration

```objectivec
@interface SHSignatureGenerator : NSObject
```

## Mentioned In

- [Generating a signature from an audio buffer](generating-a-signature-from-an-audio-buffer.md)

<a id="overview"></a>

## Overview

Create both reference and query signatures using this class.

## Topics

### Generating a signature from audio

- [appendBuffer:atTime:error:](shsignaturegenerator/append%28__at_%29.md): Adds audio to the generator.
- [signature](shsignaturegenerator/signature%28%29.md): Converts the audio buffer into a signature.
- [Generating a signature from an audio buffer](generating-a-signature-from-an-audio-buffer.md): Create a signature from an audio file or the microphone for a reference track in a custom catalog, or for matching tracks in a catalog.

### Generate a signature from assets

- [generateSignatureFromAsset:completionHandler:](shsignaturegenerator/generatesignature%28from_completionhandler_%29.md): Creates a signature with the asset you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Create a signature from audio

- [SHSignature](shsignature.md): An object that contains the opaque data and other information for a signature.
