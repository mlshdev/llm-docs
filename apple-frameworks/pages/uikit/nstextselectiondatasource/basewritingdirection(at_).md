> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectiondatasource/basewritingdirection(at:)](https://developer.apple.com/documentation/uikit/nstextselectiondatasource/basewritingdirection(at:))

# baseWritingDirection(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the base writing direction at the location you specify.

## Declaration

```swift
func baseWritingDirection(at location: any NSTextLocation) -> NSTextSelectionNavigation.WritingDirection
```

## Parameters

- `location`: The location where you want to examine the text’s writing direction.

<a id="return-value"></a>

## Return Value

The [NSWritingDirection](../nswritingdirection.md).

## See Also

### Changing the characteristics of the selection

- [NSTextSelectionNavigation.WritingDirection](../nstextselectionnavigation/writingdirection.md): Values that describe the writing direction inside a text selection.
- [textLayoutOrientation(at:)](textlayoutorientation%28at_%29.md): Returns the layout orientation at the location you specify.
- [NSTextSelectionNavigation.LayoutOrientation](../nstextselectionnavigation/layoutorientation.md): Values that describe the possible layout orientations.

# baseWritingDirectionAtLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the base writing direction at the location you specify.

## Declaration

```objectivec
- (NSTextSelectionNavigationWritingDirection) baseWritingDirectionAtLocation:(id<NSTextLocation>) location;
```

## Parameters

- `location`: The location where you want to examine the text’s writing direction.

<a id="return-value"></a>

## Return Value

The [NSWritingDirection](../nswritingdirection.md).

## See Also

### Changing the characteristics of the selection

- [NSTextSelectionNavigationWritingDirection](../nstextselectionnavigation/writingdirection.md): Values that describe the writing direction inside a text selection.
- [textLayoutOrientationAtLocation:](textlayoutorientation%28at_%29.md): Returns the layout orientation at the location you specify.
- [NSTextSelectionNavigationLayoutOrientation](../nstextselectionnavigation/layoutorientation.md): Values that describe the possible layout orientations.
