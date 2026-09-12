> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/orientation](https://developer.apple.com/documentation/appkit/nslayoutconstraint/orientation)

# NSLayoutConstraint.Orientation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.

## Declaration

```swift
enum Orientation
```

## Topics

### Constants

- [NSLayoutConstraint.Orientation.horizontal](orientation/horizontal.md): The constraint orientation applied to laying out the horizontal relationship between objects.
- [NSLayoutConstraint.Orientation.vertical](orientation/vertical.md): The constraint orientation applied to laying out the vertical relationship between objects.

### Initializers

- [init(rawValue:)](orientation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSLayoutConstraint.Relation](relation-swift.enum.md): The relation between the first attribute and the modified second attribute in a constraint.
- [NSLayoutConstraint.Attribute](attribute.md): The part of the object’s visual representation that should be used to get the value for the constraint.
- [NSLayoutConstraint.FormatOptions](formatoptions.md): A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.
- [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets): A description of the distance between the edges of two rectangles.

# NSLayoutConstraintOrientation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.

## Declaration

```objectivec
enum NSLayoutConstraintOrientation : NSInteger;
```

## Topics

### Constants

- [NSLayoutConstraintOrientationHorizontal](orientation/horizontal.md): The constraint orientation applied to laying out the horizontal relationship between objects.
- [NSLayoutConstraintOrientationVertical](orientation/vertical.md): The constraint orientation applied to laying out the vertical relationship between objects.

## See Also

### Constants

- [NSLayoutRelation](relation-swift.enum.md): The relation between the first attribute and the modified second attribute in a constraint.
- [NSLayoutAttribute](attribute.md): The part of the object’s visual representation that should be used to get the value for the constraint.
- [NSLayoutFormatOptions](formatoptions.md): A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.
- [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets): A description of the distance between the edges of two rectangles.
