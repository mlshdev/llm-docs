> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/init(_:)-6o1aq](https://developer.apple.com/documentation/swift/character/init(_:)-6o1aq)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a character from a single-character string.

## Declaration

```swift
init(_ s: String)
```

## Parameters

- `s`: The single-character string to convert to a `Character` instance. `s` must contain exactly one extended grapheme cluster.

<a id="discussion"></a>

## Discussion

The following example creates a new character from the uppercase version of a string that only holds one character.

```swift
let a = "a"
let capitalA = Character(a.uppercased())
```
