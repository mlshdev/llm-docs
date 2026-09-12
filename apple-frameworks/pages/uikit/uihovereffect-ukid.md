> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihovereffect-ukid](https://developer.apple.com/documentation/uikit/uihovereffect-ukid)

# UIHoverEffect

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A hover effect that can apply to a view through a hover style.

## Declaration

```objectivec
@protocol UIHoverEffect <NSObject, NSCopying>
```

<a id="overview"></a>

## Overview

You don’t conform to this protocol directly. Instead, you use a built-in [UIHoverEffect](uihovereffect-40091.md) like [UIHoverAutomaticEffect](uihoverautomaticeffect-swift.struct.md).

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIHoverAutomaticEffect](uihoverautomaticeffect-c.class.md)
- [UIHoverHighlightEffect](uihoverhighlighteffect-c.class.md)
- [UIHoverLiftEffect](uihoverlifteffect-c.class.md)
- [UIPointerEffect](uipointereffect-c.class.md)

## See Also

### Specifying a hover effect

- [effect](uihoverstyle/effect-12r83.md): The effect to apply to the view with this style.
- [UIHoverAutomaticEffect](uihoverautomaticeffect-c.class.md): A system-default hover effect that automatically selects the appropriate effect based on the view to which it applies.
- [UIHoverHighlightEffect](uihoverhighlighteffect-c.class.md): An effect that applies a highlight to the view on hover.
- [UIHoverLiftEffect](uihoverlifteffect-c.class.md): An effect that can visually lift the view on hover where appropriate.
