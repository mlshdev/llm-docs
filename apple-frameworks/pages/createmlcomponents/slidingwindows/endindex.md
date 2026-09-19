> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/slidingwindows/endindex

# endIndex

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The collection’s “past the end” position–that is, the position one greater than the last valid subscript argument.

## Declaration

```swift
var endIndex: Int { get }
```

## See Also

### Inspecting the sliding window

- [input](input.md): The input shaped array.
- [length](length.md): The number samples in each window.
- [startIndex](startindex.md): The position of the first window.
- [stride](stride.md): The number of samples between windows.
