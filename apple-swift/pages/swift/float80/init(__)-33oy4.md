> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float80/init(_:)-33oy4

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a new value, rounded to the closest possible representation.

## Declaration

```swift
init<Source>(_ value: Source) where Source : BinaryInteger
```

## Parameters

- `value`: The integer to convert to a floating-point value.

<a id="discussion"></a>

## Discussion

If two representable values are equally close, the result is the value with more trailing zeros in its significand bit pattern.
