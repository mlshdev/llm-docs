> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrectclip](https://developer.apple.com/documentation/appkit/nsrectclip)

# NSRectClip

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Modifies the current clipping path by intersecting it with the passed rect.

## Declaration

```objectivec
extern void NSRectClip(NSRect rect);
```

## Parameters

- `rect`: The rectangle to intersect with the current clipping rectangle.

<a id="Discussion"></a>

## Discussion

This function modifies the clipping path permanently. If you need to undo this modification later, you should save the current graphics state before calling this function and restore it once you are done.

A side effect of this function is that it clears the current Quartz 2D drawing path information. If you used Quartz 2D functions to create a drawing path in the current context, and you want to save that path information and use it later, you should transfer it to a [CGPathRef](https://developer.apple.com/documentation/coregraphics/cgpath) opaque type before calling this function. If you are using only Cocoa to do your drawing, this behavior should not affect you.

## See Also

### Clipping Rectangles

- [NSRectClipList](nsrectcliplist.md): Modifies the current clipping path by intersecting it with the passed rect.
