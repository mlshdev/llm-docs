> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/randomnumbergenerator/next()](https://developer.apple.com/documentation/swift/randomnumbergenerator/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a value from a uniform, independent distribution of binary data.

## Declaration

```swift
mutating func next() -> UInt64
```

<a id="return-value"></a>

## Return Value

An unsigned 64-bit random value.

<a id="discussion"></a>

## Discussion

Use this method when you need random binary data to generate another value. If you need an integer value within a specific range, use the static `random(in:using:)` method on that integer type instead of this method.

## Default Implementations

### RandomNumberGenerator Implementations

- [next()](next%28%29-6auxg.md): Returns a value from a uniform, independent distribution of binary data.

## See Also

### Generating Random Binary Data

- [next(upperBound:)](next%28upperbound_%29.md): Returns a random value that is less than the given upper bound.
