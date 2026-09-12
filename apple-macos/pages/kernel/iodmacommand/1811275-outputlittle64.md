> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/1811275-outputlittle64](https://developer.apple.com/documentation/kernel/iodmacommand/1811275-outputlittle64)

# OutputLittle64

**Interface language:** Objective-C

**Framework:** Kernel

Output little-endian Segment64 output segment function.

## Declaration

```objectivec
static bool OutputLittle64(
 IODMACommand *target, 
 Segment64 seg,
 void *segs,
 UInt32 ind); 
```

## See Also

### Managing Memory Segments

- [Segment32](segment32.md): A 32 bit I/O bus address/length pair.
- [Segment64](segment64.md): A 64 bit I/O bus address/length pair.
- [SegmentFunction](segmentfunction.md): A C function that translates a 64-bit segment and outputs a single desired segment to the specified array.
- [kIODMACommandOutputBig32](../kiodmacommandoutputbig32.md): Output big-endian Segment32 output segment function.
- [OutputBig32](1811221-outputbig32.md): Output big-endian Segment32 output segment function.
- [OutputBig32](1547743-outputbig32.md): Output big-endian Segment32 output segment function.
- [kIODMACommandOutputBig64](../kiodmacommandoutputbig64.md): Output big-endian Segment64 output segment function.
- [OutputBig64](1811234-outputbig64.md): Output big-endian Segment64 output segment function.
- [OutputBig64](1547757-outputbig64.md): Output big-endian Segment64 output segment function.
- [kIODMACommandOutputHost32](../kiodmacommandoutputhost32.md): Output host natural Segment32 output segment function.
- [OutputHost32](1811245-outputhost32.md): Output host natural Segment32 output segment function.
- [OutputHost32](1547726-outputhost32.md): Output host natural Segment32 output segment function.
- [kIODMACommandOutputHost64](../kiodmacommandoutputhost64.md): Output host natural Segment64 output segment function.
- [OutputHost64](1811257-outputhost64.md): Output host natural Segment64 output segment function.
- [OutputHost64](1547750-outputhost64.md): Output host natural Segment64 output segment function.
- [kIODMACommandOutputLittle32](../kiodmacommandoutputlittle32.md): Output little-endian Segment32 output segment function.
- [OutputLittle32](1811267-outputlittle32.md): Output little-endian Segment32 output segment function.
- [OutputLittle32](1547744-outputlittle32.md): Output little-endian Segment32 output segment function.
- [kIODMACommandOutputLittle64](../kiodmacommandoutputlittle64.md): Output little-endian Segment64 output segment function.
- [OutputLittle64](1547764-outputlittle64.md): Output little-endian Segment64 output segment function.
