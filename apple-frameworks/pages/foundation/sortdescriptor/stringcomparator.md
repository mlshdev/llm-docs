> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/sortdescriptor/stringcomparator

# stringComparator

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A `String.StandardComparator` value.

## Declaration

```swift
var stringComparator: String.StandardComparator? { get }
```

<a id="discussion"></a>

## Discussion

This property is non-`nil` when the `SortDescriptor` value is created with one.
