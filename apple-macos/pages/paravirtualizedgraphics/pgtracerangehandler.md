> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgtracerangehandler](https://developer.apple.com/documentation/paravirtualizedgraphics/pgtracerangehandler)

# PGTraceRangeHandler

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+

The block signature for a routine that handles trace requests.

## Declaration

```objectivec
typedef void (^)(struct PGPhysicalMemoryRange_s *) PGTraceRangeHandler;
```

## Parameters

- `dirty  `: The range of memory that the guest changed.

<a id="Discussion"></a>

## Discussion

The returned range may be larger than the range that the guest wrote into. For example, if you can only determine which memory the guest accessed at virtual memory page boundaries, you’d report that the entire page changed. Where possible, coalesce writes over a period of time into a single activity notification.

## See Also

### Specifying Trace Behavior

- [addTraceRange](pgdevicedescriptor/addtracerange.md): A handler that the framework calls to add a trace range.
- [removeTraceRange](pgdevicedescriptor/removetracerange.md): A handler that the framework calls to remove a trace range.
- [PGAddTraceRange](pgaddtracerange.md): The block signature for a routine that adds a trace range.
- [PGRemoveTraceRange](pgremovetracerange.md): The block signature for a routine that removes a trace range.
- [PGTraceRange_t](pgtracerange_t.md): An opaque data pointer representing a specific trace.
