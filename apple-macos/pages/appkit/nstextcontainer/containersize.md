> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextcontainer/containersize

# containerSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.0)

The size of the text container’s bounding rectangle.

> Use [size](size.md) instead.

## Declaration

```swift
var containerSize: NSSize { get set }
```

## See Also

### Deprecated

- [init(containerSize:)](init%28containersize_%29.md): Deprecated. Initializes a text container with a specified bounding rectangle.
- [lineFragmentRect(forProposedRect:sweepDirection:movementDirection:remaining:)](linefragmentrect%28forproposedrect_sweepdirection_movementdirection_remaining_%29.md): Deprecated. Calculates and returns the longest rectangle available in the proposed rectangle for displaying text.
- [contains(\_:)](contains%28__%29.md): Deprecated. Queries whether a point lies within the text container’s region or on the region’s edge—not simply within its bounding rectangle.

# containerSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.0)

The size of the text container’s bounding rectangle.

> Use [size](size.md) instead.

## Declaration

```objectivec
@property NSSize containerSize;
```

## See Also

### Deprecated

- [initWithContainerSize:](init%28containersize_%29.md): Deprecated. Initializes a text container with a specified bounding rectangle.
- [lineFragmentRectForProposedRect:sweepDirection:movementDirection:remainingRect:](linefragmentrect%28forproposedrect_sweepdirection_movementdirection_remaining_%29.md): Deprecated. Calculates and returns the longest rectangle available in the proposed rectangle for displaying text.
- [containsPoint:](contains%28__%29.md): Deprecated. Queries whether a point lies within the text container’s region or on the region’s edge—not simply within its bounding rectangle.
