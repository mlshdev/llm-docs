> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlbuffer/didmodifyrange:

# didModifyRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

Informs the GPU that the CPU has modified a section of the buffer.

## Declaration

```objectivec
- (void) didModifyRange:(NSRange) range;
```

## Parameters

- `range`: The range of bytes that were modified.

## Mentioned In

- [Synchronizing a managed resource in macOS](../synchronizing-a-managed-resource-in-macos.md)

<a id="discussion"></a>

## Discussion

If you write information to a buffer created with the [MTLStorageModeManaged](../mtlstoragemode/managed.md) storage mode, you need to call this method to inform the GPU that the information has changed. If you execute GPU commands that read from the modified sections without calling this method first, the behavior is undefined.
