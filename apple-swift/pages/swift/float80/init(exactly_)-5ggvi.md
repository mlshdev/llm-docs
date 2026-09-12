> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/init(exactly:)-5ggvi](https://developer.apple.com/documentation/swift/float80/init(exactly:)-5ggvi)

# init(exactly:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a new value, if the given integer can be represented exactly.

## Declaration

```swift
init?<Source>(exactly value: Source) where Source : BinaryInteger
```

## Parameters

- `value`: The integer to convert to a floating-point value.

<a id="discussion"></a>

## Discussion

If the given integer cannot be represented exactly, the result is `nil`.
