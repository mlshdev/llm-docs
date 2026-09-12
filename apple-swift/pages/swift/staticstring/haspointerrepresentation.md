> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/staticstring/haspointerrepresentation](https://developer.apple.com/documentation/swift/staticstring/haspointerrepresentation)

# hasPointerRepresentation

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the static string stores a pointer to a null-terminated sequence of UTF-8 code units.

## Declaration

```swift
var hasPointerRepresentation: Bool { get }
```

<a id="discussion"></a>

## Discussion

If `hasPointerRepresentation` is `false`, the static string stores a single Unicode scalar value.
