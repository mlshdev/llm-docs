> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/animationoptions/slidedown](https://developer.apple.com/documentation/appkit/nstableview/animationoptions/slidedown)

# slideDown (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Animates a row insertion or removal by sliding downward.

## Declaration

```swift
static var slideDown: NSTableView.AnimationOptions { get }
```

## See Also

### Constants

- [effectFade](effectfade.md): Use a fade for row or column removal. The effect can be combined with any of the slide constants.
- [effectGap](effectgap.md): Creates a gap for newly inserted rows. This is useful for drag and drop animations that animate to a newly opened gap and should be used in the delegate method [tableView(\_:acceptDrop:row:dropOperation:)](../../nstableviewdatasource/tableview%28__acceptdrop_row_dropoperation_%29.md).
- [slideUp](slideup.md): Animates a row insertion or removal by sliding upward.
- [slideLeft](slideleft.md): Animates a row insertion by sliding from the left. Animates a row removal by sliding towards the left.
- [slideRight](slideright.md): Animates a row insertion by sliding from the right. Animates a row removal by sliding towards the right.

# NSTableViewAnimationSlideDown (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

Animates a row insertion or removal by sliding downward.

## Declaration

```objectivec
NSTableViewAnimationSlideDown
```

## See Also

### Constants

- [NSTableViewAnimationEffectNone](../../nstableviewanimationoptions/nstableviewanimationeffectnone.md): Use no animation effects.
- [NSTableViewAnimationEffectFade](effectfade.md): Use a fade for row or column removal. The effect can be combined with any of the slide constants.
- [NSTableViewAnimationEffectGap](effectgap.md): Creates a gap for newly inserted rows. This is useful for drag and drop animations that animate to a newly opened gap and should be used in the delegate method [tableView:acceptDrop:row:dropOperation:](../../nstableviewdatasource/tableview%28__acceptdrop_row_dropoperation_%29.md).
- [NSTableViewAnimationSlideUp](slideup.md): Animates a row insertion or removal by sliding upward.
- [NSTableViewAnimationSlideLeft](slideleft.md): Animates a row insertion by sliding from the left. Animates a row removal by sliding towards the left.
- [NSTableViewAnimationSlideRight](slideright.md): Animates a row insertion by sliding from the right. Animates a row removal by sliding towards the right.
