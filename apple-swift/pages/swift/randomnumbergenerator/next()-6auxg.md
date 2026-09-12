> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/randomnumbergenerator/next()-6auxg](https://developer.apple.com/documentation/swift/randomnumbergenerator/next()-6auxg)

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a value from a uniform, independent distribution of binary data.

## Declaration

```swift
mutating func next<T>() -> T where T : FixedWidthInteger, T : UnsignedInteger
```

<a id="return-value"></a>

## Return Value

A random value of `T`. Bits are randomly distributed so that every value of `T` is equally likely to be returned.

<a id="discussion"></a>

## Discussion

Use this method when you need random binary data to generate another value. If you need an integer value within a specific range, use the static `random(in:using:)` method on that integer type instead of this method.
