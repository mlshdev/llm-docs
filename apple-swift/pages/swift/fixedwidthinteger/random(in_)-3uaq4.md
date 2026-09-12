> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/fixedwidthinteger/random(in:)-3uaq4](https://developer.apple.com/documentation/swift/fixedwidthinteger/random(in:)-3uaq4)

# random(in:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a random value within the specified range.

## Declaration

```swift
static func random(in range: Range<Self>) -> Self
```

## Parameters

- `range`: The range in which to create a random value. `range` must not be empty.

<a id="return-value"></a>

## Return Value

A random value within the bounds of `range`.

<a id="discussion"></a>

## Discussion

Use this method to generate an integer within a specific range. This example creates three new values in the range `1..<100`.

```swift
for _ in 1...3 {
    print(Int.random(in: 1..<100))
}
// Prints "53"
// Prints "64"
// Prints "5"
```

This method is equivalent to calling the version that takes a generator, passing in the system’s default random generator.
