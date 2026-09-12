> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/init(exactly:)-9oml5](https://developer.apple.com/documentation/swift/float80/init(exactly:)-9oml5)

# init(exactly:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a new instance from the given value, if it can be represented exactly.

## Declaration

```swift
init?<Source>(exactly value: Source) where Source : BinaryFloatingPoint
```

## Parameters

- `value`: A floating-point value to be converted.

<a id="discussion"></a>

## Discussion

If the given floating-point value cannot be represented exactly, the result is `nil`.
