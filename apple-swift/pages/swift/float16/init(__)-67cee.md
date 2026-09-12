> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/init(_:)-67cee](https://developer.apple.com/documentation/swift/float16/init(_:)-67cee)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

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
