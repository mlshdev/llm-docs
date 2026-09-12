> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/instrumentactivityresult/instrument](https://developer.apple.com/documentation/musicunderstanding/instrumentactivityresult/instrument)

# InstrumentActivityResult.Instrument

**Framework:** Music Understanding  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that identifies a specific instrument category.

## Declaration

```swift
struct Instrument
```

<a id="overview"></a>

## Overview

The framework defines four built-in categories: [vocal](instrument/vocal.md), [drum](instrument/drum.md), [bass](instrument/bass.md), and [other](instrument/other.md). The [other](instrument/other.md) category groups any instruments that don’t fall into the other three categories.

## Topics

### Instance Properties

- [rawValue](instrument/rawvalue.md): The raw value string.

### Type Properties

- [bass](instrument/bass.md): The key to use to obtain bass activity from an instrument activity result.
- [drum](instrument/drum.md): The key to use to obtain drum activity from an instrument activity result.
- [other](instrument/other.md): The key to use to obtain other instrument activity from an instrument activity result.
- [vocal](instrument/vocal.md): The key to use to obtain vocal activity from an instrument activity result.

## Relationships

### Conforms To

- [CodingKeyRepresentable](https://developer.apple.com/documentation/swift/codingkeyrepresentable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
