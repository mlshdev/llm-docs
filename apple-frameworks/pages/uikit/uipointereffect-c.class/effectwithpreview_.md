> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointereffect-c.class/effectwithpreview:](https://developer.apple.com/documentation/uikit/uipointereffect-c.class/effectwithpreview:)

# effectWithPreview:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Creates a pointer content effect with the given preview’s view.

## Declaration

```objectivec
+ (instancetype) effectWithPreview:(UITargetedPreview *) preview;
```

<a id="Discussion"></a>

## Discussion

`UIPointerEffect` attempts to determine the appropriate effect for the given preview automatically. Use one of its subclasses to request a specific system-provided effect.
