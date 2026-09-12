> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontainer/linefragmentpadding](https://developer.apple.com/documentation/uikit/nstextcontainer/linefragmentpadding)

# lineFragmentPadding (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The value for the text inset within line fragment rectangles.

## Declaration

```swift
var lineFragmentPadding: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The padding appears at the beginning and end of the line fragment rectangles. The layout manager uses this value to determine the layout width. The default value of this property is `5.0`.

Line fragment padding is not designed to express text margins. Instead, you should use insets on your text view, adjust the paragraph margin attributes, or change the position of the text view within its superview.

## See Also

### Related Documentation

- [lineFragmentRect(forProposedRect:at:writingDirection:remaining:)](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.

### Constraining text layout

- [maximumNumberOfLines](maximumnumberoflines.md): The maximum number of lines that the text container can store.
- [lineFragmentRect(forProposedRect:at:writingDirection:remaining:)](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.
- [isSimpleRectangularTextContainer](issimplerectangulartextcontainer.md): A Boolean that indicates whether the text container’s region is a rectangle with no holes or gaps, and whose edges are parallel to the text view’s coordinate system axes.

# lineFragmentPadding (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The value for the text inset within line fragment rectangles.

## Declaration

```objectivec
@property (nonatomic) CGFloat lineFragmentPadding;
```

<a id="Discussion"></a>

## Discussion

The padding appears at the beginning and end of the line fragment rectangles. The layout manager uses this value to determine the layout width. The default value of this property is `5.0`.

Line fragment padding is not designed to express text margins. Instead, you should use insets on your text view, adjust the paragraph margin attributes, or change the position of the text view within its superview.

## See Also

### Related Documentation

- [lineFragmentRectForProposedRect:atIndex:writingDirection:remainingRect:](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.

### Constraining text layout

- [maximumNumberOfLines](maximumnumberoflines.md): The maximum number of lines that the text container can store.
- [lineFragmentRectForProposedRect:atIndex:writingDirection:remainingRect:](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.
- [simpleRectangularTextContainer](issimplerectangulartextcontainer.md): A Boolean that indicates whether the text container’s region is a rectangle with no holes or gaps, and whose edges are parallel to the text view’s coordinate system axes.
