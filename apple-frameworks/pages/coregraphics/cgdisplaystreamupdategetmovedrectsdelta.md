> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdisplaystreamupdategetmovedrectsdelta](https://developer.apple.com/documentation/coregraphics/cgdisplaystreamupdategetmovedrectsdelta)

# CGDisplayStreamUpdateGetMovedRectsDelta

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function

## Declaration

```objectivec
extern void CGDisplayStreamUpdateGetMovedRectsDelta(CGDisplayStreamUpdateRef updateRef, CGFloat *dx, CGFloat *dy);
```

## Parameters

- `updateRef`: The CGDisplayStreamUpdateRef
- `dx`: A pointer to a CGFloat to store the x component of the movement delta
- `dy`: A pointer to a CGFloat to store the y component of the movement delta

<a id="discussion"></a>

## Discussion

Return the movement dx and dy values for a single update

The delta values describe the offset from the moved rectangles back to the source location.
