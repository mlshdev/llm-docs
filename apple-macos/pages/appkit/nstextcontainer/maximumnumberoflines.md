> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/maximumnumberoflines](https://developer.apple.com/documentation/appkit/nstextcontainer/maximumnumberoflines)

# maximumNumberOfLines (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The maximum number of lines that the text container can store.

## Declaration

```swift
var maximumNumberOfLines: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The layout manager uses the value of this property to determine the maximum number of lines associated with the text container. The default value of this property is `0`, which indicates that there is no limit.

## See Also

### Constraining text layout

- [lineFragmentPadding](linefragmentpadding.md): The value for the text inset within line fragment rectangles.
- [lineFragmentRect(forProposedRect:at:writingDirection:remaining:)](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.
- [isSimpleRectangularTextContainer](issimplerectangulartextcontainer.md): A Boolean that indicates whether the text container’s region is a rectangle with no holes or gaps, and whose edges are parallel to the text view’s coordinate system axes.

# maximumNumberOfLines (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The maximum number of lines that the text container can store.

## Declaration

```objectivec
@property NSUInteger maximumNumberOfLines;
```

<a id="Discussion"></a>

## Discussion

The layout manager uses the value of this property to determine the maximum number of lines associated with the text container. The default value of this property is `0`, which indicates that there is no limit.

## See Also

### Constraining text layout

- [lineFragmentPadding](linefragmentpadding.md): The value for the text inset within line fragment rectangles.
- [lineFragmentRectForProposedRect:atIndex:writingDirection:remainingRect:](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.
- [simpleRectangularTextContainer](issimplerectangulartextcontainer.md): A Boolean that indicates whether the text container’s region is a rectangle with no holes or gaps, and whose edges are parallel to the text view’s coordinate system axes.
