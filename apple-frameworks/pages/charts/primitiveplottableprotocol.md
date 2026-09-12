> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/primitiveplottableprotocol](https://developer.apple.com/documentation/charts/primitiveplottableprotocol)

# PrimitivePlottableProtocol

**Framework:** Swift Charts  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that represents the primitive plottable types supported by the framework. Don’t use this type directly.

## Declaration

```swift
protocol PrimitivePlottableProtocol : Plottable where Self == Self.PrimitivePlottable
```

<a id="overview"></a>

## Overview

A primitive plottable type is a numeric type like a [Float](https://developer.apple.com/documentation/swift/float) or [UInt32](https://developer.apple.com/documentation/swift/uint32) for quantitative values, [Date](../foundation/date.md) for temporal values, or [String](https://developer.apple.com/documentation/swift/string) for categorical values.

Primitive plottable types conform to the [Plottable](plottable.md) protocol.

## Relationships

### Inherits From

- [Plottable](plottable.md)
