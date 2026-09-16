> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float16/init(_:)-4iaoz

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new value, rounded to the closest possible representation.

## Declaration

```swift
init(_ v: Int)
```

<a id="discussion"></a>

## Discussion

If two representable values are equally close, the result is the value with more trailing zeros in its significand bit pattern.
