> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectiondatasource/textlayoutorientation(at:)](https://developer.apple.com/documentation/uikit/nstextselectiondatasource/textlayoutorientation(at:))

# textLayoutOrientation(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the layout orientation at the location you specify.

## Declaration

```swift
optional func textLayoutOrientation(at location: any NSTextLocation) -> NSTextSelectionNavigation.LayoutOrientation
```

## Parameters

- `location`: The location where you want to examine the text’s layout orientation.

<a id="return-value"></a>

## Return Value

Returns an [NSTextSelectionNavigation.LayoutOrientation](../nstextselectionnavigation/layoutorientation.md) that describes the orientation of the layout.

## See Also

### Changing the characteristics of the selection

- [baseWritingDirection(at:)](basewritingdirection%28at_%29.md): Returns the base writing direction at the location you specify.
- [NSTextSelectionNavigation.WritingDirection](../nstextselectionnavigation/writingdirection.md): Values that describe the writing direction inside a text selection.
- [NSTextSelectionNavigation.LayoutOrientation](../nstextselectionnavigation/layoutorientation.md): Values that describe the possible layout orientations.

# textLayoutOrientationAtLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the layout orientation at the location you specify.

## Declaration

```objectivec
- (NSTextSelectionNavigationLayoutOrientation) textLayoutOrientationAtLocation:(id<NSTextLocation>) location;
```

## Parameters

- `location`: The location where you want to examine the text’s layout orientation.

<a id="return-value"></a>

## Return Value

Returns an [NSTextSelectionNavigationLayoutOrientation](../nstextselectionnavigation/layoutorientation.md) that describes the orientation of the layout.

## See Also

### Changing the characteristics of the selection

- [baseWritingDirectionAtLocation:](basewritingdirection%28at_%29.md): Returns the base writing direction at the location you specify.
- [NSTextSelectionNavigationWritingDirection](../nstextselectionnavigation/writingdirection.md): Values that describe the writing direction inside a text selection.
- [NSTextSelectionNavigationLayoutOrientation](../nstextselectionnavigation/layoutorientation.md): Values that describe the possible layout orientations.
