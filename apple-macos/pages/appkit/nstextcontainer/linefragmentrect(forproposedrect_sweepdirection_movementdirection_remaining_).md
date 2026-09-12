> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/linefragmentrect(forproposedrect:sweepdirection:movementdirection:remaining:)](https://developer.apple.com/documentation/appkit/nstextcontainer/linefragmentrect(forproposedrect:sweepdirection:movementdirection:remaining:))

# lineFragmentRect(forProposedRect:sweepDirection:movementDirection:remaining:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Calculates and returns the longest rectangle available in the proposed rectangle for displaying text.

> Use [lineFragmentRect(forProposedRect:at:writingDirection:remaining:)](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md) instead.

## Declaration

```swift
func lineFragmentRect(forProposedRect proposedRect: NSRect, sweepDirection: NSLineSweepDirection, movementDirection: NSLineMovementDirection, remaining remainingRect: NSRectPointer?) -> NSRect
```

## Parameters

- `proposedRect`: The proposed rectangle in which to layout text.
- `sweepDirection`: The line sweep direction.
- `movementDirection`: The line movement direction.
- `remainingRect`: Upon return, the unused, possibly shifted, portion of `proposedRect` that’s available for further text, or `NSZeroRect` if there is no remainder.

<a id="return-value"></a>

## Return Value

The longest rectangle available in the proposed rectangle for displaying text, or `NSZeroRect` if there is none according to the receiver’s region definition.

<a id="Discussion"></a>

## Discussion

There is no guarantee as to the width of the proposed rectangle or to its location. For example, the proposed rectangle is likely to be much wider than the width of the receiver. The receiver should examine `proposedRect` to see that it intersects its bounding rectangle and should return a modified rectangle based on `sweepDirection` and `movementDirection`, whose possible values are listed in the class description. If `sweepDirection` is `NSLineSweepRight`, for example, the receiver uses this information to trim the right end of `proposedRect` as needed rather than the left end.

If `proposedRect` doesn’t completely overlap the region along the axis of `movementDirection` and `movementDirection` isn’t `NSLineDoesntMove`, this method can either shift the rectangle in that direction as much as needed so that it does completely overlap, or return `NSZeroRect` to indicate that the proposed rectangle simply doesn’t fit.

## See Also

### Deprecated

- [init(containerSize:)](init%28containersize_%29.md): Deprecated. Initializes a text container with a specified bounding rectangle.
- [contains(\_:)](contains%28__%29.md): Deprecated. Queries whether a point lies within the text container’s region or on the region’s edge—not simply within its bounding rectangle.
- [containerSize](containersize.md): Deprecated. The size of the text container’s bounding rectangle.

# lineFragmentRectForProposedRect:sweepDirection:movementDirection:remainingRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Calculates and returns the longest rectangle available in the proposed rectangle for displaying text.

> Use [lineFragmentRectForProposedRect:atIndex:writingDirection:remainingRect:](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md) instead.

## Declaration

```objectivec
- (NSRect) lineFragmentRectForProposedRect:(NSRect) proposedRect sweepDirection:(NSLineSweepDirection) sweepDirection movementDirection:(NSLineMovementDirection) movementDirection remainingRect:(NSRectPointer) remainingRect;
```

## Parameters

- `proposedRect`: The proposed rectangle in which to layout text.
- `sweepDirection`: The line sweep direction.
- `movementDirection`: The line movement direction.
- `remainingRect`: Upon return, the unused, possibly shifted, portion of `proposedRect` that’s available for further text, or `NSZeroRect` if there is no remainder.

<a id="return-value"></a>

## Return Value

The longest rectangle available in the proposed rectangle for displaying text, or `NSZeroRect` if there is none according to the receiver’s region definition.

<a id="Discussion"></a>

## Discussion

There is no guarantee as to the width of the proposed rectangle or to its location. For example, the proposed rectangle is likely to be much wider than the width of the receiver. The receiver should examine `proposedRect` to see that it intersects its bounding rectangle and should return a modified rectangle based on `sweepDirection` and `movementDirection`, whose possible values are listed in the class description. If `sweepDirection` is `NSLineSweepRight`, for example, the receiver uses this information to trim the right end of `proposedRect` as needed rather than the left end.

If `proposedRect` doesn’t completely overlap the region along the axis of `movementDirection` and `movementDirection` isn’t `NSLineDoesntMove`, this method can either shift the rectangle in that direction as much as needed so that it does completely overlap, or return `NSZeroRect` to indicate that the proposed rectangle simply doesn’t fit.

## See Also

### Deprecated

- [initWithContainerSize:](init%28containersize_%29.md): Deprecated. Initializes a text container with a specified bounding rectangle.
- [containsPoint:](contains%28__%29.md): Deprecated. Queries whether a point lies within the text container’s region or on the region’s edge—not simply within its bounding rectangle.
- [containerSize](containersize.md): Deprecated. The size of the text container’s bounding rectangle.
