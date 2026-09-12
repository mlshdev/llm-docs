> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectiondatasource/convertinteractionpoint(_:tocontainerat:)](https://developer.apple.com/documentation/appkit/nstextselectiondatasource/convertinteractionpoint(_:tocontainerat:))

# convertInteractionPoint(\_:toContainerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Converts an interaction point from display space into the text container’s coordinate system.

## Declaration

```swift
optional func convertInteractionPoint(_ point: CGPoint, toContainerAt containerLocation: any NSTextLocation) -> CGPoint
```

## Parameters

- `point`: The interaction point in display/view-space coordinates.
- `containerLocation`: The location identifying the text container the interaction occurred in.

<a id="return-value"></a>

## Return Value

The point mapped into the text container’s coordinate system. Return `point` unchanged when no transform is active.

<a id="discussion"></a>

## Discussion

`NSTextSelectionNavigation` calls this method before hit-testing to allow the data source to undo any display transform (rotation, flip, path layout, etc.) applied to the text.

# convertInteractionPoint:toContainerAtLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Converts an interaction point from display space into the text container’s coordinate system.

## Declaration

```objectivec
- (CGPoint) convertInteractionPoint:(CGPoint) point toContainerAtLocation:(id<NSTextLocation>) containerLocation;
```

## Parameters

- `point`: The interaction point in display/view-space coordinates.
- `containerLocation`: The location identifying the text container the interaction occurred in.

<a id="return-value"></a>

## Return Value

The point mapped into the text container’s coordinate system. Return `point` unchanged when no transform is active.

<a id="discussion"></a>

## Discussion

`NSTextSelectionNavigation` calls this method before hit-testing to allow the data source to undo any display transform (rotation, flip, path layout, etc.) applied to the text.
