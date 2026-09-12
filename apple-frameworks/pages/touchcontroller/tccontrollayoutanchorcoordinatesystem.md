> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrollayoutanchorcoordinatesystem](https://developer.apple.com/documentation/touchcontroller/tccontrollayoutanchorcoordinatesystem)

# TCControlLayoutAnchorCoordinateSystem (Swift)

**Framework:** Touch Controller  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Defines the coodinate system for an anchor point.

## Declaration

```swift
enum TCControlLayoutAnchorCoordinateSystem
```

## Topics

### Anchors

- [TCControlLayoutAnchorCoordinateSystem.absolute](tccontrollayoutanchorcoordinatesystem/absolute.md): Anchors are positioned according to the absolute edges of the sceren.
- [TCControlLayoutAnchorCoordinateSystem.relative](tccontrollayoutanchorcoordinatesystem/relative.md): Anchors are positioned relative to the device’s screen size.

### Creating a layout anchor

- [init(rawValue:)](tccontrollayoutanchorcoordinatesystem/init%28rawvalue_%29.md)

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
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcbuttondescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.

# TCControlLayoutAnchorCoordinateSystem (Objective-C)

**Framework:** Touch Controller  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Defines the coodinate system for an anchor point.

## Declaration

```objectivec
enum TCControlLayoutAnchorCoordinateSystem : NSInteger;
```

## Topics

### Anchors

- [TCControlLayoutAnchorCoordinateSystemAbsolute](tccontrollayoutanchorcoordinatesystem/absolute.md): Anchors are positioned according to the absolute edges of the sceren.
- [TCControlLayoutAnchorCoordinateSystemRelative](tccontrollayoutanchorcoordinatesystem/relative.md): Anchors are positioned relative to the device’s screen size.

## See Also

### Accessing the anchor

- [anchor](tcbuttondescriptor/anchor.md): The anchor point that the button’s offset is relative to.
- [TCControlLayoutAnchor](tccontrollayoutanchor.md): Defines the anchor point for a control.
- [anchorCoordinateSystem](tcbuttondescriptor/anchorcoordinatesystem.md): The coordinate system for the control’s anchor point.
