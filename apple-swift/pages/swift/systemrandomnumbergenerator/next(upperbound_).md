> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/systemrandomnumbergenerator/next(upperbound:)](https://developer.apple.com/documentation/swift/systemrandomnumbergenerator/next(upperbound:))

# next(upperBound:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a random value that is less than the given upper bound.

## Declaration

```swift
mutating func next<T>(upperBound: T) -> T where T : FixedWidthInteger, T : UnsignedInteger
```

## Parameters

- `upperBound`: The upper bound for the randomly generated value. Must be non-zero.

<a id="return-value"></a>

## Return Value

A random value of `T` in the range `0..<upperBound`. Every value in the range `0..<upperBound` is equally likely to be returned.

<a id="discussion"></a>

## Discussion

Use this method when you need random binary data to generate another value. If you need an integer value within a specific range, use the static `random(in:using:)` method on that integer type instead of this method.

## See Also

### Generating Random Binary Data

- [next()](next%28%29.md): Returns a value from a uniform, independent distribution of binary data.
- [next()](next%28%29-2x0ly.md): Returns a value from a uniform, independent distribution of binary data.
