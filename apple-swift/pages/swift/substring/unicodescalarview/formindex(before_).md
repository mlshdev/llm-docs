> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/unicodescalarview/formindex(before:)](https://developer.apple.com/documentation/swift/substring/unicodescalarview/formindex(before:))

# formIndex(before:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the given index with its predecessor.

## Declaration

```swift
func formIndex(before i: inout Substring.UnicodeScalarView.Index)
```

## Parameters

- `i`: A valid index of the collection. `i` must be greater than `startIndex`.
