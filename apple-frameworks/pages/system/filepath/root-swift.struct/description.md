> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/root-swift.struct/description](https://developer.apple.com/documentation/system/filepath/root-swift.struct/description)

# description

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A textual representation of the path root.

## Declaration

```swift
var description: String { get }
```

<a id="discussion"></a>

## Discussion

If the content of the path root isn’t a well-formed Unicode string, this replaces invalid bytes with U+FFFD. See `String.init(decoding:)`.
