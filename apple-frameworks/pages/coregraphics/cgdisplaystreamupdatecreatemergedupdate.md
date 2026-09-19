> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgdisplaystreamupdatecreatemergedupdate

# CGDisplayStreamUpdateCreateMergedUpdate

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function

## Declaration

```objectivec
extern CGDisplayStreamUpdateRefCGDisplayStreamUpdateCreateMergedUpdate(CGDisplayStreamUpdateRef firstUpdate, CGDisplayStreamUpdateRef secondUpdate);
```

## Parameters

- `firstUpdate`: The first update (in a temporal sense)
- `secondUpdate`: The second update (in a temporal sense)

<a id="return-value"></a>

## Return Value

The new CGDisplayStreamUpdateRef

<a id="discussion"></a>

## Discussion

Merge two CGDisplayUpdateRefs into a new one.

In cases where the client wishes to drop certain frame updates, this function may be used to merge two CGDisplayUpdateRefs together.  The core bit of functionality here is generating a new set of refresh/move/dirty rectangle arrays that properly represent the union of the deltas between the two frames.  Note that the ordering of the two refs is important.
