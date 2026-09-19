> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgdisplaystreamupdategetrects

# CGDisplayStreamUpdateGetRects

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function

## Declaration

```objectivec
extern const CGRect *CGDisplayStreamUpdateGetRects(CGDisplayStreamUpdateRef updateRef, CGDisplayStreamUpdateRectType rectType, size_t *rectCount);
```

## Parameters

- `updateRef`: The CGDisplayStreamUpdateRef
- `rectCount`: A pointer to where the count of the number of rectangles in the array is to be returned. Must not be NULL.

<a id="return-value"></a>

## Return Value

A pointer to the array of CGRectangles.  This array should not be freed by the caller.

<a id="discussion"></a>

## Discussion

Returns a pointer to an array of CGRect structs that describe what parts of the frame have changed relative to the previously delivered frame.   This rectangle list encapsulates both the update rectangles and movement rectangles.
