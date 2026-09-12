> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bool/random()](https://developer.apple.com/documentation/swift/bool/random())

# random()

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a random Boolean value.

## Declaration

```swift
static func random() -> Bool
```

<a id="return-value"></a>

## Return Value

Either `true` or `false`, randomly chosen with equal probability.

<a id="discussion"></a>

## Discussion

This method returns `true` and `false` with equal probability.

```swift
let flippedHeads = Bool.random()
if flippedHeads {
    print("Heads, you win!")
} else {
    print("Maybe another try?")
}
```

This method is equivalent to calling `Bool.random(using:)`, passing in the system’s default random generator.

## See Also

### Creating a Random Value

- [random(using:)](random%28using_%29.md): Returns a random Boolean value, using the given generator as a source for randomness.
