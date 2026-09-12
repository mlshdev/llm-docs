> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/keyresult/keysignature](https://developer.apple.com/documentation/musicunderstanding/keyresult/keysignature)

# KeyResult.KeySignature

**Framework:** Music Understanding  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The set of sharp and flat symbols for the notes.

## Declaration

```swift
struct KeySignature
```

<a id="overview"></a>

## Overview

A key signature pairs a root note, [tonic](keysignature/tonic.md) with a [mode](keysignature/mode.md), major or minor, to describe the harmonic center of a section of audio.

## Topics

### Tonic and mode

- [tonic](keysignature/tonic.md): The root note of the musical key.
- [mode](keysignature/mode.md): The mode of the musical key.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the notes of a key

- [tonic](keysignature/tonic.md): The root note of the musical key.
