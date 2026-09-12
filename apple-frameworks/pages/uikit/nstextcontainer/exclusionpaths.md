> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontainer/exclusionpaths](https://developer.apple.com/documentation/uikit/nstextcontainer/exclusionpaths)

# exclusionPaths (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An array of path objects that represents the regions where text doesn’t display in the text container.

## Declaration

```swift
var exclusionPaths: [UIBezierPath] { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty array. Depending on the platform, you can assign an array of [NSBezierPath](https://developer.apple.com/documentation/appkit/nsbezierpath) or [UIBezierPath](../uibezierpath.md) objects to exclude text from one or more regions in the text container’s bounds. When the layout manager proposes a line fragment rectangle intersecting one of the regions defined by the exclusion paths, the text container returns an adjusted line fragment rectangle excluding that region.

## See Also

### Related Documentation

- [lineFragmentRect(forProposedRect:at:writingDirection:remaining:)](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.

### Defining the container shape

- [size](size.md): The size of the text container’s bounding rectangle.
- [lineBreakMode](linebreakmode.md): The behavior of the last line inside the text container.
- [widthTracksTextView](widthtrackstextview.md): A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.

# exclusionPaths (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An array of path objects that represents the regions where text doesn’t display in the text container.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<UIBezierPath *> * exclusionPaths;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty array. Depending on the platform, you can assign an array of [NSBezierPath](https://developer.apple.com/documentation/appkit/nsbezierpath) or [UIBezierPath](../uibezierpath.md) objects to exclude text from one or more regions in the text container’s bounds. When the layout manager proposes a line fragment rectangle intersecting one of the regions defined by the exclusion paths, the text container returns an adjusted line fragment rectangle excluding that region.

## See Also

### Related Documentation

- [lineFragmentRectForProposedRect:atIndex:writingDirection:remainingRect:](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.

### Defining the container shape

- [size](size.md): The size of the text container’s bounding rectangle.
- [lineBreakMode](linebreakmode.md): The behavior of the last line inside the text container.
- [widthTracksTextView](widthtrackstextview.md): A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.
