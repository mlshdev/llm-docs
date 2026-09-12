> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/randomnumbergenerator](https://developer.apple.com/documentation/swift/randomnumbergenerator)

# RandomNumberGenerator

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that provides uniformly distributed random data.

## Declaration

```swift
protocol RandomNumberGenerator
```

<a id="overview"></a>

## Overview

When you call methods that use random data, such as creating new random values or shuffling a collection, you can pass a `RandomNumberGenerator` type to be used as the source for randomness. When you don’t pass a generator, the default `SystemRandomNumberGenerator` type is used.

When providing new APIs that use randomness, provide a version that accepts a generator conforming to the `RandomNumberGenerator` protocol as well as a version that uses the default system generator. For example, this `Weekday` enumeration provides static methods that return a random day of the week:

```swift
enum Weekday: CaseIterable {
    case sunday, monday, tuesday, wednesday, thursday, friday, saturday

    static func random<G: RandomNumberGenerator>(using generator: inout G) -> Weekday {
        return Weekday.allCases.randomElement(using: &generator)!
    }

    static func random() -> Weekday {
        var g = SystemRandomNumberGenerator()
        return Weekday.random(using: &g)
    }
}
```

<a id="Conforming-to-the-RandomNumberGenerator-Protocol"></a>

## Conforming to the RandomNumberGenerator Protocol

A custom `RandomNumberGenerator` type can have different characteristics than the default `SystemRandomNumberGenerator` type. For example, a seedable generator can be used to generate a repeatable sequence of random values for testing purposes.

To make a custom type conform to the `RandomNumberGenerator` protocol, implement the required `next()` method. Each call to `next()` must produce a uniform and independent random value.

Types that conform to `RandomNumberGenerator` should specifically document the thread safety and quality of the generator.

## Topics

### Generating Random Binary Data

- [next()](randomnumbergenerator/next%28%29.md): Returns a value from a uniform, independent distribution of binary data.
- [next(upperBound:)](randomnumbergenerator/next%28upperbound_%29.md): Returns a random value that is less than the given upper bound.

## Relationships

### Conforming Types

- [SystemRandomNumberGenerator](systemrandomnumbergenerator.md)

## See Also

### Random Number Generators

- [SystemRandomNumberGenerator](systemrandomnumbergenerator.md): The system’s default source of random data.
