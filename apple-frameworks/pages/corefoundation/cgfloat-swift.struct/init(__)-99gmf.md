> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cgfloat-swift.struct/init(_:)-99gmf](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct/init(_:)-99gmf)

# init(\_:)

**Framework:** Core Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 2.0+ · Swift  (deprecated in 4.0)

Creates a new value, rounded to the closest possible representation.

## Declaration

```swift
init(_ number: NSNumber)
```

## Parameters

- `number`: The number to convert to a floating-point value.

<a id="Discussion"></a>

## Discussion

If two representable values are equally close, the result is the value with more trailing zeros in its significand bit pattern.
