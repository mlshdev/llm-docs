> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/systemrandomnumbergenerator](https://developer.apple.com/documentation/swift/systemrandomnumbergenerator)

# SystemRandomNumberGenerator

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The system’s default source of random data.

## Declaration

```swift
@frozen struct SystemRandomNumberGenerator
```

<a id="overview"></a>

## Overview

When you generate random values, shuffle a collection, or perform another operation that depends on random data, this type is the generator used by default. For example, the two method calls in this example are equivalent:

```swift
let x = Int.random(in: 1...100)
var g = SystemRandomNumberGenerator()
let y = Int.random(in: 1...100, using: &g)
```

`SystemRandomNumberGenerator` is automatically seeded, is safe to use in multiple threads, and uses a cryptographically secure algorithm whenever possible.

<a id="Platform-Implementation-of-SystemRandomNumberGenerator"></a>

## Platform Implementation of \`SystemRandomNumberGenerator\`

While the system generator is automatically seeded and thread-safe on every platform, the cryptographic quality of the stream of random data produced by the generator may vary. For more detail, see the documentation for the APIs used by each platform.

- Apple platforms use `arc4random_buf(3)`.
- Linux platforms use `getrandom(2)` when available; otherwise, they read from `/dev/urandom`.
- Windows uses `BCryptGenRandom`.

## Topics

### Creating a Generator

- [init()](systemrandomnumbergenerator/init%28%29.md): Creates a new instance of the system’s default random number generator.

### Generating Random Binary Data

- [next()](systemrandomnumbergenerator/next%28%29.md): Returns a value from a uniform, independent distribution of binary data.
- [next()](systemrandomnumbergenerator/next%28%29-2x0ly.md): Returns a value from a uniform, independent distribution of binary data.
- [next(upperBound:)](systemrandomnumbergenerator/next%28upperbound_%29.md): Returns a random value that is less than the given upper bound.

### Default Implementations

- [RandomNumberGenerator Implementations](systemrandomnumbergenerator/randomnumbergenerator-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [RandomNumberGenerator](randomnumbergenerator.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Random Number Generators

- [RandomNumberGenerator](randomnumbergenerator.md): A type that provides uniformly distributed random data.
