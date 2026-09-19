> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlbuffer/didmodifyrange(_:)

# didModifyRange(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.11+

Informs the GPU that the CPU has modified a section of the buffer.

## Declaration

```swift
func didModifyRange(_ range: Range<Int>)
```

## Parameters

- `range`: The range of bytes that have been modified.

<a id="discussion"></a>

## Discussion

If you write information to a buffer created with the [MTLStorageMode.managed](../mtlstoragemode/managed.md) storage mode, you need to call this method to inform the GPU that the information has changed. If you execute GPU commands that read the data without calling this method first, the behavior is undefined.
