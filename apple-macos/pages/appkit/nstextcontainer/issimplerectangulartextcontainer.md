> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/issimplerectangulartextcontainer](https://developer.apple.com/documentation/appkit/nstextcontainer/issimplerectangulartextcontainer)

# isSimpleRectangularTextContainer (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean that indicates whether the text container’s region is a rectangle with no holes or gaps, and whose edges are parallel to the text view’s coordinate system axes.

## Declaration

```swift
var isSimpleRectangularTextContainer: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the text container’s region is a rectangle with no holes or gaps and the edges are parallel to the text view’s coordinate system axes. The default value of this property is [false](https://developer.apple.com/documentation/swift/false) when the [exclusionPaths](exclusionpaths.md) property contains one or more items, when the [maximumNumberOfLines](maximumnumberoflines.md) property is not zero, or when you override the [lineFragmentRect(forProposedRect:at:writingDirection:remaining:)](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md) method. Otherwise, the default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Constraining text layout

- [maximumNumberOfLines](maximumnumberoflines.md): The maximum number of lines that the text container can store.
- [lineFragmentPadding](linefragmentpadding.md): The value for the text inset within line fragment rectangles.
- [lineFragmentRect(forProposedRect:at:writingDirection:remaining:)](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.

# simpleRectangularTextContainer (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean that indicates whether the text container’s region is a rectangle with no holes or gaps, and whose edges are parallel to the text view’s coordinate system axes.

## Declaration

```objectivec
@property (readonly, getter=isSimpleRectangularTextContainer) BOOL simpleRectangularTextContainer;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the text container’s region is a rectangle with no holes or gaps and the edges are parallel to the text view’s coordinate system axes. The default value of this property is [false](https://developer.apple.com/documentation/swift/false) when the [exclusionPaths](exclusionpaths.md) property contains one or more items, when the [maximumNumberOfLines](maximumnumberoflines.md) property is not zero, or when you override the [lineFragmentRectForProposedRect:atIndex:writingDirection:remainingRect:](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md) method. Otherwise, the default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Constraining text layout

- [maximumNumberOfLines](maximumnumberoflines.md): The maximum number of lines that the text container can store.
- [lineFragmentPadding](linefragmentpadding.md): The value for the text inset within line fragment rectangles.
- [lineFragmentRectForProposedRect:atIndex:writingDirection:remainingRect:](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.
