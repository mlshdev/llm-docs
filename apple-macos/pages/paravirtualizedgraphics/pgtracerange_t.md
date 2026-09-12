> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgtracerange_t](https://developer.apple.com/documentation/paravirtualizedgraphics/pgtracerange_t)

# PGTraceRange_t

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+

An opaque data pointer representing a specific trace.

## Declaration

```objectivec
typedef struct PGTraceRange_s PGTraceRange_t;
```

<a id="Discussion"></a>

## Discussion

An app using the framework determines which data it needs to track a trace range. The framework never accesses the contents of the pointer.

## See Also

### Specifying Trace Behavior

- [addTraceRange](pgdevicedescriptor/addtracerange.md): A handler that the framework calls to add a trace range.
- [removeTraceRange](pgdevicedescriptor/removetracerange.md): A handler that the framework calls to remove a trace range.
- [PGAddTraceRange](pgaddtracerange.md): The block signature for a routine that adds a trace range.
- [PGRemoveTraceRange](pgremovetracerange.md): The block signature for a routine that removes a trace range.
- [PGTraceRangeHandler](pgtracerangehandler.md): The block signature for a routine that handles trace requests.
