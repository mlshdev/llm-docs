> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrollayoutanchor](https://developer.apple.com/documentation/touchcontroller/tccontrollayoutanchor)

# TCControlLayoutAnchor (Swift)

**Framework:** Touch Controller  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Defines the anchor point for a control.

## Declaration

```swift
enum TCControlLayoutAnchor
```

## Topics

### Anchors

- [TCControlLayoutAnchor.bottomCenter](tccontrollayoutanchor/bottomcenter.md): Anchors to the bottom-center, relative to the screen size.
- [TCControlLayoutAnchor.bottomLeft](tccontrollayoutanchor/bottomleft.md): Anchors to the bottom-left corner, relative to the screen size.
- [TCControlLayoutAnchor.bottomRight](tccontrollayoutanchor/bottomright.md): Anchors to the bottom-right corner, relative to the screen size.
- [TCControlLayoutAnchor.center](tccontrollayoutanchor/center.md): Anchors to the center, relative to the screen size.
- [TCControlLayoutAnchor.centerLeft](tccontrollayoutanchor/centerleft.md): Anchors to the center-left, relative to the screen size.
- [TCControlLayoutAnchor.centerRight](tccontrollayoutanchor/centerright.md): Anchors to the center-right, relative to the screen size.
- [TCControlLayoutAnchor.topCenter](tccontrollayoutanchor/topcenter.md): Anchors to the top-center, relative to the screen size.
- [TCControlLayoutAnchor.topLeft](tccontrollayoutanchor/topleft.md): Anchors to the top-left corner, relative to the screen size.
- [TCControlLayoutAnchor.topRight](tccontrollayoutanchor/topright.md): Anchors to the top-right corner, relative to the screen size.

### Creating a layout anchor

- [init(rawValue:)](tccontrollayoutanchor/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the anchor

- [anchor](tcbuttondescriptor/anchor.md): The anchor point that the button’s offset is relative to.
- [anchorCoordinateSystem](tcbuttondescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.

# TCControlLayoutAnchor (Objective-C)

**Framework:** Touch Controller  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Defines the anchor point for a control.

## Declaration

```objectivec
enum TCControlLayoutAnchor : NSInteger;
```

## Topics

### Anchors

- [TCControlLayoutAnchorBottomCenter](tccontrollayoutanchor/bottomcenter.md): Anchors to the bottom-center, relative to the screen size.
- [TCControlLayoutAnchorBottomLeft](tccontrollayoutanchor/bottomleft.md): Anchors to the bottom-left corner, relative to the screen size.
- [TCControlLayoutAnchorBottomRight](tccontrollayoutanchor/bottomright.md): Anchors to the bottom-right corner, relative to the screen size.
- [TCControlLayoutAnchorCenter](tccontrollayoutanchor/center.md): Anchors to the center, relative to the screen size.
- [TCControlLayoutAnchorCenterLeft](tccontrollayoutanchor/centerleft.md): Anchors to the center-left, relative to the screen size.
- [TCControlLayoutAnchorCenterRight](tccontrollayoutanchor/centerright.md): Anchors to the center-right, relative to the screen size.
- [TCControlLayoutAnchorTopCenter](tccontrollayoutanchor/topcenter.md): Anchors to the top-center, relative to the screen size.
- [TCControlLayoutAnchorTopLeft](tccontrollayoutanchor/topleft.md): Anchors to the top-left corner, relative to the screen size.
- [TCControlLayoutAnchorTopRight](tccontrollayoutanchor/topright.md): Anchors to the top-right corner, relative to the screen size.

## See Also

### Accessing the anchor

- [anchor](tcbuttondescriptor/anchor.md): The anchor point that the button’s offset is relative to.
- [anchorCoordinateSystem](tcbuttondescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
- [TCControlLayoutAnchorCoordinateSystem](tccontrollayoutanchorcoordinatesystem.md): Defines the coodinate system for an anchor point.
