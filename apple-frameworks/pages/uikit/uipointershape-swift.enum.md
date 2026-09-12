> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointershape-swift.enum](https://developer.apple.com/documentation/uikit/uipointershape-swift.enum)

# UIPointerShape

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS

An object that defines the shape of custom pointers.

## Declaration

```swift
enum UIPointerShape
```

<a id="overview"></a>

## Overview

If the desired pointer shape can be expressed as a rounded rectangle, use [UIPointerShape.roundedRect(\_:radius:)](uipointershape-swift.enum/roundedrect%28__radius_%29.md) for best results.

## Topics

### Specifying pointer shapes

- [UIPointerShape.horizontalBeam(length:)](uipointershape-swift.enum/horizontalbeam%28length_%29.md): The pointer morphs into a horizontal beam using the specified length.
- [UIPointerShape.verticalBeam(length:)](uipointershape-swift.enum/verticalbeam%28length_%29.md): The pointer morphs into a vertical beam using the specified length.
- [UIPointerShape.path(\_:)](uipointershape-swift.enum/path%28__%29.md): The pointer morphs into the given Bézier path.
- [UIPointerShape.roundedRect(\_:radius:)](uipointershape-swift.enum/roundedrect%28__radius_%29.md): The pointer morphs into a rounded rectangle using the provided corner radius.

### Accessing corner radius

- [defaultCornerRadius](uipointershape-swift.enum/defaultcornerradius.md): The default corner radius for a pointer using a rounded rectangle.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Pointer styles

- [UIPointerStyle](uipointerstyle.md): An object that defines the pointer shape and effect.
- [UIPointerEffect](uipointereffect-swift.enum.md): An effect that alters a view’s appearance when a pointer enters the current region.
- [UIPointerAccessory](uipointeraccessory.md): Constants that describe accessories to display alongside the primary pointer.
