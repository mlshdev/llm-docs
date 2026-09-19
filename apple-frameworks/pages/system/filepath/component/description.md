> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filepath/component/description

# description

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A textual representation of the path component.

## Declaration

```swift
var description: String { get }
```

<a id="discussion"></a>

## Discussion

If the content of the path component isn’t a well-formed Unicode string, this replaces invalid bytes with U+FFFD. See `String.init(decoding:)`.
