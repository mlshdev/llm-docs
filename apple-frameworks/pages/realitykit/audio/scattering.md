> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audio/scattering](https://developer.apple.com/documentation/realitykit/audio/scattering)

# Audio.Scattering

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that holds a set of scattering data.

## Declaration

```swift
struct Scattering
```

<a id="overview"></a>

## Overview

The scattering coefficient is a value between zero and one that describes the proportion of incident sound energy that is diffused or redirected by a surface, rather than absorbed.

Create scattering data from an array of ten octave-band coefficients, a dictionary of frequency–coefficient pairs, or a dictionary literal:

```swift
// From an array of ten octave-band coefficients:
let data = Audio.Scattering([0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10])

// From a dictionary of frequency–coefficient pairs:
let data = Audio.Scattering([500: 0.3, 1000: 0.4, 4000: 0.5])

// From a dictionary literal:
let data: Audio.Scattering = [500: 0.3, 1000: 0.4, 4000: 0.5]
```

## Topics

### Creating a scattering value

- [uniform(\_:)](scattering/uniform%28__%29.md): Creates a scattering data set with the coefficient applied uniformly for every frequency.

### Scaling scattering

- [scaled(by:)](scattering/scaled%28by_%29.md): Scale the scattering data by a frequency-dependent scalar value between -1 and 1.

### Initializers

- [init(\_:)](scattering/init%28__%29.md): Creates a scattering data set from a sequence of pairs of center frequency and scattering coefficient.

### Type Properties

- [default](scattering/default.md): The default set of scattering data.

### Default Implementations

- [ExpressibleByDictionaryLiteral Implementations](scattering/expressiblebydictionaryliteral-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByDictionaryLiteral](https://developer.apple.com/documentation/swift/expressiblebydictionaryliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining acoustic properties

- [Audio.Material](material.md): A type that describes the acoustic characteristics of a surface.
- [Audio.Absorption](absorption.md): An object that holds a set of absorption data.
