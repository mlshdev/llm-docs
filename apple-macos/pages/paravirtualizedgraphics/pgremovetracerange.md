> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgremovetracerange](https://developer.apple.com/documentation/paravirtualizedgraphics/pgremovetracerange)

# PGRemoveTraceRange

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+

The block signature for a routine that removes a trace range.

## Declaration

```objectivec
typedef void (^)(struct PGTraceRange_s *) PGRemoveTraceRange;
```

## Parameters

- `range`: The trace to remove.

## See Also

### Specifying Trace Behavior

- [addTraceRange](pgdevicedescriptor/addtracerange.md): A handler that the framework calls to add a trace range.
- [removeTraceRange](pgdevicedescriptor/removetracerange.md): A handler that the framework calls to remove a trace range.
- [PGAddTraceRange](pgaddtracerange.md): The block signature for a routine that adds a trace range.
- [PGTraceRangeHandler](pgtracerangehandler.md): The block signature for a routine that handles trace requests.
- [PGTraceRange_t](pgtracerange_t.md): An opaque data pointer representing a specific trace.
