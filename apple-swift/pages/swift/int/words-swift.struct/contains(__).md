> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/words-swift.struct/contains(_:)](https://developer.apple.com/documentation/swift/int/words-swift.struct/contains(_:))

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the sequence contains the given element.

## Declaration

```swift
func contains(_ element: Self.Element) -> Bool
```

## Parameters

- `element`: The element to find in the sequence.

<a id="return-value"></a>

## Return Value

`true` if the element was found in the sequence; otherwise, `false`.

<a id="discussion"></a>

## Discussion

This example checks to see whether a favorite actor is in an array storing a movie’s cast.

```swift
let cast = ["Vivien", "Marlon", "Kim", "Karl"]
print(cast.contains("Marlon"))
// Prints "true"
print(cast.contains("James"))
// Prints "false"
```

> **Complexity**

> O(*n*), where *n* is the length of the sequence.
