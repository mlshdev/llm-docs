> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmreadonlydatablockbuffer/isempty

# isEmpty

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether the block buffer is empty.

## Declaration

```swift
var isEmpty: Bool { get }
```

<a id="discussion"></a>

## Discussion

Indicates whether the block buffer is empty, i.e., devoid of any memory blocks or block buffer references. Note that a block buffer containing a not-yet allocated memory block is not considered empty.
