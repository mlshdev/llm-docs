> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/random(in:using:)-1m6gd](https://developer.apple.com/documentation/swift/double/random(in:using:)-1m6gd)

# random(in:using:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a random value within the specified range, using the given generator as a source for randomness.

## Declaration

```swift
static func random<T>(in range: Range<Self>, using generator: inout T) -> Self where T : RandomNumberGenerator
```

## Parameters

- `range`: The range in which to create a random value. `range` must be finite and non-empty.
- `generator`: The random number generator to use when creating the new random value.

<a id="return-value"></a>

## Return Value

A random value within the bounds of `range`.

<a id="discussion"></a>

## Discussion

Use this method to generate a floating-point value within a specific range when you are using a custom random number generator. This example creates three new values in the range `10.0 ..< 20.0`.

```swift
for _ in 1...3 {
    print(Double.random(in: 10.0 ..< 20.0, using: &myGenerator))
}
// Prints "18.1900709259179"
// Prints "14.2286325689993"
// Prints "13.1485686260762"
```

The `random(in:using:)` static method chooses a random value from a continuous uniform distribution in `range`, and then converts that value to the nearest representable value in this type. Depending on the size and span of `range`, some concrete values may be represented more frequently than others.

> **Note**

> The algorithm used to create random values may change in a future version of Swift. If you’re passing a generator that results in the same sequence of floating-point values each time you run your program, that sequence may change when your program is compiled using a different version of Swift.

## See Also

### Creating a Random Value

- [random(in:)](random%28in_%29-6idef.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range.
- [random(in:)](random%28in_%29-5o5ha.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range.
- [random(in:using:)](random%28in_using_%29-613hz.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Returns a random value within the specified range, using the given generator as a source for randomness.
