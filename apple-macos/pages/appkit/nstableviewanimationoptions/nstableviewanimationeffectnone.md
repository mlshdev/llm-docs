> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewanimationoptions/nstableviewanimationeffectnone](https://developer.apple.com/documentation/appkit/nstableviewanimationoptions/nstableviewanimationeffectnone)

# NSTableViewAnimationEffectNone

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

Use no animation effects.

## Declaration

```objectivec
NSTableViewAnimationEffectNone
```

## See Also

### Constants

- [NSTableViewAnimationEffectFade](../nstableview/animationoptions/effectfade.md): Use a fade for row or column removal. The effect can be combined with any of the slide constants.
- [NSTableViewAnimationEffectGap](../nstableview/animationoptions/effectgap.md): Creates a gap for newly inserted rows. This is useful for drag and drop animations that animate to a newly opened gap and should be used in the delegate method [tableView:acceptDrop:row:dropOperation:](../nstableviewdatasource/tableview%28__acceptdrop_row_dropoperation_%29.md).
- [NSTableViewAnimationSlideUp](../nstableview/animationoptions/slideup.md): Animates a row insertion or removal by sliding upward.
- [NSTableViewAnimationSlideDown](../nstableview/animationoptions/slidedown.md): Animates a row insertion or removal by sliding downward.
- [NSTableViewAnimationSlideLeft](../nstableview/animationoptions/slideleft.md): Animates a row insertion by sliding from the left. Animates a row removal by sliding towards the left.
- [NSTableViewAnimationSlideRight](../nstableview/animationoptions/slideright.md): Animates a row insertion by sliding from the right. Animates a row removal by sliding towards the right.
