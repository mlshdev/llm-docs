> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevicedescriptor/addtracerange](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevicedescriptor/addtracerange)

# addTraceRange

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+

A handler that the framework calls to add a trace range.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) PGAddTraceRange addTraceRange;
```

## See Also

### Specifying Trace Behavior

- [removeTraceRange](removetracerange.md): A handler that the framework calls to remove a trace range.
- [PGAddTraceRange](../pgaddtracerange.md): The block signature for a routine that adds a trace range.
- [PGRemoveTraceRange](../pgremovetracerange.md): The block signature for a routine that removes a trace range.
- [PGTraceRangeHandler](../pgtracerangehandler.md): The block signature for a routine that handles trace requests.
- [PGTraceRange_t](../pgtracerange_t.md): An opaque data pointer representing a specific trace.
